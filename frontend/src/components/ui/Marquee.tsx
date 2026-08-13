/*
  src/components/ui/Marquee.tsx
  The horizontally scrolling "Our Programs / Classes" band. Duplicates its children so
  the loop has no visible seam, and pauses for reduced-motion users.
*/
import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  /** Seconds for one full pass. Larger is slower. */
  speed?: number;
  reverse?: boolean;
  className?: string;
};

export function Marquee({ children, speed = 28, reverse = false, className = "" }: MarqueeProps) {
  return (
    <div className={`relative flex w-full overflow-hidden ${className}`} aria-hidden="true">
      {/* Two identical tracks side by side; translating one full width loops seamlessly. */}
      {[0, 1].map((i) => (
        <div
          key={i}
          className="flex shrink-0 items-center gap-8 whitespace-nowrap will-change-transform motion-reduce:animate-none"
          style={{
            animation: `marquee-scroll ${speed}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
