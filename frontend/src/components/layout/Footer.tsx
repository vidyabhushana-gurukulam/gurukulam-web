/*
  src/components/layout/Footer.tsx
  Cream footer: brand blurb and socials on the left, two branch cards on the right, with
  the teddy-bear doodle overlapping the top edge and a legal bar underneath.
*/
import { FOOTER } from "@/data/home";
import { Logo } from "@/components/ui/Logo";
import { Img } from "@/components/ui/Img";

const SOCIALS = [
  { label: "Facebook", path: "M13.5 8.5h2V6h-2c-1.7 0-3 1.3-3 3v1.5H9V13h1.5v5H13v-5h2l.5-2.5H13V9c0-.3.2-.5.5-.5z" },
  { label: "Twitter", path: "M18 7.3c-.5.2-1 .4-1.6.5.6-.4 1-.9 1.2-1.6-.5.3-1.1.6-1.8.7a2.8 2.8 0 0 0-4.8 2.6 8 8 0 0 1-5.8-3 2.8 2.8 0 0 0 .9 3.8c-.5 0-.9-.1-1.3-.3 0 1.4 1 2.5 2.3 2.8-.4.1-.9.1-1.3 0a2.8 2.8 0 0 0 2.6 2 5.6 5.6 0 0 1-4.1 1.1 8 8 0 0 0 12.3-7.1c.6-.4 1.1-.9 1.4-1.5z" },
  { label: "Vimeo", path: "M18 9c-.1 1.7-1.3 4-3.6 6.9-2.4 3-4.4 4.5-6 4.5-1 0-1.9-.9-2.6-2.8L4.4 12c-.5-1.9-1-2.8-1.6-2.8-.1 0-.5.3-1.2.8l-.7-1 2.2-2c1-.9 1.8-1.4 2.3-1.4 1.2-.1 1.9.7 2.2 2.4.3 1.9.5 3 .6 3.5.4 1.8.8 2.7 1.3 2.7.4 0 .9-.6 1.7-1.7.8-1.1 1.2-2 1.2-2.6.1-.8-.2-1.2-1-1.2-.4 0-.8.1-1.2.3.8-2.5 2.2-3.7 4.4-3.6 1.6.05 2.4 1.1 2.4 3.1z" },
  { label: "Pinterest", path: "M12 5a7 7 0 0 0-2.6 13.5c-.1-.6-.1-1.4 0-2l1.1-4.5s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.4 0 .8-.5 2-.8 3.2-.2.9.5 1.7 1.4 1.7 1.7 0 2.9-2.2 2.9-4.7 0-1.9-1.3-3.4-3.7-3.4a4.2 4.2 0 0 0-4.4 4.2c0 .8.3 1.4.7 1.8.1.1.1.2.1.4l-.2.8c0 .2-.2.3-.4.2-1.1-.5-1.7-1.8-1.7-3.3 0-2.4 2-5.3 6-5.3 3.2 0 5.3 2.3 5.3 4.8 0 3.3-1.8 5.7-4.5 5.7-.9 0-1.8-.5-2.1-1.1l-.6 2.2c-.2.7-.6 1.4-1 2A7 7 0 0 0 12 5z" },
];

export function Footer() {
  return (
    <footer className="relative mt-8 bg-bg-cream pt-24">
      {/* Rainbow arc anchored to the top-right corner. */}
      <Img src="/assets/images/misc/vec1.png" alt="" decorative className="doodle -top-6 right-[6%] w-[130px]" />

      <div className="mx-auto max-w-[1400px] px-5 pb-10 xl:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div className="relative flex flex-col gap-5">
            <Logo />
            <p className="max-w-[340px] text-[15px] text-text">{FOOTER.blurb}</p>

            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full bg-white text-header transition-colors duration-(--default-transition-duration) hover:bg-theme hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">
                    <path d={social.path} fill="currentColor" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Bear peeks in from the left margin; kept clear of the social row. */}
            <Img
              src="/assets/images/misc/bear-1.png"
              alt=""
              decorative
              className="pointer-events-none absolute -bottom-24 -left-4 hidden w-[120px] xl:block"
            />
          </div>

          {FOOTER.branches.map((branch) => (
            <div key={branch.name} className="rounded-[28px] bg-white/60 p-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-heading text-xl font-bold text-header">{branch.name}</h3>
                <Img src={branch.flag} alt="" decorative className="size-7 rounded-full object-cover" />
              </div>
              <span className="mb-5 block h-0.5 w-12 rounded bg-theme" />

              <ul className="flex flex-col gap-4 text-[15px] text-text">
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="mt-0.5 size-[18px] shrink-0 text-theme" aria-hidden="true">
                    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="10" r="2.4" fill="currentColor" />
                  </svg>
                  {branch.address}
                </li>
                <li className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="size-[18px] shrink-0 text-theme" aria-hidden="true">
                    <path d="M6.5 3.5 9 8l-2 2c.8 2 2.5 3.7 4.5 4.5l2-2 4.5 2.5v3c0 .8-.7 1.5-1.5 1.5C9.6 19.5 4.5 14.4 4.5 5 4.5 4.2 5.2 3.5 6 3.5z" fill="currentColor" />
                  </svg>
                  <a href={`tel:${branch.phone}`} className="hover:text-theme">{branch.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="size-[18px] shrink-0 text-theme" aria-hidden="true">
                    <path d="M3 6.5h18v11H3z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <path d="m3.5 7 8.5 6 8.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  <a href={`mailto:${branch.email}`} className="hover:text-theme">{branch.email}</a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <hr className="mt-14 border-t border-dashed border-header/20" />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-sm text-text">
          <p>© {new Date().getFullYear()} Kidzu. All rights reserved.</p>
          <p className="text-text/70">Replica build — placeholder content and assets.</p>
        </div>
      </div>
    </footer>
  );
}
