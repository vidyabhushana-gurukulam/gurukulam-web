/*
  scripts/asset-routes.mjs
  Shared filename->folder routing for the asset scripts. Lives here rather than being
  duplicated in fetch-assets.mjs and unpack-cached.mjs so the two can never disagree
  about where a file belongs.
*/

/*
  First match wins, so specific patterns sit above general ones:
  - `hero-line` is a decoration, not a hero photo.
  - `newsletter` contains "news", so the sections rule must precede the blog rule.
*/
export const ROUTES = [
  [/(shape|hero-line|vec-|cloud|wave|top-bar|line-|dot-|star|doodle)/i, "shapes"],
  [/(\/icon\/|icon-|arrow|logo|flag)/i, "icons"],
  [/(activit|gallery|choose|schedule|faq|admission|newsletter|instagram|counter|cta)/i, "images/sections"],
  [/hero/i, "images/hero"],
  [/about/i, "images/about"],
  [/(program|course|class)/i, "images/programs"],
  [/(team|teacher|instructor)/i, "images/teachers"],
  [/(blog|post)/i, "images/blog"],
  [/(testimonial|client|review|avatar)/i, "images/testimonials"],
  [/(brand|partner|sponsor)/i, "images/brands"],
];

export const classify = (url) => ROUTES.find(([re]) => re.test(url))?.[1] ?? "images/misc";
