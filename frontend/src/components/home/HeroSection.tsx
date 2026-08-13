/*
  src/components/home/HeroSection.tsx
  Introduces the Gurukulam inside the signature Vidya Tulsi arch with real programme photography and a focused admissions path.
*/
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { GoldRule } from "@/components/home/SectionIntro";

type HeroSectionProps = {
  site: typeof import("@/data/home").SITE;
  hero: typeof import("@/data/home").HERO;
};

export function HeroSection({ site, hero }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-body px-4 pb-20 pt-[132px] sm:px-6 lg:pb-28 lg:pt-[148px]" aria-labelledby="home-hero-title">
      <div aria-hidden="true" className="absolute left-[4%] top-[22%] size-32 rounded-full border border-theme/20 sm:size-48" />
      <div aria-hidden="true" className="absolute right-[5%] top-[14%] size-16 rotate-45 rounded-[24px] border border-header/10 sm:size-24" />

      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-b-[28px] rounded-t-[clamp(150px,24vw,330px)] border border-theme/45 bg-bg-cream px-5 pb-5 pt-20 shadow-[0_28px_90px_-60px_var(--color-header)] sm:px-9 sm:pb-9 sm:pt-32 lg:px-14 lg:pb-14 lg:pt-40">
        <div className="mx-auto flex w-full min-w-0 max-w-[920px] flex-col items-center text-center">
          <Reveal className="hidden sm:block">
            <span className="inline-flex max-w-full items-center justify-center rounded-full border border-theme/35 bg-white/70 px-4 py-2 text-center font-heading text-sm font-semibold leading-5 tracking-wide whitespace-normal text-header backdrop-blur-sm">
              {site.admissions}
            </span>
          </Reveal>

          <SplitHeading as="span" variant="subtitle" className="mt-4 w-full font-heading text-sm font-semibold uppercase leading-6 tracking-[0.2em] text-theme sm:mt-7">
            {hero.eyebrow}
          </SplitHeading>
          <SplitHeading as="h1" variant="title" className="mt-4 w-full min-w-0 whitespace-pre-line font-heading text-[clamp(2.65rem,6vw,5.25rem)] font-medium leading-[1.03] tracking-[-0.045em] text-header">
            <span id="home-hero-title">{hero.title}</span>
          </SplitHeading>
          <GoldRule className="my-5 sm:my-6" />

          <Reveal className="w-full" delay={0.08}>
            <p className="mx-auto max-w-[730px] text-[18px] leading-8 text-text sm:text-xl">{hero.body}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8">
              <Button href={hero.primaryCta.href} variant="secondary">{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="ghost">{hero.secondaryCta.label}</Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative mt-8 overflow-hidden rounded-[28px] bg-header/5 sm:mt-16" y={36}>
          <Img src={hero.image} alt={hero.imageAlt} loading="eager" className="aspect-[4/5] w-full object-cover object-[50%_22%] sm:aspect-[16/9] lg:aspect-[16/7]" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-header/75 to-transparent px-5 pb-5 pt-20 text-white sm:px-8 sm:pb-7">
            <p className="max-w-[520px] text-sm font-medium leading-5 sm:text-base">{site.experience.statLabel}</p>
            <p className="hidden text-right text-sm text-white/80 sm:block">{site.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
