/*
  src/components/ui/Accordion.tsx
  FAQ accordion. Single-open behaviour matching the theme, with the open panel outlined
  in the accent colour. Height is animated via grid-template-rows so it works with
  content of any length without measuring.
*/
import { useState } from "react";

type AccordionItem = { q: string; a: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = i === open;

        return (
          <div
            key={item.q}
            className={[
              "overflow-hidden rounded-3xl bg-white transition-all duration-(--default-transition-duration)",
              isOpen ? "border-2 border-theme" : "border-2 border-transparent shadow-card",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
            >
              <span
                className={`font-heading text-xl font-bold ${isOpen ? "text-theme" : "text-header"}`}
              >
                {item.q}
              </span>
              <span
                className={`shrink-0 text-2xl leading-none transition-transform duration-(--default-transition-duration) ${isOpen ? "rotate-45 text-theme" : "text-header"}`}
              >
                +
              </span>
            </button>

            {/* 0fr -> 1fr animates height without a fixed pixel value. */}
            <div
              className="grid transition-[grid-template-rows] duration-(--default-transition-duration)"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-7 pb-6 text-text">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
