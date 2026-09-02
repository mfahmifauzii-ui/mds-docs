export type MdsInputFieldProps = {
  type?: "Default" | "Leading dropdown" | "Trailing dropdown" | "Leading text" | "Payment input";
  style?: "Box" | "Outline" | "Underline";
  state?: "Default" | "Selected" | "Typing" | "Filled" | "Focused" | "Disabled" | "Error" | "Error focused";
  label?: string;
  placeholder?: string;
  showLabel?: boolean;
  showHintText?: boolean;
  mandatory?: boolean;
  className?: string;
};

export default function InputField({
  type = "Default",
  style = "Box",
  state = "Default",
  label = "Input Label",
  placeholder = "Placeholder text...",
  showLabel = true,
  showHintText = false,
  mandatory = true,
  className = "",
}: MdsInputFieldProps) {
  const isError = state === "Error" || state === "Error focused";
  const isFocused = state === "Focused" || state === "Error focused" || state === "Selected";
  const isDisabled = state === "Disabled";
  const isFilled = state === "Filled" || state === "Typing";

  const borderColor = isError ? "var(--mds-danger)" : isFocused ? "var(--mds-brand-900)" : "var(--mds-neutral-300)";

  const frameClass =
    style === "Underline"
      ? "border-b"
      : style === "Outline"
      ? "rounded-lg border-2"
      : "rounded-lg border";

  const hint = isError ? "This field has an error — please check the value." : "This is a hint text to help user";
  const hintColor = isError ? "text-[var(--mds-danger)]" : "text-[var(--mds-neutral-500)]";

  return (
    <div className={className || "flex w-full max-w-[341px] flex-col gap-1.5"}>
      {showLabel && (
        <div className="flex items-start gap-1 text-sm font-medium leading-5">
          <span className="text-[var(--mds-neutral-900)]">{label}</span>
          {mandatory && <span className="text-[var(--mds-danger)]">*</span>}
        </div>
      )}
      <div className={`flex w-full items-stretch overflow-hidden ${frameClass} ${isDisabled ? "opacity-50" : ""}`} style={{ borderColor }}>
        {type === "Leading dropdown" && (
          <div className="flex shrink-0 items-center gap-1 border-r border-[var(--mds-neutral-300)] bg-[var(--mds-neutral-50)] px-3 py-3 text-sm font-medium text-[var(--mds-neutral-700)]">
            +62
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        )}
        {type === "Leading text" && (
          <div className="flex shrink-0 items-center border-r border-[var(--mds-neutral-300)] bg-[var(--mds-neutral-50)] px-3 py-3 text-sm text-[var(--mds-neutral-500)]">https://</div>
        )}
        {type === "Payment input" && (
          <div className="flex shrink-0 items-center border-r border-[var(--mds-neutral-300)] bg-[var(--mds-neutral-50)] px-3 py-3 text-sm font-medium text-[var(--mds-neutral-700)]">Rp</div>
        )}
        <div className="flex flex-1 items-center gap-1.5 bg-white px-4 py-3">
          <span className={`flex-1 text-sm leading-5 ${isFilled ? "text-[var(--mds-neutral-900)]" : "text-[var(--mds-neutral-400)]"}`}>{placeholder}</span>
        </div>
        {type === "Trailing dropdown" && (
          <div className="flex shrink-0 items-center gap-1 border-l border-[var(--mds-neutral-300)] bg-[var(--mds-neutral-50)] px-3 py-3 text-sm font-medium text-[var(--mds-neutral-700)]">
            IDR
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        )}
      </div>
      {showHintText && <span className={`text-xs leading-4 ${hintColor}`}>{hint}</span>}
    </div>
  );
}
