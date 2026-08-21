/*
  src/components/ui/Icon.tsx
  The small line icons used beside contact routes in the footer, drawer, and contact page.
  Kept in one file so the same phone, Instagram, and document glyphs are drawn identically
  wherever a contact detail appears.
*/
type IconProps = { className?: string };

const BASE = "size-[18px] shrink-0";

export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${BASE} ${className}`} aria-hidden="true">
      <path d="M7.5 3.5h-3a1 1 0 0 0-1 1.1A16.4 16.4 0 0 0 19.4 20.5a1 1 0 0 0 1.1-1v-3a1 1 0 0 0-.8-1l-2.7-.55a1 1 0 0 0-1 .35l-1 1.25a12.6 12.6 0 0 1-5.5-5.5l1.25-1a1 1 0 0 0 .35-1L8.5 4.3a1 1 0 0 0-1-.8Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${BASE} ${className}`} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7.5 8 5 8-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
  return (
    <svg viewBox="0 0 24 24" className={`${BASE} ${className}`} aria-hidden="true">
      <path d="M14 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M14 3.5V8h4.5M8.75 12.5h6.5M8.75 16h4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
