/*
  src/data/nav.ts
  Flat homepage navigation for the approved Vidyabhushana Gurukulam sitemap.
  Retains the optional children field so existing header consumers remain type-compatible.
*/

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#why" },
  { label: "Our Approach", href: "#approach" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Parent FAQ", href: "#faq" },
  { label: "Admissions", href: "#admissions" },
];
