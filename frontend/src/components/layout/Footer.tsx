/*
  src/components/layout/Footer.tsx
  Provides the honest site footer with the school identity, Vadodara location, and approved sitemap links only.
*/

import { NAV } from "@/data/nav";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-bg-panel">
      <div className="mx-auto max-w-[1400px] px-5 py-14 xl:px-10 xl:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] md:items-start">
          <div>
            <Logo />
            <address className="mt-5 flex items-center gap-2 text-[0.95rem] not-italic text-text">
              <svg viewBox="0 0 24 24" className="size-[18px] shrink-0 text-theme" aria-hidden="true">
                <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="10" r="2.4" fill="currentColor" />
              </svg>
              Vadodara, Gujarat, India
            </address>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-theme">Sitemap</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-[0.95rem] sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="relative inline-block text-text transition-colors duration-(--default-transition-duration) after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-theme after:transition-transform after:duration-(--default-transition-duration) hover:text-header hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-border/25 pt-5 text-sm text-text/75">
          <p>© {new Date().getFullYear()} Vidyabhushana Gurukulam.</p>
        </div>
      </div>
    </footer>
  );
}
