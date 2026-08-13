/*
  src/components/sections/DailySchedule.tsx
  Timetable block: heading left, group tabs right, then four tinted time-slot cards each
  headed by the pocket-watch glyph.
*/
import { useState } from "react";
import { SCHEDULE } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Tabs } from "@/components/ui/Tabs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { REVEAL } from "@/lib/motion-tokens";

export function DailySchedule() {
  const [group, setGroup] = useState(0);

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 xl:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow={SCHEDULE.eyebrow} title={SCHEDULE.title} />
        <Tabs labels={SCHEDULE.groups} active={group} onChange={setGroup} />
      </div>

      <hr className="my-10 border-t border-header/10" />

      {/* Keyed on group so switching tabs replays the reveal. */}
      <div key={group} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {SCHEDULE.slots.map((slot, i) => (
          <Reveal key={slot.time} delay={i * REVEAL.stagger}>
            <article
              className="flex h-full flex-col items-center gap-3 rounded-[32px] px-6 py-9 text-center"
              style={{ backgroundColor: slot.tint }}
            >
              <Img src="/assets/images/misc/pocket-watch.png" alt="" decorative className="size-12 object-contain" />
              <h3 className="font-heading text-[26px] font-bold text-header">{slot.time}</h3>
              <p className="text-[15px] leading-relaxed text-text">{slot.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
