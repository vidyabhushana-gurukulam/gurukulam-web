/*
  src/components/home/RhythmAndKoshaSections.tsx
  Turns the approved school-day sequence and exact Pancha Kosha mapping into calm, readable visual systems.
*/
import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/home/SectionIntro";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { SCENES } from "@/data/media";

/** Positional map from the approved three-part school day to its illustrating scene. */
// One photo per block of the day: sadhana, academics, then movement.
const RHYTHM_SCENES = [SCENES.yogaClass, SCENES.abacusMaths, SCENES.kreedaFootball];

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

        <ol className="relative mt-12 grid gap-5 before:absolute before:left-[16.66%] before:right-[16.66%] before:top-[88px] before:hidden before:h-px before:bg-theme/35 before:content-[''] lg:grid-cols-3 lg:before:block">
          {dailyRhythm.slots.map((slot, index) => (
            <Reveal as="li" key={slot.time} className="relative" delay={index * 0.08}>
              <article className="group h-full rounded-[28px] border border-header/10 bg-white px-7 pb-8 pt-8 text-center transition-[transform,box-shadow,border-color] duration-(--default-transition-duration) ease-(--ease-out-back) hover:-translate-y-1 hover:border-theme/35 hover:shadow-hover sm:px-9">
                {/* The photograph sits on the timeline rule, so the three slots read as beads on one thread. */}
                <div className="relative z-10 mx-auto w-fit">
                  <PhotoFrame media={RHYTHM_SCENES[index]} className="size-[112px] rounded-full border-2 border-white shadow-[0_14px_34px_-16px_var(--color-header)]" />
                  <span className="absolute -bottom-1 -right-1 grid size-8 place-items-center rounded-full border border-theme/35 bg-bg-cream font-heading text-xs font-semibold text-theme">0{index + 1}</span>
                </div>
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

/** Disc radii, outermost first, in the diagram's 400x400 viewBox. The 32-unit step leaves each band room for its arc label. */
const KOSHA_RADII = [190, 158, 126, 94, 60];

export function PanchaKosha({ panchaKosha }: Pick<RhythmAndKoshaSectionsProps, "panchaKosha">) {
  return (
    <section id="approach" className="overflow-hidden bg-header px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="pancha-kosha-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow={panchaKosha.eyebrow} title={panchaKosha.title} lead={panchaKosha.lead} headingId="pancha-kosha-title" inverted />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <Reveal className="hidden lg:block">
            {/* SVG rather than stacked divs: only textPath can set each kosha's name on its own arc. */}
            <svg viewBox="0 0 400 400" role="img" aria-label="Five nested sheaths, from Annamaya on the outside to Anandamaya at the centre" className="mx-auto w-full max-w-[520px]">
              <defs>
                {KOSHA_RADII.slice(0, -1).map((radius, index) => {
                  const labelRadius = (radius + KOSHA_RADII[index + 1]) / 2;
                  return <path key={index} id={`kosha-arc-${index}`} fill="none" d={`M ${200 - labelRadius},200 a ${labelRadius},${labelRadius} 0 0 1 ${labelRadius * 2},0`} />;
                })}
              </defs>

              {/* Outer to inner: each disc paints over the last, leaving the visible band. */}
              {panchaKosha.items.map((item, index) => (
                <circle key={item.name} cx="200" cy="200" r={KOSHA_RADII[index]} strokeWidth="1.5" style={{ fill: `color-mix(in srgb, ${item.accent} 12%, var(--color-header))`, stroke: `color-mix(in srgb, ${item.accent} 58%, white)` }} />
              ))}

              {panchaKosha.items.slice(0, -1).map((item, index) => (
                <text key={item.name} className="fill-white font-heading text-[13px] font-semibold">
                  <textPath href={`#kosha-arc-${index}`} startOffset="50%" textAnchor="middle">{item.name} · {item.dimension}</textPath>
                </text>
              ))}

              {/* The innermost kosha is a disc, not a band, so its label sits flat at the centre. */}
              <text x="200" y="196" textAnchor="middle" className="fill-white font-heading text-[17px] font-medium">{panchaKosha.items.at(-1)?.name}</text>
              <text x="200" y="214" textAnchor="middle" className="fill-white/60 font-heading text-[10px] font-semibold uppercase tracking-[0.2em]">{panchaKosha.items.at(-1)?.dimension}</text>
            </svg>
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
