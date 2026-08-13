/*
  src/components/layout/SmoothScrollProvider.tsx
  Wraps the page in the #smooth-wrapper / #smooth-content pair ScrollSmoother requires
  (main.js:939-955). `smooth: 2` is the 2-second scroll catch-up that gives the theme its
  weighted feel — it is the single biggest contributor to how the original reads.
*/
import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, prefersReducedMotion } from "@/lib/gsap";
import { SMOOTHER } from "@/lib/motion-tokens";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Smoothing hijacks native scrolling, so skip it entirely for reduced-motion users.
    if (prefersReducedMotion()) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      ...SMOOTHER,
    });

    return () => smoother.kill();
  }, { scope: wrapper });

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}
