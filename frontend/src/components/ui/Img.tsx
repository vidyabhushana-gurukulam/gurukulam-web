/*
  src/components/ui/Img.tsx
  Image wrapper used everywhere instead of a bare <img>. Assets in public/assets are
  mirrored placeholders and some may be absent; rather than showing a broken-image icon
  this falls back to a tinted block, so a missing file is visible during development
  without wrecking the layout.
*/
import { useState, type CSSProperties } from "react";

type ImgProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  /** Decorative images are hidden from assistive tech and never focusable. */
  decorative?: boolean;
  loading?: "lazy" | "eager";
};

export function Img({ src, alt, className = "", style, decorative = false, loading = "lazy" }: ImgProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-[color-mix(in_srgb,var(--color-header)_8%,white)] ${className}`}
        style={style}
        aria-hidden="true"
        title={`Missing placeholder: ${src}`}
      >
        <span className="px-2 text-center text-[11px] font-medium text-header/40">
          {src.split("/").pop()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      loading={loading}
      className={className}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}
