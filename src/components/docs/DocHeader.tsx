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
      {eyebrow && <p className="doc-eyebrow mb-3">{eyebrow}</p>}
      <h1 className="mb-3 text-[clamp(26px,3vw,32px)] font-bold leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--doc-accent)" }}>
        {title}
      </h1>
      <p className="text-[15px] leading-7 text-[var(--doc-text-faint)]">{description}</p>
    </div>
  );
}
