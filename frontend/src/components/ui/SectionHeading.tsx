/*
  src/components/ui/SectionHeading.tsx
  The eyebrow + heading pair that opens most sections. Both lines use the theme's
  character-split reveal, with the eyebrow in the handwritten-style accent colour.
  Extracted because 10+ sections repeat this exact pair.
*/
import { SplitHeading } from "@/components/motion/SplitHeading";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** Centre for full-width sections, left for split layouts. */
  align?: "left" | "center";
  className?: string;
  /** Renders the heading at hero scale rather than section scale. */
  size?: "section" | "hero";
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
  size = "section",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <SplitHeading
          as="span"
          variant="subtitle"
          className="font-heading text-[17px] font-semibold italic tracking-wide text-theme"
        >
          {eyebrow}
        </SplitHeading>
      )}

      <SplitHeading
        as="h2"
        variant="title"
        className={
          size === "hero"
            ? "font-heading text-[clamp(2.5rem,6vw,4.375rem)] leading-[1.14] tracking-[-2px] text-header"
            : "font-heading text-[clamp(1.9rem,4vw,3rem)] leading-[1.16] text-header"
        }
      >
        {title}
      </SplitHeading>
    </div>
  );
}
