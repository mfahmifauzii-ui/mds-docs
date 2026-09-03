export default function DoDontCard({
  doTitle,
  doText,
  doExample,
  dontTitle,
  dontText,
  dontExample,
}: {
  doTitle: string;
  doText: string;
  doExample: React.ReactNode;
  dontTitle: string;
  dontText: string;
  dontExample: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="overflow-hidden rounded-xl border border-[var(--doc-line)]">
        <div className="mds-checker flex min-h-[120px] items-center justify-center p-6">{doExample}</div>
        <div className="border-t border-[var(--doc-line)] p-4">
          <p className="mb-1 flex items-center gap-1.5 text-sm font-semibold text-[var(--mds-success)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Do — {doTitle}
          </p>
          <p className="text-[13px] leading-5 text-[var(--doc-text-faint)]">{doText}</p>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-[var(--doc-line)]">
        <div className="mds-checker flex min-h-[120px] items-center justify-center p-6">{dontExample}</div>
        <div className="border-t border-[var(--doc-line)] p-4">
          <p className="mb-1 flex items-center gap-1.5 text-sm font-semibold text-[var(--mds-danger)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            Don&rsquo;t — {dontTitle}
          </p>
          <p className="text-[13px] leading-5 text-[var(--doc-text-faint)]">{dontText}</p>
        </div>
      </div>
    </div>
  );
}
