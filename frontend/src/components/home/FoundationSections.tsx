/*
  src/components/home/FoundationSections.tsx
  Presents the founding team's prior teaching experience and the three educational pillars without attributing that history to the new school.
*/
import { Reveal } from "@/components/motion/Reveal";
import { Img } from "@/components/ui/Img";
import { useHoverActive } from "@/hooks/useHoverActive";
import { SectionIntro } from "@/components/home/SectionIntro";

type FoundationSectionsProps = {
  site: typeof import("@/data/home").SITE;
  pillars: typeof import("@/data/home").PILLARS;
  gallery: typeof import("@/data/home").GALLERY;
};

export function FoundationSections({ site, pillars, gallery }: FoundationSectionsProps) {
  return (
    <>
      <FoundingExperience site={site} gallery={gallery} />
      <Pillars pillars={pillars} />
    </>
  );
}

function FoundingExperience({ site, gallery }: Pick<FoundationSectionsProps, "site" | "gallery">) {
  const experiencePhotos = gallery.items.slice(0, 3);

  return (
    <section id="why" className="bg-body px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="founding-experience-title">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[28px] bg-header lg:grid-cols-[0.82fr_1.45fr]">
        <Reveal className="flex flex-col justify-center px-7 py-12 text-center sm:px-12 lg:px-14 lg:text-left" x={-24}>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">{site.experience.eyebrow}</p>
          <p className="mt-6 font-heading text-[clamp(3rem,7vw,5.25rem)] font-medium leading-none text-white">{site.experience.stat}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/65">{site.experience.statLabel}</p>
          <h2 id="founding-experience-title" className="mt-7 font-heading text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-tight text-white">{site.experience.title}</h2>
          <p className="mt-5 text-[17px] leading-7 text-white/75">{site.experience.body}</p>
        </Reveal>

        <div className="grid min-h-[430px] grid-cols-2 gap-2 bg-header p-2 sm:grid-cols-[1.15fr_0.85fr]">
          {experiencePhotos.map((photo, index) => (
            <Reveal key={photo.src} className={index === 0 ? "relative row-span-2 min-h-[330px] overflow-hidden rounded-[22px]" : "relative min-h-[210px] overflow-hidden rounded-[22px]"} delay={index * 0.06}>
              <Img src={photo.src} alt={photo.alt} className="size-full object-cover transition-transform duration-(--default-transition-duration) hover:scale-(--hover-zoom)" />
              <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-header/80 to-transparent px-4 pb-4 pt-12 text-sm leading-5 text-white">{photo.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars({ pillars }: Pick<FoundationSectionsProps, "pillars">) {
  const { activeIndex, hoverProps } = useHoverActive(1);

  return (
    <section className="bg-bg-panel px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="pillars-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow="Our foundation" title="One education, held in balance" lead="Spiritual culture, sustained academics, and the whole development of the child belong in the same school day." headingId="pillars-title" />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index;

            return (
              <Reveal key={pillar.title} delay={index * 0.07}>
                <article {...hoverProps(index)} tabIndex={0} className={`group flex min-h-[370px] flex-col items-center rounded-b-[28px] rounded-t-[150px] border px-7 pb-9 pt-12 text-center outline-none transition-[transform,background-color,box-shadow,border-color] duration-(--default-transition-duration) ease-(--ease-out-back) focus-visible:ring-2 focus-visible:ring-theme ${isActive ? "-translate-y-1.5 border-theme/45 bg-white shadow-hover" : "border-header/10 bg-white/55"}`}>
                  <span className={`grid size-24 place-items-center rounded-full font-heading text-3xl font-medium transition-colors duration-(--default-transition-duration) ${isActive ? "bg-bg-cream text-theme" : "bg-body text-header/45"}`}>
                    {pillar.icon}
                  </span>
                  <span className="mt-8 h-px w-10 bg-theme/55" />
                  <h3 className="mt-6 font-heading text-2xl font-medium leading-tight text-header">{pillar.title}</h3>
                  <p className="mt-4 text-[16px] leading-7 text-text">{pillar.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
