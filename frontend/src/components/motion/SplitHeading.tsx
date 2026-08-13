/*
  src/components/motion/SplitHeading.tsx
  Provides the character-level reveal used by display headings while preserving readable static text on smaller screens.
  The split waits for web fonts and is reverted during cleanup so reflow and accessibility remain reliable.
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

        // Wait for Playfair Display so the split uses the final glyph metrics instead of the fallback serif.
        const run = () => {
          split = new SplitText(el, { type: "lines,words,chars", linesClass: "split-line" });

          gsap.set(split.chars, config.from);
          gsap.to(split.chars, {
            ...config.to,
            scrollTrigger: { trigger: el, ...config.scrollTrigger },
          });

          ScrollTrigger.refresh();
        };

        if (document.fonts) {
          void document.fonts.ready.then(run);
        } else {
          run();
        }

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
