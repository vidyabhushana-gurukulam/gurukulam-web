/*
  src/components/sections/Hero.tsx
  Opening section: cream field, scattered doodle layer, split copy/photo layout and the
  cloud edge that hands off to the next section. The doodles are absolutely positioned
  siblings rather than background images so they can animate independently.
*/
import { HERO } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { CloudDivider } from "@/components/ui/CloudDivider";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";

/*
  Decorative doodles, matched to the live demo's placement. Each filename was verified
  against a rendered contact sheet — the names are not descriptive on their own
  (shape-1 is a bee, shape-4 is the ABC blocks).
*/
const DOODLES = [
  { src: "/assets/shapes/shape-1.png", className: "left-[7%] top-[14%] w-[72px]", label: "bee" },
  { src: "/assets/shapes/shape-2.png", className: "left-[48%] top-[8%] w-[150px]", label: "rainbow" },
  { src: "/assets/shapes/shape-5.png", className: "right-[4%] top-[10%] w-[135px]", label: "pencil" },
  /* Car sits above the cloud edge, so it needs a bottom offset clear of it. */
  { src: "/assets/shapes/shape-3.png", className: "left-[31%] bottom-[26%] w-[100px]", label: "car" },
  { src: "/assets/shapes/star1-1.png", className: "left-[53%] top-[5%] w-[22px]", label: "star" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-cream pt-[92px]">
      {DOODLES.map((d) => (
        <Img key={d.src} src={d.src} alt="" decorative className={`doodle ${d.className}`} loading="eager" />
      ))}

      {/*
        Asymmetric split rather than 50/50: the headline needs ~740px to hold
        "Nurturing Young Minds" on one line at 70px, as it does on the demo.
      */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 px-5 pb-32 pt-16 lg:grid-cols-[minmax(0,745px)_1fr] lg:pb-32 xl:px-10">
        <div className="flex flex-col items-start gap-6">
          <SplitHeading
            as="span"
            variant="subtitle"
            className="font-heading text-[17px] font-semibold uppercase italic tracking-[0.08em] text-theme"
          >
            {HERO.eyebrow}
          </SplitHeading>

          {/* Hero headline keeps the theme's hard line break rather than wrapping naturally. */}
          <SplitHeading
            as="h1"
            variant="title"
            className="whitespace-pre-line font-heading text-[clamp(2.5rem,6.2vw,4.375rem)] font-bold leading-[1.14] tracking-[-2px] text-header"
          >
            {HERO.title}
          </SplitHeading>

          <Reveal delay={0.15}>
            <p className="max-w-[520px] text-lg text-text">{HERO.body}</p>
          </Reveal>

          <Reveal delay={0.3} className="flex flex-wrap gap-4 pt-2">
            <Button href={HERO.primaryCta.href}>{HERO.primaryCta.label}</Button>
            <Button href={HERO.secondaryCta.href} variant="secondary">
              {HERO.secondaryCta.label}
            </Button>
          </Reveal>
        </div>

        {/*
          Layering here is deliberate and was the thing most obviously wrong before:
          the ABC-blocks stack must read as sitting BESIDE and slightly in front of the
          child's lower body, not hidden behind her. So the photo is pushed right within
          the column, and the blocks occupy the freed lower-left with a higher z-index
          than the photo's lower half.
        */}
        <div className="relative flex min-h-[560px] items-end justify-end">
          <Img
            src={HERO.image}
            alt="Student holding a globe"
            loading="eager"
            className="relative z-10 max-h-[620px] w-auto object-contain"
          />

          <Img
            src="/assets/shapes/shape-4.png"
            alt=""
            decorative
            className="doodle bottom-0 left-0 z-20 w-[46%] max-w-[280px]"
          />
        </div>
      </div>

      {/*
        Cloud edge closing the section. Topmost layer, so the photo and doodles tuck
        behind it, and tinted to the NEXT section's colour so it reads as a handoff
        rather than a second band.
      */}
      <CloudDivider color="var(--color-body)" className="z-30" />
    </section>
  );
}
