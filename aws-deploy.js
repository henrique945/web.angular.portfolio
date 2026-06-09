const { execSync } = require('child_process');

const profile = process.env.AWS_PROFILE;
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_REGION;
const buildConfiguration = process.env.BUILD_CONFIG || 'production';
const buildFolder = process.env.BUILD_FOLDER || 'dist/';
const distributionId = process.env.AWS_CLOUDFRONT_ID;

const staticCacheControl = 'max-age=31536000,public';
const htmlCacheControl = 'max-age=0,must-revalidate,public';

const objectMetadata = [
  { include: '*.js', contentType: 'application/javascript', cacheControl: staticCacheControl },
  { include: '*.mjs', contentType: 'application/javascript', cacheControl: staticCacheControl },
  { include: '*.css', contentType: 'text/css', cacheControl: staticCacheControl },
  { include: '*.json', contentType: 'application/json', cacheControl: staticCacheControl },
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
  { include: '*.txt', contentType: 'text/plain; charset=utf-8', cacheControl: staticCacheControl },
];

if (!profile || !bucketName)
  throw new Error('É necessário setar AWS_PROFILE e AWS_BUCKET_NAME para realizar o deploy.');

function run(command) {
  console.log(`> ${command}`);
  execSync(command, { stdio: 'inherit' });
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

function deploy() {
  console.log('Iniciando build...');
  run(`npm run ng build -- --configuration=${buildConfiguration}`);

  console.log('Enviando arquivos para o S3...');
  run(`aws ${awsArgs()} s3 sync --delete ${buildFolder} s3://${bucketName}/ --acl public-read`);

  fixObjectMetadata();

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
