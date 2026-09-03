export default function UsageList({ when, whenNot }: { when: string[]; whenNot: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <p className="mb-2 text-sm font-semibold text-[var(--mds-neutral-900)]">When to use</p>
        <ul className="space-y-1.5">
          {when.map((t, i) => (
            <li key={i} className="flex gap-2 text-[13px] leading-5 text-[var(--mds-neutral-500)]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--mds-neutral-400)]" />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold text-[var(--mds-neutral-900)]">When not to use</p>
        <ul className="space-y-1.5">
          {whenNot.map((t, i) => (
            <li key={i} className="flex gap-2 text-[13px] leading-5 text-[var(--mds-neutral-500)]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--mds-neutral-400)]" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
