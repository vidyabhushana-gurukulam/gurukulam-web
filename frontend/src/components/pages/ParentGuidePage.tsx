/*
  src/components/pages/ParentGuidePage.tsx
  Gives families a single destination for launch facilities, practical expectations, and common questions.
*/
import { FacilitiesCare, ParentFaq } from "@/components/home/GalleryCareSections";
import { PageCta, PageHero } from "@/components/pages/InnerPage";
import { FACILITIES, FAQS } from "@/data/home";

export function ParentGuidePage() {
  return (
    <>
      <PageHero eyebrow="Parent Guide" title="The practical details families need first" lead="Find clear answers about the school format, classes, timings, transport, meals, facilities, and the first step in admissions." />
      <FacilitiesCare facilities={FACILITIES} />
      <ParentFaq faqs={FAQS} />
      <PageCta title="Ready to take the next step?" body="Begin with an admission enquiry for the June 2027 intake, from pre-primary through Class 5." />
    </>
  );
}
