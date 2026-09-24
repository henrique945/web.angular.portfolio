const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const root = __dirname;
const imageRoot = path.join(root, 'src', 'assets', 'imgs', 'projects');
const dataRoot = path.join(root, 'src', 'app', 'data', 'projects');
const rasterPattern = /\.(png|jpe?g)$/i;

function walk(folder) {
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(folder, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

async function run() {
  const dataFiles = walk(dataRoot).filter(file => file.endsWith('.ts'));
  const data = dataFiles.map(file => ({ file, content: fs.readFileSync(file, 'utf8') }));
  const covers = new Map(data.flatMap(({ content }) => {
    const match = content.match(/coverImage:\s*'([^']+)'/);
    if (!match)
      return [];
    const basePath = match[1].replace(/\.(?:thumb\.webp|png|jpe?g)$/i, '').replaceAll('/', path.sep);
    return [[basePath, {
      orientation: /orientation:\s*OrientationEnum\.VERTICAL/.test(content) ? 'vertical' : 'horizontal',
    }]];
  }));

  const sourceImages = walk(imageRoot).filter(file => rasterPattern.test(file));
  let originalBytes = 0;
  let optimizedBytes = 0;

  for (const source of sourceImages) {
    originalBytes += fs.statSync(source).size;
    const relative = path.relative(path.join(root, 'src'), source);
    const relativeBase = relative.replace(rasterPattern, '');
    const webpPath = source.replace(rasterPattern, '.webp');

    await sharp(source)
      .rotate()
      .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82, effort: 5, smartSubsample: true })
      .toFile(webpPath);
    optimizedBytes += fs.statSync(webpPath).size;

    if (covers.has(relativeBase)) {
      const thumbnailPath = source.replace(rasterPattern, '.thumb.webp');
      const isVertical = covers.get(relativeBase).orientation === 'vertical';
      await sharp(source)
        .rotate()
        .resize(isVertical
          ? { width: 540, height: 960, fit: 'cover', position: 'attention' }
          : { width: 960, height: 480, fit: 'cover', position: 'attention' })
        .webp({ quality: 78, effort: 5, smartSubsample: true })
        .toFile(thumbnailPath);
      await assertWebp(thumbnailPath, isVertical ? 540 / 960 : 2);
      optimizedBytes += fs.statSync(thumbnailPath).size;
    }

    await assertWebp(webpPath);
  }

  const standaloneSources = [
    {
      source: path.join(root, 'src', 'assets', 'imgs', 'qrcode.png'),
      output: path.join(root, 'src', 'assets', 'imgs', 'qrcode.webp'),
      transform: image => image.webp({ lossless: true, effort: 6 }),
    },
    {
      source: path.join(root, 'src', 'assets', 'imgs', 'profile.png'),
      output: path.join(root, 'src', 'assets', 'imgs', 'profile.webp'),
      transform: image => image.resize({ width: 512, height: 512, fit: 'cover' }).webp({ quality: 86, effort: 5 }),
    },
  ];

  const convertedStandaloneSources = [];
  for (const asset of standaloneSources) {
    if (!fs.existsSync(asset.source))
      continue;

    await asset.transform(sharp(asset.source).rotate()).toFile(asset.output);
    await assertWebp(asset.output);
    convertedStandaloneSources.push(asset.source);
  }

  for (const entry of data) {
    let content = entry.content.replace(
      /(coverImage:\s*'assets\/imgs\/projects\/[^']+)\.(png|jpe?g)'/gi,
      "$1.thumb.webp'",
    );
    content = content.replace(
      /(assets\/imgs\/projects\/[^'\"]+)\.(png|jpe?g)/gi,
      '$1.webp',
    );
    fs.writeFileSync(entry.file, content);
  }

  for (const entry of data) {
    const content = fs.readFileSync(entry.file, 'utf8');
    for (const match of content.matchAll(/assets\/imgs\/projects\/[^'"\s]+\.webp/g)) {
      const assetPath = path.join(root, 'src', ...match[0].split('/'));
      if (!fs.existsSync(assetPath))
        throw new Error(`Missing converted asset: ${match[0]}`);
    }
  }

  const originals = [...sourceImages, ...convertedStandaloneSources];
  for (const original of originals) {
    const resolved = path.resolve(original);
    const assetRoot = path.resolve(root, 'src', 'assets', 'imgs') + path.sep;
    if (!resolved.startsWith(assetRoot))
      throw new Error(`Refusing to delete an asset outside ${assetRoot}: ${resolved}`);
  }
  originals.forEach(original => fs.unlinkSync(original));

  const saved = originalBytes - optimizedBytes;
  const savingPercentage = originalBytes ? saved / originalBytes * 100 : 0;
  console.log(`Optimized ${sourceImages.length + convertedStandaloneSources.length} images: ${(originalBytes / 1048576).toFixed(1)} MB → ${(optimizedBytes / 1048576).toFixed(1)} MB (${savingPercentage.toFixed(0)}% smaller for project assets). ${originals.length} validated originals removed.`);
}

async function assertWebp(file, expectedRatio) {
  const metadata = await sharp(file).metadata();
  if (metadata.format !== 'webp' || !metadata.width || !metadata.height)
    throw new Error(`Invalid WebP output: ${file}`);
  if (expectedRatio && Math.abs(metadata.width / metadata.height - expectedRatio) > 0.01)
    throw new Error(`Unexpected aspect ratio for ${file}: ${metadata.width}x${metadata.height}`);
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
