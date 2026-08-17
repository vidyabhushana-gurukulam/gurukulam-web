/*
  src/components/home/AdmissionsSections.tsx
  Makes the approved three-step admissions flow explicit and closes the homepage with one clear enquiry invitation.
*/
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionIntro } from "@/components/home/SectionIntro";

type AdmissionsSectionsProps = {
  admissionsSteps: typeof import("@/data/home").ADMISSIONS_STEPS;
  finalCta: typeof import("@/data/home").FINAL_CTA;
};

export function AdmissionsSections({ admissionsSteps, finalCta }: AdmissionsSectionsProps) {
  return (
    <>
      <AdmissionsSteps admissionsSteps={admissionsSteps} />
      <FinalCta finalCta={finalCta} />
    </>
  );
}

export function AdmissionsSteps({ admissionsSteps }: Pick<AdmissionsSectionsProps, "admissionsSteps">) {
  return (
    <section id="admissions" className="bg-body px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="admissions-title">
      <div className="mx-auto max-w-[1180px]">
        <SectionIntro eyebrow={admissionsSteps.eyebrow} title={admissionsSteps.title} lead={admissionsSteps.lead} headingId="admissions-title" />

        <ol className="relative mt-14 grid gap-5 before:absolute before:left-[16.66%] before:right-[16.66%] before:top-12 before:hidden before:border-t before:border-dashed before:border-theme/45 before:content-[''] md:grid-cols-3 md:before:block">
          {admissionsSteps.items.map((item, index) => (
            <Reveal as="li" key={item.step} className="relative" delay={index * 0.08}>
              <article className="h-full rounded-[28px] border border-header/10 bg-bg-cream px-7 pb-8 pt-7 text-center transition-[transform,box-shadow] duration-(--default-transition-duration) ease-(--ease-out-back) hover:-translate-y-1 hover:shadow-hover">
                <span className="relative z-10 mx-auto grid size-11 place-items-center rounded-full bg-header font-heading text-sm font-semibold text-white ring-8 ring-body">{item.step}</span>
                <h3 className="mt-7 font-heading text-2xl font-medium text-header">{item.title}</h3>
                <p className="mt-4 text-[16px] leading-7 text-text">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FinalCta({ finalCta }: Pick<AdmissionsSectionsProps, "finalCta">) {
  return (
    <section id="contact" className="bg-body px-5 pb-20 pt-4 sm:px-8 lg:pb-28" aria-labelledby="final-cta-title">
      <Reveal className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-b-[28px] rounded-t-[clamp(110px,18vw,230px)] bg-header px-7 pb-14 pt-28 text-center sm:px-12 sm:pb-20 sm:pt-36 lg:px-24 lg:pb-24 lg:pt-44">
          <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-[65%] -translate-x-1/2 bg-theme/55" />
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">{finalCta.eyebrow}</p>
          <h2 id="final-cta-title" className="mx-auto mt-5 max-w-[850px] font-heading text-[clamp(2.25rem,5vw,4.3rem)] font-medium leading-[1.06] tracking-[-0.03em] text-white">{finalCta.title}</h2>
          <p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-white/75">{finalCta.body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Button>
            <Button href={finalCta.secondaryCta.href} variant="ghost" className="border border-white/20 !text-white hover:border-theme">{finalCta.secondaryCta.label}</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
