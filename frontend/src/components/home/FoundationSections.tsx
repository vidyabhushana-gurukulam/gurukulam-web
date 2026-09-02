/*
  src/components/home/FoundationSections.tsx
  Presents the founding team's prior experience and the three educational pillars.
  Each pillar is introduced by an arched photograph so the section repeats the hero's dome language.
*/
import { Reveal } from "@/components/motion/Reveal";
import { useHoverActive } from "@/hooks/useHoverActive";
import { SectionIntro } from "@/components/home/SectionIntro";
import { ArchedPhotoCard } from "@/components/ui/ArchedPhotoCard";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SCENES } from "@/data/media";

type FoundationSectionsProps = {
  site: typeof import("@/data/home").SITE;
  pillars: typeof import("@/data/home").PILLARS;
};

/** Positional map from the approved pillar order to its illustrating scene. */
const PILLAR_SCENES = [SCENES.classroomDiscussion, SCENES.geometryClass, SCENES.handsOnLearning];

export function FoundationSections({ site, pillars }: FoundationSectionsProps) {
  return (
    <>
      <FoundingExperience site={site} />
      <Pillars pillars={pillars} />
    </>
  );
}

export function FoundingExperience({ site }: Pick<FoundationSectionsProps, "site">) {
  return (
    <section id="why" className="bg-body px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="founding-experience-title">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[28px] bg-header lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col justify-center px-7 py-12 text-center sm:px-12 lg:px-14 lg:text-left" x={-24}>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">{site.experience.eyebrow}</p>
          <p className="mt-6 font-heading text-[clamp(3rem,7vw,5.25rem)] font-medium leading-none text-white">{site.experience.stat}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/65">{site.experience.statLabel}</p>
          <h2 id="founding-experience-title" className="mt-7 font-heading text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-tight text-white">{site.experience.title}</h2>
          <p className="mt-5 text-[17px] leading-7 text-white/75">{site.experience.body}</p>
        </Reveal>

        <PhotoFrame media={SCENES.artsPerformance} className="h-full min-h-[430px] w-full" />
      </div>
    </section>
  );
}

export function Pillars({ pillars }: Pick<FoundationSectionsProps, "pillars">) {
  const { activeIndex, hoverProps } = useHoverActive(1);

  return (
    <section className="bg-bg-panel px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="pillars-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow="Our foundation" title="Holistic Education for All-Round Child Development" lead="Spiritual culture, sustained academics, and the whole development of the child belong in the same school day." headingId="pillars-title" />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index;

            return (
              <Reveal key={pillar.title} delay={index * 0.07}>
                <ArchedPhotoCard
                  {...hoverProps(index)}
                  media={PILLAR_SCENES[index]}
                  badge={pillar.icon}
                  title={pillar.title}
                  body={pillar.body}
                  isActive={isActive}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
