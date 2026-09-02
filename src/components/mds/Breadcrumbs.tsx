export type MdsBreadcrumbsProps = {
  items?: string[];
  truncated?: boolean;
  className?: string;
};

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[var(--mds-neutral-400)]">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Breadcrumbs({
  items = ["Menu", "Menu", "Menu"],
  truncated = false,
  className = "",
}: MdsBreadcrumbsProps) {
  const display = truncated && items.length > 2 ? [items[0], "…", items[items.length - 1]] : items;
  return (
    <nav className={["flex flex-wrap items-center gap-1.5", className].join(" ")}>
      {display.map((item, i) => {
        const isLast = i === display.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            <span
              className={[
                "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-xs font-medium",
                isLast ? "bg-[var(--mds-brand-50)] text-[var(--mds-brand-900)]" : "bg-[var(--mds-neutral-50)] text-[var(--mds-neutral-700)]",
              ].join(" ")}
            >
              {item}
            </span>
            {!isLast && <Chevron />}
          </span>
        );
      })}
    </nav>
  );
}
