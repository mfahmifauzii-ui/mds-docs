export type PropRow = { name: string; type: string; default?: string; description: string };

export default function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--mds-neutral-100)]">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--mds-neutral-100)] bg-[var(--mds-neutral-50)] text-xs uppercase tracking-wide text-[var(--mds-neutral-400)]">
            <th className="px-4 py-2.5 font-medium">Prop</th>
            <th className="px-4 py-2.5 font-medium">Type</th>
            <th className="px-4 py-2.5 font-medium">Default</th>
            <th className="px-4 py-2.5 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.name} className={i !== rows.length - 1 ? "border-b border-[var(--mds-neutral-100)]" : ""}>
              <td className="px-4 py-2.5 font-mono text-[13px] text-[var(--mds-brand-900)]">{r.name}</td>
              <td className="px-4 py-2.5 font-mono text-[13px] text-[var(--mds-neutral-500)]">{r.type}</td>
              <td className="px-4 py-2.5 font-mono text-[13px] text-[var(--mds-neutral-500)]">{r.default ?? "—"}</td>
              <td className="px-4 py-2.5 text-[var(--mds-neutral-700)]">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
