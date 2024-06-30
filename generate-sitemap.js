const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, mkdirSync, existsSync } = require('fs');
const { resolve } = require('path');

// Ensure the 'public' directory exists
const publicDir = resolve(__dirname, 'public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir);
}

// Define your base URL
const hostname = 'https://bluewonk-94503.web.app';

// Example dynamic postId (simulated or fetched from your data)
const postId = '123';

// List of routes to include in the sitemap
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/tech', changefreq: 'weekly', priority: 0.8 },
  { url: `/posts/${postId}`, changefreq: 'monthly', priority: 0.7 }, // Use postId dynamically
  { url: '/spiritual', changefreq: 'monthly', priority: 0.7 },
  { url: '/travel', changefreq: 'monthly', priority: 0.7 },
  { url: '/love', changefreq: 'monthly', priority: 0.7 },
  { url: '/createpost', changefreq: 'monthly', priority: 0.5 },
  { url: `/createpost/${postId}`, changefreq: 'monthly', priority: 0.5 }, // Use postId dynamically
  { url: '/readpost', changefreq: 'monthly', priority: 0.6 },
];

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname });

// Iterate over routes and add them to the sitemap
routes.forEach(route => {
  sitemap.write(route);
});

sitemap.end();

// Write the sitemap to a file
const filePath = resolve(publicDir, 'sitemap.xml');
streamToPromise(sitemap).then((sm) => {
  createWriteStream(filePath).write(sm.toString());
  console.log('Sitemap generated successfully.');
}).catch(err => {
  console.error('Error generating sitemap:', err);
});
