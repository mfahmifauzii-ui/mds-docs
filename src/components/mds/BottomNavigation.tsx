export type MdsBottomNavItem = { label: string; active?: boolean };

export type MdsBottomNavigationProps = {
  style?: "Simple" | "Offset" | "Big in the center";
  type?: "Icon + text" | "Icon only";
  size?: "Full-width" | "Floating";
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

function StarIcon({ active, big }: { active?: boolean; big?: boolean }) {
  return (
    <svg width={big ? 24 : 20} height={big ? 24 : 20} viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} className={active ? "text-[var(--mds-brand-900)]" : "text-[var(--mds-neutral-500)]"}>
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" stroke={active ? "none" : "currentColor"} strokeWidth="2" />
    </svg>
  );
}

export default function BottomNavigation({ style = "Simple", type = "Icon + text", size = "Full-width", items = defaultItems, className = "" }: MdsBottomNavigationProps) {
  const floating = size === "Floating";
  const bigCenter = style === "Big in the center";
  const mid = Math.floor(items.length / 2);

  return (
    <div
      className={[
        "flex w-full max-w-[348px] items-end justify-between px-5 py-1.5",
        floating ? "rounded-full bg-[var(--mds-neutral-50)] shadow-[var(--mds-shadow-md)]" : "bg-white shadow-[var(--mds-shadow-up)]",
        className,
      ].join(" ")}
    >
      {items.map((item, i) => {
        const isCenter = bigCenter && i === mid;
        const offset = style === "Offset" && i % 2 === 1;
        return (
          <div
            key={item.label}
            className={[
              "flex w-[60px] flex-col items-center gap-1",
              isCenter ? "-translate-y-2 rounded-full bg-[var(--mds-brand-900)] p-3" : "",
              offset ? "-translate-y-1.5" : "",
            ].join(" ")}
          >
            <StarIcon active={isCenter ? true : item.active} big={isCenter} />
            {type === "Icon + text" && !isCenter && (
              <span className={["text-xs leading-4", item.active ? "text-[var(--mds-brand-900)]" : "text-[var(--mds-neutral-500)]"].join(" ")}>{item.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
