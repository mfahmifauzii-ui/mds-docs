export type MdsTopAppBarProps = {
  title?: string;
  size?: "md" | "lg";
  leftControl?: "Back" | "Icon" | "Button text" | "None";
  rightControl?: "Icon" | "Button text" | "None";
  className?: string;
};

export default function TopAppBar({
  title = "Page Title",
  size = "md",
  leftControl = "Back",
  rightControl = "None",
  className = "",
}: MdsTopAppBarProps) {
  const h = size === "lg" ? "h-14" : "h-11";
  const titleSize = size === "lg" ? "text-lg" : "text-base";

  const backIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[var(--mds-neutral-900)]">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const starIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[var(--mds-brand-900)]">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" />
    </svg>
  );

  return (
    <div className={className || `flex ${h} w-full max-w-[348px] items-center gap-1.5 border-b border-[var(--mds-neutral-300)] bg-white px-4`}>
      {leftControl === "Back" && backIcon}
      {leftControl === "Icon" && starIcon}
      {leftControl === "Button text" && <span className="text-sm font-medium text-[var(--mds-brand-900)]">Cancel</span>}
      <span className={`flex-1 truncate font-semibold leading-5 text-[var(--mds-neutral-900)] ${titleSize}`}>{title}</span>
      {rightControl === "Icon" && starIcon}
      {rightControl === "Button text" && <span className="text-sm font-medium text-[var(--mds-brand-900)]">Done</span>}
    </div>
  );
}
