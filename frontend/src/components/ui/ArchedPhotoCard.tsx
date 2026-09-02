/*
  src/components/ui/ArchedPhotoCard.tsx
  The site's arched photo card: a 4:3 photograph under a tall dome, a small badge over the image,
  then a gold rule, heading and body. Shared by the homepage pillars and the Approach page's daily
  practices so the two sections cannot drift apart.
*/
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import type { MediaAsset } from "@/data/media";

type ArchedPhotoCardProps = {
  media: MediaAsset;
  /** Short label drawn over the photograph, e.g. the card's number. */
  badge: string;
  title: string;
  body: string;
  /** Heading level, so each host section keeps a correct document outline. */
  headingLevel?: "h2" | "h3";
  /** Lifted and brightened state, driven by useHoverActive in the parent list. */
  isActive?: boolean;
  onMouseEnter?: () => void;
  onFocus?: () => void;
};

export function ArchedPhotoCard({ media, badge, title, body, headingLevel: Heading = "h3", isActive = false, onMouseEnter, onFocus }: ArchedPhotoCardProps) {
  return (
    <article
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      tabIndex={0}
      className={`group flex h-full flex-col overflow-hidden rounded-b-[28px] rounded-t-[150px] border text-center outline-none transition-[transform,background-color,box-shadow,border-color] duration-(--default-transition-duration) ease-(--ease-out-back) focus-visible:ring-2 focus-visible:ring-theme ${isActive ? "-translate-y-1.5 border-theme/45 bg-white shadow-hover" : "border-header/10 bg-white/55"}`}
    >
      <PhotoFrame media={media} className="aspect-[4/3] w-full shrink-0" scrim="soft">
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/25 bg-header/65 px-4 py-1.5 font-heading text-xs font-semibold tracking-[0.22em] text-white backdrop-blur-sm">
          {badge}
        </span>
      </PhotoFrame>

      <div className="flex flex-1 flex-col items-center px-7 pb-9 pt-7">
        <span className="h-px w-10 bg-theme/55" />
        <Heading className="mt-6 font-heading text-2xl font-medium leading-tight text-header">{title}</Heading>
        <p className="mt-4 text-[16px] leading-7 text-text">{body}</p>
      </div>
    </article>
  );
}
