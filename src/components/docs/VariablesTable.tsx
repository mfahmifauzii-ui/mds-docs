export type VariableRow = { name: string; collection: string; value: string; usedFor: string };

function swatch(value: string) {
  const isColor = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value.trim());
  if (!isColor) return null;
  return <span className="inline-block h-3.5 w-3.5 shrink-0 rounded-full border border-black/10" style={{ background: value }} />;
}

export default function VariablesTable({ rows }: { rows: VariableRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--doc-line)] bg-[var(--doc-surface)]">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--doc-line)] bg-[var(--doc-surface-2)] font-mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--doc-text-faint)]">
            <th className="px-4 py-2.5 font-medium">Variable</th>
            <th className="px-4 py-2.5 font-medium">Collection</th>
            <th className="px-4 py-2.5 font-medium">Value</th>
            <th className="px-4 py-2.5 font-medium">Used for</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.name} className={i !== rows.length - 1 ? "border-b border-[var(--doc-line)]" : ""}>
              <td className="px-4 py-2.5 font-mono text-[12.5px]" style={{ color: "var(--doc-accent)" }}>{r.name}</td>
              <td className="px-4 py-2.5">
                <span className="doc-chip">{r.collection}</span>
              </td>
              <td className="px-4 py-2.5">
                <span className="flex items-center gap-2 font-mono text-[12.5px] text-[var(--doc-text-dim)]">
                  {swatch(r.value)}
                  {r.value}
                </span>
              </td>
              <td className="px-4 py-2.5 text-[13px] text-[var(--doc-text-dim)]">{r.usedFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
