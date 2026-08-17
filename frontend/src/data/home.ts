/*
  src/data/home.ts
  Approved homepage content for Vidyabhushana Gurukulam.
  Keeps institutional claims, curriculum wording, and image attribution in one typed source.
*/

export interface ContentLink {
  label: string;
  href: string;
}

export interface SectionItem {
  title: string;
  body: string;
}

export interface SiteContent {
  name: string;
  shortName: string;
  location: string;
  description: string;
  admissions: string;
  contactHref: string;
  experience: {
    eyebrow: string;
    title: string;
    body: string;
    stat: string;
    statLabel: string;
  };
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: ContentLink;
  secondaryCta: ContentLink;
}

export interface Pillar extends SectionItem {
  icon: string;
}

export interface DailyRhythmContent {
  eyebrow: string;
  title: string;
  lead: string;
  groups: Array<{
    label: string;
    timing: string;
    note: string;
  }>;
  slots: Array<{
    time: string;
    title: string;
    body: string;
  }>;
}

export interface PanchaKoshaContent {
  eyebrow: string;
  title: string;
  lead: string;
  items: Array<{
    name: string;
    dimension: string;
    activities: string;
    accent: string;
  }>;
}

export interface QualitiesContent {
  eyebrow: string;
  title: string;
  lead: string;
  items: string[];
  cta: ContentLink;
}

export interface FarmVisitContent {
  eyebrow: string;
  title: string;
  body: string;
  note: string;
}

export interface SubjectGroup {
  area: string;
  subjects: string[];
}

export interface FacilitiesContent {
  eyebrow: string;
  title: string;
  lead: string;
  available: SectionItem[];
  planned: SectionItem[];
}

