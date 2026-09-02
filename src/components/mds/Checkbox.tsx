export type MdsCheckboxProps = {
  label?: string;
  supportText?: string;
  showSupportText?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  size?: "sm" | "md";
  type?: "Solid square" | "Solid circle" | "Outline square" | "Outline circle";
  state?: "Default" | "Focused" | "Disabled";
  className?: string;
};

export default function Checkbox({
  label = "Remember me",
  supportText = "Save my login details for next time.",
  showSupportText = true,
  checked = false,
  indeterminate = false,
  size = "sm",
  type = "Solid square",
  state = "Default",
  className = "",
}: MdsCheckboxProps) {
  const isSolid = type.startsWith("Solid");
  const isCircle = type.endsWith("circle");
  const isChecked = checked || indeterminate;
  const isDisabled = state === "Disabled";
  const boxSize = size === "md" ? 18 : 16;

  const boxClasses = [
    "flex shrink-0 items-center justify-center border transition-colors",
    isCircle ? "rounded-full" : "rounded",
    isSolid && isChecked ? "border-[var(--mds-brand-900)] bg-[var(--mds-brand-900)]" : "border-[var(--mds-neutral-300)] bg-white",
    !isSolid && isChecked ? "border-[var(--mds-brand-900)]" : "",
    state === "Focused" ? "ring-2 ring-[var(--mds-brand-50)] ring-offset-1" : "",
    isDisabled ? "opacity-40" : "",
  ].join(" ");

  return (
    <label className={className || `flex w-[280px] max-w-full items-start gap-2 ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}>
      <span className="flex shrink-0 items-center pt-0.5">
        <span className={boxClasses} style={{ width: boxSize, height: boxSize }}>
          {isChecked && !isSolid && (
            <svg width={boxSize - 6} height={boxSize - 6} viewBox="0 0 24 24" fill="none">
              {indeterminate ? (
                <path d="M5 12h14" stroke="var(--mds-brand-900)" strokeWidth="3" strokeLinecap="round" />
              ) : (
                <path d="M5 13l4 4L19 7" stroke="var(--mds-brand-900)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          )}
          {isChecked && isSolid && (
            <svg width={boxSize - 6} height={boxSize - 6} viewBox="0 0 24 24" fill="none">
              {indeterminate ? (
                <path d="M5 12h14" stroke="white" strokeWidth="3" strokeLinecap="round" />
              ) : (
                <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          )}
        </span>
      </span>
      <span className="flex flex-1 flex-col gap-0.5">
        <span className="text-sm leading-5 text-[var(--mds-neutral-700)]">{label}</span>
        {showSupportText && <span className="text-xs leading-4 text-[var(--mds-neutral-500)]">{supportText}</span>}
      </span>
    </label>
  );
}
