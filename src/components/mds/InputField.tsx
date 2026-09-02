export type MdsInputFieldProps = {
  type?: "Default" | "Leading dropdown" | "Trailing dropdown";
  label?: string;
  placeholder?: string;
  showHelpIcon?: boolean;
  showHint?: boolean;
  mandatory?: boolean;
  className?: string;
};

export default function InputField({
  type = "Default",
  label = "Input Label",
  placeholder = "Placeholder text...",
  showHelpIcon = false,
  showHint = false,
  mandatory = true,
  className = "",
}: MdsInputFieldProps) {
  return (
    <div className={["flex w-full max-w-[341px] flex-col gap-1.5", className].join(" ")}>
      <div className="flex items-start gap-1 text-sm font-medium leading-5">
        <span className="text-[var(--mds-neutral-900)]">{label}</span>
        {mandatory && <span className="text-[var(--mds-danger)]">*</span>}
      </div>
      <div className="flex w-full items-stretch overflow-hidden rounded-lg border border-[var(--mds-neutral-300)]">
        {type === "Leading dropdown" && (
          <div className="flex shrink-0 items-center gap-1 border-r border-[var(--mds-neutral-300)] bg-[var(--mds-neutral-50)] px-3 py-3 text-sm font-medium text-[var(--mds-neutral-700)]">
            +62
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        )}
        <div className="flex flex-1 items-center gap-1.5 bg-white px-4 py-3">
          <span className="flex-1 text-sm leading-5 text-[var(--mds-neutral-400)]">{placeholder}</span>
          {showHelpIcon && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[var(--mds-neutral-400)]">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M12 11v5M12 8v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </div>
        {type === "Trailing dropdown" && (
          <div className="flex shrink-0 items-center gap-1 border-l border-[var(--mds-neutral-300)] bg-[var(--mds-neutral-50)] px-3 py-3 text-sm font-medium text-[var(--mds-neutral-700)]">
            IDR
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        )}
      </div>
      {showHint && <span className="text-xs leading-4 text-[var(--mds-neutral-500)]">This is a hint text to help user</span>}
    </div>
  );
}
