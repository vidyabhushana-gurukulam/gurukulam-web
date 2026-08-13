/*
  scripts/fetch-assets.mjs
  Mirrors the Kidzu demo's image assets into public/assets/, sorting them into
  shapes / icons / images-by-section so the components can reference stable paths.
  Run: node scripts/fetch-assets.mjs
  These are DEVELOPMENT PLACEHOLDERS from a licensed theme — see PLACEHOLDERS.md.
*/
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { classify } from "./asset-routes.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public", "assets");
/* The demo host's WAF returns 406 under burst load, so keep the pool small and retry. */
const CONCURRENCY = 3;
const RETRIES = 4;

const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  Referer: "https://kidzudemo.ex-coders.com/",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


/** WordPress serves originals; strip query strings and size suffixes for a clean name. */
const filenameOf = (url) => path.basename(new URL(url).pathname);

async function download(url) {
  const dir = path.join(OUT, classify(url));
  const dest = path.join(dir, filenameOf(url));

  if (existsSync(dest)) return { url, dest, status: "cached" };

  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    const res = await fetch(url, { headers: BROWSER_HEADERS });

    if (res.ok) {
      await mkdir(dir, { recursive: true });
      await writeFile(dest, Buffer.from(await res.arrayBuffer()));
      return { url, dest, status: "ok" };
    }

    // 406/429 here mean throttling rather than a genuinely missing file — back off.
    if (attempt < RETRIES) await sleep(600 * 2 ** (attempt - 1));
    else return { url, dest, status: `failed ${res.status}` };
  }
}

/** Simple bounded-concurrency pool — avoids hammering the demo host with 112 parallel requests. */
async function pool(items, limit, worker) {
  const results = [];
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) {
        const i = cursor++;
        try {
          results[i] = await worker(items[i]);
        } catch (err) {
          results[i] = { url: items[i], status: `error ${err.message}` };
        }
      }
    }),
  );
  return results;
}

const manifest = JSON.parse(await readFile(path.join(ROOT, "scripts", "asset-manifest.json"), "utf8"));
const urls = typeof manifest === "string" ? JSON.parse(manifest) : manifest;

console.log(`Mirroring ${urls.length} assets into public/assets/ ...`);
const results = await pool(urls, CONCURRENCY, download);

const tally = results.reduce((acc, r) => ({ ...acc, [r.status]: (acc[r.status] ?? 0) + 1 }), {});
console.log(tally);

const failures = results.filter((r) => r.status !== "ok" && r.status !== "cached");
if (failures.length) {
  console.log("\nFailures:");
  failures.forEach((f) => console.log(`  ${f.status}  ${f.url}`));
}

// Emit the replace-before-launch checklist alongside the assets.
const byFolder = results
  .filter((r) => r.status === "ok" || r.status === "cached")
  .reduce((acc, r) => {
    const rel = path.relative(path.join(ROOT, "public"), r.dest);
    const folder = path.dirname(rel);
    (acc[folder] ??= []).push(path.basename(rel));
    return acc;
  }, {});

const doc = `# Placeholder assets — replace before production

These files were mirrored from the Kidzu ThemeForest demo (\`kidzudemo.ex-coders.com\`)
as **development placeholders**. They are licensed theme/stock assets and must not ship
on a public site.

- **Photographs** (\`images/**\`) — replace with Vidyabhushana Gurukulam photography.
- **Shapes and doodles** (\`shapes/**\`) — redraw as SVG in the Vidya Tulsi palette, or
  drop them; \`styles/shapes.css\` already reproduces the scallop and blob geometry in CSS,
  so several of these PNGs can be deleted rather than replaced.
- **Icons** (\`icons/**\`) — swap for an open-licensed set.

Regenerate this list with \`node scripts/fetch-assets.mjs\`.

${Object.entries(byFolder)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([folder, files]) => `## ${folder} (${files.length})\n\n${files.sort().map((f) => `- [ ] ${f}`).join("\n")}`)
  .join("\n\n")}
`;

await writeFile(path.join(ROOT, "PLACEHOLDERS.md"), doc);
console.log("\nWrote PLACEHOLDERS.md");
