/*
  src/components/pages/ContactPage.tsx
  Presents the confirmed Vadodara location while clearly marking public contact details as pending.
*/
import { PageCta, PageHero } from "@/components/pages/InnerPage";

export function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Connect with Vidyabhushana Gurukulam" lead="The Gurukulam is opening in Vadodara, Gujarat, with its first batch beginning in June 2027." />

      <section className="bg-bg-panel px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="contact-details-title">
        <div className="mx-auto grid max-w-[1100px] overflow-hidden rounded-[28px] border border-header/10 bg-white lg:grid-cols-2">
          <div className="flex min-h-[360px] flex-col justify-center bg-header px-8 py-12 text-white sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-theme">Location</p>
            <h2 id="contact-details-title" className="mt-5 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-medium leading-tight text-white">Vadodara, Gujarat, India</h2>
            <p className="mt-5 max-w-[430px] text-[17px] leading-7 text-white/70">The exact campus address and map will be published after the campus details are confirmed.</p>
          </div>
          <div className="flex min-h-[360px] flex-col justify-center px-8 py-12 sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-theme">Public contact details</p>
            <h2 className="mt-5 font-heading text-3xl font-medium text-header">Being finalised</h2>
            <p className="mt-5 text-[17px] leading-7 text-text">The school's official phone number, WhatsApp number, and email address have not yet been confirmed for publication.</p>
            <div className="mt-7 rounded-[22px] border border-theme/25 bg-bg-cream p-5 text-[15px] leading-6 text-header">We will show direct contact actions here as soon as the official details are approved.</div>
          </div>
        </div>
      </section>

      <PageCta title="Learn what families can expect at launch" body="The Parent Guide covers timings, school format, transport, meals, facilities, and frequently asked questions." primaryLabel="Read the Parent Guide" primaryHref="/parent-guide" secondaryLabel="View Admissions" secondaryHref="/admissions" />
    </>
  );
}
