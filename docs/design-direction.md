<!--
docs/design-direction.md
Canonical visual reference for the implemented Vidyabhushana Gurukulam website and related communications.
Records the current palette, typography, layout language, interactions, imagery, and brand-asset rules from the frontend.
-->

# Vidyabhushana Gurukulam — Design Direction

**Last Updated:** 18 August 2026
**Status:** Active and implemented
**Type:** Design Overview
**Target Platforms:** Responsive web and related admissions communications
**Implementation:** `frontend/src/`

---

## Source of truth

The current website is the approved visual reference. When this document and the rendered frontend differ, inspect the active implementation before extending the design, then update this document if the change is intentional.

The core implementation references are:

| Concern | Source |
|---|---|
| Palette, typography, radii, shadows, and interaction values | `frontend/src/styles/tokens.css:7` |
| Global type and accessibility behavior | `frontend/src/index.css:11` |
| Loaded font families and weights | `frontend/index.html:10` |
| Header and navigation treatment | `frontend/src/components/layout/Header.tsx:18` |
| Hero composition | `frontend/src/components/home/HeroSection.tsx:25` |
| Shared section-heading rhythm | `frontend/src/components/home/SectionIntro.tsx:17` |
| Buttons and hover behavior | `frontend/src/components/ui/Button.tsx:25` |
| Responsive public routes | `frontend/src/components/pages/PageRouter.tsx:22` |

The earlier exploration remains in `design-prototypes/style-explorer.html` as project history, not as an instruction source.

---

## Design philosophy

The site presents a serious, established school through a warm editorial interface. It combines classical educational dignity with approachable, child-centered softness: restrained color, generous space, curved architectural forms, readable content systems, authentic photography, and clear admission actions.

**Visual character:** Calm, trustworthy, warm, devotional, academically serious, and welcoming.

**Avoid:** Loud kindergarten graphics, dense promotional layouts, neon colors, excessive saffron, generic school clip art, visual clutter, and anything that reads as a temple pamphlet or coaching-class advertisement.

The strategic line the visual hierarchy supports is **“Vedic knowledge with modern science.”** Tradition and academic rigor must appear complementary.

---

## Color system

The implemented palette comes from the approved crest and quiet natural surfaces in `frontend/src/styles/tokens.css:7`.

| Token | Value | Role |
|---|---|---|
| `--color-theme` | `#C9A227` | Restrained gold accent, rules, labels, borders, and highlights |
| `--color-theme-secondary` | `#1B3057` | Secondary brand color |
| `--color-header` | `#1B3057` | Headings, primary buttons, dark panels, and navigation emphasis |
| `--color-title` | `#142543` | Strong title ink |
| `--color-text` | `#586254` | Body copy and secondary navigation |
| `--color-border` | `#DBE3CE` | Quiet borders and dividers |
| `--color-body` | `#F1F4EA` | Pale green page ground |
| `--color-bg-cream` | `#F8F3E5` | Warm cream hero and feature surfaces |
| `--color-bg-sky` | `#EDF2E4` | Soft alternate surface |
| `--color-bg-blush` | `#F4EEE2` | Warm alternate surface |
| `--color-bg-lavender` | `#E8EEDE` | Muted green alternate band |
| `--color-bg-rose` | `#F7F1E5` | Warm neutral alternate band |
| `--color-bg-soft` / `--color-bg-panel` | `#FCFDF7` | Header, footer, cards, and quiet panels |

Gold is an accent rather than a field color. Use it for small high-value details against cream, white, or navy; do not fill large areas with gold.

---

## Typography

The live site loads **Playfair Display** for headings and **DM Sans** for body copy in `frontend/index.html:10` and assigns them through `frontend/src/styles/tokens.css:29`.

- **Headings:** Playfair Display, medium weight, deep navy, with tight display tracking.
- **Body and controls:** DM Sans, regular to semibold, muted green-gray or white on dark panels.
- **Hero scale:** Fluid display type reaches `4rem` through the shared token, while the homepage hero uses a responsive `clamp()` up to `5rem` at `frontend/src/components/home/HeroSection.tsx:43`.
- **Section headings:** Fluid `2rem` to `3.25rem`, centered by default, at `frontend/src/components/home/SectionIntro.tsx:23`.
- **Body base:** `18px` with `28px` line height at `frontend/src/index.css:12`.
- **Eyebrows:** Small uppercase serif labels with wide tracking and restrained gold.

Do not substitute rounded, cartoonish, or highly decorative display fonts. The type pairing should retain the current contrast between classical headings and clean contemporary body text.

---

## Layout and shape language

The site uses generous whitespace, centered editorial rhythm, and large architectural curves rather than dense boxes.

