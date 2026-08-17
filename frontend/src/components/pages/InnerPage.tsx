/*
  src/components/pages/InnerPage.tsx
  Provides the shared static hero and closing action used across informational routes.
  Keeps page identity consistent without repeating the homepage hero or its content.
*/
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="bg-body px-5 pb-16 pt-[132px] sm:px-8 sm:pb-20 sm:pt-[148px] lg:pb-24" aria-labelledby="page-title">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-b-[28px] rounded-t-[clamp(90px,16vw,190px)] border border-theme/30 bg-bg-panel px-7 pb-14 pt-24 text-center sm:px-12 sm:pb-18 sm:pt-28 lg:px-24 lg:pb-20 lg:pt-36">
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-[62%] -translate-x-1/2 bg-theme/65" />
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">{eyebrow}</p>
        <h1 id="page-title" className="mx-auto mt-5 max-w-[900px] font-heading text-[clamp(2.65rem,6vw,5rem)] font-medium leading-[1.04] tracking-[-0.035em] text-header">{title}</h1>
        <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-8 text-text sm:text-lg">{lead}</p>
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}

type PageCtaProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageCta({ eyebrow = "First batch · June 2027", title, body, primaryLabel = "Enquire for Admission", primaryHref = "/admissions", secondaryLabel, secondaryHref }: PageCtaProps) {
  return (
    <section className="bg-body px-5 py-20 sm:px-8 lg:py-28">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-header px-7 py-14 text-center sm:px-14 sm:py-18 lg:px-24">
        <div aria-hidden="true" className="absolute -left-20 -top-20 size-64 rounded-full border border-theme/25" />
        <div aria-hidden="true" className="absolute -bottom-24 -right-20 size-72 rounded-full border border-white/10" />
        <p className="relative font-heading text-sm font-semibold uppercase tracking-[0.18em] text-theme">{eyebrow}</p>
        <h2 className="relative mx-auto mt-4 max-w-[760px] font-heading text-[clamp(2rem,4vw,3.5rem)] font-medium leading-tight text-white">{title}</h2>
        <p className="relative mx-auto mt-5 max-w-[650px] text-[17px] leading-7 text-white/75">{body}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button href={primaryHref}>{primaryLabel}</Button>
          {secondaryLabel && secondaryHref && <Button href={secondaryHref} variant="ghost" className="border border-white/20 !text-white hover:border-theme">{secondaryLabel}</Button>}
        </div>
      </div>
    </section>
  );
}
