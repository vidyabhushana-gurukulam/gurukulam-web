/*
  src/components/ui/Tabs.tsx
  Pill tab strip used by "Why Choose Our School" and "Our Daily Schedule". Controlled
  by the parent so each section owns its own panel rendering.
*/
type TabsProps = {
  labels: string[];
  active: number;
  onChange: (index: number) => void;
  className?: string;
};

export function Tabs({ labels, active, onChange, className = "" }: TabsProps) {
  return (
    <div role="tablist" className={`flex flex-wrap gap-3 ${className}`}>
      {labels.map((label, i) => (
        <button
          key={label}
          role="tab"
          aria-selected={i === active}
          onClick={() => onChange(i)}
          className={[
            "rounded-full px-5 py-2.5 text-[15px] font-semibold",
            "transition-colors duration-(--default-transition-duration)",
            i === active
              ? "bg-theme text-white"
              : "bg-[color-mix(in_srgb,var(--color-header)_8%,white)] text-header hover:bg-[color-mix(in_srgb,var(--color-theme)_18%,white)]",
          ].join(" ")}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
