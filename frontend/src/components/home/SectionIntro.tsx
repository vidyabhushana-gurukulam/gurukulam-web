/*
  src/components/home/SectionIntro.tsx
  Provides the calm, centred heading rhythm shared by the real homepage sections.
*/
import { SplitHeading } from "@/components/motion/SplitHeading";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
  headingId?: string;
  inverted?: boolean;
};

export function SectionIntro({ eyebrow, title, lead, align = "center", className = "", headingId, inverted = false }: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";
  const headingColor = inverted ? "text-white" : "text-header";
  const bodyColor = inverted ? "text-white/75" : "text-text";

  return (
    <div className={`flex max-w-[760px] flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <SplitHeading as="span" variant="subtitle" className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">
          {eyebrow}
        </SplitHeading>
      )}
      <SplitHeading as="h2" variant="title" className={`font-heading text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.025em] ${headingColor}`}>
        <span id={headingId}>{title}</span>
      </SplitHeading>
      {lead && <p className={`max-w-[680px] text-[17px] leading-7 ${bodyColor}`}>{lead}</p>}
    </div>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="h-px w-10 bg-theme/45" />
      <span className="size-1.5 rotate-45 rounded-[2px] bg-theme" />
      <span className="h-px w-10 bg-theme/45" />
    </span>
  );
}
