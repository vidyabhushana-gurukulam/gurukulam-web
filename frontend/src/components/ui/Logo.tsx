/*
  src/components/ui/Logo.tsx
  Renders the mirrored theme logo, falling back to an inline star wordmark if the file
  is absent. The inline mark draws from the colour tokens, so it also serves as the
  starting point for the Phase 2 identity swap.
*/
import { useState } from "react";

type LogoProps = {
  className?: string;
  /** Inverts the wordmark for dark backgrounds. */
  variant?: "dark" | "light";
};

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const [failed, setFailed] = useState(false);
  const wordColor = variant === "light" ? "text-white" : "text-header";

  return (
    <a href="/" className={`inline-flex items-center gap-2 ${className}`} aria-label="Kidzu home">
      {failed ? (
        <>
          <svg viewBox="0 0 40 40" className="size-9 shrink-0" aria-hidden="true">
            <path
              d="M20 3.5l4.4 9.6 10.4 1.2-7.8 7 2.2 10.3L20 26.3l-9.2 5.3L13 21.3l-7.8-7 10.4-1.2z"
              fill="var(--color-theme)"
            />
          </svg>
          <span className={`font-heading text-[34px] font-bold leading-none tracking-tight ${wordColor}`}>
            Kidzu
          </span>
        </>
      ) : (
        <img
          src="/assets/icons/black-logo.svg"
          alt="Kidzu"
          className={`h-11 w-auto ${variant === "light" ? "brightness-0 invert" : ""}`}
          onError={() => setFailed(true)}
        />
      )}
    </a>
  );
}
