/*
  src/components/sections/FeaturePills.tsx
  The four blob tiles under the hero. Each is an organic squircle in its own pastel tint
  with a circular icon well — one of the theme's most recognisable motifs.
*/
import { FEATURES } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/motion/Reveal";
import { REVEAL } from "@/lib/motion-tokens";

export function FeaturePills() {
  return (
    <section className="relative z-10 mx-auto -mt-6 grid max-w-[1400px] gap-6 px-5 py-16 sm:grid-cols-2 xl:grid-cols-4 xl:px-10">
      {FEATURES.map((feature, i) => (
        <Reveal key={feature.label} delay={i * REVEAL.stagger}>
          <div
            className="group blob-1 flex h-[240px] cursor-pointer flex-col items-center justify-center gap-5 px-6 text-center transition-[transform,box-shadow] duration-(--default-transition-duration) ease-(--ease-out-back) hover:translate-y-(--hover-lift) hover:shadow-(--shadow-hover)"
            style={{ backgroundColor: feature.tint }}
          >
            <span className="grid size-[120px] place-items-center rounded-full bg-white/85 transition-transform duration-(--default-transition-duration) ease-(--ease-out-back) group-hover:scale-110">
              <Img src={feature.icon} alt="" decorative className="size-14 object-contain" />
            </span>
            <h3 className="font-heading text-[22px] font-bold text-header transition-colors duration-(--default-transition-duration) group-hover:text-theme">{feature.label}</h3>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
