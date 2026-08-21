/*
  src/components/layout/Footer.tsx
  Provides the site footer with the school identity, Vadodara location, sitemap, and the
  published contact routes: phone, Instagram, and the parent documents folder.
*/

import { NAV } from "@/data/nav";
import { CONTACT } from "@/data/home";
import { Logo } from "@/components/ui/Logo";
import { DocumentIcon, InstagramIcon, MailIcon, PhoneIcon } from "@/components/ui/Icon";

const LINK_CLASSES = "group/link inline-flex items-center gap-2.5 text-text transition-colors duration-(--default-transition-duration) hover:text-header focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-bg-panel">
      <div className="mx-auto max-w-[1400px] px-5 py-14 xl:px-10 xl:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-start lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]">
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
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-[0.95rem]">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="relative inline-block text-text transition-colors duration-(--default-transition-duration) after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-theme after:transition-transform after:duration-(--default-transition-duration) hover:text-header hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-theme">Get in touch</h2>
            <ul className="mt-4 flex flex-col gap-3 text-[0.95rem]">
              <li>
                <a href={CONTACT.phoneHref} className={LINK_CLASSES}>
                  <PhoneIcon className="text-theme" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className={`${LINK_CLASSES} break-all`}>
                  <MailIcon className="text-theme" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className={LINK_CLASSES}>
                  <InstagramIcon className="text-theme" />
                  {CONTACT.instagramHandle}
                  <span className="sr-only"> on Instagram (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.handbook} target="_blank" rel="noopener noreferrer" className={LINK_CLASSES}>
                  <DocumentIcon className="text-theme" />
                  Parent Handbook &amp; documents
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/25 pt-5 text-sm text-text/75">
          <p>© {new Date().getFullYear()} Vidyabhushana Gurukulam.</p>
        </div>
      </div>
    </footer>
  );
}
