/*
  src/components/motion/CountUp.tsx
  Replaces jquery.counterUp + Waypoints (main.js:153). Rolls a number up to its target
  the first time it scrolls into view, then stays put.
*/
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { COUNT_UP } from "@/lib/motion-tokens";

type CountUpProps = {
  /** Final value, e.g. 95 for "95%". */
  to: number;
  /** Rendered after the number — "%", "+", "k". */
  suffix?: string;
  className?: string;
};

export function CountUp({ to, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        el.textContent = `${to}${suffix}`;
        return;
      }

      // Tween a plain object and write the rounded value out on each frame.
      const counter = { value: 0 };
      gsap.to(counter, {
        value: to,
        duration: COUNT_UP.duration,
        ease: COUNT_UP.ease,
        scrollTrigger: { trigger: el, ...COUNT_UP.scrollTrigger, once: true },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.value)}${suffix}`;
        },
      });
    },
    { scope: ref, dependencies: [to, suffix] },
  );

  // Server-rendered/initial text is the final value so it degrades gracefully without JS.
  return (
    <span ref={ref} className={className}>
      {to}
      {suffix}
    </span>
  );
}
