export type MdsCheckboxProps = {
  label?: string;
  hint?: string;
  showHint?: boolean;
  checked?: boolean;
  style?: "Outline" | "Solid";
  className?: string;
};

export default function Checkbox({
  label = "Remember me",
  hint = "This is a hint text to help user",
  showHint = true,
  checked,
  style = "Outline",
  className = "",
}: MdsCheckboxProps) {
  const isChecked = checked ?? style === "Solid";
  return (
    <label className={["flex w-full max-w-[350px] items-start gap-2", className].join(" ")}>
      <span className="flex shrink-0 items-center pt-0.5">
        <span
          className={[
            "flex h-4 w-4 items-center justify-center rounded border",
            isChecked ? "border-[var(--mds-brand-900)] bg-[var(--mds-brand-900)]" : "border-[var(--mds-neutral-300)] bg-white",
          ].join(" ")}
        >
          {isChecked && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </span>
      <span className="flex flex-1 flex-col gap-0.5">
        <span className="text-sm leading-5 text-[var(--mds-neutral-700)]">{label}</span>
        {showHint && <span className="text-xs leading-4 text-[var(--mds-neutral-500)]">{hint}</span>}
      </span>
    </label>
  );
}
