const { execSync } = require('child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const profile = process.env.AWS_PROFILE;
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_REGION;
const buildConfiguration = process.env.BUILD_CONFIG || 'production';
const buildFolder = process.env.BUILD_FOLDER || 'dist/portfolio/browser/';
const distributionId = process.env.AWS_CLOUDFRONT_ID;
const configureCloudFront = process.env.CONFIGURE_CLOUDFRONT !== 'false';
const routeFunctionName = process.env.AWS_CLOUDFRONT_FUNCTION_NAME || `${bucketName || 'portfolio'}-static-routes`.replace(/[^A-Za-z0-9-_]/g, '-').slice(0, 64);

const staticCacheControl = 'max-age=31536000,public';
const htmlCacheControl = 'max-age=0,must-revalidate,public';

const objectMetadata = [
  { include: '*.js', contentType: 'application/javascript', cacheControl: staticCacheControl },
  { include: '*.mjs', contentType: 'application/javascript', cacheControl: staticCacheControl },
  { include: '*.css', contentType: 'text/css', cacheControl: staticCacheControl },
  { include: '*.json', contentType: 'application/json', cacheControl: staticCacheControl },
  { include: '*.xml', contentType: 'application/xml; charset=utf-8', cacheControl: htmlCacheControl },
  { include: '*.map', contentType: 'application/json', cacheControl: staticCacheControl },
  { include: '*.svg', contentType: 'image/svg+xml', cacheControl: staticCacheControl },
  { include: '*.png', contentType: 'image/png', cacheControl: staticCacheControl },
  { include: '*.jpg', contentType: 'image/jpeg', cacheControl: staticCacheControl },
  { include: '*.jpeg', contentType: 'image/jpeg', cacheControl: staticCacheControl },
  { include: '*.gif', contentType: 'image/gif', cacheControl: staticCacheControl },
  { include: '*.webp', contentType: 'image/webp', cacheControl: staticCacheControl },
  { include: '*.ico', contentType: 'image/x-icon', cacheControl: staticCacheControl },
  { include: '*.woff', contentType: 'font/woff', cacheControl: staticCacheControl },
  { include: '*.woff2', contentType: 'font/woff2', cacheControl: staticCacheControl },
  { include: '*.ttf', contentType: 'font/ttf', cacheControl: staticCacheControl },
  { include: '*.eot', contentType: 'application/vnd.ms-fontobject', cacheControl: staticCacheControl },
  { include: '*.pdf', contentType: 'application/pdf', cacheControl: staticCacheControl },
  { include: '*.html', contentType: 'text/html; charset=utf-8', cacheControl: htmlCacheControl },
  { include: '*.txt', contentType: 'text/plain; charset=utf-8', cacheControl: htmlCacheControl },
];

if (!profile || !bucketName)
  throw new Error('É necessário setar AWS_PROFILE e AWS_BUCKET_NAME para realizar o deploy.');

function run(command) {
  console.log(`> ${command}`);
  execSync(command, { stdio: 'inherit' });
}

function capture(command) {
  return execSync(command, { encoding: 'utf8' }).trim();
}

function awsArgs() {
  return region ? `--profile ${profile} --region ${region}` : `--profile ${profile}`;
}

function fixObjectMetadata() {
  console.log('Ajustando Content-Type dos arquivos no S3...');

  for (const { include, contentType, cacheControl } of objectMetadata) {
    run(
      `aws ${awsArgs()} s3 cp s3://${bucketName}/ s3://${bucketName}/ --recursive --exclude "*" --include "${include}" --metadata-directive REPLACE --acl public-read --cache-control "${cacheControl}" --content-type "${contentType}"`,
    );
  }
}

function configureCloudFrontDistribution() {
  if (!distributionId || !configureCloudFront)
    return;

  console.log('Configurando rotas estaticas e respostas 404 no CloudFront...');
  const functionCode = path.join(__dirname, 'cloudfront-function.js').replace(/\\/g, '/');
  let functionEtag;

  try {
    functionEtag = capture(`aws ${awsArgs()} cloudfront describe-function --name "${routeFunctionName}" --stage DEVELOPMENT --query ETag --output text`);
    run(`aws ${awsArgs()} cloudfront update-function --name "${routeFunctionName}" --if-match "${functionEtag}" --function-config "Comment=Portfolio static route rewrites,Runtime=cloudfront-js-2.0" --function-code "fileb://${functionCode}"`);
  } catch (_) {
    run(`aws ${awsArgs()} cloudfront create-function --name "${routeFunctionName}" --function-config "Comment=Portfolio static route rewrites,Runtime=cloudfront-js-2.0" --function-code "fileb://${functionCode}"`);
  }

  functionEtag = capture(`aws ${awsArgs()} cloudfront describe-function --name "${routeFunctionName}" --stage DEVELOPMENT --query ETag --output text`);
  const published = JSON.parse(capture(`aws ${awsArgs()} cloudfront publish-function --name "${routeFunctionName}" --if-match "${functionEtag}" --output json`));
  const functionArn = published.FunctionSummary.FunctionMetadata.FunctionARN;

  const distribution = JSON.parse(capture(`aws ${awsArgs()} cloudfront get-distribution-config --id "${distributionId}" --output json`));
  const config = distribution.DistributionConfig;
  config.DefaultCacheBehavior.Compress = true;
  const currentFunctions = config.DefaultCacheBehavior.FunctionAssociations?.Items || [];
  const functionItems = currentFunctions.filter(item => item.EventType !== 'viewer-request');
  functionItems.push({ EventType: 'viewer-request', FunctionARN: functionArn });
  config.DefaultCacheBehavior.FunctionAssociations = { Quantity: functionItems.length, Items: functionItems };
  config.DefaultRootObject = 'index.html';

  const currentErrors = config.CustomErrorResponses?.Items || [];
  const errorItems = currentErrors.filter(item => item.ErrorCode !== 403 && item.ErrorCode !== 404);
  for (const errorCode of [403, 404]) {
    errorItems.push({
      ErrorCode: errorCode,
      ResponsePagePath: '/404.html',
      ResponseCode: '404',
      ErrorCachingMinTTL: 0,
    });
  }
  config.CustomErrorResponses = { Quantity: errorItems.length, Items: errorItems };

  const configFile = path.join(os.tmpdir(), `portfolio-cloudfront-${Date.now()}.json`);
  fs.writeFileSync(configFile, JSON.stringify(config));
  try {
    run(`aws ${awsArgs()} cloudfront update-distribution --id "${distributionId}" --if-match "${distribution.ETag}" --distribution-config "file://${configFile.replace(/\\/g, '/')}"`);
  } finally {
    fs.unlinkSync(configFile);
  }
}

function deploy() {
  console.log('Iniciando build...');
  run('npm run build:static');

  console.log('Enviando arquivos para o S3...');
  run(`aws ${awsArgs()} s3 sync --delete ${buildFolder} s3://${bucketName}/ --acl public-read`);

  fixObjectMetadata();
  configureCloudFrontDistribution();

  if (distributionId) {
    console.log('Invalidando cache do CloudFront...');
    run(`aws ${awsArgs()} cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`);
  }

  console.log('Deploy finalizado.');
}

if (process.env.FIX_METADATA_ONLY === 'true') {
  fixObjectMetadata();

  if (distributionId) {
    console.log('Invalidando cache do CloudFront...');
    run(`aws ${awsArgs()} cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`);
  }
} else {
  deploy();
}
