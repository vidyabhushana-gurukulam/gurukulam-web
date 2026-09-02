/*
  src/components/pages/ApproachPage.tsx
  Explains Pancha Kosha Vikas, the complete qualities framework, and the school's daily practices.
*/
import { PanchaKosha } from "@/components/home/RhythmAndKoshaSections";
import { Qualities } from "@/components/home/CurriculumSections";
import { SectionIntro } from "@/components/home/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";
import { PageCta, PageHero } from "@/components/pages/InnerPage";
import { ArchedPhotoCard } from "@/components/ui/ArchedPhotoCard";
import { useHoverActive } from "@/hooks/useHoverActive";
import { PANCHA_KOSHA, QUALITIES } from "@/data/home";
import { SCENES } from "@/data/media";

const PRACTICES = [
  { title: "Sadhana", body: "The day begins with spiritual practice, giving children a grounded and attentive rhythm.", media: SCENES.sadhanaJapa },
  { title: "Seva", body: "Service is learned through participation, responsibility, and care for others.", media: SCENES.sevaPrasadam },
  { title: "Sadachar", body: "Good conduct is cultivated as a lived daily practice alongside academic learning.", media: SCENES.sadacharGreeting },
];

export function ApproachPage() {
  return (
    <>
      <PageHero eyebrow="Our Approach" title="Nurturing every dimension of the child" lead="The Gurukulam brings body, energy, mind, intellect, and inner fulfilment into one coherent educational framework." />
      <PanchaKosha panchaKosha={PANCHA_KOSHA} />

      <DailyPractices />

      <Qualities qualities={QUALITIES} />
      <PageCta title="See how this philosophy becomes a school day" body="Explore the timetable, academic subjects, cultural learning, and weekly practical service that make the approach tangible." primaryLabel="Explore the Curriculum" primaryHref="/curriculum" secondaryLabel="Parent Guide" secondaryHref="/parent-guide" />
    </>
  );
}

function DailyPractices() {
  const { activeIndex, hoverProps } = useHoverActive(1);

  return (
    <section className="bg-body px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="daily-practices-title">
      <div className="mx-auto max-w-[1180px]">
        <SectionIntro eyebrow="Daily practice" title="Sadhana, Seva, Sadachar" lead="Character is not treated as a separate lesson. It is reinforced through the rhythm, responsibilities, and relationships of school life." headingId="daily-practices-title" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PRACTICES.map((practice, index) => (
            <Reveal key={practice.title} delay={index * 0.07}>
              <ArchedPhotoCard
                {...hoverProps(index)}
                media={practice.media}
                badge={`0${index + 1}`}
                title={practice.title}
                body={practice.body}
                isActive={activeIndex === index}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
