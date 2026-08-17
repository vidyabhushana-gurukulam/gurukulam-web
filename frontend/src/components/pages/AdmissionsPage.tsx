/*
  src/components/pages/AdmissionsPage.tsx
  Explains the confirmed June 2027 intake details and the approved three-step enquiry flow.
*/
import { AdmissionsSteps } from "@/components/home/AdmissionsSections";
import { SectionIntro } from "@/components/home/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";
import { PageCta, PageHero } from "@/components/pages/InnerPage";
import { ADMISSIONS_STEPS } from "@/data/home";

const ADMISSION_FACTS = [
  ["First intake", "June 2027"],
  ["Entry classes", "Pre-primary to Class 5"],
  ["Pre-primary timings", "09:00–12:00"],
  ["Classes 1–5 timings", "08:00–17:00"],
  ["School format", "Day school, not residential"],
  ["Fees", "Shared with families on enquiry"],
];

export function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Admissions · June 2027" title="Begin the conversation about your child's place" lead="Admission enquiries are open for Vidyabhushana Gurukulam's first batch, from pre-primary through Class 5 in Vadodara." />
      <AdmissionsSteps admissionsSteps={ADMISSIONS_STEPS} />

      <section className="bg-bg-cream px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="admission-details-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro eyebrow="Admission details" title="What is confirmed for the first batch" lead="These details help families understand the starting point before the Gurukulam team follows up personally." headingId="admission-details-title" />
          <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADMISSION_FACTS.map(([term, detail], index) => (
              <Reveal key={term} delay={(index % 3) * 0.05}>
                <div className="h-full rounded-[28px] border border-header/10 bg-white/75 p-6 sm:p-7">
                  <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-theme">{term}</dt>
                  <dd className="mt-3 font-heading text-xl font-medium leading-7 text-header">{detail}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <PageCta eyebrow="Enquiry contact" title="Admission enquiry contact details are being finalised" body="The public phone, WhatsApp, email, and secure online enquiry form will be added once confirmed. Until then, the page keeps the admission process accurate without collecting details insecurely." primaryLabel="Read the Parent Guide" primaryHref="/parent-guide" secondaryLabel="Contact Information" secondaryHref="/contact" />
    </>
  );
}
