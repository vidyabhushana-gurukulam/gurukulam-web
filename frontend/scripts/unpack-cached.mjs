/*
  scripts/unpack-cached.mjs
  Decodes the base64 asset bundle captured from the browser's HTTP cache and writes any
  files the network mirror could not reach (the demo host rate-limits and then blocks).
  Uses the same folder routing as fetch-assets.mjs so paths stay consistent.
  Usage: node scripts/unpack-cached.mjs <path-to-bundle.json>
*/
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { classify } from "./asset-routes.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public", "assets");


const bundlePath = process.argv[2];
if (!bundlePath) {
  console.error("Usage: node scripts/unpack-cached.mjs <bundle.json>");
  process.exit(1);
}

const raw = await readFile(bundlePath, "utf8");
// The capture is a JSON string containing JSON; unwrap either shape.
let bundle = JSON.parse(raw);
if (typeof bundle === "string") bundle = JSON.parse(bundle);

let written = 0;
let skipped = 0;
const errors = [];

for (const [url, entry] of Object.entries(bundle)) {
  if (entry.error) {
    errors.push(`${entry.error}  ${url}`);
    continue;
  }

  const name = path.basename(new URL(url).pathname);
  const dir = path.join(OUT, classify(url));
  const dest = path.join(dir, name);

  if (existsSync(dest)) {
    skipped++;
    continue;
  }

  await mkdir(dir, { recursive: true });
  await writeFile(dest, Buffer.from(entry.b64, "base64"));
  written++;
}

console.log({ written, alreadyPresent: skipped, failed: errors.length });
if (errors.length) errors.forEach((e) => console.log("  " + e));
