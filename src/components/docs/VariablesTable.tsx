export type VariableRow = { name: string; collection: string; value: string; usedFor: string };

function swatch(value: string) {
  const isColor = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value.trim());
  if (!isColor) return null;
  return <span className="inline-block h-3.5 w-3.5 shrink-0 rounded-full border border-black/10" style={{ background: value }} />;
}

export default function VariablesTable({ rows }: { rows: VariableRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--mds-neutral-100)]">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--mds-neutral-100)] bg-[var(--mds-neutral-50)] text-xs uppercase tracking-wide text-[var(--mds-neutral-400)]">
            <th className="px-4 py-2.5 font-medium">Variable</th>
            <th className="px-4 py-2.5 font-medium">Collection</th>
            <th className="px-4 py-2.5 font-medium">Value</th>
            <th className="px-4 py-2.5 font-medium">Used for</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.name} className={i !== rows.length - 1 ? "border-b border-[var(--mds-neutral-100)]" : ""}>
              <td className="px-4 py-2.5 font-mono text-[12.5px] text-[var(--mds-brand-900)]">{r.name}</td>
              <td className="px-4 py-2.5 text-[13px] text-[var(--mds-neutral-500)]">{r.collection}</td>
              <td className="px-4 py-2.5">
                <span className="flex items-center gap-2 font-mono text-[12.5px] text-[var(--mds-neutral-700)]">
                  {swatch(r.value)}
                  {r.value}
                </span>
              </td>
              <td className="px-4 py-2.5 text-[var(--mds-neutral-700)]">{r.usedFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
