/*
  src/components/ui/Logo.tsx
  Renders the official horizontal Vidyabhushana Gurukulam vector lockup in shared site chrome.
*/

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const filter = variant === "light" ? "brightness(0) invert(1)" : "brightness(0) saturate(100%) invert(17%) sepia(27%) saturate(1354%) hue-rotate(177deg) brightness(89%) contrast(93%)";

  return (
    <a href="/" className={`group/logo inline-flex items-center ${className}`} aria-label="Vidyabhushana Gurukulam home">
      <img src="/brand/vidyabhushana-horizontal.svg" alt="Vidyabhushana Gurukulam" className="h-[66px] w-[172px] object-contain object-left transition-[transform,filter] duration-(--default-transition-duration) ease-(--ease-out-back) group-hover/logo:scale-[1.02] sm:w-[210px]" style={{ filter }} />
    </a>
  );
}
