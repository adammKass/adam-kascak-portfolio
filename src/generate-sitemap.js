// scripts/generate-sitemap.js

import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://adammkascak.com";

const pages = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/illustrations", changefreq: "weekly", priority: 0.8 },
  { url: "/dgraphics", changefreq: "weekly", priority: 0.8 },
  { url: "/graphicdesign", changefreq: "weekly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.5 },
  { url: "/about", changefreq: "monthly", priority: 0.5 },
];

const sitemap = new SitemapStream({ hostname: BASE_URL });

const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
const writeStream = createWriteStream(sitemapPath);

// Pipe sitemap → file
sitemap.pipe(writeStream);

// Write pages
pages.forEach((page) => sitemap.write(page));
sitemap.end();

// ✅ Use sitemap stream, not writeStream
streamToPromise(sitemap)
  .then(() => {
    console.log("Sitemap generated at:", sitemapPath);
  })
  .catch(console.error);
