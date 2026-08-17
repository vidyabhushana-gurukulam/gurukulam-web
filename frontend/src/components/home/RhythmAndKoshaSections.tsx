/*
  src/components/home/RhythmAndKoshaSections.tsx
  Turns the approved school-day sequence and exact Pancha Kosha mapping into calm, readable visual systems.
*/
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/home/SectionIntro";

type RhythmAndKoshaSectionsProps = {
  dailyRhythm: typeof import("@/data/home").DAILY_RHYTHM;
  panchaKosha: typeof import("@/data/home").PANCHA_KOSHA;
};

export function RhythmAndKoshaSections({ dailyRhythm, panchaKosha }: RhythmAndKoshaSectionsProps) {
  return (
    <>
      <DailyRhythm dailyRhythm={dailyRhythm} />
      <PanchaKosha panchaKosha={panchaKosha} />
    </>
  );
}

export function DailyRhythm({ dailyRhythm }: Pick<RhythmAndKoshaSectionsProps, "dailyRhythm">) {
  return (
    <section className="bg-body px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="daily-rhythm-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow={dailyRhythm.eyebrow} title={dailyRhythm.title} lead={dailyRhythm.lead} headingId="daily-rhythm-title" />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {dailyRhythm.groups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.07}>
              <div className="rounded-full border border-header/10 bg-bg-cream px-5 py-3 text-center shadow-[0_8px_30px_-24px_var(--color-header)] sm:px-7">
                <p className="font-heading text-base font-semibold text-header">{group.label} · <span className="text-theme">{group.timing}</span></p>
                <p className="mt-0.5 text-sm text-text">{group.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <ol className="relative mt-12 grid gap-5 before:absolute before:left-[16.66%] before:right-[16.66%] before:top-12 before:hidden before:h-px before:bg-theme/35 before:content-[''] lg:grid-cols-3 lg:before:block">
          {dailyRhythm.slots.map((slot, index) => (
            <Reveal as="li" key={slot.time} className="relative" delay={index * 0.08}>
              <article className="group h-full rounded-[28px] border border-header/10 bg-white px-7 pb-8 pt-7 text-center transition-[transform,box-shadow,border-color] duration-(--default-transition-duration) ease-(--ease-out-back) hover:-translate-y-1 hover:border-theme/35 hover:shadow-hover sm:px-9">
                <span className="relative z-10 mx-auto grid size-11 place-items-center rounded-full border border-theme/30 bg-bg-cream font-heading text-sm font-semibold text-theme">0{index + 1}</span>
                <p className="mt-6 font-heading text-lg font-semibold text-theme">{slot.time}</p>
                <h3 className="mt-3 font-heading text-2xl font-medium text-header">{slot.title}</h3>
                <p className="mt-4 text-[16px] leading-7 text-text">{slot.body}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PanchaKosha({ panchaKosha }: Pick<RhythmAndKoshaSectionsProps, "panchaKosha">) {
  return (
    <section id="approach" className="overflow-hidden bg-header px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="pancha-kosha-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow={panchaKosha.eyebrow} title={panchaKosha.title} lead={panchaKosha.lead} headingId="pancha-kosha-title" inverted />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <Reveal className="hidden lg:block">
            <div role="img" aria-label="Five nested layers representing the five koshas" className="relative mx-auto aspect-square w-full max-w-[530px] rounded-full bg-white/[0.035]">
              {panchaKosha.items.map((item, index) => (
                <div key={item.name} className="absolute flex items-start justify-center rounded-full border-2" style={{ inset: `${index * 8}%`, zIndex: index + 1, borderColor: `color-mix(in srgb, ${item.accent} 58%, white)`, background: `color-mix(in srgb, ${item.accent} 12%, var(--color-header))`, boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.08)" }}>
                  <span className="mt-2 rounded-full bg-header/90 px-3 py-1 text-center font-heading text-[clamp(0.7rem,1.1vw,0.9rem)] font-semibold leading-tight text-white">
                    {item.name} · {item.dimension}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <ol className="flex flex-col gap-3">
            {panchaKosha.items.map((item, index) => (
              <Reveal as="li" key={item.name} delay={index * 0.055} x={24}>
                <article className="grid gap-3 rounded-[28px] border border-white/10 bg-white/[0.065] px-6 py-5 backdrop-blur-sm transition-colors duration-(--default-transition-duration) hover:bg-white/[0.095] sm:grid-cols-[minmax(150px,0.8fr)_1.2fr] sm:items-center sm:px-7" style={{ borderLeftColor: item.accent, borderLeftWidth: 3 }}>
                  <div>
                    <p className="font-heading text-xl font-medium text-white">{item.name}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.13em] text-white/65"><span aria-hidden="true" className="size-2 rounded-full" style={{ backgroundColor: item.accent }} />{item.dimension}</p>
                  </div>
                  <p className="text-[15px] leading-6 text-white/75">{item.activities}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
