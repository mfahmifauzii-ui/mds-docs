import Link from "next/link";
import Button from "@/components/mds/Button";
import Badge from "@/components/mds/Badge";
import Avatar from "@/components/mds/Avatar";
import InputField from "@/components/mds/InputField";
import { nav } from "@/data/nav";

export default function Home() {
  return (
    <div>
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-sm font-medium text-[var(--mds-brand-900)]">MDS · Component Documentation</p>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-[var(--mds-neutral-900)]">
          Build product UI with MDS.
        </h1>
        <p className="text-[15px] leading-7 text-[var(--mds-neutral-500)]">
          MDS is the shared component library behind our product surfaces — buttons, inputs, navigation
          and data-display patterns, kept in sync with the MDS Variable file in Figma. Every component on
          this site renders the real implementation, not a screenshot. Each one ships with a live playground
          to try every prop, and a table of the Figma variables it pulls from.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Link href="/components/button">
            <Button label="Browse components" />
          </Link>
          <a
            href="https://www.figma.com/design/0qF2PkSwkIn8EWe2qhWmSE"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[var(--mds-neutral-700)] hover:text-[var(--mds-neutral-900)]"
          >
            Open in Figma →
          </a>
        </div>
      </div>

      <div className="mb-14 overflow-hidden rounded-xl border border-[var(--mds-neutral-100)]">
        <div className="flex flex-wrap items-center gap-8 bg-[var(--mds-neutral-50)] p-10">
          <Avatar type="Photo" />
          <InputField showHint className="max-w-[260px]" />
          <div className="flex flex-col gap-2">
            <Button label="Continue" />
            <Button label="Delete account" destructive />
          </div>
          <div className="flex flex-col gap-2">
            <Badge label="Verified" tone="brand" />
            <Badge label="Pending" tone="neutral" />
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-lg font-semibold text-[var(--mds-neutral-900)]">Components</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {nav
          .filter((g) => g.title !== "Getting started")
          .flatMap((g) => g.items)
          .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-[var(--mds-neutral-100)] px-4 py-3 text-sm font-medium text-[var(--mds-neutral-700)] transition-colors hover:border-[var(--mds-brand-900)] hover:text-[var(--mds-brand-900)]"
            >
              {item.label}
            </Link>
          ))}
      </div>
    </div>
  );
}
