export type MdsBreadcrumbsProps = {
  items?: string[];
  divider?: "Chevron" | "Minus" | "Slash";
  type?: "Text" | "Btn gray" | "Btn primary";
  collapsed?: boolean;
  className?: string;
};

function Divider({ kind }: { kind: NonNullable<MdsBreadcrumbsProps["divider"]> }) {
  if (kind === "Minus") return <span className="text-[var(--mds-neutral-400)]">–</span>;
  if (kind === "Slash") return <span className="text-[var(--mds-neutral-400)]">/</span>;
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[var(--mds-neutral-400)]">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Breadcrumbs({
  items = ["Home", "Category", "Product"],
  divider = "Chevron",
  type = "Text",
  collapsed = false,
  className = "",
}: MdsBreadcrumbsProps) {
  const display = collapsed && items.length > 2 ? [items[0], "…", items[items.length - 1]] : items;
  const isButton = type !== "Text";

  return (
    <nav className={className || "flex flex-wrap items-center gap-1.5"}>
      {display.map((item, i) => {
        const isLast = i === display.length - 1;
        const chipClass = isButton
          ? `inline-flex h-8 items-center justify-center rounded-md px-3 text-xs font-medium ${
              type === "Btn primary" && isLast ? "bg-[var(--mds-brand-50)] text-[var(--mds-brand-900)]" : "bg-[var(--mds-neutral-50)] text-[var(--mds-neutral-700)]"
            }`
          : `text-sm ${isLast ? "font-medium text-[var(--mds-brand-900)]" : "text-[var(--mds-neutral-500)]"}`;
        return (
          <span key={i} className="flex items-center gap-1.5">
            <span className={chipClass}>{item}</span>
            {!isLast && <Divider kind={divider} />}
          </span>
        );
      })}
    </nav>
  );
}
