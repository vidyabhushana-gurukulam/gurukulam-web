/*
  src/components/pages/AboutPage.tsx
  Introduces the school, its founding-team experience, and the approved launch facts.
*/
import { FoundationSections } from "@/components/home/FoundationSections";
import { PageCta, PageHero } from "@/components/pages/InnerPage";
import { SectionIntro } from "@/components/home/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";
import { PILLARS, SITE } from "@/data/home";

const SCHOOL_FACTS = [
  ["School format", "English-medium GSEB day school"],
  ["Opening", "First batch begins June 2027"],
  ["Classes", "Pre-primary through Class 5"],
  ["Location", "Vadodara, Gujarat"],
  ["Growth", "One new class added as children progress"],
  ["Daily care", "Transport and midday prasadam will be provided"],
];

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Vidyabhushana Gurukulam" title="A school where knowledge and character grow together" lead="Vidyabhushana Gurukulam is a new day school in Vadodara, bringing an NCERT-based academic education together with Vedic learning and cultural practice." />
      <FoundationSections site={SITE} pillars={PILLARS} />

      <section className="bg-bg-cream px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="school-at-a-glance-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro eyebrow="The school at a glance" title="Clear facts for families" lead="The Gurukulam is being built for its first intake in June 2027. These are the confirmed foundations of the school." headingId="school-at-a-glance-title" />
          <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SCHOOL_FACTS.map(([term, detail], index) => (
              <Reveal key={term} delay={(index % 3) * 0.05}>
                <div className="h-full rounded-[28px] border border-header/10 bg-white/70 p-6 sm:p-7">
                  <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-theme">{term}</dt>
                  <dd className="mt-3 font-heading text-xl font-medium leading-7 text-header">{detail}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <PageCta title="See how the Gurukulam approaches the whole child" body="Explore the five dimensions of Pancha Kosha Vikas and the practices that shape each school day." primaryLabel="Explore Our Approach" primaryHref="/approach" secondaryLabel="Admission Enquiry" secondaryHref="/admissions" />
    </>
  );
}
