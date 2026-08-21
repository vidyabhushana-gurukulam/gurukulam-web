/*
  src/components/home/AdmissionsSections.tsx
  Makes the five-step admission journey explicit and closes the homepage with one clear enquiry invitation,
  offering a direct phone call for parents who would rather talk than fill in a form.
*/
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionIntro } from "@/components/home/SectionIntro";
import { FloatingChild } from "@/components/motion/FloatingChild";
import { CHILDREN } from "@/data/media";
import { CONTACT } from "@/data/home";
import { PhoneIcon } from "@/components/ui/Icon";

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

        {/* The connector spans centre-to-centre of the outer columns, so its inset tracks the column count. */}
        <ol className="relative mt-14 grid gap-5 before:absolute before:left-[10%] before:right-[10%] before:top-12 before:hidden before:border-t before:border-dashed before:border-theme/45 before:content-[''] sm:grid-cols-2 lg:grid-cols-5 lg:before:block">
          {admissionsSteps.items.map((item, index) => (
            <Reveal as="li" key={item.step} className="relative" delay={index * 0.06}>
              <article className="h-full rounded-[28px] border border-header/10 bg-bg-cream px-5 pb-8 pt-7 text-center transition-[transform,box-shadow] duration-(--default-transition-duration) ease-(--ease-out-back) hover:-translate-y-1 hover:shadow-hover sm:px-6">
                <span className="relative z-10 mx-auto grid size-11 place-items-center rounded-full bg-header font-heading text-sm font-semibold text-white ring-8 ring-body">{item.step}</span>
                <h3 className="mt-7 font-heading text-xl font-medium leading-tight text-header">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-text">{item.body}</p>
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
          <FloatingChild media={CHILDREN.kirtanKartals} className="bottom-0 left-6 w-[118px] xl:left-10 xl:w-[136px]" drift={-52} />
          <FloatingChild media={CHILDREN.abacus} className="bottom-0 right-6 w-[118px] xl:right-10 xl:w-[136px]" drift={-34} />
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">{finalCta.eyebrow}</p>
          <h2 id="final-cta-title" className="mx-auto mt-5 max-w-[850px] font-heading text-[clamp(2.25rem,5vw,4.3rem)] font-medium leading-[1.06] tracking-[-0.03em] text-white">{finalCta.title}</h2>
          <p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-white/75">{finalCta.body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Button>
            <Button href={finalCta.secondaryCta.href} variant="ghost" className="border border-white/20 !text-white hover:border-theme">{finalCta.secondaryCta.label}</Button>
          </div>
          {/* Some parents would simply rather ring the school than fill in a form. */}
          <p className="relative mt-7 text-[15px] leading-6 text-white/65">
            Prefer to talk?{" "}
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 font-semibold text-white underline decoration-theme/60 underline-offset-4 transition-colors duration-(--default-transition-duration) hover:text-theme focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white">
              <PhoneIcon className="size-4" />
              {CONTACT.phoneDisplay}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
