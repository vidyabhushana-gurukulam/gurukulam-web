/*
  src/components/ui/Icon.tsx
  The small line icons used beside contact routes in the footer, drawer, and contact page.
  Thin wrappers over lucide-react, kept in one file so every contact glyph carries the same
  size and stroke weight wherever a contact detail appears.
*/
import { FileText, Mail, Phone } from "lucide-react";

type IconProps = { className?: string };

const BASE = "size-[18px] shrink-0";
// Lighter than lucide's default of 2, to match the thin line work used across the site.
const STROKE = 1.7;

export function PhoneIcon({ className = "" }: IconProps) {
  return <Phone aria-hidden="true" strokeWidth={STROKE} className={`${BASE} ${className}`} />;
}

export function MailIcon({ className = "" }: IconProps) {
  return <Mail aria-hidden="true" strokeWidth={STROKE} className={`${BASE} ${className}`} />;
}

// The one glyph still drawn by hand: lucide v1 dropped every brand logo, and a social link
// needs the recognisable mark rather than a generic stand-in. Stroke matches STROKE above.
export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${BASE} ${className}`} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="7" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function DocumentIcon({ className = "" }: IconProps) {
  return <FileText aria-hidden="true" strokeWidth={STROKE} className={`${BASE} ${className}`} />;
}
