/*
  src/components/home/HomePage.tsx
  Composes the complete Vidya Tulsi homepage from approved copy and real founding-team programme photography.
*/
import { AdmissionsSections } from "@/components/home/AdmissionsSections";
import { CurriculumSections } from "@/components/home/CurriculumSections";
import { FoundationSections } from "@/components/home/FoundationSections";
import { GalleryCareSections } from "@/components/home/GalleryCareSections";
import { HeroSection } from "@/components/home/HeroSection";
import { RhythmAndKoshaSections } from "@/components/home/RhythmAndKoshaSections";
import { SITE, HERO, PILLARS, DAILY_RHYTHM, PANCHA_KOSHA, QUALITIES, FARM_VISIT, SUBJECT_GROUPS, GALLERY, FACILITIES, ADMISSIONS_STEPS, FINAL_CTA } from "@/data/home";

export function HomePage() {
  return (
    <>
      <HeroSection site={SITE} hero={HERO} />
      <FoundationSections site={SITE} pillars={PILLARS} gallery={GALLERY} />
      <RhythmAndKoshaSections dailyRhythm={DAILY_RHYTHM} panchaKosha={PANCHA_KOSHA} />
      <CurriculumSections qualities={QUALITIES} farmVisit={FARM_VISIT} subjectGroups={SUBJECT_GROUPS} />
      <GalleryCareSections gallery={GALLERY} facilities={FACILITIES} />
      <AdmissionsSections admissionsSteps={ADMISSIONS_STEPS} finalCta={FINAL_CTA} />
    </>
  );
}

export default HomePage;
