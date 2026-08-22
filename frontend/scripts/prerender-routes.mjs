/*
  frontend/scripts/prerender-routes.mjs
  Writes one fully-rendered HTML file per route into dist/ after the Vite build.

  The site uses clean URLs and plain <a href> navigation, so every click is a real request
  for a real path. A static host with no rewrite rules — GitHub Pages included — will
  return 404 for /about unless a file exists there. Emitting dist/about/index.html gives
  every route an HTTP 200 and lets the client router take over from the correct path.

  Each copy carries its own <title>, description, canonical URL, JSON-LD, and — since the
  SSR build landed — the page's actual markup. Crawlers previously received an empty root
  div and had to execute JavaScript to see any content at all.
*/
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = join(HERE, "..", "dist");
const SSR_DIST = join(HERE, "..", "dist-ssr");

// Built by `vite build --ssr src/entry-server.tsx` in the npm build script, immediately before this runs.
const { renderRoute, schemasForRoute, SITE_URL } = await import(join(SSR_DIST, "entry-server.js"));

const routes = JSON.parse(await readFile(join(HERE, "..", "src", "data", "routes.json"), "utf8"));
// The source index.html opens with a developer comment that documents these very replacements,
// so it necessarily contains a literal </head> and root div. String.replace takes the FIRST match,
// which would inject every page into the comment. Strip it — it is dev documentation that has no
// business shipping on all eight pages anyway.
const template = (await readFile(join(DIST, "index.html"), "utf8")).replace(/^<!--[\s\S]*?-->\s*/, "");

// Build date, not build time: <lastmod> is a date-level signal and a per-second value
// would tell crawlers every page changed on every deploy.
const LASTMOD = new Date().toISOString().slice(0, 10);

/** JSON-LD goes in a script tag, so a literal </script> in any answer text would close it early. */
function jsonLdTags(path) {
  return schemasForRoute(path)
    .map((schema) => {
      const json = JSON.stringify(schema).replace(/</g, "\\u003c");
      return `    <script type="application/ld+json">${json}</script>`;
    })
    .join("\n");
}

/** Swap the shared title/description/canonical for this route's own, then bake in its markup. */
function pageHtml(path, { title, description }, { render = true } = {}) {
  const canonical = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`;
  const structuredData = jsonLdTags(path);

  const head = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`);

  const withSchema = structuredData
    ? head.replace("</head>", `${structuredData}\n  </head>`)
    : head;

  if (!render) return withSchema;

  // main.tsx hydrates whatever is inside #root, so the markup must land exactly there.
  return withSchema.replace(/<div id="root">\s*<\/div>/, `<div id="root">${renderRoute(path)}</div>`);
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
// Left unrendered: the markup would be the homepage's, which must not be indexed at a wrong URL.
await writeFile(join(DIST, "404.html"), pageHtml("/", {
  title: "Page not found | Vidyabhushana Gurukulam",
  description: routes["/"].description,
}, { render: false }));
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
    return `  <url><loc>${loc}</loc><lastmod>${LASTMOD}</lastmod><changefreq>monthly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`;
  })
  .join("\n");

await writeFile(join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
written.push("sitemap.xml");

// The SSR bundle is a build artefact for this script alone and must not reach the deployed site.
await rm(SSR_DIST, { recursive: true, force: true });

console.log(`Prerendered ${Object.keys(routes).length} routes:`);
for (const file of written) console.log(`  ${file}`);
