/*
  src/components/motion/FloatingChild.tsx
  A transparent child cutout placed at the edge of a panel, drifting against the page as it scrolls.
  These are decorative warmth rather than content, so they are hidden from assistive technology
  and from narrow screens, where they would crowd the reading column instead of framing it.
*/
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { CUTOUT_FLOAT } from "@/lib/motion-tokens";
import { Img } from "@/components/ui/Img";
import type { MediaAsset } from "@/data/media";

type FloatingChildProps = {
  media: MediaAsset;
  /** Absolute position and width, e.g. "bottom-0 left-[4%] w-[150px]". */
  className?: string;
  /** Total vertical travel in px across the panel's scroll range. Negative rises. */
  drift?: number;
};

export function FloatingChild({ media, className = "", drift = -70 }: FloatingChildProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      gsap.fromTo(el, { y: -drift / 2 }, { y: drift / 2, ease: "none", scrollTrigger: { trigger: el, ...CUTOUT_FLOAT.scrollTrigger } });
    },
    { scope: ref, dependencies: [drift] },
  );

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute z-10 hidden select-none lg:block ${className}`}>
      {/* Grounds the cutout so it reads as standing on the panel rather than pasted onto it. */}
      <span className="absolute inset-x-[12%] bottom-1 h-3 rounded-[50%] bg-header/15 blur-md" />
      <Img src={media.src} alt="" decorative className="relative h-auto w-full drop-shadow-[0_20px_28px_rgb(27_48_87_/_0.16)]" />
    </div>
  );
}
