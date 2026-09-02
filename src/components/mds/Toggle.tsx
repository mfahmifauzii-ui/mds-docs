export type MdsToggleProps = {
  label?: string;
  hint?: string;
  showHint?: boolean;
  tick?: boolean;
  className?: string;
};

export default function Toggle({
  label = "Remember me",
  hint = "This is a hint text to help user",
  showHint = true,
  tick = false,
  className = "",
}: MdsToggleProps) {
  return (
    <label className={["flex w-full max-w-[350px] items-start gap-2", className].join(" ")}>
      <span className="flex shrink-0 items-center pt-0.5">
        <span
          className={[
            "relative flex h-4 w-[28.8px] items-center rounded-full px-0.5 transition-colors",
            tick ? "justify-end bg-[var(--mds-brand-900)]" : "justify-start bg-[var(--mds-neutral-300)]",
          ].join(" ")}
        >
          <span className="h-3 w-3 rounded-full bg-white shadow" />
        </span>
      </span>
      <span className="flex flex-1 flex-col gap-0.5">
        <span className="text-sm leading-5 text-[var(--mds-neutral-700)]">{label}</span>
        {showHint && <span className="text-xs leading-4 text-[var(--mds-neutral-500)]">{hint}</span>}
      </span>
    </label>
  );
}
