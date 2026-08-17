/*
  src/components/layout/Header.tsx
  Provides the fixed light site header, route navigation, admission enquiry action, and mobile navigation trigger.
*/

import { useCallback, useState } from "react";
import { NAV } from "@/data/nav";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { getCurrentPath } from "@/lib/path";

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const currentPath = getCurrentPath();

  return (
    <>
      {/* The fixed header stays outside SmoothScrollProvider so it remains anchored to the viewport. */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/30 bg-bg-panel/95 backdrop-blur-md">
        <div className="mx-auto flex h-[92px] max-w-[1400px] items-center justify-between gap-5 px-5 xl:px-10">
          <Logo />

          <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex 2xl:gap-7">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={currentPath === item.href ? "page" : undefined}
                className={`relative py-8 font-heading text-[0.95rem] font-semibold transition-colors duration-(--default-transition-duration) after:absolute after:inset-x-0 after:bottom-5 after:h-px after:origin-left after:bg-theme after:transition-transform after:duration-(--default-transition-duration) hover:text-header hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header ${currentPath === item.href ? "text-header after:scale-x-100" : "text-text/75 after:scale-x-0"}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:block">
              <Button href="/admissions" variant="secondary">
                Admission Enquiry
              </Button>
            </div>

            <button
              type="button"
              aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-navigation"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen((isOpen) => !isOpen)}
              className="group/menu flex size-11 flex-col items-center justify-center gap-1.5 rounded-full border border-border/40 text-header transition-[border-color,background-color] duration-(--default-transition-duration) hover:border-theme hover:bg-bg-cream focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header xl:hidden"
            >
              <span className="block h-0.5 w-5 rounded bg-current transition-transform duration-(--default-transition-duration) group-hover/menu:translate-x-0.5" />
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="mr-1.5 block h-0.5 w-3.5 rounded bg-current transition-[width] duration-(--default-transition-duration) group-hover/menu:w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={closeDrawer} />
    </>
  );
}
