/*
  src/components/sections/Testimonials.tsx
  Parent quotes as speech bubbles — a cream card with a CSS tail, avatar overlapping the
  top edge. Carousel mirrors the demo's `.testimonial-slider` (main.js:620).
*/
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { TESTIMONIALS } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-[1400px] px-5 xl:px-10">
        <SectionHeading eyebrow="Testimonials" title="Parents Talk About Our School" className="mb-16" />

        <Img src="/assets/images/misc/plane.png" alt="" decorative className="doodle right-[6%] top-[4%] w-[110px]" />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
          className="!pb-14 !pt-12"
        >
          {TESTIMONIALS.map((item, i) => (
            <SwiperSlide key={i}>
              <figure className="relative rounded-[34px] bg-bg-cream px-7 pb-10 pt-14 text-center">
                {/* Avatar breaks out over the bubble's top edge. */}
                <Img
                  src={item.avatar}
                  alt=""
                  decorative
                  className="absolute -top-10 left-1/2 size-[86px] -translate-x-1/2 rounded-full object-cover ring-4 ring-white"
                />

                <figcaption className="mb-2 font-heading text-lg font-bold text-header">{item.name}</figcaption>
                <blockquote className="text-[15px] leading-relaxed text-text">{item.body}</blockquote>

                {/* Speech-bubble tail, drawn with a rotated square rather than an image. */}
                <span className="absolute -bottom-3 left-1/2 size-7 -translate-x-1/2 rotate-45 rounded-br-lg bg-bg-cream" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
