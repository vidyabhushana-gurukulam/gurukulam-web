/*
  src/components/motion/Reveal.tsx
  Replaces WOW.js. The Kidzu theme puts `.wow fadeInUp` on 54 separate nodes; this one
  component covers all of them, reading its timing from lib/motion-tokens.ts.
  Wrap anything that should rise into view on scroll.
*/
import { useRef, type ElementType, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { REVEAL } from "@/lib/motion-tokens";

type RevealProps = {
  children: ReactNode;
  /** Rendered element. Defaults to a div; pass "li"/"section" to keep markup semantic. */
  as?: ElementType;
  className?: string;
  /** Seconds of delay. For a row of sibling cards pass `index * REVEAL.stagger`. */
  delay?: number;
  /** Travel distance in px. Negative values reveal downward. */
  y?: number;
  /** Horizontal travel, for the sideways card entrances. */
  x?: number;
};

export function Reveal({ children, as, className, delay = 0, y, x }: RevealProps) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      // Reduced motion: show the content immediately rather than animating it in.
      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0, x: 0 });
        return;
      }

      gsap.from(el, {
        ...REVEAL.from,
        ...(y !== undefined ? { y } : {}),
        ...(x !== undefined ? { x } : {}),
        duration: REVEAL.duration,
        ease: REVEAL.ease,
        delay,
        scrollTrigger: { trigger: el, ...REVEAL.scrollTrigger },
      });
    },
    { scope: ref, dependencies: [delay, y, x] },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
