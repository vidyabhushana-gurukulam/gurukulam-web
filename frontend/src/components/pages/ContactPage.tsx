/*
  src/components/pages/ContactPage.tsx
  Presents the published contact routes — phone, Instagram, and the parent documents folder —
  alongside the confirmed Vadodara location. The exact campus address stays marked as pending.
*/
import { PageCta, PageHero } from "@/components/pages/InnerPage";
import { DocumentIcon, InstagramIcon, MailIcon, PhoneIcon } from "@/components/ui/Icon";
import { CONTACT } from "@/data/home";

const CONTACT_ROUTES = [
  {
    label: "Call the Gurukulam",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
    note: "Speak with the team directly about admissions.",
    Icon: PhoneIcon,
    external: false,
  },
  {
    label: "Email the office",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    note: "Written enquiries and document requests.",
    Icon: MailIcon,
    external: false,
  },
  {
    label: "Follow on Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
    note: "Updates, celebrations, and news from the Gurukulam.",
    Icon: InstagramIcon,
    external: true,
  },
  {
    label: "Parent Handbook",
    value: "Handbook & documents",
    href: CONTACT.handbook,
    note: "Admissions, daily routine, curriculum, fees, and facilities.",
    Icon: DocumentIcon,
    external: true,
  },
];

export function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Connect with Vidyabhushana Gurukulam" lead="The Gurukulam is opening in Vadodara, Gujarat, with its first batch beginning in June 2027." />

      <section className="bg-bg-panel px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="contact-details-title">
        <div className="mx-auto grid max-w-[1100px] overflow-hidden rounded-[28px] border border-header/10 bg-white lg:grid-cols-2">
          <div className="flex min-h-[360px] flex-col justify-center bg-header px-8 py-12 text-white sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-theme">Location</p>
            <h2 id="contact-details-title" className="mt-5 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-medium leading-tight text-white">Vadodara, Gujarat, India</h2>
            <p className="mt-5 max-w-[430px] text-[17px] leading-7 text-white/70">The Gurukulam is on Gotri Road. The exact campus address and map will be published once the campus details are confirmed.</p>
          </div>

          <div className="flex min-h-[360px] flex-col justify-center gap-3 px-6 py-10 sm:px-10 sm:py-12">
            {CONTACT_ROUTES.map(({ label, value, href, note, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-start gap-4 rounded-[22px] border border-header/10 bg-body/50 p-4 transition-[transform,border-color,background-color] duration-(--default-transition-duration) hover:-translate-y-0.5 hover:border-theme/40 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-header sm:p-5"
              >
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-bg-cream text-theme">
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold uppercase tracking-[0.14em] text-text/65">{label}</span>
                  <span className="mt-1 block break-words font-heading text-lg font-medium leading-6 text-header">
                    {value}
                    {external && <span className="sr-only"> (opens in a new tab)</span>}
                  </span>
                  <span className="mt-1 block text-[14px] leading-5 text-text">{note}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Learn what families can expect at launch" body="The Parent Guide covers timings, school format, transport, meals, facilities, and frequently asked questions." primaryLabel="Read the Parent Guide" primaryHref="/parent-guide" secondaryLabel="View Admissions" secondaryHref="/admissions" />
    </>
  );
}
