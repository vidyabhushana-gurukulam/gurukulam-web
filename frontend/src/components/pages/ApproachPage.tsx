/*
  src/components/pages/ApproachPage.tsx
  Explains Pancha Kosha Vikas, the complete qualities framework, and the school's daily practices.
*/
import { PanchaKosha } from "@/components/home/RhythmAndKoshaSections";
import { Qualities } from "@/components/home/CurriculumSections";
import { SectionIntro } from "@/components/home/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";
import { PageCta, PageHero } from "@/components/pages/InnerPage";
import { PANCHA_KOSHA, QUALITIES } from "@/data/home";

const PRACTICES = [
  { title: "Sadhana", body: "The day begins with spiritual practice, giving children a grounded and attentive rhythm." },
  { title: "Seva", body: "Service is learned through participation, responsibility, and care for others." },
  { title: "Sadachar", body: "Good conduct is cultivated as a lived daily practice alongside academic learning." },
];

export function ApproachPage() {
  return (
    <>
      <PageHero eyebrow="Our Approach" title="Developing the whole child, dimension by dimension" lead="The Gurukulam brings body, energy, mind, intellect, and inner fulfilment into one coherent educational framework." />
      <PanchaKosha panchaKosha={PANCHA_KOSHA} />

      <section className="bg-body px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="daily-practices-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro eyebrow="Daily practice" title="Sadhana, Seva, Sadachar" lead="Character is not treated as a separate lesson. It is reinforced through the rhythm, responsibilities, and relationships of school life." headingId="daily-practices-title" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PRACTICES.map((practice, index) => (
              <Reveal key={practice.title} delay={index * 0.07}>
                <article className="h-full rounded-b-[28px] rounded-t-[110px] border border-header/10 bg-bg-panel px-7 pb-9 pt-12 text-center">
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-header font-heading text-sm font-semibold text-white">0{index + 1}</span>
                  <h2 className="mt-7 font-heading text-2xl font-medium text-header">{practice.title}</h2>
                  <p className="mt-4 text-[16px] leading-7 text-text">{practice.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Qualities qualities={QUALITIES} />
      <PageCta title="See how this philosophy becomes a school day" body="Explore the timetable, academic subjects, cultural learning, and weekly practical service that make the approach tangible." primaryLabel="Explore the Curriculum" primaryHref="/curriculum" secondaryLabel="Parent Guide" secondaryHref="/parent-guide" />
    </>
  );
}
