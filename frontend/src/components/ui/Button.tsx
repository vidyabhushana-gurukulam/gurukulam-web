/*
  src/components/ui/Button.tsx
  The theme's pill button in two flavours: filled orange (primary) and filled navy
  (secondary), both carrying a circled arrow.

  Hover is three coordinated moves rather than one blunt effect:
  - the pill lifts with a slight overshoot,
  - a lighter wash sweeps across from the left,
  - the arrow slides right and its ring fills.
  All distances come from the tokens in styles/tokens.css.
*/
import { ArrowRight } from "lucide-react";

import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  /** Hide the trailing arrow for form submits and compact placements. */
  withArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

const VARIANTS = {
  primary: "bg-theme text-white",
  secondary: "bg-header text-white",
  ghost: "bg-transparent text-header hover:text-theme",
} as const;

function ArrowGlyph() {
  return (
    <span className="relative grid size-[22px] shrink-0 place-items-center">
      {/* Ring fills on hover, so the arrow reads as inverting rather than just moving. */}
      <span className="absolute inset-0 rounded-full border-[1.5px] border-current transition-all duration-(--default-transition-duration) group-hover/btn:scale-110 group-hover/btn:bg-white/25" />
      <ArrowRight aria-hidden="true" strokeWidth={2.2} className="relative size-3.5 transition-transform duration-(--default-transition-duration) group-hover/btn:translate-x-(--hover-arrow-shift)" />
    </span>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  withArrow = true,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = [
    "group/btn relative isolate inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5",
    "font-body text-[17px] font-semibold leading-none",
    "transition-[transform,box-shadow] duration-(--default-transition-duration) ease-(--ease-out-back)",
    "hover:translate-y-(--hover-lift-sm) hover:shadow-(--shadow-hover)",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header",
    VARIANTS[variant],
    className,
  ].join(" ");

  const content = (
    <>
      {/*
        Wash sweeps left-to-right beneath the label. `isolate` + -z-10 keeps it under
        the text without a stacking-context fight with the parent section.
      */}
      {variant !== "ghost" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 -translate-x-full bg-white/20 transition-transform duration-500 ease-out group-hover/btn:translate-x-0"
        />
      )}
      <span className="relative">{children}</span>
      {withArrow && <ArrowGlyph />}
    </>
  );

  if (href) {
    // Detected rather than passed as a prop, so an off-site destination can never ship
    // without rel="noopener" just because a call site forgot to flag it.
    const isExternal = /^https?:\/\//.test(href);

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
        {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
