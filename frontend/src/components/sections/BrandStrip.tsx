/*
  src/components/sections/BrandStrip.tsx
  Partner logos followed by the photo gallery ribbon. Logos are greyed until hover, where
  they cross-fade to their colour version — the theme ships a matching `-hover` file per logo.
*/
import { BRANDS } from "@/data/home";
import { Img } from "@/components/ui/Img";
import { Marquee } from "@/components/ui/Marquee";

const GALLERY = [
  "/assets/images/sections/instagram-1-1-1.webp",
  "/assets/images/sections/instagram-2-1.webp",
  "/assets/images/sections/instagram-4.webp",
  "/assets/images/sections/instagram-5-1.webp",
];

export function BrandStrip() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1400px] px-5 xl:px-10">
        <div className="mb-12 flex items-center gap-6">
          <span className="h-px flex-1 bg-header/12" />
          <span className="font-heading text-[17px] font-semibold italic text-header/70">Our Other's Brand</span>
          <span className="h-px flex-1 bg-header/12" />
        </div>

        <div className="mb-16 grid grid-cols-3 items-center gap-8 sm:grid-cols-4 xl:grid-cols-7">
          {BRANDS.map((brand) => (
            <div key={brand.src} className="group relative grid h-16 place-items-center">
              <Img
                src={brand.src}
                alt=""
                decorative
                className="max-h-14 object-contain opacity-45 transition-opacity duration-(--default-transition-duration) group-hover:opacity-0"
              />
              <Img
                src={brand.hover}
                alt=""
                decorative
                className="absolute max-h-14 object-contain opacity-0 transition-opacity duration-(--default-transition-duration) group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Edge-to-edge gallery ribbon; pill-shaped crops matching the demo. */}
      <Marquee speed={38}>
        {GALLERY.concat(GALLERY).map((src, i) => (
          <Img
            key={`${src}-${i}`}
            src={src}
            alt=""
            decorative
            className="h-[170px] w-[380px] shrink-0 rounded-full object-cover"
          />
        ))}
      </Marquee>
    </section>
  );
}
