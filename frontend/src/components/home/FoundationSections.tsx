/*
  src/components/home/FoundationSections.tsx
  Presents the founding team's prior experience and the three educational pillars without relying on programme photography.
*/
import { Reveal } from "@/components/motion/Reveal";
import { useHoverActive } from "@/hooks/useHoverActive";
import { SectionIntro } from "@/components/home/SectionIntro";

type FoundationSectionsProps = {
  site: typeof import("@/data/home").SITE;
  pillars: typeof import("@/data/home").PILLARS;
};

export function FoundationSections({ site, pillars }: FoundationSectionsProps) {
  return (
    <>
      <FoundingExperience site={site} />
      <Pillars pillars={pillars} />
    </>
  );
}

function FoundingExperience({ site }: Pick<FoundationSectionsProps, "site">) {
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

        <div className="relative grid min-h-[430px] place-items-center overflow-hidden bg-bg-cream p-8 sm:p-12">
          <div aria-hidden="true" className="absolute -right-20 -top-24 size-72 rounded-full border border-theme/25" />
          <div aria-hidden="true" className="absolute -bottom-24 -left-20 size-72 rounded-full border border-header/10" />
          <Reveal className="relative w-full max-w-[520px]" x={24}>
            <p className="text-center font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">One coherent education</p>
            <div className="mt-7 space-y-3">
              {[
                ["01", "Grounded", "Vedic learning and spiritual culture begin the day."],
                ["02", "Focused", "Six hours of NCERT academics build understanding."],
                ["03", "Complete", "Kreeda, arts, seva, and practical learning develop the whole child."],
              ].map(([number, title, body]) => (
                <div key={number} className="grid grid-cols-[46px_1fr] gap-4 rounded-[22px] border border-header/10 bg-white/75 p-4 sm:p-5">
                  <span className="grid size-11 place-items-center rounded-full bg-header font-heading text-sm font-semibold text-white">{number}</span>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-header">{title}</h3>
                    <p className="mt-1 text-[15px] leading-6 text-text">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
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
