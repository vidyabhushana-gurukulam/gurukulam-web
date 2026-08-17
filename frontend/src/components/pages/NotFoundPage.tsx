/*
  src/components/pages/NotFoundPage.tsx
  Gives unknown URLs a branded recovery path back to the site's primary destinations.
*/
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/pages/InnerPage";

export function NotFoundPage() {
  return (
    <PageHero eyebrow="Page not found" title="This page does not exist" lead="The address may have changed, or the link may be incomplete.">
      <Button href="/">Return Home</Button>
      <Button href="/contact" variant="ghost">Contact</Button>
    </PageHero>
  );
}
