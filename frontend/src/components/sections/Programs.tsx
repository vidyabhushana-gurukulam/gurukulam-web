/*
  src/components/sections/Programs.tsx
  Lavender band with a scrolling "Our Programs / Classes" marquee headline, then three
  age-badged programme cards inside a dashed blob outline.
*/
import { PROGRAMS } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { useHoverActive } from "@/hooks/useHoverActive";
import { REVEAL } from "@/lib/motion-tokens";

export function Programs() {
  // `.program-box-items-2` uses the same sticky hover-active pattern (main.js:189).
  const { hoverProps, isActive } = useHoverActive(0);

  return (
    <section className="relative overflow-hidden bg-bg-lavender py-24">
      <p className="mb-3 text-center font-heading text-[17px] font-semibold italic text-theme">Our Programs</p>

      {/* Marquee repeats the phrase with a star separator, as in the original. */}
      <Marquee speed={26} className="mb-14">
        {["Our Programs / Classes", "Our Programs / Classes"].map((text, i) => (
          <span key={i} className="flex items-center gap-8">
            <Img src="/assets/shapes/star1-1.png" alt="" decorative className="size-9" />
            <span className="font-heading text-[clamp(2.2rem,5.5vw,4rem)] font-bold text-header">{text}</span>
          </span>
        ))}
      </Marquee>

      <div className="mx-auto max-w-[1400px] px-5 xl:px-10">
        <div className="blob-outline rounded-[48px]">
          <div className="grid gap-7 p-8 md:grid-cols-2 xl:grid-cols-3">
            {PROGRAMS.map((program, i) => (
              <Reveal key={program.title} delay={i * REVEAL.stagger}>
                <article
                  {...hoverProps(i)}
                  tabIndex={0}
                  className={`group flex h-full flex-col items-center gap-4 rounded-[36px] p-5 text-center transition-[transform,box-shadow] duration-(--default-transition-duration) ease-(--ease-out-back) hover:translate-y-(--hover-lift) hover:shadow-(--shadow-hover) ${
                    isActive(i) ? "shadow-(--shadow-hover)" : ""
                  }`}
                  style={{ backgroundColor: program.tint }}
                >
                  <div className="relative w-full">
                    <div className="blob-soft overflow-hidden">
                      <Img
                        src={program.image}
                        alt={program.title}
                        className="h-[190px] w-full object-cover transition-transform duration-(--default-transition-duration) group-hover:scale-(--hover-zoom)"
                      />
                    </div>
                    {/* Age badge straddles the image's lower edge. */}
                    <span className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-theme px-4 py-1.5 text-sm font-semibold text-white">
                      {program.age}
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading text-xl font-bold text-header">{program.title}</h3>
                  <p className="text-[15px] leading-relaxed text-text">{program.body}</p>

                  <span className="mt-auto rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-header">
                    Duration : {program.duration}
                  </span>

                  <span className="grid size-11 place-items-center rounded-full bg-white/80 text-header transition-all duration-(--default-transition-duration) group-hover:rotate-[-45deg] group-hover:bg-theme group-hover:text-white">
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                      <path d="M5 12h13m0 0-4.5-4.5M18 12l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
