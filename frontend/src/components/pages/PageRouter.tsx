/*
  src/components/pages/PageRouter.tsx
  Maps clean public paths to page components without adding a routing dependency.
  Titles and descriptions live in data/routes.json so this router and the build-time
  prerender script cannot disagree about what a route is called.
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
import ROUTE_META from "@/data/routes.json";

const PAGES: Record<string, ComponentType> = {
  "/": HomePage,
  "/about": AboutPage,
  "/approach": ApproachPage,
  "/curriculum": CurriculumPage,
  "/inspiration": InspirationPage,
  "/parent-guide": ParentGuidePage,
  "/admissions": AdmissionsPage,
  "/contact": ContactPage,
};

export function PageRouter() {
  const path = getCurrentPath();
  const Page = PAGES[path] ?? NotFoundPage;
  const meta = (ROUTE_META as Record<string, { title: string; description: string }>)[path];

  useEffect(() => {
    document.title = meta?.title ?? "Page not found | Vidyabhushana Gurukulam";
  }, [meta?.title]);

  return <Page />;
}
