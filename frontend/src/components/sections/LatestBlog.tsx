/*
  src/components/sections/LatestBlog.tsx
  Lavender band with three post cards. Date and comment count sit in outlined chips above
  the title, and the arrow button is bottom-right, as on the demo.
*/
import { BLOG } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { REVEAL } from "@/lib/motion-tokens";

function Chip({ icon, children }: { icon: "calendar" | "comment"; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-theme/35 px-3 py-1.5 text-[13px] text-text">
      <svg viewBox="0 0 24 24" className="size-4 text-theme" aria-hidden="true">
        {icon === "calendar" ? (
          <>
            <rect x="3.5" y="5" width="17" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8 3.5v3M16 3.5v3M3.5 10h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </>
        ) : (
          <path d="M4 5.5h16v10H9l-5 4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        )}
      </svg>
      {children}
    </span>
  );
}

export function LatestBlog() {
  return (
    <section className="relative overflow-hidden bg-bg-lavender py-24">
      <div className="mx-auto max-w-[1400px] px-5 xl:px-10">
        <SectionHeading eyebrow="Our Blog" title="Latest News And Blog" className="mb-14" />

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {BLOG.map((post, i) => (
            <Reveal key={post.title} delay={i * REVEAL.stagger}>
              <article className="group flex h-full flex-col gap-4 rounded-[34px] bg-white p-5 transition-[transform,box-shadow] duration-(--default-transition-duration) ease-(--ease-out-back) hover:translate-y-(--hover-lift) hover:shadow-(--shadow-hover)">
                <div className="blob-soft overflow-hidden">
                  <Img
                    src={post.image}
                    alt={post.title}
                    className="h-[210px] w-full object-cover transition-transform duration-(--default-transition-duration) group-hover:scale-(--hover-zoom)"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <Chip icon="calendar">{post.date}</Chip>
                  <Chip icon="comment">{post.comments}, Comments</Chip>
                </div>

                <h3 className="font-heading text-xl font-bold leading-snug text-header transition-colors duration-(--default-transition-duration) group-hover:text-theme">
                  {post.title}
                </h3>

                <span className="mt-auto grid size-11 place-items-center self-end rounded-full bg-bg-cream text-theme transition-all duration-(--default-transition-duration) group-hover:rotate-[-45deg] group-hover:bg-theme group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                    <path d="M5 12h13m0 0-4.5-4.5M18 12l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
