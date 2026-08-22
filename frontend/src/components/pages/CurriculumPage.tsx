/*
  src/components/pages/CurriculumPage.tsx
  Presents the approved daily timetable, subject groups, practical NCERT approach, and off-campus farm visit.
*/
import { DailyRhythm } from "@/components/home/RhythmAndKoshaSections";
import { FarmVisit, SubjectGroups } from "@/components/home/CurriculumSections";
import { SectionIntro } from "@/components/home/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";
import { PageCta, PageHero } from "@/components/pages/InnerPage";
import { DAILY_RHYTHM, FARM_VISIT, SUBJECT_GROUPS } from "@/data/home";

const LEARNING_METHODS = [
  { number: "01", title: "Understanding before memorisation", body: "Lessons are designed to help children understand ideas and reason through them, with memorisation supporting learning rather than replacing it." },
  { number: "02", title: "Visual and practical academics", body: "NCERT concepts are taught through visual projects and 3D models so children can see, build, discuss, and explain what they learn." },
  { number: "03", title: "One committed teaching team", body: "Academically qualified devotee teachers guide both the Vedic portion and NCERT academics, connecting subject knowledge with lived character." },
];

export function CurriculumPage() {
  return (
    <>
      <PageHero eyebrow="Curriculum" title="Vedic learning and academics, given time and depth" lead="The day begins with Vedic education, gives its largest block to NCERT academics, and closes with two hours of Kreeda and the arts." />
      <DailyRhythm dailyRhythm={DAILY_RHYTHM} />

      <section className="bg-bg-panel px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="learning-method-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro eyebrow="How children learn" title="Academic depth through practical understanding" lead="The curriculum sets out what children learn; the teaching method ensures those ideas become clear, connected, and usable." headingId="learning-method-title" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {LEARNING_METHODS.map((method, index) => (
              <Reveal key={method.title} delay={index * 0.07}>
                <article className="h-full rounded-[28px] border border-header/10 bg-white p-7 transition-[transform,box-shadow,border-color] duration-(--default-transition-duration) ease-(--ease-out-back) hover:-translate-y-1 hover:border-theme/35 hover:shadow-hover sm:p-8">
                  <span className="grid size-11 place-items-center rounded-full bg-header font-heading text-sm font-semibold text-white">{method.number}</span>
                  <h2 className="mt-7 font-heading text-2xl font-medium leading-tight text-header">{method.title}</h2>
                  <p className="mt-4 text-[16px] leading-7 text-text">{method.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SubjectGroups subjectGroups={SUBJECT_GROUPS} />
      <FarmVisit farmVisit={FARM_VISIT} />
      <PageCta title="Want to understand how this curriculum may fit your child?" body="The admission process includes a Gurukulam orientation where families can understand the model, followed by an interview in which parents can ask their questions." />
    </>
  );
}
