export type MdsBadgeProps = {
  label?: string;
  tone?: "neutral" | "brand" | "success" | "danger";
  className?: string;
};

const tones: Record<string, string> = {
  neutral: "bg-[var(--mds-neutral-50)] text-[var(--mds-neutral-700)]",
  brand: "bg-[var(--mds-brand-50)] text-[var(--mds-brand-900)]",
  success: "bg-[#e7f6e9] text-[var(--mds-success)]",
  danger: "bg-[var(--mds-danger-50)] text-[var(--mds-danger)]",
};

export default function Badge({ label = "Label", tone = "neutral", className = "" }: MdsBadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center gap-1 rounded-full px-2.5 py-1 text-sm font-medium leading-5",
        tones[tone],
        className,
      ].join(" ")}
    >
      {label}
    </span>
  );
}
