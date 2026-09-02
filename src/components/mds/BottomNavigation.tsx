export type MdsBottomNavItem = { label: string; active?: boolean };

export type MdsBottomNavigationProps = {
  style?: "Default" | "Floating";
  items?: MdsBottomNavItem[];
  className?: string;
};

const defaultItems: MdsBottomNavItem[] = [
  { label: "Home", active: true },
  { label: "Search" },
  { label: "Cart" },
  { label: "Wishlist" },
  { label: "Profile" },
];

function StarIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} className={active ? "text-[var(--mds-brand-900)]" : "text-[var(--mds-neutral-500)]"}>
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" stroke={active ? "none" : "currentColor"} strokeWidth="2" />
    </svg>
  );
}

export default function BottomNavigation({ style = "Default", items = defaultItems, className = "" }: MdsBottomNavigationProps) {
  const floating = style === "Floating";
  return (
    <div
      className={[
        "flex w-full max-w-[348px] items-center justify-between px-5 py-1.5",
        floating ? "rounded-full bg-[var(--mds-neutral-50)] shadow-[var(--mds-shadow-md)]" : "bg-white shadow-[var(--mds-shadow-up)]",
        className,
      ].join(" ")}
    >
      {items.map((item) => (
        <div key={item.label} className="flex h-[52px] w-[60px] flex-col items-center gap-1">
          <div className="flex w-full flex-col items-center justify-center px-5 py-1.5">
            <StarIcon active={item.active} />
          </div>
          <span className={["text-xs leading-4", item.active ? "text-[var(--mds-brand-900)]" : "text-[var(--mds-neutral-500)]"].join(" ")}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
