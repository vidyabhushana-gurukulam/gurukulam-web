/*
  src/components/home/HomePage.tsx
  Composes the complete homepage from approved copy, brand artwork, diagrams, and parent guidance.
*/
import { AdmissionsSections } from "@/components/home/AdmissionsSections";
import { CurriculumSections } from "@/components/home/CurriculumSections";
import { FoundingExperience, Pillars } from "@/components/home/FoundationSections";
import { ParentGuideSections } from "@/components/home/GalleryCareSections";
import { HeroSection } from "@/components/home/HeroSection";
import { RhythmAndKoshaSections } from "@/components/home/RhythmAndKoshaSections";
import { SITE, HERO, PILLARS, DAILY_RHYTHM, PANCHA_KOSHA, QUALITIES, FARM_VISIT, SUBJECT_GROUPS, FAQS, ADMISSIONS_STEPS, FINAL_CTA } from "@/data/home";

export function HomePage() {
  return (
    <>
      <HeroSection site={SITE} hero={HERO} />
      <Pillars pillars={PILLARS} />
      <RhythmAndKoshaSections dailyRhythm={DAILY_RHYTHM} panchaKosha={PANCHA_KOSHA} />
      <CurriculumSections qualities={QUALITIES} farmVisit={FARM_VISIT} subjectGroups={SUBJECT_GROUPS} />
      <ParentGuideSections faqs={FAQS} />
      <FoundingExperience site={SITE} />
      <AdmissionsSections admissionsSteps={ADMISSIONS_STEPS} finalCta={FINAL_CTA} />
    </>
  );
}

export default HomePage;
