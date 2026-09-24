const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const output = path.join(root, 'dist', 'portfolio', 'browser');
const routes = fs.readFileSync(path.join(root, 'seo-routes.txt'), 'utf8').trim().split(/\r?\n/);
const publicRoutes = routes.filter(route => route !== '/not-found');
const sitemap = fs.readFileSync(path.join(output, 'sitemap.xml'), 'utf8');
const robots = fs.readFileSync(path.join(output, 'robots.txt'), 'utf8');

assert.match(robots, /^User-agent: \*/);
assert.match(robots, /Sitemap: https:\/\/henriquerod\.com\/sitemap\.xml/);
assert.doesNotMatch(robots, /<!doctype html>/i);
assert.equal((sitemap.match(/<url>/g) || []).length, publicRoutes.length);
assert.ok(fs.existsSync(path.join(output, '404.html')));

for (const route of publicRoutes) {
  const page = route === '/'
    ? path.join(output, 'index.html')
    : path.join(output, route.slice(1), 'index.html');
  const html = fs.readFileSync(page, 'utf8');
  const canonical = route === '/' ? 'https://henriquerod.com/' : `https://henriquerod.com${route}`;

  assert.match(html, /<title>[^<]+<\/title>/);
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`) || html.includes(`href="${canonical}" rel="canonical"`));
  assert.match(html, /type="application\/ld\+json"/);

  for (const anchor of html.match(/<a\b[^>]*>/gi) || [])
    assert.match(anchor, /\shref=/i, `Uncrawlable anchor in ${route}: ${anchor}`);
}

const deployedProjectAssets = path.join(output, 'assets', 'imgs', 'projects');
const originalRaster = walk(deployedProjectAssets).filter(file => /\.(png|jpe?g)$/i.test(file));
assert.deepEqual(originalRaster, [], 'Original project rasters should not be copied into the deployment.');

const sourceImageRoot = path.join(root, 'src', 'assets', 'imgs');
const sourceProjectAssets = path.join(sourceImageRoot, 'projects');
const sourceOriginalRaster = walk(sourceProjectAssets).filter(file => /\.(png|jpe?g)$/i.test(file));
assert.deepEqual(sourceOriginalRaster, [], 'Converted project PNG/JPG files must be removed from the repository.');
assert.equal(fs.existsSync(path.join(sourceImageRoot, 'profile.png')), false, 'profile.png must be replaced by profile.webp.');
assert.equal(fs.existsSync(path.join(sourceImageRoot, 'qrcode.png')), false, 'qrcode.png must be replaced by qrcode.webp.');

const sourceFiles = walk(path.join(root, 'src')).filter(file => /\.(html|scss|ts)$/i.test(file));
for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf8');
  assert.doesNotMatch(content, /assets\/imgs\/[^'"\s]+\.(png|jpe?g)/i, `Removed raster referenced by ${path.relative(root, file)}.`);
  for (const match of content.matchAll(/assets\/imgs\/[^'"\s]+\.webp/g))
    assert.ok(fs.existsSync(path.join(root, 'src', ...match[0].split('/'))), `Missing WebP referenced by ${path.relative(root, file)}: ${match[0]}`);
}

const homeHtml = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
assert.match(homeHtml, /href="https:\/\/wa\.me\/5511971908333"/);
assert.match(homeHtml, /src="assets\/imgs\/qrcode\.webp"/);

console.log(`Verified ${publicRoutes.length} indexable routes, metadata, links, robots.txt, sitemap.xml and optimized assets.`);

function walk(folder) {
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(folder, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
