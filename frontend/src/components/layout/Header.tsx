/*
  src/components/layout/Header.tsx
  Sticky top bar: logo, dropdown nav, search toggle and the Get In Touch pill, with the
  scalloped bottom edge that reads as the theme's signature. Desktop nav here; the
  small-screen menu lives in MobileDrawer.
*/
import { useState } from "react";
import { NAV } from "@/data/nav";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "@/components/layout/MobileDrawer";

function Chevron() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3 shrink-0 transition-transform duration-200 group-hover:rotate-180">
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/*
        `fixed` rather than `sticky`: ScrollSmoother transforms #smooth-content, and a
        sticky child inside a transformed ancestor sticks to that ancestor, not the
        viewport. The header therefore lives outside the smoothed content.
      */}
      <header className="scallop-bottom fixed inset-x-0 top-0 z-50 bg-white [--scallop-color:#fff]">
        <div className="mx-auto flex h-[92px] max-w-[1400px] items-center justify-between gap-6 px-5 xl:px-10">
          <Logo />

          <nav className="hidden items-center gap-9 xl:flex">
            {NAV.map((item) => (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 py-8 font-heading text-[17px] font-bold text-header transition-colors duration-(--default-transition-duration) hover:text-theme"
                >
                  {item.label}
                  {item.children && <Chevron />}
                </a>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-60 -translate-y-2 rounded-2xl bg-white p-3 opacity-0 shadow-card transition-all duration-(--default-transition-duration) group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-[15px] font-medium text-text transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--color-theme)_12%,white)] hover:text-theme"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              className="hidden size-[52px] items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-header)_15%,white)] text-header transition-colors duration-(--default-transition-duration) hover:border-theme hover:text-theme lg:flex"
            >
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <Button href="/contact" className="hidden sm:inline-flex">
              Get In Touch
            </Button>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-xl text-header xl:hidden"
            >
              <span className="block h-0.5 w-6 rounded bg-current" />
              <span className="block h-0.5 w-6 rounded bg-current" />
              <span className="block h-0.5 w-4 rounded bg-current" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
