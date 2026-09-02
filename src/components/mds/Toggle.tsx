export type MdsToggleProps = {
  label?: string;
  supportText?: string;
  showSupportText?: boolean;
  tick?: boolean;
  size?: "sm" | "md";
  position?: "Left" | "Right";
  theme?: "Dark" | "Light";
  state?: "Default" | "Focused" | "Disabled";
  className?: string;
};

export default function Toggle({
  label = "Remember me",
  supportText = "Save my login details for next time.",
  showSupportText = false,
  tick = false,
  size = "sm",
  position = "Left",
  theme = "Dark",
  state = "Default",
  className = "",
}: MdsToggleProps) {
  const isDisabled = state === "Disabled";
  const w = size === "md" ? 44 : 36;
  const h = size === "md" ? 24 : 20;
  const knob = h - 4;
  const onColor = theme === "Dark" ? "var(--mds-brand-900)" : "var(--mds-brand-700)";

  const track = (
    <span
      className={["relative shrink-0 rounded-full transition-colors", state === "Focused" ? "ring-2 ring-[var(--mds-brand-50)] ring-offset-1" : "", isDisabled ? "opacity-40" : ""].join(" ")}
      style={{ width: w, height: h, background: tick ? onColor : "var(--mds-neutral-300)" }}
    >
      <span
        className="absolute top-0.5 rounded-full bg-white shadow-sm transition-transform"
        style={{ width: knob, height: knob, left: tick ? w - knob - 2 : 2 }}
      />
    </span>
  );

  const text = (
    <span className="flex flex-1 flex-col gap-0.5">
      <span className="text-sm leading-5 text-[var(--mds-neutral-700)]">{label}</span>
      {showSupportText && <span className="text-xs leading-4 text-[var(--mds-neutral-500)]">{supportText}</span>}
    </span>
  );

  return (
    <label className={className || `flex w-[280px] max-w-full items-start gap-2 ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}>
      {position === "Left" ? (
        <>
          {track}
          {text}
        </>
      ) : (
        <>
          {text}
          {track}
        </>
      )}
    </label>
  );
}
