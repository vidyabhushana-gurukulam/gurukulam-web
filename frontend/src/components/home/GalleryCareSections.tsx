/*
  src/components/home/GalleryCareSections.tsx
  Shows the founding team's real programme photographs with precise attribution, then separates launch facilities from future plans.
*/
import { Reveal } from "@/components/motion/Reveal";
import { Img } from "@/components/ui/Img";
import { SectionIntro } from "@/components/home/SectionIntro";

type GalleryCareSectionsProps = {
  gallery: typeof import("@/data/home").GALLERY;
  facilities: typeof import("@/data/home").FACILITIES;
};

export function GalleryCareSections({ gallery, facilities }: GalleryCareSectionsProps) {
  return (
    <>
      <PhotoGallery gallery={gallery} />
      <FacilitiesCare facilities={facilities} />
    </>
  );
}

function PhotoGallery({ gallery }: Pick<GalleryCareSectionsProps, "gallery">) {
  return (
    <section id="gallery" className="bg-body px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow={gallery.eyebrow} title={gallery.title} lead={gallery.lead} headingId="gallery-title" />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
          {gallery.items.map((item, index) => (
            <Reveal key={item.src} className={index === 0 ? "group relative overflow-hidden rounded-[28px] md:row-span-2" : "group relative overflow-hidden rounded-[28px]"} delay={index * 0.07}>
              <figure className="relative size-full min-h-[330px] bg-header/5 md:min-h-[290px]">
                <Img src={item.src} alt={item.alt} className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-(--hover-zoom)" />
                <div className="absolute inset-0 bg-gradient-to-t from-header/85 via-header/5 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 text-sm leading-6 text-white sm:px-8 sm:pb-8">{item.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityCard({ title, body, planned }: { title: string; body: string; planned?: boolean }) {
  return (
    <article className={`rounded-[28px] border p-6 sm:p-7 ${planned ? "border-dashed border-header/20 bg-body/45" : "border-header/10 bg-white"}`}>
      <div className="flex items-start gap-4">
        <span className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-full ${planned ? "border border-header/15 text-header/50" : "bg-header text-white"}`}>
          {planned ? (
            <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 8v4l2.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true"><path d="m6 12 4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          )}
        </span>
        <div>
          <h3 className="font-heading text-xl font-medium text-header">{title}</h3>
          <p className={`mt-2 text-[15px] leading-6 ${planned ? "italic text-text/70" : "text-text"}`}>{body}</p>
        </div>
      </div>
    </article>
  );
}

function FacilitiesCare({ facilities }: Pick<GalleryCareSectionsProps, "facilities">) {
  return (
    <section className="overflow-x-clip bg-bg-panel px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="facilities-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro eyebrow={facilities.eyebrow} title={facilities.title} lead={facilities.lead} headingId="facilities-title" />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-[28px] bg-bg-cream p-5 sm:p-7" x={-24}>
            <div className="mb-5 flex items-center justify-between gap-4 px-1">
              <h3 className="font-heading text-xl font-medium text-header">Available at launch</h3>
              <span className="rounded-full bg-header px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-white">Launch</span>
            </div>
            <div className="flex flex-col gap-3">
              {facilities.available.map((item) => <FacilityCard key={item.title} title={item.title} body={item.body} />)}
            </div>
          </Reveal>

          <Reveal className="rounded-[28px] border border-dashed border-header/20 bg-body/65 p-5 sm:p-7" x={24}>
            <div className="mb-5 flex items-center justify-between gap-4 px-1">
              <h3 className="font-heading text-xl font-medium text-header">Future plans</h3>
              <span className="rounded-full border border-header/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-header/60">Planned</span>
            </div>
            <div className="flex flex-col gap-3">
              {facilities.planned.map((item) => <FacilityCard key={item.title} title={item.title} body={item.body} planned />)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
