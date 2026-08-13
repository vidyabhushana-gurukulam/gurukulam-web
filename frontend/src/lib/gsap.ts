/*
  src/lib/gsap.ts
  Central GSAP plugin registration. Imported once by the app shell so plugins register
  before any component tries to use them, and so double-registration can't happen.
  ScrollSmoother and SplitText became free in GSAP 3.13 and ship in the public package.
*/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

// Kidzu silences warnings for triggers that aren't on every page (main.js:942).
gsap.config({ nullTargetWarn: false });

/** True when the visitor has asked for reduced motion; every scroll effect checks this. */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText };
