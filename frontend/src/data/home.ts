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
}

export interface FaqItem {
  question: string;
  /** Single-paragraph answer. */
  answer?: string;
  /** Bulleted answer, kept as separate points because the handbook sets them as a list. */
  points?: string[];
  /** Aside printed after the answer, such as the fee confirmation note. */
  note?: string;
}

export interface FaqGroup {
  /** Section letter from the handbook, A through F. */
  letter: string;
  title: string;
  items: FaqItem[];
}

export interface FaqContent {
  eyebrow: string;
  title: string;
  lead: string;
  groups: FaqGroup[];
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
  // Present tense on purpose: Chaitanya Bala Sankar Kendra is still running. The attribution rule in
  // docs/overview.md still applies — the teaching belongs to the founding team, never to the Gurukulam.
  experience: {
    eyebrow: "The people behind the Gurukulam",
    title: "Five years of teaching, and still teaching today",
    body: "Our founding team teaches around 300 children in Vadodara through Chaitanya Bala Sankar Kendra, a separately managed initiative they have run for five years and continue to run today.",
    stat: "Around 300",
    statLabel: "children our founding team teaches today",
  },
};

export const HERO: HeroContent = {
  eyebrow: "Quality education · Cultural roots · All-round development",
  title: "Where learning meets strong values",
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
    body: "For Classes 1–5, five hours each day are dedicated to NCERT academics taught for understanding through visual projects and 3D models.",
  },
  {
    icon: "03",
    title: "Whole-child development",
    body: "Pancha Kosha Vikas brings the body, energy, mind, intellect, and bliss into one coherent education.",
  },
];

