export type MdsBadgeProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
  color?: "Gray" | "Primary" | "Secondary" | "Error" | "Warning" | "Info" | "Success" | "None";
  icon?: "None" | "Dot" | "Counter" | "X close";
  className?: string;
};

const colorMap: Record<string, string> = {
  Gray: "bg-[var(--mds-neutral-50)] text-[var(--mds-neutral-700)]",
  Primary: "bg-[var(--mds-brand-50)] text-[var(--mds-brand-900)]",
  Secondary: "bg-[var(--mds-neutral-100)] text-[var(--mds-neutral-700)]",
  Error: "bg-[var(--mds-danger-50)] text-[var(--mds-danger)]",
  Warning: "bg-[#fff6e5] text-[#a15c00]",
  Info: "bg-[#e6f0fb] text-[#0a5c94]",
  Success: "bg-[#e7f6e9] text-[var(--mds-success)]",
  None: "bg-transparent text-[var(--mds-neutral-700)]",
};

const sizeMap: Record<string, string> = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-2.5 py-1 text-sm gap-1",
  lg: "px-3 py-1.5 text-sm gap-1.5",
};

export default function Badge({ label = "Label", size = "md", color = "Gray", icon = "None", className = "" }: MdsBadgeProps) {
  return (
    <span className={className || `inline-flex items-center justify-center rounded-full font-medium leading-5 ${colorMap[color]} ${sizeMap[size]}`}>
      {icon === "Dot" && <span className="rounded-full bg-current" style={{ width: 6, height: 6 }} />}
      {label}
      {icon === "Counter" && <span className="rounded-full bg-current/10 px-1.5 text-[10px]">9+</span>}
      {icon === "X close" && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}
