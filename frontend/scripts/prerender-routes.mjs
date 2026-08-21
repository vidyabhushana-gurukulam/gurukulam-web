/*
  frontend/scripts/prerender-routes.mjs
  Writes one HTML file per route into dist/ after the Vite build.

  The site uses clean URLs and plain <a href> navigation, so every click is a real request
  for a real path. A static host with no rewrite rules — GitHub Pages included — will
  return 404 for /about unless a file exists there. Emitting dist/about/index.html gives
  every route an HTTP 200 and lets the client router take over from the correct path.

  Each copy also carries its own <title>, description, and canonical URL, which a
  catch-all redirect could not provide.
*/
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = join(HERE, "..", "dist");
const SITE_URL = "https://vidyabhushanagurukulam.com";

const routes = JSON.parse(await readFile(join(HERE, "..", "src", "data", "routes.json"), "utf8"));
const template = await readFile(join(DIST, "index.html"), "utf8");

/** Swap the shared title/description/canonical for this route's own. */
function pageHtml(path, { title, description }) {
  const canonical = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`;

  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`);
}

const written = [];

for (const [path, meta] of Object.entries(routes)) {
  const html = pageHtml(path, meta);

  if (path === "/") {
    await writeFile(join(DIST, "index.html"), html);
    written.push("index.html");
    continue;
  }

  const dir = join(DIST, path.replace(/^\//, ""));
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "index.html"), html);
  written.push(`${path.replace(/^\//, "")}/index.html`);
}

// GitHub Pages serves 404.html for anything unmatched. Shipping the app there means a
// mistyped URL still renders the site's own styled not-found page rather than GitHub's.
await writeFile(join(DIST, "404.html"), pageHtml("/", {
  title: "Page not found | Vidyabhushana Gurukulam",
  description: routes["/"].description,
}));
written.push("404.html");

// Without this, GitHub Pages runs the output through Jekyll, which strips paths that
// begin with an underscore.
await writeFile(join(DIST, ".nojekyll"), "");
written.push(".nojekyll");

// Point crawlers at the sitemap and let them index everything.
await writeFile(join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
written.push("robots.txt");

const urls = Object.keys(routes)
  .map((path) => {
    const loc = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`;
    return `  <url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`;
  })
  .join("\n");

await writeFile(join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
written.push("sitemap.xml");

console.log(`Prerendered ${Object.keys(routes).length} routes:`);
for (const file of written) console.log(`  ${file}`);