export const DAILY_RHYTHM: DailyRhythmContent = {
  eyebrow: "A day at the Gurukulam",
  title: "Grounding first. Academics in depth. Movement and expression to close.",
  lead: "Classes 1–5 follow a full-day rhythm in which Vedic education comes first, NCERT academics receive the largest block, and two hours of Kreeda and the arts complete the day.",
  groups: [
    { label: "Pre-primary", timing: "08:00–12:00", note: "A separate shorter day." },
    { label: "Classes 1–5", timing: "08:00–17:00", note: "The three-part full-day rhythm shown below." },
  ],
  slots: [
    { time: "08:00–10:00", title: "Vedic education", body: "Two hours of sadhana, scripture, Sanskrit, and spiritual culture open the day, so children are settled and grounded before academics begin." },
    { time: "10:00–15:00", title: "NCERT academics", body: "Five focused hours of NCERT, languages, and Vedic Mathematics, taught for understanding through visual projects and 3D models, not rote learning." },
    { time: "15:00–17:00", title: "Kreeda & Arts", body: "Two hours close the day in movement and expression — Kreeda and martial arts for the body, and Sangeet, Nritya, and Kala for the mind." },
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

// Gau Seva leads this section; Krishi stays named because the same weekly visit covers both.
// The off-campus note is a hard content rule from docs/overview.md — never imply a goshala on school grounds.
export const FARM_VISIT: FarmVisitContent = {
  eyebrow: "Learning through practical service",
  title: "Once a week, the children care for cows",
  body: "Each week the children visit a separate farm for Gau Seva, caring for the cows, alongside Krishi and the practical work of the land.",
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
  lead: "The facilities and daily care arrangements confirmed for the first batch.",
  available: [
    { title: "Computers", body: "Computers will be available at launch." },
    { title: "Lunch and snacks", body: "Lunch and snacks are provided as vegetarian, sattvik, nutritious prasadam." },
    { title: "Transport contacts", body: "Transport is arranged by parents; the Gurukulam shares transport contacts and the expense is borne by parents." },
  ],
};

export const FAQS: FaqContent = {
  eyebrow: "Parent guide",
  title: "Frequently asked questions",
  lead: "Admissions, structure, academics, fees and facilities — answered in brief, exactly as they appear in the Parent Handbook.",
  groups: [
    {
      letter: "A",
      title: "Admission & eligibility",
      items: [
        {
          question: "What is the admission process?",
          points: [
            "Step 1 — Fill Form: complete the admission form.",
            "Step 2 — Orientation: attend the Gurukulam orientation.",
            "Step 3 — Parent's Interview: an interaction with the parents.",
            "Step 4 — Student's Evaluation: an assessment of the child.",
            "Step 5 — Admission: confirmation of admission.",
          ],
        },
        {
          question: "Is the Gurukulam open to both boys and girls?",
          answer: "Yes. Admission is open to both boys and girls.",
        },
        {
          question: "What is the age group / age limit for admission?",
          points: ["Minimum age: 3 years.", "Admissions are open for Nursery to Class 5."],
        },
      ],
    },
    {
      letter: "B",
      title: "Gurukulam structure & daily routine",
      items: [
        {
          question: "Is the Gurukulam residential, a day school, or both?",
          answer: "It is a day school.",
        },
        {
          question: "What is the daily schedule of students?",
          points: ["Nursery to Senior KG: 3 – 5 hours a day.", "Class 1 to Class 5: 8 – 10 hours a day."],
        },
      ],
    },
    {
      letter: "C",
      title: "Education & curriculum",
      items: [
        {
          question: "Does Gurukulam education cover modern academics as well?",
          answer: "Yes. Modern academics are a core part of the curriculum, alongside values, culture and spiritual education.",
        },
        {
          question: "What will my child learn at the Gurukulam?",
          points: [
            "Academics: Science, Mathematics, Languages (English, Sanskrit, Hindi, Gujarati), Social Science and activity-based learning.",
            "Arts & movement: Yoga, music, dance, drama, art and craft.",
            "Values and culture.",
            "Spiritual education: Bhagavad Gita, Ramayana, Mahabharata, Srimad Bhagavatam and biographies of the great Acharyas.",
            "Life skills: communication, management, finance, Kali-yuga compatibility skills, implications of social media, and handling peer pressure and addiction.",
          ],
        },
        {
          question: "Which syllabus does the Gurukulam follow, which board is it affiliated with, and what is the medium of instruction?",
          points: ["Syllabus: NCERT.", "Affiliation: Gujarat State Board.", "Medium of instruction: English."],
        },
        {
          question: "Who will teach my child?",
          answer: "Well-qualified devotee teachers.",
        },
        {
          question: "Will my child need additional tuition?",
          answer: "No. Gurukulam studies are sufficient; no outside tuition is required.",
        },
      ],
    },
    {
      letter: "D",
      title: "Academic & career opportunities",
      items: [
        {
          question: "Can Gurukulam graduates pursue mainstream professional careers such as medicine and engineering?",
          answer: "Yes. Students are prepared to pursue mainstream professional careers.",
        },
        {
          question: "What certification does the child receive on completing Gurukulam education?",
          answer: "Gujarat State Board certification.",
        },
      ],
    },
    {
      letter: "E",
      title: "Fees & parent engagement",
      items: [
        {
          question: "What is the fee structure of the Gurukulam?",
          answer: "₹30,000 – ₹90,000, which includes academics and tuition fee, lunch and snacks, extra-curricular activities and special skill classes.",
          note: "Please confirm the exact fee applicable to your child's class with the Gurukulam office.",
        },
        {
          question: "What is the payment schedule for fees?",
          points: ["Primary (Class 1 – 5): quarterly.", "Pre-primary (Nursery – Sr. KG): half-yearly."],
        },
        {
          question: "Is there a formal mechanism for parent participation and feedback?",
          answer: "Yes — a monthly Parent-Teacher Meeting (PTM) is held.",
        },
      ],
    },
    {
      letter: "F",
      title: "Facilities",
      items: [
        {
          question: "What transportation facilities are available?",
          points: [
            "Transport to and from the Gurukulam is arranged by parents.",
            "The Gurukulam provides transport contacts; the expense is borne by parents.",
          ],
        },
        {
          question: "What arrangements are made for prasadam, and what food is served?",
          points: ["Lunch and snacks are provided.", "All food is vegetarian, sattvik, nutritious prasadam."],
        },
      ],
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
