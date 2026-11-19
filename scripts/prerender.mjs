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

const { render, ROUTES, LANGS, href } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);

// Páginas públicas en los tres idiomas (+ la 404). "/" → index.html, "/ca/food-truck" → ca/food-truck.html
const PRIORITY = { home: "1.0", about: "0.8", macu: "0.8", truck: "0.7" };
const routes = [
  ...ROUTES.map((r) => ({ ...r, url: r.path, file: r.path === "/" ? "index.html" : `${r.path.slice(1)}.html` })),
  { url: "/404", file: "404.html", sitemap: false },
];
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

for (const r of routes) {
  const { html, head, htmlAttrs } = render(r.url);
  const page = template
    .replace('<html lang="es">', `<html ${htmlAttrs || 'lang="es"'}>`)
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);
  fs.mkdirSync(path.dirname(path.join(dist, r.file)), { recursive: true });
  fs.writeFileSync(path.join(dist, r.file), page);
  console.log(`prerender  ${r.url.padEnd(16)} → dist/${r.file}  (${(page.length / 1024).toFixed(1)} kB)`);
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => r.sitemap !== false)
  .map((r) => {
    const alts = [...LANGS, "x-default"]
      .map((l) => {
        const target = href(r.page, l === "x-default" ? "es" : l);
        return `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${target}"/>`;
      })
      .join("\n");
    return `  <url>
    <loc>${SITE_URL}${r.url}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.lang === "es" ? PRIORITY[r.page] : (Number(PRIORITY[r.page]) - 0.1).toFixed(1)}</priority>
${alts}
  </url>`;
  })
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
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
