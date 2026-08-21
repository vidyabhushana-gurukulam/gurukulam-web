/*
  src/components/ui/PhotoFrame.tsx
  The single way photography enters the site: an image held inside an architectural frame,
  uncovered by a bottom-up wipe on first view and drifting slowly as the page scrolls.
  Every framed photograph on the homepage goes through here so the treatment never drifts apart.
*/
import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { PHOTO_DRIFT, PHOTO_REVEAL } from "@/lib/motion-tokens";
import { Img } from "@/components/ui/Img";
import type { MediaAsset } from "@/data/media";

type PhotoFrameProps = {
  media: MediaAsset;
  /** Frame shape and size. Pass the radius, aspect ratio, and any sizing utilities here. */
  className?: string;
  /** Navy scrim for frames that carry text on top of the image. */
  scrim?: "none" | "soft" | "strong";
  /** Skip lazy loading for a frame close enough to the fold that a late fetch would be visible. */
  eager?: boolean;
  /** Rendered over the image, above the scrim. */
  children?: ReactNode;
};

const SCRIMS = {
  none: "",
  soft: "bg-gradient-to-t from-header/55 via-header/10 to-transparent",
  strong: "bg-gradient-to-t from-header/85 via-header/55 to-header/25",
} as const;

export function PhotoFrame({ media, className = "", scrim = "none", eager = false, children }: PhotoFrameProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const frame = ref.current;
      const image = frame?.querySelector("img");
      if (!frame || !image) return;

      // Reduced motion keeps the composition but removes the movement entirely.
      if (prefersReducedMotion()) {
        gsap.set(frame, { clipPath: "none" });
        gsap.set(image, { yPercent: 0, scale: 1 });
        return;
      }

      gsap.fromTo(frame, { ...PHOTO_REVEAL.from }, {
        ...PHOTO_REVEAL.to,
        // The rectangular clip is only needed while the wipe runs; leaving it set would
        // otherwise fight the frame's own border-radius on rounded and arched frames.
        onComplete: () => gsap.set(frame, { clipPath: "none" }),
        scrollTrigger: { trigger: frame, ...PHOTO_REVEAL.scrollTrigger },
      });

      gsap.fromTo(image, { ...PHOTO_DRIFT.from }, { ...PHOTO_DRIFT.to, scrollTrigger: { trigger: frame, ...PHOTO_DRIFT.scrollTrigger } });
    },
    { scope: ref, dependencies: [media.src] },
  );

  return (
    <div ref={ref} className={`relative overflow-hidden bg-bg-cream ${className}`}>
      {/* Scaled past the frame so the scroll drift can never expose an edge. */}
      <Img
        src={media.src}
        alt={media.alt}
        loading={eager ? "eager" : "lazy"}
        className="absolute inset-0 size-full scale-[1.12] object-cover"
      />
      {scrim !== "none" && <div aria-hidden="true" className={`absolute inset-0 ${SCRIMS[scrim]}`} />}
      {children}
    </div>
  );
}
