/*
  src/components/layout/MobileDrawer.tsx
  Replaces jquery.meanmenu. Slide-in panel with collapsible submenus, a backdrop, and
  body-scroll locking while open (the theme toggles a `.locked` class for the same reason).
*/
import { useEffect, useState } from "react";
import { NAV } from "@/data/nav";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Lock background scrolling while the drawer is open, and restore on close/unmount.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the drawer — meanmenu had no keyboard path at all.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-header/45 transition-opacity duration-(--default-transition-duration) xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-[70] flex w-[min(340px,88vw)] flex-col overflow-y-auto bg-white p-6 shadow-card transition-transform duration-(--default-transition-duration) xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="size-10 rounded-full text-3xl leading-none text-header transition-colors hover:text-theme"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col">
          {NAV.map((item) => {
            const isOpen = expanded === item.label;

            return (
              <div key={item.label} className="border-b border-[color-mix(in_srgb,var(--color-header)_10%,white)]">
                <button
                  type="button"
                  onClick={() => (item.children ? setExpanded(isOpen ? null : item.label) : onClose())}
                  aria-expanded={item.children ? isOpen : undefined}
                  className="flex w-full items-center justify-between py-4 text-left font-heading text-[17px] font-bold text-header"
                >
                  {item.label}
                  {item.children && (
                    <span className={`text-xl transition-transform duration-200 ${isOpen ? "rotate-45 text-theme" : ""}`}>
                      +
                    </span>
                  )}
                </button>

                {item.children && (
                  <div
                    className="grid transition-[grid-template-rows] duration-(--default-transition-duration)"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col pb-3 pl-3">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={onClose}
                            className="py-2 text-[15px] text-text transition-colors hover:text-theme"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <Button href="/contact" className="mt-8 justify-center">
          Get In Touch
        </Button>
      </aside>
    </>
  );
}
