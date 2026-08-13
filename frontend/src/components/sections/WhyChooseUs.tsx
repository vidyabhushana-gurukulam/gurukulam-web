/*
  src/components/sections/WhyChooseUs.tsx
  Tabbed feature block (Facilities / Curriculum / Mission) beside a cloud-masked photo,
  followed by the four counter blobs. The 95% blob carries a photo fill rather than a
  flat tint, matching the demo.
*/
import { useState } from "react";
import { CHOOSE_US, STATS } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { useHoverActive } from "@/hooks/useHoverActive";
import { CountUp } from "@/components/motion/CountUp";
import { REVEAL } from "@/lib/motion-tokens";

export function WhyChooseUs() {
  const [tab, setTab] = useState(0);
  const active = CHOOSE_US.tabs[tab];

  /*
    The photo-filled blob is the `.counter-box-items.active` one (main.js:189), so the
    fill follows the cursor. Safe Playground starts active, as on the demo.
  */
  const { hoverProps, isActive } = useHoverActive(1);

  return (
    <section className="relative mx-auto max-w-[1400px] px-5 py-24 xl:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow={CHOOSE_US.eyebrow} title={CHOOSE_US.title} />

          <Tabs labels={CHOOSE_US.tabs.map((t) => t.label)} active={tab} onChange={setTab} />

          <hr className="border-t border-header/10" />

          {/* Keyed on the tab so the panel re-reveals when the selection changes. */}
          <Reveal key={tab} className="flex flex-col gap-6">
            <p className="text-lg text-text">{active.body}</p>

            <ul className="grid gap-4 sm:grid-cols-2">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <svg viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-theme" aria-hidden="true">
                    <path d="m2.5 8.5 3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-semibold text-header">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <hr className="border-t border-header/10" />

          <div className="flex flex-wrap gap-4">
            <Button href="/contact">{CHOOSE_US.cta.primary}</Button>
            <Button href="/contact" variant="secondary">
              {CHOOSE_US.cta.secondary}
            </Button>
          </div>
        </div>

        <Reveal delay={0.15} className="relative">
          <Img
            src="/assets/images/sections/choose-us.webp"
            alt="Teacher and children in a classroom"
            className="blob-2 w-full object-cover"
          />
          <Img src="/assets/shapes/choose-us-shape1.png" alt="" decorative className="doodle -left-6 top-8 w-[90px]" />
        </Reveal>
      </div>

      {/* Counter blobs. */}
      <div className="mt-24 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat, i) => {
          const isImage = isActive(i);

          return (
            <Reveal key={stat.label} delay={i * REVEAL.stagger}>
              <div
                {...hoverProps(i)}
                tabIndex={0}
                className="blob-3 relative grid h-[230px] cursor-pointer place-items-center overflow-hidden text-center transition-transform duration-(--default-transition-duration) ease-(--ease-out-back) hover:translate-y-(--hover-lift)"
                style={{ backgroundColor: stat.tint }}
              >
                {/* Photo is always mounted and cross-fades, so the swap doesn't flash. */}
                <Img
                  src="/assets/images/sections/counter-bg.webp"
                  alt=""
                  decorative
                  className={`absolute inset-0 size-full object-cover transition-opacity duration-(--default-transition-duration) ${
                    isImage ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div
                  className={`relative z-10 flex flex-col items-center justify-center gap-1 transition-all duration-(--default-transition-duration) ${
                    isImage ? "size-[150px] rounded-full bg-bg-cream/95" : "size-[150px] rounded-full bg-transparent"
                  }`}
                >
                  <span className="font-heading text-[40px] font-bold leading-none text-header">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[15px] text-text">{stat.label}</span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
