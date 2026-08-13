/*
  src/data/nav.ts
  Navigation structure, mirroring the Kidzu demo's menu. Kept as data so the Phase 2
  re-skin can swap it for the gurukulam's real sitemap without touching Header markup.
*/

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  {
    label: "Home",
    href: "#",
    children: [
      { label: "Kindergarten 01", href: "/" },
      { label: "Kindergarten 02", href: "/kindergarten-02" },
      { label: "Private Nanny", href: "/private-nanny" },
      { label: "Kindergarten 04", href: "/kindergarten-04" },
      { label: "Kindergarten 05", href: "/kindergarten-05" },
    ],
  },
  {
    label: "About Us",
    href: "#",
    children: [
      { label: "About Page 01", href: "/about-page-01" },
      { label: "About Page 02", href: "/about-page-02" },
    ],
  },
  {
    label: "Programs",
    href: "#",
    children: [
      { label: "Programs 01", href: "/programs-01" },
      { label: "Programs 02", href: "/programs-02" },
      { label: "Programs Details", href: "/programs/creative-writing" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Courses", href: "/courses" },
      { label: "Our Event", href: "/event" },
      { label: "Event Details", href: "/event/volunteer-service-day" },
      { label: "Teachers 01", href: "/teachers-01" },
      { label: "Teachers 02", href: "/teachers-02" },
      { label: "Teacher Details", href: "/instructor/scarlett-audrey" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Instructor Registration", href: "/instructor-registration" },
      { label: "Student Registration", href: "/student-registration" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    children: [
      { label: "Blog Grid", href: "/blog-grid" },
      { label: "Blog Standard", href: "/blog" },
      { label: "Blog Details", href: "/blog/digital-transformation-trends" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
