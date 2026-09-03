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
        <p className="doc-eyebrow mb-4">MDS · Component Documentation</p>
        <h1 className="mb-4 text-[clamp(28px,4vw,40px)] font-bold leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--doc-accent)" }}>
          Build product UI with MDS.
        </h1>
        <p className="text-[15px] leading-7 text-[var(--doc-text-faint)]">
          MDS is the shared component library behind our product surfaces — buttons, inputs, navigation
          and data-display patterns, kept in sync with the MDS Variable file in Figma. Every component on
          this site renders the real implementation, not a screenshot. Each one ships with a live playground
          to try every prop, and a table of the Figma variables it pulls from.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Link href="/components/button">
            <Button btnText="Browse components" />
          </Link>
          <a
            href="https://www.figma.com/design/0qF2PkSwkIn8EWe2qhWmSE"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[var(--doc-text-dim)] hover:text-[var(--doc-accent)]"
          >
            Open in Figma →
          </a>
        </div>
      </div>

      <div className="mb-14 overflow-hidden rounded-xl border border-[var(--doc-line)]">
        <div className="flex flex-wrap items-center gap-8 bg-[var(--doc-surface-2)] p-10">
          <Avatar showText initial="OR" statusIcon="Online indicator" />
          <InputField showHintText className="max-w-[260px]" />
          <div className="flex flex-col gap-2">
            <Button btnText="Continue" />
            <Button btnText="Delete account" destructive />
          </div>
          <div className="flex flex-col gap-2">
            <Badge label="Verified" color="Primary" />
            <Badge label="Pending" color="Gray" />
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-lg font-semibold text-[var(--doc-text)]" style={{ fontFamily: "var(--font-display)" }}>
        Components
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {nav
          .filter((g) => g.title !== "Getting started")
          .flatMap((g) => g.items)
          .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-[var(--doc-line)] bg-[var(--doc-surface)] px-4 py-3 text-sm font-medium text-[var(--doc-text-dim)] transition-colors hover:border-[var(--doc-accent)] hover:text-[var(--doc-accent)]"
            >
              {item.label}
            </Link>
          ))}
      </div>
    </div>
  );
}
