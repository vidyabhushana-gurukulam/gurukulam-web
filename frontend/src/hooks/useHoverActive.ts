/*
  src/hooks/useHoverActive.ts
  The theme's "hover active" pattern (main.js:189 and main.js:843).

  Hovering an item removes `.active` from every sibling and adds it to the hovered one.
  Two details are easy to get wrong and both are deliberate in the original:

  1. It is bound to mouseenter ONLY — there is no mouseleave handler. The highlight
     therefore sticks to the last item you hovered rather than snapping back.
  2. One item starts active on load, so the section never renders with nothing highlighted.

  Used by Extra Activities, the counter blobs, the programme cards and the teacher cards.
*/
import { useState, useCallback } from "react";

export function useHoverActive(defaultIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // Stable handler factory so item props don't change identity every render.
  const hoverProps = useCallback(
    (index: number) => ({
      onMouseEnter: () => setActiveIndex(index),
      // Keyboard parity: the original is mouse-only, which strands keyboard users.
      onFocus: () => setActiveIndex(index),
    }),
    [],
  );

  return { activeIndex, hoverProps, isActive: (i: number) => i === activeIndex };
}
