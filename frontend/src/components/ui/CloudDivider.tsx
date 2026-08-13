/*
  src/components/ui/CloudDivider.tsx
  The puffy cloud edge between sections.

  The theme ships these as PNGs, but every mirrored one is tinted lavender because they
  were cut for the lavender bands — there is no white variant to reuse for the hero. So
  the shape is drawn as SVG instead: it takes any token colour, stretches to any width
  without resampling, and costs nothing to re-theme in Phase 2.

  `color` should be the colour of the section the divider hands off TO, since the clouds
  read as that section pushing up into this one.
*/

type CloudDividerProps = {
  /** Any CSS colour; pass a token such as `var(--color-body)`. */
  color?: string;
  /** Which edge of the parent to pin to. */
  position?: "bottom" | "top";
  /** Rendered height in px. The demo's edges sit around 70–90px. */
  height?: number;
  className?: string;
};

/*
  One tile of overlapping arcs. preserveAspectRatio="none" lets it stretch horizontally
  while keeping the declared height, so a single path covers any viewport width.
*/
const CLOUD_PATH =
  "M0 100 L0 62 C 40 62, 44 30, 90 30 C 120 30, 128 52, 150 52 C 172 52, 180 18, 226 18 C 268 18, 276 46, 300 46 C 330 46, 336 24, 380 24 C 424 24, 430 56, 460 56 C 486 56, 494 34, 540 34 C 586 34, 592 62, 620 62 L 620 100 Z";

export function CloudDivider({
  color = "var(--color-body)",
  position = "bottom",
  height = 82,
  className = "",
}: CloudDividerProps) {
  const edge = position === "bottom" ? "bottom-0" : "top-0 rotate-180";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${edge} w-full overflow-hidden ${className}`}
      style={{ height }}
    >
      <svg
        viewBox="0 0 620 100"
        preserveAspectRatio="none"
        className="size-full"
        // Tiled horizontally so the arc rhythm stays consistent on ultrawide screens.
        style={{ display: "block" }}
      >
        <path d={CLOUD_PATH} fill={color} />
      </svg>
    </div>
  );
}
