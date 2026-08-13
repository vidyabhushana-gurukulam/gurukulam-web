/*
  src/components/motion/RotateOnScroll.tsx
  The decorative circles that rotate 0->180deg as you scroll past them
  (`.bz-gsap-animate-circle`, main.js:1119-1143). Scrubbed, so the rotation tracks
  scroll position rather than playing on a timer.
*/
import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ROTATE_CIRCLE } from "@/lib/motion-tokens";

type RotateOnScrollProps = {
  children: ReactNode;
  className?: string;
};

export function RotateOnScroll({ children, className }: RotateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      // The original checks reduced-motion per element and simply pins rotation at 0.
      if (prefersReducedMotion()) {
        gsap.set(el, { rotate: 0 });
        return;
      }

      gsap
        .timeline({ scrollTrigger: { trigger: el, ...ROTATE_CIRCLE.scrollTrigger } })
        .set(el, { transformOrigin: "50% 50%" })
        .fromTo(el, ROTATE_CIRCLE.from, ROTATE_CIRCLE.to);
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
