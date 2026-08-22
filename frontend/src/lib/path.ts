/*
  src/lib/path.ts
  Normalises browser paths so route matching and active navigation agree on trailing slashes.
  Also serves the build-time prerender: entry-server sets the route being rendered here, so every
  consumer keeps calling getCurrentPath() unchanged instead of threading a path prop through the tree.
*/

/** Set by entry-server.tsx around each prerendered route; null in the browser. */
let serverPath: string | null = null;

/** Prerender only. Renders are synchronous, so one module-level value is safe. */
export function setServerPath(path: string | null) {
  serverPath = path;
}

export function getCurrentPath() {
  if (serverPath !== null) return serverPath;
  if (typeof window === "undefined") return "/";

  const { pathname } = window.location;
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
}