- **Hero:** A tall cream panel with a dome-like top, a fine gold border, the colored crest, centered admissions hierarchy, and spacious breathing room. The implementation is at `frontend/src/components/home/HeroSection.tsx:26`.
- **Page width:** Primary sections use centered containers around `1280px`; the header uses `1400px`, as shown at `frontend/src/components/home/FoundationSections.tsx:25` and `frontend/src/components/layout/Header.tsx:22`.
- **Cards:** Rounded corners generally use `24–28px`; selected educational cards use pronounced arched tops, as implemented at `frontend/src/components/home/FoundationSections.tsx:70`.
- **Section rhythm:** Gold eyebrow, large navy heading, optional lead, and generous vertical spacing. The shared composition is at `frontend/src/components/home/SectionIntro.tsx:17`.
- **Dark bands:** Navy sections create occasional contrast for frameworks such as Pancha Kosha while retaining translucent, softly bordered cards at `frontend/src/components/home/RhythmAndKoshaSections.tsx:56`.
- **Decorative geometry:** Fine circles, rules, soft curves, and restrained organic forms may support hierarchy. Decorations must never compete with content or imitate cartoon doodles.

The website is responsive: content stacks on narrow screens, navigation moves into a mobile drawer, and typography scales fluidly. Preserve the mobile hierarchy rather than shrinking the desktop composition uniformly.

---

## Components and interaction

### Header

The fixed header uses a near-white panel, subtle lower border, filtered navy horizontal logo, centered desktop navigation, and a navy admission action. See `frontend/src/components/layout/Header.tsx:20` and `frontend/src/components/ui/Logo.tsx:11`.

### Buttons

Buttons are full pills with semibold DM Sans labels and a circled arrow. The primary accent variant uses gold, the main admission variant uses navy, and ghost actions remain transparent. Hover behavior combines a small lift, light sweep, arrow shift, and restrained shadow at `frontend/src/components/ui/Button.tsx:25`.

### Cards

Cards use warm-white or cream surfaces, quiet navy or botanical borders, generous internal padding, and subtle elevation. Hover states may lift a card slightly or strengthen its border, but should not introduce bouncy or toy-like motion.

### Motion

Motion is supportive and calm: reveal transitions, split headings on large screens, smooth scrolling, modest hover lifts, and arrow movement. Shared timings live in `frontend/src/lib/motion-tokens.ts`; CSS hover values live in `frontend/src/styles/tokens.css:44`.

All effects must honor `prefers-reduced-motion`, enforced globally at `frontend/src/index.css:54` and within the GSAP helpers.

---

## Logo and brand assets

Use the supplied official colored logo from the repository's `document/logo/` folder for banners and admissions artwork. For the website, the active brand files live under `frontend/public/brand/`, including the horizontal header lockup and colored crest used in the hero.

The crest or lockup must be placed as an original supplied asset. Do not redraw, regenerate, recolor, crop, distort, simplify, replace, or modify its Sanskrit, typography, jewel, tilak, lotus, book, gold ornamentation, or school name. Maintain its proportions and clear space.

The website uses the colored crest prominently in the hero at `frontend/src/components/home/HeroSection.tsx:32` and the horizontal lockup in shared chrome at `frontend/src/components/ui/Logo.tsx:15`.

---

## Photography and illustration

Prefer authentic, dignified images of Indian children learning, reading, making, discussing, practicing arts, serving, or engaging with nature. Photography should show natural expressions, modest clothing, realistic skin and hands, and a believable educational context.

Do not depict an identifiable campus or facility unless an approved photograph exists. Do not imply an on-campus farm, goshala, science laboratory, robotics facility, smart classroom, or hostel unless current project documentation verifies it.

Avoid Western classroom stock, AI-generated text inside images, cartoon mascots, fake institutional scenes, and decorative visuals that overpower the school identity.

---

## Content hierarchy for admissions artwork

For banners and other conversion-focused communications, preserve this order:

1. Official colored logo and school identity.
2. Admissions status and academic year.
3. The main parent-facing promise or strategic line.
4. The strongest educational benefits.
5. Class, board, syllabus, and programme facts.
6. Contact information and call to action.
7. A clearly reserved, high-contrast QR-code area when required.

Keep text readable at the final viewing distance. Reserve blank space for the real QR code instead of generating a decorative or fake code.

---

## Content and honesty guardrails

These rules come from the project overview and apply to every visual execution:

1. Use positive framing and never criticize other schools.
2. Describe a screen-free, attentive, values-led environment without promising medical or psychological outcomes.
3. Label planned facilities as planned.
4. Describe Gau Seva and Krishi as a weekly visit to a separate off-campus farm.
5. Attribute prior Sunday-school experience to the founding team, not to Vidyabhushana Gurukulam.
6. Do not present pre-primary as following the Classes 1–5 full-day schedule.

See `docs/overview.md` and `../../document/philosophy.md` for the approved facts and communication boundaries.

---

## Maintenance rule

Extend the system from the current implementation rather than from the archived prototype or unused replica components. Any intentional change to palette, typography, layout language, imagery, or interaction behavior should be reflected here after it is implemented.
