/*
  src/lib/motion-tokens.ts
  Every scroll/reveal timing in the app, in one place. Values are transcribed from the
  Kidzu theme's own assets/js/main.js rather than eyeballed, so the rebuild matches the
  original's feel exactly. Line references point at the source they came from.
  Components import from here — none of them declare their own durations or eases.
*/

/** ScrollSmoother config (main.js:946). `smooth: 2` is the 2s scroll catch-up that gives the theme its weighted feel. */
export const SMOOTHER = {
  smooth: 2,
  effects: true,
  smoothTouch: 0.1,
  normalizeScroll: false,
  ignoreMobileResize: true,
} as const;

/**
 * Character-level heading reveals (main.js:971-1026).
 * Kidzu gates these to >=1200px via gsap.matchMedia and reverts the split on
 * breakpoint change — running SplitText on mobile breaks reflow and screen readers.
 */
export const SPLIT_BREAKPOINT = "(min-width: 1200px)";

/** Eyebrow / sub-title: fades in from the right as it scrubs into view. */
export const SPLIT_SUBTITLE = {
  from: { opacity: 0, x: 7 },
  to: { x: 0, opacity: 1, duration: 0.7, stagger: 0.2 },
  scrollTrigger: { start: "top 90%", end: "top 60%", scrub: 1 },
} as const;

/** Section title: starts partially visible (0.3) and slides in from the left. */
export const SPLIT_TITLE = {
  from: { opacity: 0.3, x: -7 },
  to: { x: 0, opacity: 1, duration: 0.7, stagger: 0.2 },
  scrollTrigger: { start: "top 92%", end: "top 60%", scrub: 1 },
} as const;

/** The `.text-anim` variant (main.js:1040-1058) — plays once, not scrubbed. */
export const TEXT_ANIM = {
  duration: 1,
  delay: 0.1,
  x: 20,
  stagger: 0.03,
  ease: "power2.out",
  scrollTrigger: { start: "top 85%" },
} as const;

/** Approach boxes sliding in from the right (main.js:1098-1110). */
export const APPROACH_BOXES = {
  from: { x: "100%" },
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    start: "top 100%",
    end: "bottom 40%",
    scrub: 2,
    toggleActions: "play none none reverse",
  },
} as const;

/** Decorative circles rotating 0->180deg on scrub (main.js:1119-1143). */
export const ROTATE_CIRCLE = {
  from: { rotate: 0 },
  to: { rotate: 180, ease: "none" },
  scrollTrigger: { start: "top 80%", end: "top 20%", scrub: 1 },
} as const;

/** Panel pinning (main.js:1065-1083), desktop only. */
export const PANEL_PIN = {
  breakpoint: "(min-width: 1199px)",
  scrollTrigger: { start: "top 14%", end: "bottom 62%", scrub: 1, pinSpacing: false },
} as const;

/**
 * WOW.js replacement. The theme applies `.wow fadeInUp` to 54 nodes with default
 * WOW settings; these are those defaults expressed as a GSAP tween.
 */
export const REVEAL = {
  from: { opacity: 0, y: 40 },
  duration: 1,
  ease: "power2.out",
  /** Applied as a multiplier when a group of siblings reveals together. */
  stagger: 0.15,
  scrollTrigger: { start: "top 88%", toggleActions: "play none none none" },
} as const;

/** Counter roll-up on the stat blobs (`.count`, main.js:153). */
export const COUNT_UP = {
  duration: 2,
  ease: "power2.out",
  scrollTrigger: { start: "top 85%" },
} as const;

/** Preloader fade (main.js:1154). */
export const PRELOADER_FADE_MS = 600;

/* -------------------------------------------------------------------------
   Gurukulam photography. Unlike everything above, these are not transcribed
   from Kidzu — the theme had no framed photography. They are tuned to stay
   inside the site's calm register: slow, scrubbed, and never bouncy.
   ------------------------------------------------------------------------- */

/**
 * Slow vertical drift inside a fixed frame. The image is rendered oversized so the
 * drift never exposes an edge; scrubbing ties it to scroll rather than to a timer.
 */
export const PHOTO_DRIFT = {
  from: { yPercent: -4 },
  to: { yPercent: 4, ease: "none" },
  scrollTrigger: { start: "top bottom", end: "bottom top", scrub: 1.2 },
} as const;

/** First-view wipe for a framed photograph: the frame uncovers its image from the bottom up. */
export const PHOTO_REVEAL = {
  from: { clipPath: "inset(100% 0% 0% 0%)" },
  to: { clipPath: "inset(0% 0% 0% 0%)", duration: 1.15, ease: "power3.out" },
  scrollTrigger: { start: "top 85%" },
} as const;

/** Floating child cutouts drift against the page so the composition breathes as it scrolls. */
export const CUTOUT_FLOAT = {
  scrollTrigger: { start: "top bottom", end: "bottom top", scrub: 1.4 },
} as const;
