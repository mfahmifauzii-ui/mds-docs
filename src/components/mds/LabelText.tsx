export type MdsLabelTextProps = {
  text?: string;
  mandatory?: boolean;
  infoIcon?: boolean;
  size?: "md" | "lg";
  fontWeight?: "Regular" | "Medium" | "Semibold";
  className?: string;
};

const weightClass: Record<string, string> = {
  Regular: "font-normal",
  Medium: "font-medium",
  Semibold: "font-semibold",
};

export default function LabelText({
  text = "Input Label",
  mandatory = false,
  infoIcon = false,
  size = "md",
  fontWeight = "Medium",
  className = "",
}: MdsLabelTextProps) {
  return (
    <div className={className || "inline-flex items-center gap-1"}>
      <span className={`${size === "lg" ? "text-base" : "text-sm"} leading-5 text-[var(--mds-neutral-900)] ${weightClass[fontWeight]}`}>{text}</span>
      {mandatory && <span className="text-sm font-medium leading-5 text-[var(--mds-danger)]">*</span>}
      {infoIcon && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[var(--mds-neutral-400)]">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 11v5M12 8v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}
