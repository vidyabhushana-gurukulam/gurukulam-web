/*
  src/App.tsx
  Composes the active Vidyabhushana Gurukulam route inside the shared motion and layout shell.
  The fixed header remains outside the transformed smooth-scroll content.
*/
import "@/lib/gsap";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { PageRouter } from "@/components/pages/PageRouter";

export default function App() {
  return (
    <>
      <Header />

      <SmoothScrollProvider>
        <main>
          <PageRouter />
        </main>

        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
