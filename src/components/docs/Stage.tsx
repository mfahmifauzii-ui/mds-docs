export default function Stage({
  children,
  label,
  minH = 160,
}: {
  children: React.ReactNode;
  label?: string;
  minH?: number;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--mds-neutral-100)]">
      {label && (
        <div className="border-b border-[var(--mds-neutral-100)] bg-[var(--mds-neutral-50)] px-4 py-2 text-xs font-medium text-[var(--mds-neutral-500)]">
          {label}
        </div>
      )}
      <div
        className="flex flex-wrap items-center justify-center gap-6 bg-white p-8"
        style={{ minHeight: minH }}
      >
        {children}
      </div>
    </div>
  );
}
