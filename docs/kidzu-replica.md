<!--
docs/kidzu-replica.md
Historical record of the Kidzu ThemeForest motion reference used while building the frontend.
Explains which interaction patterns remain useful without defining the current website's visual identity.
-->

# Kidzu Motion Reference — Development History

**Built:** 12 August 2026
**Lives in:** `frontend/`
**Technical detail:** `frontend/README.md`
**Reference:** [Kidzu demo](https://kidzudemo.ex-coders.com/) · [ThemeForest listing](https://themeforest.net/item/kidzu-kindergarten-school-wordpress-theme/64152688)

---

**Status:** Historical reference; the active frontend is the implemented Gurukulam website.

## Why this exists

The Kidzu theme was brought in as a **motion reference**, not a design choice. What was worth having from it is the animation quality — the weighted scroll, the character-split headings, the scroll-scrubbed reveals — not the cartoon aesthetic.

Two ways to get that were on the table:

| Option | Trade |
|---|---|
| Apply Kidzu's motion directly to the planned Gurukulam design | Faster, but no baseline to check the motion against |
| **Faithful replica first, then adapt the active site** | ~1.4× the work, but the motion could be verified before the visual system changed |

The second approach was chosen during development. That transition is complete: the active routes now use the Gurukulam's approved content, brand assets, and implemented visual system.

> **This does not supersede [design-direction.md](./design-direction.md).** The rendered frontend and that document define the current website; this file records the earlier motion-reference work.

---

## What made the adaptation maintainable

The replica is built **token-first**. No component contains a hex code, a duration, or a sentence of copy — all three resolve through one of:

| Layer | File | Current role |
|---|---|---|
| Colour, type, radius, shadow | `frontend/src/styles/tokens.css` | Current website tokens |
| Animation timings | `frontend/src/lib/motion-tokens.ts` | Keep as-is — this is the thing worth having |
| Copy and images | `frontend/src/data/home.ts` | Verified Gurukulam content and assets |
| Shape geometry | `frontend/src/styles/shapes.css` | Shared organic geometry retained from the exploration |

The token-first structure made it possible to apply the current palette consistently. Raster doodles do not inherit tokens and remain third-party placeholders that must not ship.

If a component ever needs editing for a palette change, that is a token that leaked. Pull it back into `tokens.css`.

---

## Structure

```
frontend/src/
├── styles/tokens.css        20 CSS vars — the entire visual theme
├── lib/motion-tokens.ts     every duration/ease/stagger, sourced from the theme's main.js
├── data/                    all copy and image paths
├── hooks/useHoverActive.ts  the theme's sticky hover pattern
└── components/
    ├── motion/              Reveal · SplitHeading · CountUp · RotateOnScroll
    ├── ui/                  Button · Img · Logo · Tabs · Accordion · Marquee · CloudDivider
    ├── layout/              Header · MobileDrawer · Footer · SmoothScrollProvider
    ├── home/                active homepage sections
    └── pages/               active inner pages and route mapping
```

The active stack is Vite + React 19 + TypeScript + Tailwind v4 + GSAP. Production hosting, form handling, and any future SSR requirement remain separate architecture decisions.

---

## How the motion was reproduced

Timings were transcribed from the theme's own `assets/js/main.js` rather than estimated, each with a source line reference in `motion-tokens.ts`. ScrollSmoother and SplitText were paid GreenSock plugins until GSAP 3.13 (April 2025) and now ship free, which is what made 1:1 parity possible.

Three behaviours are easy to get wrong and are deliberate:

1. **Character splitting is desktop-only** (`matchMedia` ≥1200px) and reverts on breakpoint change. Splitting text on mobile breaks reflow and screen readers.
2. **The header sits outside `SmoothScrollProvider`.** ScrollSmoother transforms its content wrapper, and a fixed element inside a transformed ancestor anchors to that ancestor, not the viewport.
3. **The hover-active pattern binds `mouseenter` only** — no `mouseleave`. The highlight sticks to the last item hovered instead of resetting, and one item starts active. This drives Extra Activities, the counter blobs, the programme cards and the teacher cards.

Every scroll effect honours `prefers-reduced-motion`.

---

## Verified vs approximated

Measured in a real browser, not assumed:

| Behaviour | Evidence |
|---|---|
| ScrollSmoother `smooth: 2` | 90ms after a 1500px jump, content had moved 373px, settling to 1500px |
| SplitText | `split-line` nodes present in the hero `<h1>` |
| Hover system | lift `-3px`, duration `0.4s`, overshoot easing, wash sweep, arrow nudge `4px` |
| Token-only palette test | Whole reference page recoloured with zero component edits |

**Approximated:** hover distances, easings and shadow values. The demo host IP-banned the build machine during the asset mirror, so its stylesheet was never obtained — those values are matched by eye against `playwright-screenshots/`. They are all in `tokens.css`; see `frontend/README.md` for the ruled-out retrieval routes and the `fetch-reference-css.sh` script that closes it.

---

## Assets and licensing

⚠️ **The replica ships licensed theme and stock assets as development placeholders. They must not go to production.**

109 of 112 demo assets are mirrored under `frontend/public/assets/`, with a replace-before-launch checklist at `frontend/PLACEHOLDERS.md`. In practice this matters less than it sounds — the photographs are Western classroom stock and would be replaced with gurukulam photography regardless. The decorative shapes are the only assets worth keeping, and those are better redrawn as SVG so they re-theme.

---

## Open items

- **Theme CSS never retrieved** — blocks exact hover values. Run `frontend/scripts/fetch-reference-css.sh` from an unblocked network, or take the CSS from the ThemeForest zip.
- **Custom cursor not implemented** — `main.js:868` ships a dual-ring cursor. It only initialises when a `.mouseCursor` element exists and we could not confirm the demo home page includes one. Verify before building it; adding it on a guess would be a regression.
- **3 blog thumbnails + 1 icon missing** — render as labelled placeholders, not broken images.
- **Doodles are raster** — replace or remove them before production because they do not inherit the current palette.
- **Framework choice** — Vite remains the active frontend framework; revisit it only if the production architecture requires SSR or server routes.

---

## Lesson worth keeping

Tailwind v4 changed how a utility references a CSS variable: `duration-(--x)`, not `duration-[--x]`. The bracket form is parsed as a custom-property *declaration* and silently dropped — the class appears in the DOM and does nothing, with no build error.

This was used 56 times across 14 files, so **every transition in the build was running at `0s`** and every hover was an instant snap. It was only caught by driving a real cursor and reading computed styles, never by reading the code. A `lint:tw-vars` guard now runs as part of `npm run build`.

The general point: a class that silently does nothing is invisible to code review. Verify interaction states by measuring them in a browser.
