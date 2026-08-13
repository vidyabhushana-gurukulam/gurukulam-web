/*
  src/components/sections/About.tsx
  Two-column about block on a pale panel: photo left, copy right with two tick chips,
  a body paragraph and a CTA row that pairs the button with a phone callout.
*/
import { ABOUT } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

function TickChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card">
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-theme text-white">
        <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
          <path d="m3.5 8.5 3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold leading-snug text-header">{label}</span>
    </div>
  );
}

export function About() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-12 xl:px-10">
      <div className="relative overflow-hidden rounded-[40px] bg-bg-panel p-6 lg:p-12">
        {/* Blue squiggle accent that sits above the heading in the original. */}
        <Img src="/assets/images/about/about-vec.png" alt="" decorative className="doodle left-[38%] top-[8%] w-[70px]" />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Img
              src={ABOUT.image}
              alt="Teacher working with two students"
              className="w-full rounded-[32px] object-cover"
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} />

            <Reveal delay={0.1}>
              <p className="text-lg text-text">{ABOUT.lead}</p>
            </Reveal>

            <Reveal delay={0.2} className="grid gap-4 sm:grid-cols-2">
              {ABOUT.points.map((point) => (
                <TickChip key={point} label={point} />
              ))}
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-text">{ABOUT.body}</p>
            </Reveal>

            <hr className="border-t border-header/10" />

            <Reveal delay={0.4} className="flex flex-wrap items-center gap-6">
              <Button href={ABOUT.cta.href}>{ABOUT.cta.label}</Button>

              <div className="flex items-center gap-3">
                <span className="grid size-[54px] place-items-center rounded-2xl bg-header text-white">
                  <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
                    <path
                      d="M6.5 3.5 9 8l-2 2c.8 2 2.5 3.7 4.5 4.5l2-2 4.5 2.5v3c0 .8-.7 1.5-1.5 1.5C9.6 19.5 4.5 14.4 4.5 5 4.5 4.2 5.2 3.5 6 3.5z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm text-text">Call Us Now</span>
                  <a href={`tel:${ABOUT.phone}`} className="font-heading text-xl font-bold text-header hover:text-theme">
                    {ABOUT.phone}
                  </a>
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* B-blocks doodle tucked into the lower right, as on the demo. */}
        <Img src="/assets/images/about/about-vec2.png" alt="" decorative className="doodle bottom-[6%] right-[4%] w-[110px]" />
      </div>
    </section>
  );
}