export interface FaqContent {
  eyebrow: string;
  title: string;
  lead: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export interface AdmissionsContent {
  eyebrow: string;
  title: string;
  lead: string;
  items: Array<SectionItem & { step: string }>;
}

export interface FinalCtaContent {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: ContentLink;
  secondaryCta: ContentLink;
}

export interface FooterContent {
  blurb: string;
  address: string;
  links: ContentLink[];
  admissions: string;
}

export const SITE: SiteContent = {
  name: "Vidyabhushana Gurukulam",
  shortName: "Vidyabhushana",
  location: "Vadodara, Gujarat, India",
  description: "An English-medium GSEB day school bringing an NCERT-based academic education together with a Vedic and cultural curriculum.",
  admissions: "First batch begins June 2027 · Pre-primary to Class 5",
  contactHref: "/contact",
  experience: {
    eyebrow: "The people behind the Gurukulam",
    title: "Five years of teaching, carried forward with care",
    body: "Before founding Vidyabhushana Gurukulam, our founding team taught around 300 children in Vadodara over five years through a separately managed Sunday school.",
    stat: "Around 300",
    statLabel: "children taught by our founding team over five years",
  },
};

export const HERO: HeroContent = {
  eyebrow: "Admission enquiries · First batch June 2027",
  title: "Vedic knowledge with modern science.",
  body: "A new English-medium GSEB day school in Vadodara, opening from pre-primary to Class 5.",
  primaryCta: { label: "Enquire for Admission", href: "/admissions" },
  secondaryCta: { label: "Explore Our Approach", href: "/approach" },
};

export const PILLARS: Pillar[] = [
  {
    icon: "01",
    title: "Rooted in Vedic learning",
    body: "Vedic education, sadhana, scripture, Sanskrit, spiritual culture, and devotional practice provide a grounding for the child's education.",
  },
  {
    icon: "02",
    title: "Serious NCERT academics",
    body: "For Classes 1–5, six hours each day are dedicated to NCERT academics taught for understanding through visual projects and 3D models.",
  },
  {
    icon: "03",
    title: "Whole-child development",
    body: "Pancha Kosha Vikas brings the body, energy, mind, intellect, and bliss into one coherent education.",
  },
];

export const DAILY_RHYTHM: DailyRhythmContent = {
  eyebrow: "A day at the Gurukulam",
  title: "Grounding first. Academics in depth. Movement to close.",
  lead: "Classes 1–5 follow a full-day rhythm in which Vedic education comes first, NCERT academics receive the largest block, and Kreeda completes the day.",
  groups: [
    { label: "Pre-primary", timing: "09:00–12:00", note: "A separate shorter day." },
    { label: "Classes 1–5", timing: "08:00–17:00", note: "The three-part full-day rhythm shown below." },
  ],
  slots: [
    { time: "08:00–10:00", title: "Vedic education", body: "The full day begins with the Gurukulam's Vedic and cultural curriculum." },
    { time: "10:00–16:00", title: "NCERT academics", body: "Six focused hours taught for understanding, including visual projects and 3D models." },
    { time: "16:00–17:00", title: "Kreeda / sports", body: "Physical activity completes the day." },
  ],
};

export const PANCHA_KOSHA: PanchaKoshaContent = {
  eyebrow: "Pancha Kosha Vikas",
  title: "Five dimensions of the child's development",
  lead: "The Gurukulam's organising framework connects every dimension to the subjects, practices, and rhythm of school life.",
  items: [
    { name: "Annamaya", dimension: "Body", activities: "Kreeda, Martial Arts, Krishi", accent: "#C9A227" },
    { name: "Pranamaya", dimension: "Energy", activities: "Yoga, pranayama, daily rhythm", accent: "#1B3057" },
    { name: "Manomaya", dimension: "Mind", activities: "Sangeet, Nritya, Kala", accent: "#C9A227" },
    { name: "Vijnanamaya", dimension: "Intellect", activities: "NCERT, Sanskrit, Vedic Mathematics, Scriptures", accent: "#1B3057" },
    { name: "Anandamaya", dimension: "Bliss", activities: "Sadhana, Seva, kirtan", accent: "#C9A227" },
  ],
};

export const QUALITIES: QualitiesContent = {
  eyebrow: "Character and values",
  title: "The 30 Qualities of Humans",
  lead: "The complete stakeholder-supplied framework is preserved here in its canonical wording as part of the Gurukulam's approach to character development.",
  items: [
    "Truthfulness",
    "Mercy",
    "Austerity (observing fasts on certain days of the month)",
    "Bathing twice a day",
    "Tolerance",
    "Discrimination between right and wrong",
    "Control of the mind",
    "Control of the senses",
    "Non-violence",
    "Celibacy",
    "Charity",
    "Reading of scripture",
    "Simplicity",
    "Satisfaction",
    "Rendering service to saintly persons",
    "Gradually taking leave of unnecessary engagements",
    "Observing the futility of the unnecessary activities of human society",
    "Remaining silent and grave and avoiding unnecessary talk",
    "Considering whether one is the body or the soul",
    "Distributing food equally to all living entities (both men and animals)",
    "Seeing every soul (especially in the human form) as a part of the Supreme Lord",
    "Hearing about the activities and instructions given by the Supreme Personality of Godhead",
    "Chanting about these activities and instructions",
    "Always remembering these activities and instructions",
    "Trying to render service",
    "Performing worship",
    "Offering obeisances",
    "Becoming a servant",
    "Becoming a friend",
    "Surrendering one's whole self",
  ],
  cta: { label: "Explore the 30 Qualities", href: "#qualities" },
};

export const FARM_VISIT: FarmVisitContent = {
  eyebrow: "Learning through practical service",
  title: "Once a week, the classroom is a farm",
  body: "Children take part in Krishi and Gau Seva through a weekly visit to a separate farm.",
  note: "The farm is off campus; the Gurukulam does not have a goshala or farmland on its school grounds.",
};

export const SUBJECT_GROUPS: SubjectGroup[] = [
  { area: "Academic core", subjects: ["NCERT-based syllabus"] },
  { area: "Languages", subjects: ["Sanskrit", "English", "Gujarati", "Hindi"] },
  { area: "Mathematics", subjects: ["Vedic Mathematics"] },
  { area: "Arts", subjects: ["Sangeet", "Nritya", "Kala"] },
  { area: "Physical", subjects: ["Kreeda", "Martial Arts"] },
  { area: "Practical / seva", subjects: ["Krishi", "Gau Seva"] },
  { area: "Character & culture", subjects: ["Spiritual Culture", "Value Based Education"] },
  { area: "Practice", subjects: ["Sadhana", "Seva", "Sadachar"] },
  { area: "Frameworks", subjects: ["30 Qualities of Humans", "Pancha Kosha Vikas of the Child"] },
  { area: "Scriptures", subjects: ["Mahabharata", "Ramayana", "Bhagavad-gita", "Srimad-Bhagavatam"] },
  { area: "Moral literature", subjects: ["Panchatantra", "Hitopadesha"] },
];

export const FACILITIES: FacilitiesContent = {
  eyebrow: "Facilities and care",
  title: "What families can expect at launch",
  lead: "We distinguish what will be available at launch from plans for a future stage.",
  available: [
    { title: "Computers", body: "Computers will be available at launch." },
    { title: "Midday meal prasadam", body: "Midday meal prasadam will be provided." },
    { title: "Transport", body: "Transport will be provided; coverage areas are still to be confirmed." },
  ],
  planned: [
    { title: "Science lab", body: "Planned for a future stage." },
    { title: "Robotics", body: "Planned for a future stage." },
    { title: "Smart classes", body: "Planned for a future stage." },
  ],
};

export const FAQS: FaqContent = {
  eyebrow: "Parent guide",
  title: "The essentials, answered clearly",
  lead: "Straight answers about the Gurukulam's opening, academics, daily format, and admission process.",
  items: [
    {
      question: "Is Vidyabhushana Gurukulam residential?",
      answer: "No. Vidyabhushana Gurukulam is a day school, and children return home each day. There is no hostel or residential programme.",
    },
    {
      question: "Which classes will open in June 2027?",
      answer: "The founding batch will include pre-primary through Class 5. One new class is planned to be added each year as the children progress.",
    },
    {
      question: "Which board and medium will the school follow?",
      answer: "The school will follow GSEB, use English as the medium of instruction, and teach an NCERT-based academic curriculum.",
    },
    {
      question: "How are academics and Vedic education balanced?",
      answer: "Classes 1–5 begin with two hours of Vedic education, continue with six hours of NCERT academics, and close with one hour of Kreeda and sports.",
    },
    {
      question: "What are the school timings?",
      answer: "Pre-primary follows a shorter day from 09:00 to 12:00. Classes 1–5 follow the full-day schedule from 08:00 to 17:00.",
    },
    {
      question: "Will transport and meals be available?",
      answer: "Transport and midday meal prasadam will be provided. Transport coverage areas are still being finalised.",
    },
    {
      question: "Where do Krishi and Gau Seva take place?",
      answer: "Children will visit a separate off-campus farm once a week. The school campus does not include farmland or a goshala.",
    },
    {
      question: "How does the admission process begin?",
      answer: "Parents submit an admission enquiry, the Gurukulam team follows up, and an explanation session is then held with the family. Fees are shared during the enquiry process.",
    },
  ],
};

export const ADMISSIONS_STEPS: AdmissionsContent = {
  eyebrow: "Admissions · June 2027",
  title: "Begin with an admission enquiry",
  lead: "The first batch begins in June 2027, with admission enquiries for pre-primary through Class 5.",
  items: [
    { step: "01", title: "Send an enquiry", body: "Share your details through the admission enquiry form." },
    { step: "02", title: "The team contacts you", body: "A member of the Gurukulam team will follow up with you." },
    { step: "03", title: "Attend an explanation session", body: "An explanation session is held with the Gurukulam team." },
  ],
};

export const FINAL_CTA: FinalCtaContent = {
  eyebrow: "First batch · June 2027",
  title: "Considering Vidyabhushana Gurukulam for your child?",
  body: "Admission enquiries are open for pre-primary through Class 5 in Vadodara.",
  primaryCta: { label: "Enquire for Admission", href: "/admissions" },
  secondaryCta: { label: "Explore Our Approach", href: "/approach" },
};

export const FOOTER: FooterContent = {
  blurb: "Vidyabhushana Gurukulam is a new English-medium GSEB day school in Vadodara, bringing Vedic learning and NCERT academics together.",
  address: "Vadodara, Gujarat, India",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Approach", href: "/approach" },
    { label: "Curriculum", href: "/curriculum" },
    { label: "Parent Guide", href: "/parent-guide" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact", href: "/contact" },
  ],
  admissions: "First batch begins June 2027 · Pre-primary to Class 5",
};
