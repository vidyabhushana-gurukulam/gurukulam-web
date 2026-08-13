/*
  src/data/home.ts
  All copy and imagery for the home page, in one place. Sections render from these
  arrays rather than hardcoding content, so swapping Kidzu's placeholder text for
  Vidyabhushana Gurukulam's real content is an edit here and nowhere else.
  Copy is transcribed from the Kidzu demo for replica fidelity.
*/

export const HERO = {
  eyebrow: "A Safe, Joyful Learning Environment.",
  title: "Nurturing Young Minds\nfor a Bright Future",
  body: "We are a caring kindergarten & school dedicated to building strong foundations through play-based and academic learning.",
  primaryCta: { label: "Enroll Now", href: "/contact" },
  secondaryCta: { label: "Book A Visit", href: "/contact" },
  image: "/assets/images/hero/hero-3-1.webp",
};

export const FEATURES = [
  { label: "Active Learning", icon: "/assets/icons/icon-1.svg", tint: "var(--color-bg-blush)" },
  { label: "Expert Teachers", icon: "/assets/icons/icon-2.svg", tint: "var(--color-bg-lavender)" },
  { label: "100% Safe Campus", icon: "/assets/icons/icon-3.svg", tint: "var(--color-bg-sky)" },
  { label: "Modern Curriculum", icon: "/assets/icons/icon-4.svg", tint: "var(--color-bg-rose)" },
];

export const ABOUT = {
  eyebrow: "About Us",
  title: "Inspire Growth Through Learning Daily",
  lead: "We are a caring kindergarten & school dedicated to building strong foundations through play-based and academic learning.",
  points: ["Child-Friendly Learning Environment", "Focus on child-friendly, safe, & quality education"],
  body: "At Kidzu, our aim is to give everyone a chance to learn a new language. Our skilled team creates fun and useful lessons so each student can reach their goals. We're here to help you gain skills for both work and life.",
  cta: { label: "Know More", href: "/about-page-01" },
  phone: "+11 123 0654 98",
  image: "/assets/images/about/about-1.webp",
};

export const PROGRAMS = [
  {
    title: "Kindergarten Program",
    age: "10–12 years",
    body: "Help your child thrive in social situations! This course teaches children how to...",
    duration: "4 Hours 35 Minutes",
    image: "/assets/images/programs/program-01.jpg",
    tint: "var(--color-bg-lavender)",
  },
  {
    title: "Nursery Program",
    age: "7–10 years",
    body: "Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore...",
    duration: "5 Hours 30 Minutes",
    image: "/assets/images/programs/program-02.jpg",
    tint: "var(--color-bg-cream)",
  },
  {
    title: "Play Group Program",
    age: "3–5 years",
    body: "Get moving and feel amazing! This energetic course introduces children to the importance...",
    duration: "3 Hours 35 Minutes",
    image: "/assets/images/programs/program-03.jpg",
    tint: "var(--color-bg-sky)",
  },
];

export const CHOOSE_US = {
  eyebrow: "Why Choose Us",
  title: "Why Choose Our School",
  tabs: [
    {
      label: "Our Facilities",
      body: "Qualified teachers who understand children's needs and focus on personal attention through play-based and academic learning.",
      points: [
        "Experienced & caring teachers",
        "Safe & friendly environment",
        "Modern learning methods",
        "Focus on moral & social values",
      ],
    },
    {
      label: "Curriculum & Learning",
      body: "A balanced curriculum blending structured academics with guided play, so children build confidence alongside competence.",
      points: [
        "Play-based early years",
        "Phonics & numeracy foundations",
        "Creative and physical development",
        "Regular progress sharing",
      ],
    },
    {
      label: "Mission & Vision",
      body: "We want every child to leave us curious, kind and capable — grounded in values and ready for the next stage.",
      points: [
        "Character before achievement",
        "Small class sizes",
        "Partnership with parents",
        "Lifelong love of learning",
      ],
    },
  ],
  cta: { primary: "Enroll Now", secondary: "Book A Visit" },
};

export const STATS = [
  { value: 100, suffix: "%", label: "Smart Classrooms", tint: "var(--color-bg-cream)" },
  { value: 95, suffix: "%", label: "Safe Playground", tint: "var(--color-bg-sky)" },
  { value: 100, suffix: "%", label: "Child Security", tint: "var(--color-bg-lavender)" },
  { value: 99, suffix: "%", label: "Clean Environment", tint: "var(--color-bg-blush)" },
];

export const ACTIVITIES = [
  {
    no: "01",
    title: "Art & Craft",
    body: "Qualified teachers who understand children's needs and focus on personal attention. through play-based and academic learning.",
    image: "/assets/images/sections/activities-image-1.jpg",
  },
  {
    no: "02",
    title: "Music & Dance",
    body: "Qualified teachers who understand children's needs and focus on personal attention. through play-based and academic learning.",
    image: "/assets/images/sections/activities-image-2-1.jpg",
  },
  {
    no: "03",
    title: "Sports & Games",
    body: "Qualified teachers who understand children's needs and focus on personal attention. through play-based and academic learning.",
    image: "/assets/images/sections/activities-image-3-1.jpg",
  },
];

