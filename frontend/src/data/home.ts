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
  /** Supporting line under the headline. Split so the accent half can carry the gold. */
  subtitle: { lead: string; accent: string };
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

/**
 * Published contact routes. The Drive link is a folder of parent documents rather than a single
 * PDF, so anything linking to it should say "documents" instead of promising one download.
 */
export const CONTACT = {
  phoneDisplay: "+91 9512512600",
  phoneHref: "tel:+919512512600",
  email: "vidyabhushanagurukulam@gmail.com",
  emailHref: "mailto:vidyabhushanagurukulam@gmail.com",
  instagram: "https://www.instagram.com/vidyabhushana_gurukulam/",
  instagramHandle: "@vidyabhushana_gurukulam",
  handbook: "https://drive.google.com/drive/folders/1WKcrvZLHvx94MBwxzwkPmliF_ze9JkCq",
} as const;

/**
 * The live admission enquiry form. Every "enquire" action on the site points here, so the
 * destination changes in one place if the form is ever replaced. Internal /admissions links
 * are navigation to the page that explains the process, and deliberately stay internal.
 */
export const ENQUIRY_FORM_URL = "https://forms.gle/bSYpaLipMfCHneZeA";

export const SITE: SiteContent = {
  name: "Vidyabhushana Gurukulam",
  shortName: "Vidyabhushana",
  location: "Vadodara, Gujarat, India",
  description: "An English-medium GSEB day school bringing an NCERT-based academic education together with a Vedic and cultural curriculum.",
  admissions: "Admissions open for 2027–28 · Nursery to Class 5",
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
  eyebrow: "Quality education · Cultural roots · All-round development",
  title: "Where learning meets strong values.",
  subtitle: { lead: "Give your child a", accent: "complete education." },
  // The headline renders the admission hoarding's Hindi tagline in English. The lead keeps
  // "Vedic knowledge with modern science" verbatim because document/philosophy.md names it
  // the strategic anchor of the whole project.
  body: "Vedic knowledge with modern science, at a new English-medium GSEB day school in Vadodara, from Nursery to Class 5.",
  primaryCta: { label: "Enquire for Admission", href: ENQUIRY_FORM_URL },
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
    { title: "Lunch and snacks", body: "Lunch and snacks are provided as vegetarian, sattvik, nutritious prasadam." },
    { title: "Transport contacts", body: "Transport is arranged by parents; the Gurukulam shares transport contacts and the expense is borne by parents." },
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
  lead: "Straight answers about the Gurukulam's format, academics, daily routine, fees, facilities, and admission process, drawn from the Parent Handbook.",
  items: [
    {
      question: "Is Vidyabhushana Gurukulam residential, and is it open to both boys and girls?",
      answer: "It is a day school, so children return home each day; there is no hostel or residential programme. Admission is open to both boys and girls.",
    },
    {
      question: "Which classes are offered, and what is the minimum age?",
      answer: "Admissions are open from Nursery through Class 5. The minimum age for admission is 3 years.",
    },
    {
      question: "Which syllabus, board, and medium does the Gurukulam follow?",
      answer: "The syllabus is NCERT, the affiliation is with the Gujarat State Board, and the medium of instruction is English.",
    },
    {
      question: "Does the Gurukulam cover modern academics, and what will my child learn?",
      answer: "Modern academics are a core part of the curriculum, taught alongside values, culture, and spiritual education. Children study Science, Mathematics, Languages (English, Sanskrit, Hindi, Gujarati), Social Science, and activity-based learning; yoga, music, dance, drama, and art and craft; values and culture; scripture including the Bhagavad Gita, Ramayana, Mahabharata, Srimad Bhagavatam, and the biographies of the great Acharyas; and life skills such as communication, management, finance, the implications of social media, and handling peer pressure and addiction.",
    },
    {
      question: "What are the school timings?",
      answer: "Nursery to Senior KG attend 3 to 5 hours a day, following a shorter morning from 09:00 to 12:00. Classes 1 to 5 attend 8 to 10 hours a day, following the full-day schedule from 08:00 to 17:00.",
    },
    {
      question: "How are academics and Vedic education balanced across the day?",
      answer: "Classes 1–5 begin with two hours of Vedic education, continue with six hours of NCERT academics, and close with one hour of Kreeda and sports.",
    },
    {
      question: "Who will teach my child, and will additional tuition be needed?",
      answer: "Children are taught by well-qualified devotee teachers. No outside tuition is required; Gurukulam studies are sufficient on their own.",
    },
    {
      question: "Can Gurukulam students go on to careers such as medicine and engineering?",
      answer: "Yes. Students are prepared to pursue mainstream professional careers, and they receive Gujarat State Board certification on completing their Gurukulam education.",
    },
    {
      question: "What is the fee structure, and how is it paid?",
      answer: "Fees range from ₹30,000 to ₹90,000 and cover academics and tuition, lunch and snacks, extra-curricular activities, and special skill classes. Fees are paid quarterly for Classes 1–5 and half-yearly for pre-primary (Nursery to Senior KG). Please confirm the exact fee applicable to your child's class with the Gurukulam office.",
    },
    {
      question: "How do parents stay involved?",
      answer: "A Parent-Teacher Meeting is held every month, giving families a regular, formal point for participation and feedback.",
    },
    {
      question: "Is transport provided?",
      answer: "Transport to and from the Gurukulam is arranged by parents. The Gurukulam shares transport contacts to help families make arrangements, but the expense is borne by parents.",
    },
    {
      question: "What food is served during the day?",
      answer: "Lunch and snacks are provided. All food is vegetarian, sattvik, nutritious prasadam.",
    },
    {
      question: "Where do Krishi and Gau Seva take place?",
      answer: "Children will visit a separate off-campus farm once a week. The school campus does not include farmland or a goshala.",
    },
    {
      question: "How does the admission process work?",
      answer: "There are five steps: complete the admission form, attend the Gurukulam orientation, take part in an interaction with the parents, complete an assessment of the child, and then receive confirmation of admission.",
    },
  ],
};

export const ADMISSIONS_STEPS: AdmissionsContent = {
  eyebrow: "Admissions · 2027–28",
  title: "The admission journey, step by step",
  lead: "Admissions are open from Nursery through Class 5 for the 2027–28 academic year, which begins in June 2027.",
  items: [
    { step: "01", title: "Fill form", body: "Complete the Gurukulam admission form." },
    { step: "02", title: "Orientation", body: "Attend the Gurukulam orientation." },
    { step: "03", title: "Parent's interview", body: "An interaction is held with the parents." },
    { step: "04", title: "Student's evaluation", body: "An assessment of the child is carried out." },
    { step: "05", title: "Admission", body: "Admission is confirmed for your child." },
  ],
};

export const FINAL_CTA: FinalCtaContent = {
  eyebrow: "First batch · June 2027",
  title: "Considering Vidyabhushana Gurukulam for your child?",
  body: "Admission enquiries are open for Nursery through Class 5 in Vadodara.",
  primaryCta: { label: "Enquire for Admission", href: ENQUIRY_FORM_URL },
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
  admissions: "Admissions open for 2027–28 · Nursery to Class 5",
};
