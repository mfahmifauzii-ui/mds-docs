import Link from "next/link";

export default function PageNav({ prev, next }: { prev?: { label: string; href: string }; next?: { label: string; href: string } }) {
  return (
    <div className="mt-16 flex items-center justify-between border-t border-[var(--doc-line)] pt-6">
      {prev ? (
        <Link href={prev.href} className="group flex flex-col text-sm">
          <span className="text-[var(--doc-text-faint)]">Previous</span>
          <span className="font-medium text-[var(--doc-text-dim)] group-hover:text-[var(--doc-accent)]">← {prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="group flex flex-col text-right text-sm">
          <span className="text-[var(--doc-text-faint)]">Next</span>
          <span className="font-medium text-[var(--doc-text-dim)] group-hover:text-[var(--doc-accent)]">{next.label} →</span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
