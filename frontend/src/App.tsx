/*
  src/App.tsx
  Composes the Vidyabhushana Gurukulam homepage inside the shared motion and layout shell.
  The fixed header remains outside the transformed smooth-scroll content.
*/
import "@/lib/gsap";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { HomePage } from "@/components/home/HomePage";

export default function App() {
  return (
    <>
      <Header />

      <SmoothScrollProvider>
        <main>
          <HomePage />
        </main>

        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
