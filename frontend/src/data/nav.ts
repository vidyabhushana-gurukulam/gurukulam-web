/*
  src/data/nav.ts
  Primary route navigation for the Vidyabhushana Gurukulam website.
  The header action now opens the external enquiry form, so the Admissions page is listed in the menu
  to keep its intake details, fees, and five-step journey reachable.
*/

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Parent Guide", href: "/parent-guide" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];
