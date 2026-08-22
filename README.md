<!--
gurukulam-web/README.md
Introduces the website project, its operating constraints, repository layout, deployment, and developer starting points.
-->

# Vidyabhushana Gurukulam — Website

The public website for **Vidyabhushana Gurukulam**, a new day school opening in Vadodara, Gujarat, with its first batch in **June 2027**. The school teaches the NCERT syllabus alongside a Vedic and cultural curriculum based on the ISKCON gurukula model.

The site's job is to exist before the school does — to introduce a school with no track record, establish that it is serious and credible, and collect admission enquiries from Vadodara parents.

| | |
|---|---|
| **Domain** | `vidyabhushanagurukulam.com` |
| **Hosting** | GitHub Pages, deployed from `main` by GitHub Actions |
| **Scope** | Informational site + a linked Google Form for admission enquiries |
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
npm run build      # typecheck, bundle, then prerender one HTML file per route
npm run lint
```

**Stack:** React 19 · Vite 8 · TypeScript · Tailwind v4 · GSAP (ScrollSmoother, SplitText, ScrollTrigger).

There is no routing library. `src/components/pages/PageRouter.tsx` maps `window.location.pathname` to a page component, and navigation is plain `<a href>` — every click is a full page load.

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds `frontend/` and publishes `frontend/dist` to GitHub Pages. `dev` is the working branch; merge it into `main` to release.

### Why the build emits one HTML file per route

Because navigation is real page loads, a static host with no rewrite rules returns **404** for `/about` unless a file exists at that path. `scripts/prerender-routes.mjs` runs after `vite build` and writes `dist/about/index.html`, `dist/contact/index.html` and so on, so every route returns 200 and the client router takes over from the correct location.

This was chosen over a catch-all `404.html` redirect because each copy also carries its own `<title>`, description and canonical URL — which a redirect cannot provide, and which matters for parents searching locally.

The same script emits `404.html`, `.nojekyll` (Pages otherwise runs the output through Jekyll), `sitemap.xml` and `robots.txt`.

**Adding a page** means three edits: a component under `src/components/pages/`, an entry in `src/data/routes.json` (title + description), and an entry in the `PAGES` map in `PageRouter.tsx`. Add it to `src/data/nav.ts` if it belongs in the menu. The prerender step picks it up from `routes.json` automatically.

### DNS

`frontend/public/CNAME` pins the custom domain across deploys. The apex record set:

```
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     vidyabhushana-gurukulam.github.io
```

GitHub provisions the HTTPS certificate automatically once DNS resolves; **Enforce HTTPS** can then be enabled in repository settings.

---

## Repository layout

```
docs/                    Project documentation — read these before writing code
├── overview.md          What the school is, what the site must achieve, binding content rules
└── design-direction.md  The canonical visual reference for the implemented website

frontend/                The React application
├── index.html               Metadata template — prerender rewrites its title/description per route
├── src/styles/tokens.css    The entire visual theme, as CSS variables
├── src/lib/motion-tokens.ts Every duration, ease and stagger
├── src/data/                All copy, route metadata, image paths and contact details
├── public/images/           Web-optimised WebP, generated from the masters outside this repo
└── scripts/
    ├── optimize-images.sh   Masters → sized WebP + the social share card
    ├── make-favicons.py     Crest master → .ico, 32px, and apple-touch icons
    └── prerender-routes.mjs Post-build: one HTML file per route, plus sitemap and robots

design-prototypes/       style-explorer.html — the visual direction exploration
.github/workflows/       deploy.yml — build and publish to Pages from main
```

### Where content lives

| Content | File |
|---|---|
| Homepage and shared copy, FAQs, admissions steps, facilities | `src/data/home.ts` |
| Enquiry form URL, phone, email, Instagram, handbook link | `CONTACT` and `ENQUIRY_FORM_URL` in `src/data/home.ts` |
| Page titles and meta descriptions | `src/data/routes.json` |
| Navigation | `src/data/nav.ts` |
| Image paths and alt text | `src/data/media.ts` |

Both the homepage and the Parent Guide render the same `FAQS` and `FACILITIES`, so editing them once updates both.

---

## Read this before changing anything

### 1. Content accuracy is a hard requirement, not a preference

`docs/overview.md` carries binding rules that exist because parents verify claims on a campus visit, and for a school with no track record, word of mouth is the only marketing that matters. The ones most easily broken by accident:

- **Transport is arranged by parents.** The Gurukulam shares transport contacts; the expense is borne by parents. The site previously said transport "will be provided", which the Parent Handbook contradicts. Do not reintroduce that.
- **Krishi and Gau Seva are off-campus** — a weekly visit to a separate farm. Never imply a goshala or farmland on school grounds.
- **Chaitanya Bala Sankar Kendra is a separate organisation.** The founding team still teaches around 300 children there. Credit it to the *people* ("our founding team teaches around 300 children at Chaitanya Bala Sankar Kendra"), never to the institution, and keep it in the present tense — it is ongoing, not a finished chapter.
- **Never criticise mainstream or modern schools.** Parents reading the site have children currently enrolled in them. Contrast is communicated by describing what this school offers, never by naming what others lack.
- **No health claims.** Do not claim the school addresses depression, anxiety or attention disorders. Describe the environment instead — screen-free campus, small classes, a settled daily rhythm.

Read `docs/overview.md` in full before writing any user-facing copy.

### 2. The FAQ is transcribed from the Parent Handbook, not paraphrased

`FAQS` in `src/data/home.ts` reproduces the handbook's seventeen questions verbatim, in its own A–F grouping, including its bulleted answers. When the handbook changes, retranscribe rather than reword — paraphrasing has already introduced errors once.

### 3. The photography is illustrative, not documentary

The school opens in 2027, so no photograph on the site shows a real Gurukulam class or campus. Alt text in `src/data/media.ts` is written descriptively for this reason and must never assert that a scene is the actual school.

The child cutouts are AI-assisted derivatives of real programme photographs. Guardian approval for identity-preserving derivatives should be confirmed before any further public use.

### 4. Regenerating imagery

`scripts/optimize-images.sh` reads masters from the repository-root `images/` and `document/logo/` directories — **outside this repo** — and writes optimised WebP into `public/images/`. It requires `cwebp` (`brew install webp`) and runs on macOS (`sips`). Rerun it after adding or replacing a master; do not hand-edit the outputs.

---

## What is deliberately not in this repository

| Excluded | Why |
|---|---|
| `output/` — the whole directory | ~180 MB of raw camera files and generated artwork, including unpublished photographs of a real child. Git cannot delta-compress binaries, and committed history is permanent. Back it up separately. |
| `playwright-screenshots/`, `.playwright-mcp/` | Regenerable debugging captures from browser-automation runs. |
| Image masters | The originals live in the repository-root `images/` and `document/` folders. Only web-optimised derivatives are committed. |

---

## Open items

Confirmed since the original discovery: public contact details, the fee range, the five-step admission journey, transport arrangements, hosting, and the favicon mark. The Baladeva illustration is AI-generated, so it carries no third-party licence. The linked Drive folder is public by intent and is where further parent documents and images will be added. See `docs/overview.md` §15 for the full original list.

Still outstanding:

- **Campus details and build status** → blocks any campus content and the exact address on `/contact`.
- **Safety and care arrangements** → the first question parents ask, given Nursery is the entry class.
- **Analytics and spam protection** → the enquiry form is a Google Form; no analytics are installed.
- **`docs/design-direction.md` is out of date** — it documents the pre-photography hero and cites line numbers that have since moved.
