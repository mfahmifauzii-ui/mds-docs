import Link from "next/link";

export default function PageNav({ prev, next }: { prev?: { label: string; href: string }; next?: { label: string; href: string } }) {
  return (
    <div className="mt-16 flex items-center justify-between border-t border-[var(--mds-neutral-100)] pt-6">
      {prev ? (
        <Link href={prev.href} className="group flex flex-col text-sm">
          <span className="text-[var(--mds-neutral-400)]">Previous</span>
          <span className="font-medium text-[var(--mds-neutral-700)] group-hover:text-[var(--mds-brand-900)]">← {prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="group flex flex-col text-right text-sm">
          <span className="text-[var(--mds-neutral-400)]">Next</span>
          <span className="font-medium text-[var(--mds-neutral-700)] group-hover:text-[var(--mds-brand-900)]">{next.label} →</span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
