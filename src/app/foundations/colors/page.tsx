import DocHeader from "@/components/docs/DocHeader";

const swatches: { name: string; token: string; hex: string }[] = [
  { name: "Brand 900", token: "--mds-brand-900", hex: "#00487a" },
  { name: "Brand 700", token: "--mds-brand-700", hex: "#0a5c94" },
  { name: "Brand 50", token: "--mds-brand-50", hex: "#e3fafc" },
  { name: "Neutral 900", token: "--mds-neutral-900", hex: "#101828" },
  { name: "Neutral 700", token: "--mds-neutral-700", hex: "#344054" },
  { name: "Neutral 500", token: "--mds-neutral-500", hex: "#667085" },
  { name: "Neutral 400", token: "--mds-neutral-400", hex: "#98a2b3" },
  { name: "Neutral 300", token: "--mds-neutral-300", hex: "#d0d5dd" },
  { name: "Neutral 100", token: "--mds-neutral-100", hex: "#f2f4f7" },
  { name: "Neutral 50", token: "--mds-neutral-50", hex: "#f9fafb" },
  { name: "Success", token: "--mds-success", hex: "#20872e" },
  { name: "Danger", token: "--mds-danger", hex: "#a01713" },
];

export default function ColorsPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Getting started"
        title="Colors"
        description="Color variables pulled from the MDS Variable file in Figma. Components reference these tokens rather than raw hex values."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {swatches.map((s) => (
          <div key={s.token} className="overflow-hidden rounded-lg border border-[var(--mds-neutral-100)]">
            <div className="h-16" style={{ backgroundColor: s.hex }} />
            <div className="p-3">
              <p className="text-sm font-medium text-[var(--mds-neutral-900)]">{s.name}</p>
              <p className="font-mono text-xs text-[var(--mds-neutral-500)]">{s.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
