const fs = require('node:fs');
const path = require('node:path');

const browserFolder = path.join(__dirname, 'dist', 'portfolio', 'browser');
const notFoundPage = path.join(browserFolder, 'not-found', 'index.html');
const requiredFiles = [
  path.join(browserFolder, 'index.html'),
  path.join(browserFolder, 'robots.txt'),
  path.join(browserFolder, 'sitemap.xml'),
  notFoundPage,
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file))
    throw new Error(`Missing static build artifact: ${file}`);
}

fs.copyFileSync(notFoundPage, path.join(browserFolder, '404.html'));
console.log('Static output prepared with a dedicated 404 page.');
