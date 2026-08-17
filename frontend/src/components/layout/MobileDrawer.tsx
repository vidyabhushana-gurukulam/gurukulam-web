/*
  src/components/layout/MobileDrawer.tsx
  Provides an accessible small-screen drawer with section links, focus management, and keyboard dismissal.
*/

import { useEffect, useRef } from "react";
import { NAV } from "@/data/nav";
import { Logo } from "@/components/ui/Logo";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const focusableElements = Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? []);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);
      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close navigation menu"
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-header/45 transition-opacity duration-(--default-transition-duration) xl:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <aside
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[min(360px,90vw)] flex-col overflow-y-auto border-l border-border/30 bg-bg-panel p-6 shadow-card transition-[transform,visibility] duration-(--default-transition-duration) xl:hidden ${open ? "visible translate-x-0" : "invisible translate-x-full"}`}
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className="group/close grid size-10 shrink-0 place-items-center rounded-full border border-border/40 text-header transition-[border-color,transform] duration-(--default-transition-duration) hover:rotate-3 hover:border-theme focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header"
          >
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <h2 id="mobile-navigation-title" className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-theme">
          Menu
        </h2>

        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-border/25">
                <a href={item.href} onClick={onClose} className="flex items-center py-4 font-heading text-lg font-semibold text-header transition-colors duration-(--default-transition-duration) hover:text-theme focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header">
                  {item.label}
                </a>

                {!!item.children?.length && (
                  <ul className="mb-3 border-l border-border/30 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} onClick={onClose} className="block py-2 text-[0.95rem] text-text/70 transition-colors duration-(--default-transition-duration) hover:text-theme">
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href="#admissions" onClick={onClose} className="mt-8 inline-flex items-center justify-center rounded-full bg-header px-7 py-4 font-body text-[1.05rem] font-semibold leading-none text-white transition-[transform,box-shadow] duration-(--default-transition-duration) ease-(--ease-out-back) hover:translate-y-(--hover-lift-sm) hover:shadow-(--shadow-hover) focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header">
          Admission Enquiry
        </a>

        <p className="mt-auto pt-10 text-sm text-text">Vadodara, Gujarat</p>
      </aside>
    </>
  );
}
