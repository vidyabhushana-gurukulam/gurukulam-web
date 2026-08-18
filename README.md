<!--
gurukulam-web/README.md
Introduces the website project, its operating constraints, repository layout, and developer starting points.
-->

# Vidyabhushana Gurukulam — Website

The public website for **Vidyabhushana Gurukulam**, a new day school opening in Vadodara, Gujarat, with its first batch in **June 2027**. The school teaches the NCERT syllabus alongside a Vedic and cultural curriculum based on the ISKCON gurukula model.

The site's job is to exist before the school does — to introduce a school with no track record, establish that it is serious and credible, and collect admission enquiries from Vadodara parents.

| | |
|---|---|
| **Domain** | `vidyabhushanagurukulam.com` (purchased, not yet hosted) |
| **Scope** | Informational site + one admission enquiry form |
| **Explicitly out of scope** | Fee payment, parent login, attendance, results, LMS, donations |
| **Language** | English only |
| **Maintenance** | Developer-maintained. No CMS. |

### Why the deadline is earlier than it looks

The real deadline is **not** the June 2027 opening. Gujarat parents choose schools between roughly December and March, and search ranking takes months to build. The site must be live and indexed by **October–November 2026** — an early launch is worth more than a polished late one.

```
Aug 2026            discovery complete
Oct – Nov 2026      site live, search presence established     ← the real deadline
Dec 2026 – Mar 2027 admission enquiry season
Jun 2027            first batch begins
```

---

## Quick start

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build
npm run lint
```

**Stack:** React 19 · Vite 8 · TypeScript · Tailwind v4 · GSAP (ScrollSmoother, SplitText, ScrollTrigger).

---

## Repository layout

```
docs/                    Project documentation — read these before writing code
├── overview.md          What the school is, what the site must achieve, binding content rules
├── design-direction.md  The canonical visual reference for the implemented website
└── kidzu-replica.md     Historical record of the motion reference used during development

frontend/                The React application
├── src/styles/tokens.css    20 CSS vars — the entire visual theme
├── src/lib/motion-tokens.ts every duration, ease and stagger
├── src/data/                all copy and image paths
├── public/assets/           mirrored demo assets (placeholders — see below)
└── scripts/                 asset mirroring and recovery utilities

design-prototypes/       style-explorer.html — the visual direction exploration
kidzu-assets.json        Asset manifests consumed by frontend/scripts/
kidzu-cached-assets.json
```

---

## Read this before changing anything

### 1. `frontend/` is the implemented Gurukulam website

The active public routes use the approved school copy, brand artwork, navy-gold-cream palette, Playfair Display and DM Sans typography, spacious editorial layouts, and restrained motion. Treat the rendered frontend and `docs/design-direction.md` as the current visual source of truth.

The earlier Kidzu replica informed selected scroll and hover behavior, but its cartoon aesthetic and placeholder sections are not the current website design. The historical rationale remains in `docs/kidzu-replica.md`.

The implementation remains token-first: colors, typography, radii, shadows, and CSS interaction values live in `src/styles/tokens.css`; motion timings live in `src/lib/motion-tokens.ts`; verified public copy and image paths live in `src/data/`; and active page composition lives under `src/components/home/` and `src/components/pages/`. See `frontend/README.md` for developer details and `docs/design-direction.md` for the visual rules.

### 2. The assets under `frontend/public/assets/` must not ship

They are licensed ThemeForest theme and stock assets, mirrored as **development placeholders only**. The photographs are Western classroom stock and would be replaced with real gurukulam photography regardless. `frontend/PLACEHOLDERS.md` is the replace-before-launch checklist.

### 3. Content accuracy is a hard requirement, not a preference

`docs/overview.md` carries binding rules that exist because parents verify claims on a campus visit, and for a school with no track record, word of mouth is the only marketing that matters. The ones most easily broken by accident:

- **Planned facilities are described as plans.** Science lab, robotics and smart classes do not exist yet. Computers and midday prasadam do.
- **Krishi and Gau Seva are off-campus** — a weekly visit to a separate farm. Never imply a goshala or farmland on school grounds.
- **The founding team's Sunday school is a separate organisation.** Credit the experience to the *people* ("our teachers have taught 300+ children over five years"), never to the institution.
- **Never criticise mainstream or modern schools.** Parents reading the site have children currently enrolled in them. Contrast is communicated by describing what this school offers, never by naming what others lack.
- **No health claims.** Do not claim the school addresses depression, anxiety or attention disorders. Describe the environment instead — screen-free campus, small classes, a settled daily rhythm.

Read `docs/overview.md` in full before writing any user-facing copy.

---

## What is deliberately not in this repository

| Excluded | Why |
|---|---|
| `output/` — the whole directory | ~180 MB of raw camera files and generated artwork, including unpublished photographs of a real child. Git cannot delta-compress binaries, and committed history is permanent. The image-generation prompt records under `output/imagegen/` are untracked along with everything else — back them up separately if they matter. |
| `playwright-screenshots/`, `.playwright-mcp/` | Regenerable debugging captures from browser-automation runs. |
| `frontend/reference-css/` | Third-party theme CSS pulled by a script. Not ours to redistribute. |

Web-ready imagery reaches the site through `frontend/public/`, not through `output/`.

---

## Open items blocking content

Several pages cannot be written until these are confirmed — see `docs/overview.md` §15 for the full list.

- Campus details and build status → blocks Gallery and any campus content
- Safety and care arrangements → the first question parents ask, given pre-primary is the entry class
- Transport coverage areas → parents filter by this before reading anything else
- Public contact details (phone, WhatsApp, email) → blocks Contact page and footer
- Hosting, form handling, spam protection, analytics → deferred to a technical session
- Final logo in vector, with horizontal lockup and favicon mark
