/**
 * Prerender: genera el HTML de cada página al compilar, para que Google, WhatsApp, Facebook…
 * vean el título, la descripción, la imagen y el contenido sin tener que ejecutar JavaScript.
 * También genera sitemap.xml y robots.txt.
 *
 * Se ejecuta después de `vite build` y `vite build --ssr` (ver "build" en package.json).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE_URL = (process.env.VITE_SITE_URL || "https://restart-v2.vercel.app").replace(/\/$/, "");

// Páginas públicas (path, archivo de salida, prioridad para el sitemap)
const routes = [
  { url: "/", file: "index.html", priority: "1.0" },
  { url: "/sobre-nosotros", file: "sobre-nosotros.html", priority: "0.8" },
  { url: "/macu-bakery", file: "macu-bakery.html", priority: "0.8" },
  { url: "/food-truck", file: "food-truck.html", priority: "0.7" },
  { url: "/404", file: "404.html", sitemap: false },
];

const { render } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

for (const r of routes) {
  const { html, head } = render(r.url);
  const page = template
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);
  fs.writeFileSync(path.join(dist, r.file), page);
  console.log(`prerender  ${r.url.padEnd(16)} → dist/${r.file}  (${(page.length / 1024).toFixed(1)} kB)`);
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => r.sitemap !== false)
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.url === "/" ? "/" : r.url}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
);

// robots.txt
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`,
);
console.log("prerender  sitemap.xml y robots.txt generados");

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
