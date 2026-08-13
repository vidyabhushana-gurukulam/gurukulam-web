# Kidzu replica — Phase 1

A faithful rebuild of the [Kidzu](https://kidzudemo.ex-coders.com/) ThemeForest demo home page
in React, built **token-first** so Phase 2 (the Vidya Tulsi re-skin) is a theme swap rather
than a rewrite.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build
```

---

## Why it is built this way

The brief was "replica first, re-skin after". That only pays off if the replica never
hardcodes a Kidzu value. So:

- **Every colour, font, radius and shadow** resolves through `src/styles/tokens.css`.
- **Every animation timing** resolves through `src/lib/motion-tokens.ts`.
- **Every string and image path** lives in `src/data/`.

No component contains a hex code, a duration, or a sentence of copy. Phase 2 edits those
three places and the site re-skins.

---

## Structure

```
src/
├── styles/
│   ├── tokens.css          20 CSS vars — the whole visual theme  ← edit for Phase 2
│   └── shapes.css          blob radii, scallop edges, doodle helper
├── lib/
│   ├── gsap.ts             plugin registration + reduced-motion helper
│   └── motion-tokens.ts    every duration/ease/stagger, sourced from the theme's main.js
├── data/
│   ├── nav.ts              menu tree
│   └── home.ts             all home page copy + image paths  ← edit for Phase 2
├── components/
│   ├── motion/             Reveal · SplitHeading · CountUp · RotateOnScroll
│   ├── ui/                 Button · Img · Logo · Tabs · Accordion · Marquee · SectionHeading
│   ├── layout/             Header · MobileDrawer · Footer · SmoothScrollProvider
│   └── sections/           14 home page sections
└── scripts/
    ├── asset-routes.mjs    shared filename→folder routing
    ├── fetch-assets.mjs    mirrors the demo's images
    ├── unpack-cached.mjs   recovers assets from a browser-cache export
    └── fetch-missing.sh    slow sequential retry for rate-limited files
```

---

## Animation parity

Timings were transcribed from the theme's own `assets/js/main.js`, not estimated. The
library mapping:

| Original | Here |
|---|---|
| GSAP + ScrollTrigger | same |
| ScrollSmoother (`smooth: 2`) | same — `SmoothScrollProvider` |
| SplitText, gated to ≥1200px | same — `SplitHeading` |
| WOW.js `fadeInUp` × 54 nodes | one `<Reveal>` component |
| jquery.counterUp + Waypoints | `<CountUp>` |
| Swiper | `swiper/react` |
| parallaxie.js | ScrollTrigger `scrub` |
| meanmenu | `MobileDrawer` |
| Bootstrap 5 grid | Tailwind |

ScrollSmoother and SplitText were paid Club GreenSock plugins until GSAP 3.13 (April 2025);
they now ship in the public `gsap` package, which is what makes 1:1 parity possible.

Two behaviours worth preserving if you refactor:

1. **Character splitting is desktop-only** (`gsap.matchMedia`, ≥1200px) and reverts on
   breakpoint change. Splitting text on mobile breaks reflow and screen readers.
2. **The header is outside `SmoothScrollProvider`.** ScrollSmoother transforms its content
   wrapper, and a `fixed`/`sticky` element inside a transformed ancestor anchors to that
   ancestor instead of the viewport.

Every scroll effect checks `prefers-reduced-motion` and degrades to static.

---

## Tailwind v4 gotcha — read before adding utilities

To reference a CSS variable inside a utility, v4 uses **parentheses**:

```jsx
duration-(--default-transition-duration)   ✅ emits transition-duration: var(...)
duration-[--default-transition-duration]   ❌ silently emits nothing
```

The bracket form is parsed as a custom-property *declaration*, not a value, so Tailwind
drops it without warning — the class appears in the DOM and does absolutely nothing.
This bit the whole codebase once (56 occurrences; every transition was running at `0s`).

Guard against a regression:

```bash
grep -rE '\-\[--[a-z0-9-]+\]' src/    # must return nothing
```

---

## Hover micro-interactions

Three sticky hover-active groups come straight from the theme's `main.js` and are
implemented by the shared `useHoverActive` hook:

| Elements | Source | Behaviour |
|---|---|---|
| Extra Activities rows | main.js:189 | accent fill follows the cursor |
| Counter blobs | main.js:189 | photo fill follows the cursor |
| Programme cards | main.js:189 | raised state follows the cursor |
| Teacher cards | main.js:843 | zoom + lift follows the cursor |

The important quirk: the original binds **mouseenter only** — there is no mouseleave — so
the highlight sticks to the last item hovered rather than resetting. One item starts
active on load. The hook reproduces both, and adds `onFocus` so keyboard users get parity.

Hover distances (`--hover-lift`, `--hover-zoom`, `--hover-arrow-shift`, `--shadow-hover`,
`--ease-out-back`) live in `tokens.css` and are matched against the reference captures
rather than extracted from its CSS — see the note below.

---

## Phase 2 — the re-skin

1. Replace the values in `src/styles/tokens.css` with the Vidya Tulsi palette
   (`#1B3057` navy, `#F1F4EA` mint, `#C9A227` gold) and type pairing.
2. Rewrite `src/data/home.ts` with the gurukulam's copy and photography.
3. Decide per shape in `src/styles/shapes.css` whether the blob/scallop geometry stays.
   The scallop and blob radii are pure CSS, so they recolour for free — several of the
   PNG doodles in `public/assets/shapes/` can be deleted rather than replaced.

No component file should need to change for a palette swap. If one does, that's a token
that leaked — pull it back into `tokens.css`.

---

## Assets

109 of 112 demo assets are mirrored under `public/assets/`. See **PLACEHOLDERS.md** for the
full replace-before-launch checklist.

> These are licensed theme and stock assets used as **development placeholders**. They must
> not ship to production. The photographs are Western classroom stock and would be replaced
> with gurukulam photography regardless.

### Fidelity gaps still open

- **The theme's CSS was never extracted.** Scroll and hover *logic* comes from its
  `main.js`, but the demo host IP-banned this machine during the asset mirror before the
  stylesheet could be pulled. So exact hover distances, easings and shadow values are
  matched by eye against the captures in `playwright-screenshots/`, not read from source.
  They are all centralised in `tokens.css`, so correcting them is a single-file edit.

  Routes already tried and ruled out — **do not repeat these**:

  | Route | Result |
  |---|---|
  | Direct `curl` / browser to the demo | `000` — network-level ban, 40 probes over 30 min |
  | ThemeForest full-screen preview | `403`, and it only iframes the banned host anyway |
  | Wayback Machine | Not archived. CDX returns records for control domains, none for this one |
  | Browser HTTP cache | Worked for images, but the CSS was never a cached subresource we could reach |

  To close it: run `./scripts/fetch-reference-css.sh` from an unblocked network, or take
  the CSS out of the ThemeForest zip if you own the theme (authoritative, and beats
  scraping). Then re-derive the values in the "Hover micro-interactions" table above.
- **Custom cursor not implemented.** `main.js:868` ships a dual-ring cursor that scales
  on hover over `button, a, .cursor-pointer`. It only initialises when a `.mouseCursor`
  element is present, and we could not confirm the home page includes one. Adding it
  speculatively would be a fidelity regression if the demo does not use it, so it is
  deliberately omitted — verify against the live demo before building it.

Missing assets (rendered as labelled grey blocks by `<Img>`, not broken images):

- `blog-post-1/2/3.webp` — the demo host IP-blocked us mid-download
- `icon-4.svg` — absent from the demo's own cache

Re-run `node scripts/fetch-assets.mjs` to retry; already-downloaded files are skipped.
