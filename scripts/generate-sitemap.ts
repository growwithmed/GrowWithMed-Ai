import fs from 'fs';
import path from 'path';

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

// In a real automated script, we would import POSTS and PRODUCTS here.
// For this environment, we'll use the data we already extracted.

const products = [
  'systeme-io', 'vidiq', 'tube-buddy', 'hostinger', 'seowriting', 'mangools', 'blogify', 'make-com'
];

const posts = [
  { slug: 'systeme-io-free-plan-sell-digital-products', date: '2026-02-26' },
  { slug: 'automate-pinterest-affiliate-links-make-com', date: '2026-02-26' },
  { slug: 'seowriting-ai-rank-google-test', date: '2026-02-26' },
  { slug: 'turn-youtube-videos-into-blog-posts', date: '2026-02-26' },
  { slug: 'mangools-vs-ahrefs-cheap-keyword-tool', date: '2026-02-26' },
  { slug: 'use-vidiq-to-grow-small-youtube-channel', date: '2026-02-26' },
  { slug: 'cheapest-web-hosting-affiliate-blogs-2026', date: '2026-02-26' },
  { slug: 'best-ai-tools-gumroad-creators', date: '2026-02-27' },
  { slug: 'tubebuddy-keyword-explorer-tutorial-rank-shorts', date: '2026-02-27' },
  { slug: 'build-automated-email-sales-funnel-budget', date: '2026-02-27' },
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
products.forEach(id => {
  xml += '  <url>\n';
  xml += `    <loc>${DOMAIN}/product/${id}</loc>\n`;
  xml += `    <lastmod>${TODAY}</lastmod>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += '    <priority>0.9</priority>\n';
  xml += '  </url>\n';
});

// Posts
posts.forEach(post => {
  xml += '  <url>\n';
  xml += `    <loc>${DOMAIN}/blog/${post.slug}</loc>\n`;
  xml += `    <lastmod>${post.date}</lastmod>\n`;
  xml += '    <changefreq>monthly</changefreq>\n';
  xml += '    <priority>0.8</priority>\n';
  xml += '  </url>\n';
});

xml += '</urlset>';

const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, xml);

console.log(`Sitemap generated at ${publicPath}`);
