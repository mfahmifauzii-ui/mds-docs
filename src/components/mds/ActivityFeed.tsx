export type MdsActivityFeedProps = {
  name?: string;
  time?: string;
  description?: string;
  size?: "sm" | "lg";
  contextualContent?: "False" | "File" | "Labels" | "Text" | "Chat";
  connector?: boolean;
  actionIcon?: boolean;
  newDot?: boolean;
  className?: string;
};

export default function ActivityFeed({
  name = "Jane Doe",
  time = "00 mins ago",
  description = "Description",
  size = "sm",
  contextualContent = "False",
  connector = true,
  actionIcon = true,
  newDot = true,
  className = "",
}: MdsActivityFeedProps) {
  const avatarSize = size === "lg" ? 56 : 44;
  return (
    <div className={className || "flex w-full max-w-[343px] items-start gap-3"}>
      <div className="flex shrink-0 flex-col items-center gap-1 self-stretch">
        <div className="relative shrink-0 rounded-full" style={{ width: avatarSize, height: avatarSize, backgroundImage: "linear-gradient(135deg,#c7d7e3,#8fa7bb)" }}>
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-[var(--mds-success)]" />
        </div>
        {connector && <span className="w-0.5 flex-1 bg-[var(--mds-neutral-300)]" />}
      </div>
      <div className="flex flex-1 flex-col gap-3 min-w-0">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="flex flex-1 items-center gap-1.5 whitespace-nowrap min-w-0">
              <span className={`font-semibold leading-5 text-[var(--mds-neutral-900)] ${size === "lg" ? "text-lg" : "text-base"}`}>{name}</span>
              <span className="text-xs leading-4 text-[var(--mds-neutral-500)]">{time}</span>
            </span>
            {newDot && <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--mds-brand-900)]" />}
          </div>
          <p className="truncate text-sm leading-5 text-[var(--mds-neutral-500)]">{description}</p>
        </div>
        {contextualContent !== "False" && (
          <div className="rounded-lg border border-[var(--mds-neutral-100)] bg-[var(--mds-neutral-50)] px-3 py-2 text-xs text-[var(--mds-neutral-500)]">
            {contextualContent === "File" && "📎 attachment.pdf"}
            {contextualContent === "Labels" && "Label · Label"}
            {contextualContent === "Text" && "Additional context text goes here."}
            {contextualContent === "Chat" && "\u201cA quick message preview goes here.\u201d"}
          </div>
        )}
      </div>
      {actionIcon && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[var(--mds-neutral-400)]">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      )}
    </div>
  );
}
