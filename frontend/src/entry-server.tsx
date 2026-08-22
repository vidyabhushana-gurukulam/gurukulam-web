/*
  src/entry-server.tsx
  Build-time entry point. Vite bundles this for Node so scripts/prerender-routes.mjs can render each
  route to real HTML instead of shipping an empty root div, which is what search crawlers used to get.
  Effects never run during renderToString, so the GSAP and scroll behaviour stays browser-only.
*/
/* eslint-disable react/only-export-components -- build-only module: Vite bundles it for Node and the dev server's fast refresh never loads it. */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "@/App";
import { setServerPath } from "@/lib/path";

/** Renders one route's markup. Mirrors main.tsx exactly so hydration finds the tree it expects. */
export function renderRoute(path: string): string {
  setServerPath(path);

  try {
    return renderToString(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  } finally {
    setServerPath(null);
  }
}

export { schemasForRoute, SITE_URL, absoluteUrl } from "@/lib/seo";
