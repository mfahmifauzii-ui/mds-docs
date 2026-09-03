import DocHeader from "@/components/docs/DocHeader";

const scale = [
  { label: "Title", size: "16px", weight: "Semibold", cls: "text-base font-semibold" },
  { label: "CTA / Label", size: "14px", weight: "Medium", cls: "text-sm font-medium" },
  { label: "Body", size: "14px", weight: "Regular", cls: "text-sm font-normal" },
  { label: "Hint / Caption", size: "12px", weight: "Regular", cls: "text-xs font-normal" },
];

export default function TypographyPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Getting started"
        title="Typography"
        description="MDS uses Inter across every component, with a small set of weight and size pairs kept consistent between Figma and code."
      />
      <div className="divide-y divide-[var(--doc-line)] rounded-lg border border-[var(--doc-line)]">
        {scale.map((s) => (
          <div key={s.label} className="flex items-center justify-between gap-4 px-4 py-4">
            <span className={[s.cls, "text-[var(--doc-text)]"].join(" ")}>{s.label} — The quick brown fox</span>
            <span className="shrink-0 font-mono text-xs text-[var(--doc-text-faint)]">{s.size} / {s.weight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
