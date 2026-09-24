const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const projectsFolder = path.join(root, 'src', 'app', 'data', 'projects');
const siteUrl = 'https://henriquerod.com';

const projectIds = fs.readdirSync(projectsFolder)
  .filter(file => file.endsWith('.ts'))
  .flatMap(file => {
    const content = fs.readFileSync(path.join(projectsFolder, file), 'utf8');
    const activeProject = content.match(/isActive:\s*true[\s\S]*?id:\s*'([^']+)'/);
    return activeProject ? [activeProject[1]] : [];
  })
  .sort();

const publicRoutes = ['/', ...projectIds.map(id => `/project/${id}`)];
const prerenderRoutes = [...publicRoutes, '/not-found'];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes.map(route => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(root, 'seo-routes.txt'), `${prerenderRoutes.join('\n')}\n`);
fs.writeFileSync(path.join(root, 'src', 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(root, 'src', 'robots.txt'), robots);

console.log(`Generated SEO assets for ${projectIds.length} active projects.`);
