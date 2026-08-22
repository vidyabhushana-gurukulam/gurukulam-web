/*
  src/lib/seo.ts
  Builds the JSON-LD structured data injected into each prerendered page by scripts/prerender-routes.mjs.
  Everything here derives from data/home.ts and data/routes.json so the markup cannot drift from the
  words on the page — a mismatch between the two is what Google penalises.
*/
import { SITE, CONTACT, FAQS } from "@/data/home";
import ROUTE_META from "@/data/routes.json";

export const SITE_URL = "https://vidyabhushanagurukulam.com";

type RouteMeta = { title: string; description: string };
const ROUTES = ROUTE_META as Record<string, RouteMeta>;

/** Trailing slash on every URL, matching the canonical tags the prerender script writes. */
export function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`;
}

/**
 * The school itself. Address stops at Gotri Road on purpose: ContactPage states the exact campus
 * address is not yet confirmed, and structured data that contradicts the page is worse than none.
 */
function schoolSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": `${SITE_URL}/#school`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: absoluteUrl("/"),
    description: SITE.description,
    logo: `${SITE_URL}/brand/vidyabhushana-crest.webp`,
    image: `${SITE_URL}/social-preview.jpg`,
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gotri Road",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: "Vadodara" },
    sameAs: [CONTACT.instagram],
    inLanguage: "en-IN",
  };
}

/** Ties every page back to one site entity so the pages are read as a single school, not eight strangers. */
function webPageSchema(path: string, meta: RouteMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(path),
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": `${SITE_URL}/#school` },
    inLanguage: "en-IN",
  };
}

/** Home > Page. Skipped on the homepage, which is the root of the trail rather than a step in it. */
function breadcrumbSchema(path: string, meta: RouteMeta) {
  if (path === "/") return null;

  // The nav label, not the <title> — "About" reads better in a SERP trail than "About | Vidyabhushana Gurukulam".
  const label = meta.title.split("|")[0].trim();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: label, item: absoluteUrl(path) },
    ],
  };
}

/**
 * The 18 Parent Handbook questions. Attached to /parent-guide only: the homepage renders the same
 * FAQS, and publishing one FAQ set at two URLs competes with itself for the same rich result.
 */
function faqSchema() {
  const items = FAQS.groups.flatMap((group) =>
    group.items.map((item) => {
      // Entries carry either a prose answer or a list of steps, plus an optional trailing note;
      // schema.org needs all of it flattened into one text value.
      const answer = [item.answer ?? (item.points ?? []).join(" "), item.note].filter(Boolean).join(" ");

      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      };
    }),
  );

  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items };
}

/** Every JSON-LD block for one route, ready to be serialised into <script type="application/ld+json">. */
export function schemasForRoute(path: string) {
  const meta = ROUTES[path];
  if (!meta) return [];

  const schemas: object[] = [webPageSchema(path, meta)];

  if (path === "/") schemas.unshift(schoolSchema());
  if (path === "/parent-guide") schemas.push(faqSchema());

  const breadcrumb = breadcrumbSchema(path, meta);
  if (breadcrumb) schemas.push(breadcrumb);

  return schemas;
}
