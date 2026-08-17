/*
  src/components/home/HeroSection.tsx
  Introduces the Gurukulam immediately through its official crest, verified school facts, and a focused admissions path.
  Hero content stays static because it is already visible when the page loads.
*/
import { Button } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { GoldRule } from "@/components/home/SectionIntro";

type HeroSectionProps = {
  site: typeof import("@/data/home").SITE;
  hero: typeof import("@/data/home").HERO;
};

export function HeroSection({ site, hero }: HeroSectionProps) {
  const schoolFacts = [
    { label: "School", value: "Day school" },
    { label: "Board", value: "GSEB" },
    { label: "Medium", value: "English" },
    { label: "Opening", value: "June 2027" },
    { label: "Classes", value: "Pre-primary–Class 5" },
    { label: "Location", value: "Vadodara" },
  ];

  return (
    <section className="relative overflow-hidden bg-body px-4 pb-16 pt-[116px] sm:px-6 lg:pb-24 lg:pt-[132px]" aria-labelledby="home-hero-title">
      <div aria-hidden="true" className="absolute -left-20 top-[24%] size-64 rounded-full border border-theme/20 sm:size-80" />
      <div aria-hidden="true" className="absolute -right-24 top-[16%] size-72 rounded-full border border-header/10 sm:size-96" />

      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-b-[28px] rounded-t-[clamp(150px,24vw,330px)] border border-theme/45 bg-bg-cream px-5 pb-7 pt-14 shadow-[0_28px_90px_-60px_var(--color-header)] sm:px-9 sm:pb-9 sm:pt-20 lg:px-14 lg:pb-12 lg:pt-24">
        <div className="mx-auto flex w-full min-w-0 max-w-[920px] flex-col items-center text-center">
          <Img src="/brand/vidyabhushana-crest.webp" alt="Vidyabhushana Gurukulam crest" loading="eager" className="h-auto w-[150px] drop-shadow-[0_18px_28px_rgb(27_48_87_/_0.13)] sm:w-[190px] lg:w-[220px]" />

          <div className="hidden sm:block">
            <span className="mt-4 inline-flex max-w-full items-center justify-center rounded-full border border-theme/35 bg-white/70 px-4 py-2 text-center font-heading text-sm font-semibold leading-5 tracking-wide whitespace-normal text-header backdrop-blur-sm">
              {site.admissions}
            </span>
          </div>

          <span className="mt-5 w-full font-heading text-sm font-semibold uppercase leading-6 tracking-[0.2em] text-theme sm:mt-7">
            {hero.eyebrow}
          </span>
          <h1 className="mt-4 w-full min-w-0 whitespace-pre-line font-heading text-[clamp(2.55rem,6vw,5rem)] font-medium leading-[1.03] tracking-[-0.045em] text-header">
            <span id="home-hero-title">{hero.title}</span>
          </h1>
          <GoldRule className="my-5 sm:my-6" />

          <div className="w-full">
            <p className="mx-auto max-w-[730px] text-[18px] leading-8 text-text sm:text-xl">{hero.body}</p>
          </div>
          <div>
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8">
              <Button href={hero.primaryCta.href} variant="secondary">{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="ghost">{hero.secondaryCta.label}</Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-[24px] border border-header/10 bg-white/65 sm:mt-14 sm:grid-cols-3 lg:grid-cols-6">
          {schoolFacts.map((fact) => (
            <div key={fact.label} className="border-b border-r border-header/10 p-4 text-center last:border-r-0 sm:p-5 lg:border-b-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text/65">{fact.label}</p>
              <p className="mt-1.5 font-heading text-base font-semibold leading-5 text-header">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
