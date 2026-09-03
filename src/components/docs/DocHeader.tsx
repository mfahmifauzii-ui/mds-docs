export default function DocHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow && <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--mds-neutral-400)]">{eyebrow}</p>}
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-[var(--mds-neutral-900)]">{title}</h1>
      <p className="text-[15px] leading-7 text-[var(--mds-neutral-500)]">{description}</p>
    </div>
  );
}
