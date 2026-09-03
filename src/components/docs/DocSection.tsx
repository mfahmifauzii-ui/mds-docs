export default function DocSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-12 scroll-mt-6">
      <h2 className="group mb-4 flex items-center gap-2 text-lg font-semibold text-[var(--doc-text)]" style={{ fontFamily: "var(--font-display)" }}>
        {title}
        <a href={`#${id}`} className="text-[var(--doc-line)] opacity-0 transition-opacity group-hover:opacity-100">
          #
        </a>
      </h2>
      {children}
    </section>
  );
}
