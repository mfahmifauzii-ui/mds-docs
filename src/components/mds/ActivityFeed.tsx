export type MdsActivityFeedProps = {
  name?: string;
  time?: string;
  description?: string;
  showConnector?: boolean;
  showDot?: boolean;
  showAction?: boolean;
  className?: string;
};

export default function ActivityFeed({
  name = "Jane Doe",
  time = "00 mins ago",
  description = "Description",
  showConnector = true,
  showDot = true,
  showAction = true,
  className = "",
}: MdsActivityFeedProps) {
  return (
    <div className={["flex w-full max-w-[343px] items-start gap-3", className].join(" ")}>
      <div className="flex shrink-0 flex-col items-center gap-1 self-stretch">
        <div className="relative h-11 w-11 shrink-0 rounded-full" style={{ backgroundImage: "linear-gradient(135deg,#c7d7e3,#8fa7bb)" }}>
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-[var(--mds-success)]" />
        </div>
        {showConnector && <span className="w-0.5 flex-1 bg-[var(--mds-neutral-300)]" />}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="flex flex-1 items-center gap-1.5 whitespace-nowrap">
              <span className="text-base font-semibold leading-5 text-[var(--mds-neutral-900)]">{name}</span>
              <span className="text-xs leading-4 text-[var(--mds-neutral-500)]">{time}</span>
            </span>
            {showDot && <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--mds-brand-900)]" />}
          </div>
          <p className="truncate text-sm leading-5 text-[var(--mds-neutral-500)]">{description}</p>
        </div>
      </div>
      {showAction && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[var(--mds-neutral-400)]">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      )}
    </div>
  );
}
