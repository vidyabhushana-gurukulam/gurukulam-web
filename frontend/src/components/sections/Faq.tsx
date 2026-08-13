/*
  src/components/sections/Faq.tsx
  Pale band pairing a cloud-outlined portrait with the question accordion.
*/
import { FAQ } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Faq() {
  return (
    <section className="relative overflow-hidden bg-bg-panel-alt py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 lg:grid-cols-2 xl:px-10">
        <Reveal className="relative">
          {/* Hand-drawn cloud sits behind the portrait. */}
          <Img src="/assets/shapes/faq-shape.png" alt="" decorative className="doodle -left-4 top-4 w-[75%]" />
          <Img
            src={FAQ.image}
            alt="Student holding coloured books"
            className="relative z-10 w-full object-contain"
          />
        </Reveal>

        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow={FAQ.eyebrow} title={FAQ.title} />
          <p className="text-text">{FAQ.lead}</p>
          <Accordion items={FAQ.items} />
        </div>
      </div>
    </section>
  );
}
