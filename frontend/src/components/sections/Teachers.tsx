/*
  src/components/sections/Teachers.tsx
  Staff carousel. Each card is a dashed blob outline containing a colour-blocked cutout,
  matching the demo's `.team-slider` (main.js:444). Pagination bullets sit underneath.
*/
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { TEACHERS } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useHoverActive } from "@/hooks/useHoverActive";

export function Teachers() {
  // `.team-main-items` hover-active (main.js:843) — sticky, mouseenter only.
  const { hoverProps, isActive } = useHoverActive(0);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-[1400px] px-5 xl:px-10">
        <SectionHeading eyebrow="Honorable Teacher's" title="Our Expert Teacher" align="center" className="mb-14" />

        <Img src="/assets/images/misc/vec8.png" alt="" decorative className="doodle right-[12%] top-[16%] w-[62px]" />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
          className="!pb-14"
        >
          {TEACHERS.map((teacher, i) => (
            <SwiperSlide key={teacher.name}>
              <article
                {...hoverProps(i)}
                tabIndex={0}
                className={`blob-outline group rounded-[40px] bg-white p-4 text-center transition-transform duration-(--default-transition-duration) ease-(--ease-out-back) ${
                  isActive(i) ? "translate-y-(--hover-lift-sm)" : ""
                }`}
              >
                <div
                  className="blob-1 mb-5 overflow-hidden transition-[border-radius] duration-500"
                  style={{ backgroundColor: teacher.tint }}
                >
                  <Img
                    src={teacher.image}
                    alt={teacher.name}
                    className={`h-[290px] w-full object-contain transition-transform duration-500 ease-out ${
                      isActive(i) ? "scale-[1.06]" : "scale-100"
                    }`}
                  />
                </div>

                <h3 className="font-heading text-xl font-bold text-header">{teacher.name}</h3>
                <p className="pb-2 text-[15px] text-text">{teacher.role}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper's bullets are square by default; the theme uses tinted ovals. */}
      <style>{`
        .swiper-pagination-bullet {
          width: 14px; height: 18px; border-radius: 50%;
          background: transparent; border: 2px solid var(--color-theme);
          opacity: .35; transition: opacity .3s, background .3s;
        }
        .swiper-pagination-bullet-active { background: var(--color-theme); opacity: 1; }
      `}</style>
    </section>
  );
}
