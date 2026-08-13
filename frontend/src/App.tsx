/*
  src/App.tsx
  Home page composition. Section order mirrors the Kidzu demo.
  The header sits outside SmoothScrollProvider because ScrollSmoother transforms its
  content wrapper, and a fixed element inside a transformed ancestor anchors to that
  ancestor rather than the viewport.
*/
import "@/lib/gsap";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

import { Hero } from "@/components/sections/Hero";
import { FeaturePills } from "@/components/sections/FeaturePills";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ExtraActivities } from "@/components/sections/ExtraActivities";
import { DailySchedule } from "@/components/sections/DailySchedule";
import { AdmissionCta } from "@/components/sections/AdmissionCta";
import { Teachers } from "@/components/sections/Teachers";
import { Faq } from "@/components/sections/Faq";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";
import { LatestBlog } from "@/components/sections/LatestBlog";
import { BrandStrip } from "@/components/sections/BrandStrip";

export default function App() {
  return (
    <>
      <Header />

      <SmoothScrollProvider>
        <main>
          <Hero />
          <FeaturePills />
          <About />
          <Programs />
          <WhyChooseUs />
          <ExtraActivities />
          <DailySchedule />
          <AdmissionCta />
          <Teachers />
          <Faq />
          <Testimonials />
          <Newsletter />
          <LatestBlog />
          <BrandStrip />
        </main>

        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
