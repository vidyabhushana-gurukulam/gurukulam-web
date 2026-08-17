/*
  src/lib/path.ts
  Normalises browser paths so route matching and active navigation agree on trailing slashes.
*/
export function getCurrentPath() {
  const { pathname } = window.location;
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
}
