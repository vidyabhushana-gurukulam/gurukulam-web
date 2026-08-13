/*
  src/components/sections/Newsletter.tsx
  Signup band: photographic background under a navy wash, inside a dashed frame, with a
  giraffe and paper-plane doodle breaking the edges.
*/
import { useState } from "react";
import { Img } from "@/components/ui/Img";
import { Reveal } from "@/components/motion/Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative mx-auto max-w-[1400px] px-5 py-16 xl:px-10">
      <Reveal className="relative">
        {/* Doodles sit outside the rounded panel, so they're siblings not children. */}
        <Img src="/assets/images/misc/zirap2.png" alt="" decorative className="doodle -left-2 bottom-6 z-20 w-[110px]" />
        <Img src="/assets/shapes/vac-shape-1.png" alt="" decorative className="doodle -right-3 -top-4 w-[80px]" />

        <div className="relative overflow-hidden rounded-[46px]">
          <Img
            src="/assets/images/sections/cta-newsletter-bg.webp"
            alt=""
            decorative
            className="absolute inset-0 size-full object-cover"
          />
          {/* Wash keeps the white headline legible over a busy photograph. */}
          <div className="absolute inset-0 bg-header/65" />

          <div className="relative z-10 px-6 py-20">
            <div className="mx-auto max-w-[760px] rounded-[36px] border-2 border-dashed border-theme/70 p-8 text-center">
              <p className="mb-2 font-heading text-[17px] font-semibold italic text-white/90">Newsletter</p>
              <h2 className="mb-8 font-heading text-[clamp(1.8rem,4vw,2.75rem)] font-bold text-white">
                Sign Up To Our Newsletter
              </h2>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mx-auto flex max-w-[620px] items-center gap-2 rounded-full bg-white p-2"
              >
                <span className="pl-4 text-text" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="size-5">
                    <path d="M3 6.5h18v11H3z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <path d="m3.5 7 8.5 6 8.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent py-3 text-text outline-none placeholder:text-text/70"
                />

                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-theme px-7 py-3.5 font-semibold text-white transition-all duration-(--default-transition-duration) hover:brightness-105"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
