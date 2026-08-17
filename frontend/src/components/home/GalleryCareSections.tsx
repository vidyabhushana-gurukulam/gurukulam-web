/*
  src/components/home/GalleryCareSections.tsx
  Sets honest expectations about launch facilities and answers parents' essential questions without relying on photography.
*/
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/home/SectionIntro";

type ParentGuideSectionsProps = {
  facilities: typeof import("@/data/home").FACILITIES;
  faqs: typeof import("@/data/home").FAQS;
};

export function ParentGuideSections({ facilities, faqs }: ParentGuideSectionsProps) {
  return (
    <>
      <FacilitiesCare facilities={facilities} />
      <ParentFaq faqs={faqs} />
    </>
  );
}

function FacilityCard({ title, body, planned }: { title: string; body: string; planned?: boolean }) {
  return (
    <article className={`rounded-[28px] border p-6 sm:p-7 ${planned ? "border-dashed border-header/20 bg-body/45" : "border-header/10 bg-white"}`}>
      <div className="flex items-start gap-4">
        <span className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-full ${planned ? "border border-header/15 text-header/50" : "bg-header text-white"}`}>
          {planned ? (
            <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 8v4l2.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true"><path d="m6 12 4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          )}
        </span>
        <div>
          <h3 className="font-heading text-xl font-medium text-header">{title}</h3>
          <p className={`mt-2 text-[15px] leading-6 ${planned ? "italic text-text/70" : "text-text"}`}>{body}</p>
        </div>
      </div>
    </article>
  );
}

export function FacilitiesCare({ facilities }: Pick<ParentGuideSectionsProps, "facilities">) {
  return (
    <section className="overflow-x-clip bg-bg-panel px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="facilities-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow={facilities.eyebrow} title={facilities.title} lead={facilities.lead} headingId="facilities-title" />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-[28px] bg-bg-cream p-5 sm:p-7" x={-24}>
            <div className="mb-5 flex items-center justify-between gap-4 px-1">
              <h3 className="font-heading text-xl font-medium text-header">Available at launch</h3>
              <span className="rounded-full bg-header px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-white">Launch</span>
            </div>
            <div className="flex flex-col gap-3">
              {facilities.available.map((item) => <FacilityCard key={item.title} title={item.title} body={item.body} />)}
            </div>
          </Reveal>

          <Reveal className="rounded-[28px] border border-dashed border-header/20 bg-body/65 p-5 sm:p-7" x={24}>
            <div className="mb-5 flex items-center justify-between gap-4 px-1">
              <h3 className="font-heading text-xl font-medium text-header">Future plans</h3>
              <span className="rounded-full border border-header/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-header/60">Planned</span>
            </div>
            <div className="flex flex-col gap-3">
              {facilities.planned.map((item) => <FacilityCard key={item.title} title={item.title} body={item.body} planned />)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ParentFaq({ faqs }: Pick<ParentGuideSectionsProps, "faqs">) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-body px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="parent-faq-title">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionIntro eyebrow={faqs.eyebrow} title={faqs.title} lead={faqs.lead} align="left" headingId="parent-faq-title" />
          <div className="mt-8 rounded-[28px] border border-theme/25 bg-bg-cream p-6">
            <p className="font-heading text-lg font-medium text-header">Still considering the fit?</p>
            <p className="mt-2 text-[15px] leading-6 text-text">The admission explanation session is where families can understand the model and ask questions specific to their child.</p>
          </div>
        </div>

        <div className="divide-y divide-header/10 border-y border-header/10">
          {faqs.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.question} delay={(index % 4) * 0.035}>
                <article>
                  <h3>
                    <button type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header">
                      <span className="font-heading text-lg font-medium leading-6 text-header sm:text-xl">{item.question}</span>
                      <span aria-hidden="true" className={`grid size-9 shrink-0 place-items-center rounded-full border border-theme/35 text-theme transition-transform duration-(--default-transition-duration) ${isOpen ? "rotate-45 bg-theme text-white" : ""}`}>+</span>
                    </button>
                  </h3>
                  <div id={`faq-answer-${index}`} hidden={!isOpen}>
                    <p className="max-w-[700px] pb-6 pr-12 text-[16px] leading-7 text-text">{item.answer}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
