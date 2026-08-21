/*
  src/components/home/GalleryCareSections.tsx
  Sets honest expectations about launch facilities and reproduces the Parent Handbook's
  frequently asked questions, keeping the handbook's own A-F grouping and wording.
*/
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/home/SectionIntro";
import { DocumentIcon } from "@/components/ui/Icon";
import { CONTACT } from "@/data/home";
import type { FaqItem } from "@/data/home";

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

export function FacilitiesCare({ facilities }: Pick<ParentGuideSectionsProps, "facilities">) {
  return (
    <section className="overflow-x-clip bg-bg-panel px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="facilities-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow={facilities.eyebrow} title={facilities.title} lead={facilities.lead} headingId="facilities-title" />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {facilities.available.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-[28px] border border-header/10 bg-white p-6 transition-[transform,border-color,box-shadow] duration-(--default-transition-duration) ease-(--ease-out-back) hover:-translate-y-1 hover:border-theme/35 hover:shadow-hover sm:p-7">
                <span className="grid size-10 place-items-center rounded-full bg-header text-white">
                  <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true"><path d="m6 12 4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="mt-5 font-heading text-xl font-medium text-header">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-text">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Renders one answer, which the handbook writes either as a sentence or as a bullet list. */
function FaqAnswer({ item, id }: { item: FaqItem; id: string }) {
  return (
    <div id={id} className="max-w-[700px] pb-6 pr-4 sm:pr-12">
      {item.answer && <p className="text-[16px] leading-7 text-text">{item.answer}</p>}
      {item.points && (
        <ul className={`flex flex-col gap-2 ${item.answer ? "mt-3" : ""}`}>
          {item.points.map((point) => (
            <li key={point} className="flex gap-3 text-[16px] leading-7 text-text">
              <span aria-hidden="true" className="mt-[11px] size-1.5 shrink-0 rounded-full bg-theme" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      {item.note && <p className="mt-3 text-[15px] italic leading-6 text-text/75">{item.note}</p>}
    </div>
  );
}

export function ParentFaq({ faqs }: Pick<ParentGuideSectionsProps, "faqs">) {
  // Composite key because question indexes restart inside every handbook group.
  const [openKey, setOpenKey] = useState("A-0");

  return (
    <section id="faq" className="bg-body px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="parent-faq-title">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionIntro eyebrow={faqs.eyebrow} title={faqs.title} lead={faqs.lead} align="left" headingId="parent-faq-title" />
          <div className="mt-8 rounded-[28px] border border-theme/25 bg-bg-cream p-6">
            <p className="font-heading text-lg font-medium text-header">Still considering the fit?</p>
            <p className="mt-2 text-[15px] leading-6 text-text">The Gurukulam orientation is where families can understand the model, and the parent interview that follows is the place to ask questions specific to their child.</p>
            <a href={CONTACT.handbook} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2.5 font-heading text-[15px] font-semibold text-header underline decoration-theme/45 underline-offset-4 transition-colors duration-(--default-transition-duration) hover:text-theme focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header">
              <DocumentIcon className="text-theme" />
              Read the full Parent Handbook
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {faqs.groups.map((group) => (
            <section key={group.letter} aria-labelledby={`faq-group-${group.letter}`}>
              <h3 id={`faq-group-${group.letter}`} className="flex items-center gap-3">
                <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-header font-heading text-xs font-semibold text-white">{group.letter}</span>
                <span className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-theme">{group.title}</span>
              </h3>

              <div className="mt-4 divide-y divide-header/10 border-y border-header/10">
                {group.items.map((item, index) => {
                  const key = `${group.letter}-${index}`;
                  const isOpen = openKey === key;

                  return (
                    <Reveal key={item.question} delay={(index % 4) * 0.035}>
                      <article>
                        <h4>
                          <button type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${key}`} onClick={() => setOpenKey(isOpen ? "" : key)} className="flex w-full items-center justify-between gap-5 py-5 text-left focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header">
                            <span className="font-heading text-[17px] font-medium leading-6 text-header sm:text-lg">{item.question}</span>
                            <span aria-hidden="true" className={`grid size-9 shrink-0 place-items-center rounded-full border border-theme/35 text-theme transition-transform duration-(--default-transition-duration) ${isOpen ? "rotate-45 bg-theme text-white" : ""}`}>+</span>
                          </button>
                        </h4>
                        {isOpen && <FaqAnswer item={item} id={`faq-answer-${key}`} />}
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
