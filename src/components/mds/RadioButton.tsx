export type MdsRadioButtonProps = {
  label?: string;
  hint?: string;
  showHint?: boolean;
  checked?: boolean;
  style?: "Outline" | "Solid";
  className?: string;
};

export default function RadioButton({
  label = "Remember me",
  hint = "This is a hint text to help user",
  showHint = true,
  checked,
  style = "Outline",
  className = "",
}: MdsRadioButtonProps) {
  const isChecked = checked ?? style === "Solid";
  return (
    <label className={["flex w-full max-w-[322px] items-start gap-2", className].join(" ")}>
      <span className="flex shrink-0 items-center pt-0.5">
        <span
          className={[
            "flex h-4 w-4 items-center justify-center rounded-full border",
            isChecked ? "border-[var(--mds-brand-900)]" : "border-[var(--mds-neutral-300)]",
          ].join(" ")}
        >
          {isChecked && <span className="h-2 w-2 rounded-full bg-[var(--mds-brand-900)]" />}
        </span>
      </span>
      <span className="flex flex-1 flex-col gap-0.5">
        <span className="text-sm leading-5 text-[var(--mds-neutral-700)]">{label}</span>
        {showHint && <span className="text-xs leading-4 text-[var(--mds-neutral-500)]">{hint}</span>}
      </span>
    </label>
  );
}
