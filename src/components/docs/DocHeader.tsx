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
    <div className="mb-10 max-w-2xl">
      {eyebrow && <p className="mb-2 text-sm font-medium text-[var(--mds-brand-900)]">{eyebrow}</p>}
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-[var(--mds-neutral-900)]">{title}</h1>
      <p className="text-[15px] leading-7 text-[var(--mds-neutral-500)]">{description}</p>
    </div>
  );
}
