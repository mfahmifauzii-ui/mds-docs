export type MdsRadioButtonProps = {
  label?: string;
  supportText?: string;
  showSupportText?: boolean;
  checked?: boolean;
  size?: "sm" | "md";
  type?: "Solid" | "Circle";
  state?: "Default" | "Focused" | "Disabled";
  className?: string;
};

export default function RadioButton({
  label = "Remember me",
  supportText = "Save my login details for next time.",
  showSupportText = false,
  checked = false,
  size = "sm",
  type = "Solid",
  state = "Default",
  className = "",
}: MdsRadioButtonProps) {
  const isDisabled = state === "Disabled";
  const boxSize = size === "md" ? 18 : 16;
  const isSolidFill = type === "Solid" && checked;

  return (
    <label className={className || `flex w-[280px] max-w-full items-start gap-2 ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}>
      <span className="flex shrink-0 items-center pt-0.5">
        <span
          className={[
            "flex shrink-0 items-center justify-center rounded-full border transition-colors",
            isSolidFill ? "border-[var(--mds-brand-900)] bg-[var(--mds-brand-900)]" : checked ? "border-[var(--mds-brand-900)] bg-white" : "border-[var(--mds-neutral-300)] bg-white",
            state === "Focused" ? "ring-2 ring-[var(--mds-brand-50)] ring-offset-1" : "",
            isDisabled ? "opacity-40" : "",
          ].join(" ")}
          style={{ width: boxSize, height: boxSize }}
        >
          {checked && (
            <span
              className={isSolidFill ? "rounded-full bg-white" : "rounded-full bg-[var(--mds-brand-900)]"}
              style={{ width: boxSize * 0.4, height: boxSize * 0.4 }}
            />
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
