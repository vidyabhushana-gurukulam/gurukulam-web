/*
  src/components/pages/PageRouter.tsx
  Maps clean public paths to page components without adding a routing dependency.
  Centralises route titles so each page announces its identity to browsers and assistive technology.
*/
import { useEffect, type ComponentType } from "react";
import { HomePage } from "@/components/home/HomePage";
import { AboutPage } from "@/components/pages/AboutPage";
import { AdmissionsPage } from "@/components/pages/AdmissionsPage";
import { ApproachPage } from "@/components/pages/ApproachPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { CurriculumPage } from "@/components/pages/CurriculumPage";
import { InspirationPage } from "@/components/pages/InspirationPage";
import { NotFoundPage } from "@/components/pages/NotFoundPage";
import { ParentGuidePage } from "@/components/pages/ParentGuidePage";
import { getCurrentPath } from "@/lib/path";

type RouteDefinition = {
  title: string;
  component: ComponentType;
};

const ROUTES: Record<string, RouteDefinition> = {
  "/": { title: "Vidyabhushana Gurukulam", component: HomePage },
  "/about": { title: "About | Vidyabhushana Gurukulam", component: AboutPage },
  "/approach": { title: "Our Approach | Vidyabhushana Gurukulam", component: ApproachPage },
  "/curriculum": { title: "Curriculum | Vidyabhushana Gurukulam", component: CurriculumPage },
  "/inspiration": { title: "Our Inspiration | Vidyabhushana Gurukulam", component: InspirationPage },
  "/parent-guide": { title: "Parent Guide | Vidyabhushana Gurukulam", component: ParentGuidePage },
  "/admissions": { title: "Admissions | Vidyabhushana Gurukulam", component: AdmissionsPage },
  "/contact": { title: "Contact | Vidyabhushana Gurukulam", component: ContactPage },
};

export function PageRouter() {
  const route = ROUTES[getCurrentPath()];
  const Page = route?.component ?? NotFoundPage;

  useEffect(() => {
    document.title = route?.title ?? "Page not found | Vidyabhushana Gurukulam";
  }, [route?.title]);

  return <Page />;
}
