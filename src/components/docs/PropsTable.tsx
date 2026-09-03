export type PropRow = { name: string; type: string; default?: string; description: string };

export default function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--doc-line)] bg-[var(--doc-surface)]">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--doc-line)] bg-[var(--doc-surface-2)] font-mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--doc-text-faint)]">
            <th className="px-4 py-2.5 font-medium">Prop</th>
            <th className="px-4 py-2.5 font-medium">Type</th>
            <th className="px-4 py-2.5 font-medium">Default</th>
            <th className="px-4 py-2.5 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.name} className={i !== rows.length - 1 ? "border-b border-[var(--doc-line)]" : ""}>
              <td className="px-4 py-2.5 font-mono text-[13px]" style={{ color: "var(--doc-accent)" }}>{r.name}</td>
              <td className="px-4 py-2.5 font-mono text-[12.5px] text-[var(--doc-text-faint)]">{r.type}</td>
              <td className="px-4 py-2.5 font-mono text-[12.5px] text-[var(--doc-text-faint)]">{r.default ?? "—"}</td>
              <td className="px-4 py-2.5 text-[13px] text-[var(--doc-text-dim)]">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
