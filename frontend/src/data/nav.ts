/*
  src/data/nav.ts
  Primary route navigation for the Vidyabhushana Gurukulam website.
  Keeps admission as the dedicated header action while informational destinations remain in the menu.
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
  { label: "Curriculum", href: "/curriculum" },
  { label: "Parent Guide", href: "/parent-guide" },
  { label: "Contact", href: "/contact" },
];
