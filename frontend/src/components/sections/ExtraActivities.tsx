/*
  src/components/sections/ExtraActivities.tsx
  Pale-blue band listing the three extracurriculars as wide rows. Rows alternate between
  white and accent fills, and slide in from the right using the theme's approach-box tween.
*/
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ACTIVITIES } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { useHoverActive } from "@/hooks/useHoverActive";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { APPROACH_BOXES } from "@/lib/motion-tokens";

export function ExtraActivities() {
  const scope = useRef<HTMLDivElement>(null);
  // Row 2 (Music & Dance) carries the accent on load, as on the demo.
  const { hoverProps, isActive } = useHoverActive(1);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const boxes = scope.current?.querySelectorAll(".activity-row");
      if (!boxes?.length) return;

      // Matches main.js:1098 — staggered slide-in, scrubbed against the wrapper.
      gsap.from(boxes, {
        ...APPROACH_BOXES.from,
        duration: APPROACH_BOXES.duration,
        stagger: APPROACH_BOXES.stagger,
        ease: APPROACH_BOXES.ease,
        scrollTrigger: { trigger: scope.current, ...APPROACH_BOXES.scrollTrigger },
      });
    },
    { scope },
  );

  return (
    <section className="relative overflow-hidden bg-bg-sky py-24">
      <div className="mx-auto max-w-[1400px] px-5 xl:px-10">
        <p className="mb-2 text-center font-heading text-[17px] font-semibold italic text-theme">
          Our Extra Activities
        </p>
        <SplitHeading
          as="h2"
          className="mb-14 text-center font-heading text-[clamp(1.9rem,4vw,3rem)] font-bold text-header"
        >
          Our Extra Activities For Kids
        </SplitHeading>

        <div ref={scope} className="flex flex-col gap-6 overflow-hidden">
          {ACTIVITIES.map((activity, i) => {
            /*
              Accent follows the cursor (main.js:189) rather than being fixed to row 2.
              Row 2 is merely the one that starts active, matching the demo's initial state.
            */
            const accent = isActive(i);

            return (
              <article
                key={activity.no}
                {...hoverProps(i)}
                tabIndex={0}
                className={`activity-row group/row grid items-center gap-6 rounded-[32px] p-6 transition-colors duration-(--default-transition-duration) lg:grid-cols-[200px_1fr_1fr] ${
                  accent ? "bg-theme text-white" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-heading text-[42px] font-bold leading-none ${accent ? "text-white/45" : "text-theme/35"}`}
                  >
                    {activity.no}
                  </span>
                  <h3 className={`font-heading text-2xl font-bold ${accent ? "text-white" : "text-header"}`}>
                    {activity.title}
                  </h3>
                </div>

                {/*
                  The zoom needs overflow-hidden, but the arrow badge deliberately sits
                  outside the frame — so clipping is scoped to an inner wrapper only.
                */}
                <div className="relative">
                  <div className="blob-soft overflow-hidden">
                    <Img
                      src={activity.image}
                      alt={activity.title}
                      className="h-[150px] w-full object-cover transition-transform duration-(--default-transition-duration) group-hover/row:scale-(--hover-zoom)"
                    />
                  </div>

                  <span
                    className={`absolute -right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full transition-all duration-(--default-transition-duration) group-hover/row:translate-x-1 ${
                      accent ? "bg-white text-theme" : "bg-theme text-white"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                      <path d="M5 12h13m0 0-4.5-4.5M18 12l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                <p className={accent ? "text-white/90" : "text-text"}>{activity.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
