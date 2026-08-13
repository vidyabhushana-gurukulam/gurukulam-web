/*
  src/components/ui/Logo.tsx
  Renders the temporary token-driven Vidyabhushana crest and wordmark until the designer-supplied vector lockup is ready.
*/

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

const PETAL_ROTATIONS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330] as const;

function CrestMark() {
  return (
    <svg viewBox="0 0 100 100" className="size-12 shrink-0 transition-transform duration-(--default-transition-duration) ease-(--ease-out-back) group-hover/logo:scale-[1.04] group-hover/logo:rotate-2" aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="var(--color-bg-panel)" stroke="var(--color-header)" strokeWidth="2.6" />
      <circle cx="50" cy="50" r="42.5" fill="none" stroke="var(--color-theme)" strokeWidth="1" />

      <g>
        <path d="M25 76C13 66 12 45 23 27" fill="none" stroke="var(--color-theme)" strokeWidth="1.2" strokeLinecap="round" />
        <g fill="var(--color-theme)">
          <ellipse cx="21.5" cy="69" rx="2.2" ry="4.6" transform="rotate(-38 21.5 69)" />
          <ellipse cx="17.6" cy="60" rx="2.2" ry="4.6" transform="rotate(-22 17.6 60)" />
          <ellipse cx="16" cy="50" rx="2.2" ry="4.6" transform="rotate(-6 16 50)" />
          <ellipse cx="17.2" cy="40" rx="2.2" ry="4.6" transform="rotate(12 17.2 40)" />
          <ellipse cx="20.6" cy="31" rx="2.2" ry="4.6" transform="rotate(28 20.6 31)" />
          <circle cx="24.6" cy="64" r="1.5" />
          <circle cx="21.4" cy="45" r="1.5" />
          <circle cx="25" cy="35" r="1.5" />
        </g>
      </g>

      <g transform="translate(100 0) scale(-1 1)">
        <path d="M25 76C13 66 12 45 23 27" fill="none" stroke="var(--color-theme)" strokeWidth="1.2" strokeLinecap="round" />
        <g fill="var(--color-theme)">
          <ellipse cx="21.5" cy="69" rx="2.2" ry="4.6" transform="rotate(-38 21.5 69)" />
          <ellipse cx="17.6" cy="60" rx="2.2" ry="4.6" transform="rotate(-22 17.6 60)" />
          <ellipse cx="16" cy="50" rx="2.2" ry="4.6" transform="rotate(-6 16 50)" />
          <ellipse cx="17.2" cy="40" rx="2.2" ry="4.6" transform="rotate(12 17.2 40)" />
          <ellipse cx="20.6" cy="31" rx="2.2" ry="4.6" transform="rotate(28 20.6 31)" />
          <circle cx="24.6" cy="64" r="1.5" />
          <circle cx="21.4" cy="45" r="1.5" />
          <circle cx="25" cy="35" r="1.5" />
        </g>
      </g>

      <g fill="var(--color-theme)">
        {PETAL_ROTATIONS.map((rotation) => (
          <ellipse key={rotation} cx="50" cy="25" rx="3.1" ry="5.4" transform={`rotate(${rotation} 50 38)`} />
        ))}
      </g>
      <circle cx="50" cy="38" r="8.6" fill="var(--color-theme)" />
      <path d="M50 31.6 55.4 38 50 44.4 44.6 38Z" fill="var(--color-header)" />

      <g fill="var(--color-theme)">
        <path d="M23 74C32 64 44 66 49.2 71.5V81C44 75.5 32 73.5 23 83Z" />
        <path d="M77 74C68 64 56 66 50.8 71.5V81C56 75.5 68 73.5 77 83Z" />
      </g>
    </svg>
  );
}

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const titleColor = variant === "light" ? "text-white" : "text-header";
  const detailColor = variant === "light" ? "text-white/70" : "text-text";

  return (
    <a href="/" className={`group/logo inline-flex items-center gap-2.5 ${className}`} aria-label="Vidyabhushana Gurukulam home">
      {/* This crest is an implementation placeholder, not the final designer-supplied brand asset. */}
      <CrestMark />
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-[clamp(1rem,2vw,1.25rem)] font-semibold tracking-[-0.02em] transition-colors duration-(--default-transition-duration) group-hover/logo:text-theme ${titleColor}`}>
          Vidyabhushana
        </span>
        <span className={`mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${detailColor}`}>Gurukulam</span>
      </span>
    </a>
  );
}
