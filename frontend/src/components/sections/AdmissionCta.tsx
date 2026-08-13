/*
  src/components/sections/AdmissionCta.tsx
  Full-bleed photo band with an offset orange card holding the enquiry prompt. The card
  is a white panel inside a dashed orange frame, as on the demo.
*/
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ABOUT } from "@/data/home";

export function AdmissionCta() {
  return (
    <section className="relative overflow-hidden">
      <Img
        src="/assets/images/sections/book-admission-bg.webp"
        alt=""
        decorative
        className="absolute inset-0 size-full object-cover"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-24 xl:px-10">
        <Reveal className="max-w-[520px]">
          <div className="rounded-[40px] bg-theme p-3">
            <div className="rounded-[34px] border-2 border-dashed border-white/70 p-2">
              <div className="rounded-[28px] bg-white px-9 py-11">
                <p className="mb-1 font-heading text-[17px] font-semibold italic text-theme">Daily</p>

                <SplitHeading
                  as="h2"
                  className="mb-7 font-heading text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-tight text-header"
                >
                  Book Admission For Your Child
                </SplitHeading>

                <div className="mb-8 flex items-center gap-3">
                  <span className="grid size-[54px] place-items-center rounded-2xl bg-theme text-white">
                    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
                      <path
                        d="M6.5 3.5 9 8l-2 2c.8 2 2.5 3.7 4.5 4.5l2-2 4.5 2.5v3c0 .8-.7 1.5-1.5 1.5C9.6 19.5 4.5 14.4 4.5 5 4.5 4.2 5.2 3.5 6 3.5z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm text-text">Call Us Now</span>
                    <a href={`tel:${ABOUT.phone}`} className="font-heading text-xl font-bold text-header hover:text-theme">
                      {ABOUT.phone}
                    </a>
                  </span>
                </div>

                <Button href="/contact">Enroll Now</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
