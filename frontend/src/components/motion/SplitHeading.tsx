/*
  src/components/motion/SplitHeading.tsx
  Character-level heading reveal, ported 1:1 from the theme's main.js (lines 961-1038).
  Two variants exist in the original: "subtitle" (the small script eyebrow) and "title"
  (the large section heading), which differ in start opacity, direction and trigger point.

  Two behaviours from the original are deliberately preserved:
  - Gated to >=1200px via gsap.matchMedia. Splitting text on mobile breaks reflow and
    makes the heading unreadable to screen readers, so small screens get static text.
  - The split is reverted on cleanup, restoring the original DOM.
*/
import { useRef, type ElementType, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { SPLIT_BREAKPOINT, SPLIT_SUBTITLE, SPLIT_TITLE } from "@/lib/motion-tokens";

type SplitHeadingProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: "title" | "subtitle";
};

export function SplitHeading({ children, as, className, variant = "title" }: SplitHeadingProps) {
  const Tag = as ?? "h2";
  const ref = useRef<HTMLElement>(null);
  const config = variant === "subtitle" ? SPLIT_SUBTITLE : SPLIT_TITLE;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const mm = gsap.matchMedia();

      mm.add(SPLIT_BREAKPOINT, () => {
        let split: SplitText | null = null;

        /*
          Split only after webfonts settle. Quicksand loads async, and splitting against
          the fallback metrics leaves characters visibly misplaced when the real font swaps in.
        */
        const run = () => {
          split = new SplitText(el, { type: "lines,words,chars", linesClass: "split-line" });

          gsap.set(split.chars, config.from);
          gsap.to(split.chars, {
            ...config.to,
            scrollTrigger: { trigger: el, ...config.scrollTrigger },
          });

          ScrollTrigger.refresh();
        };

        document.fonts?.ready.then(run) ?? run();

        return () => split?.revert();
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
