import fs from 'fs';
import path from 'path';
import { POSTS, PRODUCTS } from '../src/constants';

// This script generates a sitemap.xml file in the public folder.
// It should be updated whenever routes, posts, or products change.

const DOMAIN = 'https://www.growwithmed.site';
const TODAY = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/categories', priority: '0.8', changefreq: 'weekly' },
  { url: '/ai-tools', priority: '0.8', changefreq: 'weekly' },
  { url: '/marketing', priority: '0.8', changefreq: 'weekly' },
  { url: '/seo', priority: '0.8', changefreq: 'weekly' },
  { url: '/youtube', priority: '0.8', changefreq: 'weekly' },
  { url: '/guide', priority: '0.7', changefreq: 'monthly' },
  { url: '/resources', priority: '0.8', changefreq: 'daily' },
  { url: '/deals', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'monthly' },
  { url: '/terms', priority: '0.3', changefreq: 'monthly' },
  { url: '/faq', priority: '0.5', changefreq: 'monthly' },
  { url: '/blog', priority: '0.9', changefreq: 'daily' },
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Static routes
staticRoutes.forEach(route => {
  xml += '  <url>\n';
  xml += `    <loc>${DOMAIN}${route.url}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
  xml += `    <priority>${route.priority}</priority>\n`;
  xml += '  </url>\n';
});

// Products
PRODUCTS.forEach(product => {
  xml += '  <url>\n';
  xml += `    <loc>${DOMAIN}/product/${product.id}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += '    <priority>0.9</priority>\n';
  xml += '  </url>\n';
});

// Posts
POSTS.forEach(post => {
  xml += '  <url>\n';
  xml += `    <loc>${DOMAIN}/blog/${post.slug}</loc>\n`;
  xml += `    <lastmod>${post.publishDate || TODAY}</lastmod>\n`;
  xml += '    <changefreq>monthly</changefreq>\n';
  xml += '    <priority>0.8</priority>\n';
  xml += '  </url>\n';
});

xml += '</urlset>';

const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, xml);

console.log(`Sitemap generated at ${publicPath}`);
