<!--
docs/design-direction.md
The chosen visual direction for the Vidyabhushana Gurukulam website — "Vidya Tulsi".
Records the palette, typography, layout language and page structure agreed during design exploration.
-->

# Design Direction — Vidya Tulsi

**Chosen:** 8 August 2026
**Prototype:** `design-prototypes/style-explorer.html`
**Status:** Still the design for the site. Unchanged by the Kidzu work below.

> **On the Kidzu replica in `frontend/`.** A faithful rebuild of a kindergarten theme was
> added on 12 August 2026 as a **motion reference** — for its scroll and hover behaviour,
> not its cartoon aesthetic. It does not replace this direction. Phase 2 of that work
> re-skins it into the Vidya Tulsi palette below. See [kidzu-replica.md](./kidzu-replica.md).

---

## The idea

Take the **calm, soft layout** of the Tulsi direction and dress it in the **logo's own colours** — navy, gold and cream.

The result is a school website that feels settled and unhurried rather than loud. Arches instead of boxes, generous curves, plenty of light space, and the crest carrying the identity. It reads as a serious school without reading as a corporate one, and as a devotional place without reading as a temple pamphlet.

The strategic line the whole design serves: **Vedic knowledge, with modern science.** Parents are not being asked to trade their child's future for tradition.

---

## How we got here

| Round | Shown | Outcome |
|---|---|---|
| 1 | Crest · Clarity · Soil · Manuscript · Marigold | Liked Manuscript, Soil, Marigold |
| 2 | Nine directions across three families | Narrowed to **Soil** and **Tulsi** |
| 3 | Soil/Tulsi layout recoloured to the logo | **Vidya Tulsi** chosen |

---

## Palette

| Role | Colour | Use |
|---|---|---|
| Ground | `#F1F4EA` pale mint | Page background |
| Band | `#E8EEDE` | Alternating sections |
| Surface | `#FCFDF7` | Cards, arch panel, header |
| Heading | `#1B3057` navy | All headings, buttons |
| Accent | `#C9A227` gold | Eyebrows, arch outline, timings, bullets |
| Body text | `#2A2E26` | Running text |
| Muted | `#666F5F` | Secondary text |
| Line | `#DBE3CE` | Borders |

Navy and gold come straight from the crest. Gold is used sparingly — it only reads as gold in small amounts or against navy, never as large fills.

---

## Typography

- **Display and body:** Optima / Gill Sans — a humanist face, soft-edged but not rounded. Carries warmth without looking childish.
- **Headline size:** up to 45px on desktop, scaling down fluidly on phones.
- **Weight:** 500 for headings — light enough to feel calm.
- Sanskrit is set in Devanagari with transliteration beneath it in italics.

---

## Layout language

- **Arched hero** — the content sits inside a dome-topped panel outlined in gold, echoing temple architecture.
- **Soft corners** — 28px radius on cards, photos and timetable blocks.
- **Light header** — white-ish bar rather than a dark one, which is what makes this the softest of the four logo-palette options.
- **Centred rhythm** — headings, ledes and section labels centre-aligned throughout.
- **Rounded buttons** — full-pill, navy fill.

---

## Page structure

```
Header (crest + menu)
Hero — crest, shloka, headline, CTA
Campus photograph (wide)
Why the gurukulam — 3 pillars
A day at the gurukulam — timetable
Pancha Kosha Vikas — 5 layers
The 30 Qualities — 4 clusters
Once a week, the classroom is a farm
Subjects
Gallery
Facilities & care
Admissions — 3 steps
Closing CTA
Footer
```

---

## The crest

Rebuilt as vector SVG following the logo: double ring, laurel sprigs, twelve-petal gold lotus, blue jewel, open book.

- **40px** in the header
- **92px** inside the hero arch
- Recolours itself from the theme, so it works on any background

**Still needed:** the designer's proper vector files — full crest, a horizontal lockup for the header, and a simplified jewel-only mark for the favicon, all on transparent backgrounds. The detailed crest becomes a smudge below about 32px, so the simplified mark is not optional.

---

## Content rules carried into the design

These are honesty guardrails, not style preferences. Parents verify claims on a campus visit.

1. **Positive only.** Never compare against other schools.
2. **No health claims.** Describe the environment — screen-free, small classes, settled rhythm — not outcomes like curing anxiety.
3. **Planned is labelled planned.** Science lab and smart classrooms appear greyed and italicised, separate from what exists.
4. **The farm is off-campus.** Always "a weekly Gau Seva and Krishi visit", never an on-campus goshala.
5. **The Sunday school belongs to the team.** "Our teachers have taught 300+ children over five years" — never attributed to the gurukulam.

---

## Open items

- Real photographs — the design leans on them heavily; slots are placeholders today
- Designer's vector logo files
- Contact details, transport areas, safety arrangements, festival list
- All technical decisions (hosting, forms, SEO, analytics) — deferred to a separate session

---

## Fixes applied during review

Two bugs found by opening the prototype in a browser rather than trusting the code:

- **Missing `<meta charset>`** — the Devanagari shloka and every em dash rendered as mojibake. Critical for a page carrying Sanskrit.
- **Crest rendered solid black** — `<use>` clones into a shadow tree, so outside CSS selectors never matched it. Colours are now inline styles on the symbol's elements, which custom properties do inherit into.
