/*
  src/components/pages/ParentGuidePage.tsx
  Gives families a single destination for practical expectations and common questions.
*/
import { ParentFaq } from "@/components/home/GalleryCareSections";
import { PageCta, PageHero } from "@/components/pages/InnerPage";
import { FAQS } from "@/data/home";

export function ParentGuidePage() {
  return (
    <>
      <PageHero eyebrow="Parent Guide" title="Frequently Asked Questions About Gurukulam" lead="Find clear answers about the school format, classes, timings, transport, meals, facilities, and the first step in admissions." />
      <ParentFaq faqs={FAQS} />
      <PageCta title="Ready to take the next step?" body="Begin with an admission enquiry for the 2027–28 intake, from Nursery through Class 5." />
    </>
  );
}
