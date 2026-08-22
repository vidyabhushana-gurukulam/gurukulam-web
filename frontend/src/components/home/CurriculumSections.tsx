/*
  src/components/home/CurriculumSections.tsx
  Connects character formation, the off-campus weekly farm visit, and every approved subject group as one curriculum story.
*/
import { Sprout } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/home/SectionIntro";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SCENES } from "@/data/media";

type CurriculumSectionsProps = {
  qualities: typeof import("@/data/home").QUALITIES;
  farmVisit: typeof import("@/data/home").FARM_VISIT;
  subjectGroups: typeof import("@/data/home").SUBJECT_GROUPS;
};

export function CurriculumSections({ qualities, farmVisit, subjectGroups }: CurriculumSectionsProps) {
  return (
    <>
      <Qualities qualities={qualities} />
      <FarmVisit farmVisit={farmVisit} />
      <SubjectGroups subjectGroups={subjectGroups} />
    </>
  );
}

function QualityItem({ quality, number }: { quality: string; number: number }) {
  return (
    <div role="listitem" className="group flex min-h-[92px] items-start gap-4 rounded-[24px] border border-header/10 bg-white/75 px-5 py-5 transition-[transform,border-color,background-color] duration-(--default-transition-duration) hover:-translate-y-0.5 hover:border-theme/35 hover:bg-white">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-header font-heading text-xs font-semibold text-white">{String(number).padStart(2, "0")}</span>
      <span className="pt-1 text-[15px] leading-6 text-header">{quality}</span>
    </div>
  );
}

export function Qualities({ qualities }: Pick<CurriculumSectionsProps, "qualities">) {
  const previewCount = 6;

  return (
    <section id="qualities" className="bg-bg-panel px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="qualities-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow={qualities.eyebrow} title={qualities.title} lead={qualities.lead} headingId="qualities-title" />

        <div role="list" className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.items.slice(0, previewCount).map((quality, index) => (
            <Reveal as="div" key={quality} delay={index * 0.04}>
              <QualityItem quality={quality} number={index + 1} />
            </Reveal>
          ))}
        </div>

        <details className="group/details mt-6 rounded-[28px] border border-header/10 bg-body px-5 py-2 open:pb-6 sm:px-7">
          <summary className="flex cursor-pointer list-none items-center justify-center gap-3 py-4 font-heading text-base font-semibold text-header marker:hidden">
            <span>{qualities.cta.label}</span>
            <span aria-hidden="true" className="grid size-8 place-items-center rounded-full border border-theme/35 text-theme transition-transform duration-(--default-transition-duration) group-open/details:rotate-45">+</span>
          </summary>
          <div role="list" className="grid gap-3 border-t border-header/10 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualities.items.slice(previewCount).map((quality, index) => (
              <QualityItem key={quality} quality={quality} number={index + previewCount + 1} />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

export function FarmVisit({ farmVisit }: Pick<CurriculumSectionsProps, "farmVisit">) {
  return (
    <section className="bg-body px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="farm-visit-title">
      <Reveal className="mx-auto max-w-[1160px]">
        {/* Split rather than centred: the weekly farm visit is the one section where a photograph carries the claim. */}
        <div className="relative grid overflow-hidden rounded-[28px] bg-header lg:grid-cols-[0.82fr_1.18fr]">
          <PhotoFrame media={SCENES.gauSeva} className="min-h-[300px] w-full sm:min-h-[380px] lg:min-h-full" />

          <div className="relative px-7 py-14 text-center sm:px-12 sm:py-16 lg:px-14 lg:py-20 lg:text-left">
            <div aria-hidden="true" className="absolute -bottom-24 -right-20 size-72 rounded-full border border-white/10" />
            <Sprout aria-hidden="true" strokeWidth={1.5} className="relative mx-auto size-14 text-theme lg:mx-0" />
            <p className="relative mt-6 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">{farmVisit.eyebrow}</p>
            <h2 id="farm-visit-title" className="relative mt-4 font-heading text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.08] text-white">{farmVisit.title}</h2>
            <p className="relative mt-6 max-w-[560px] text-lg leading-8 text-white/80 max-lg:mx-auto">{farmVisit.body}</p>
            <p className="relative mt-7 max-w-[560px] rounded-[20px] border border-white/15 bg-white/[0.06] px-5 py-3 text-sm leading-6 text-white/65 max-lg:mx-auto">{farmVisit.note}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SubjectGroups({ subjectGroups }: Pick<CurriculumSectionsProps, "subjectGroups">) {
  return (
    <section id="curriculum" className="bg-bg-cream px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="subject-groups-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow="Curriculum" title="Many subjects, one education" lead="Academic learning, language, arts, physical development, practical service, character, and scripture are brought together in the Gurukulam curriculum." headingId="subject-groups-title" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjectGroups.map((group, index) => (
            <Reveal key={group.area} delay={(index % 3) * 0.055}>
              <article className="group h-full rounded-[28px] border border-header/10 bg-white/65 p-6 transition-[transform,background-color,box-shadow] duration-(--default-transition-duration) ease-(--ease-out-back) hover:-translate-y-1 hover:bg-white hover:shadow-hover sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-theme/15 font-heading text-xs font-semibold text-theme">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-heading text-xl font-medium text-header">{group.area}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.subjects.map((subject) => (
                    <li key={subject} className="rounded-full border border-header/10 bg-body px-3 py-1.5 text-sm leading-5 text-text">{subject}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