export const SCHEDULE = {
  eyebrow: "Daily Schedule",
  title: "Our Daily Schedule",
  groups: ["Play Group", "Nursery Group", "Kindergarten (KG)"],
  slots: [
    { time: "7:00 - 8:00", body: "Amet, in vitae, mauris volutpat. Fermentum rhoncus sed morbi feugiat.", tint: "var(--color-bg-cream)" },
    { time: "8:00 - 8:30", body: "Amet, in vitae, mauris volutpat. Fermentum rhoncus sed morbi feugiat.", tint: "var(--color-bg-lavender)" },
    { time: "8:30 - 10:30", body: "Amet, in vitae, mauris volutpat. Fermentum rhoncus sed morbi feugiat.", tint: "var(--color-bg-blush)" },
    { time: "10:30 - 12:00", body: "Amet, in vitae, mauris volutpat. Fermentum rhoncus sed morbi feugiat.", tint: "var(--color-bg-sky)" },
  ],
};

export const TEACHERS = [
  { name: "Brian Marsh", role: "Senior Teacher", image: "/assets/images/teachers/team-1.png", tint: "#E8398B" },
  { name: "Dawson Timms", role: "Sports Teacher", image: "/assets/images/teachers/team-2.png", tint: "#1B5A96" },
  { name: "Michele Bailey", role: "Principle", image: "/assets/images/teachers/team-3.png", tint: "#4FC3F7" },
  { name: "Scarlett Audrey", role: "Senior Teacher", image: "/assets/images/teachers/team-5.png", tint: "#D98E56" },
];

export const FAQ = {
  eyebrow: "Faq",
  title: "Frequently Ask Question",
  lead: "Qualified teachers who understand children's needs and focus on personal attention. through play-based and academic learning.",
  items: [
    {
      q: "What Age Can My Child Enroll?",
      a: "School runs from morning to early afternoon, Sunday to Thursday. and focus on personal attention. through play-based and academic learning.",
    },
    {
      q: "What Is The School Timing?",
      a: "Classes run from 7:00 in the morning through to early afternoon, with optional extended care available on request.",
    },
    {
      q: "Is Transportation Service Available?",
      a: "Yes — we operate supervised transport across the main residential routes, with a dedicated attendant on every vehicle.",
    },
    {
      q: "How Can I Apply For Admission?",
      a: "Book a visit through the enquiry form, tour the campus, and our admissions team will guide you through the paperwork.",
    },
  ],
  image: "/assets/images/sections/faq-image.webp",
};

export const TESTIMONIALS = [
  { name: "Parent of Nursery Student", body: "This school has provided a safe, caring, and joyful environment for my child. The teachers are very supportive and attentive.", avatar: "/assets/images/testimonials/client-1.png" },
  { name: "Parent of Nursery Student", body: "This school has provided a safe, caring, and joyful environment for my child. The teachers are very supportive and attentive.", avatar: "/assets/images/testimonials/client-2.png" },
  { name: "Parent of Nursery Student", body: "This school has provided a safe, caring, and joyful environment for my child. The teachers are very supportive and attentive.", avatar: "/assets/images/testimonials/client-3.png" },
  { name: "Parent of Nursery Student", body: "This school has provided a safe, caring, and joyful environment for my child. The teachers are very supportive and attentive.", avatar: "/assets/images/testimonials/client-4.png" },
];

export const BLOG = [
  { title: "Understanding Your Child's Online Life", date: "28 Apr, 2026", comments: 0, image: "/assets/images/blog/blog-post-1.webp" },
  { title: "What It's Like to Be a Kid on the Internet Today", date: "28 Apr, 2026", comments: 0, image: "/assets/images/blog/blog-post-2.webp" },
  { title: "That jerk form finance really me", date: "19 Dec, 2025", comments: 0, image: "/assets/images/blog/blog-post-3.webp" },
];

/* The demo ships no brand-1; its slot is filled by the brand-4-1 variant. */
export const BRANDS = ["4-1", 2, 3, 4, 5, 6, 7].map((n, i) => ({
  src: `/assets/images/brands/brand-${n}.png`,
  hover: `/assets/images/brands/brand-hover-${i + 1}.png`,
}));

export const FOOTER = {
  blurb: "This school has provided a safe, caring, and joyful environment for my child. The teachers are very supportive and attentive.",
  branches: [
    { name: "New York Branch", flag: "/assets/icons/flag.png", address: "House 25, Road 10, New York, city 652, USA.", phone: "+110 1819-987021", email: "info@example.com" },
    { name: "Canada Branch", flag: "/assets/icons/flag2.png", address: "House 25, Road 10, New York, city 652, USA.", phone: "+110 1819-987021", email: "info@example.com" },
  ],
};
