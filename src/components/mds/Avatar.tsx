export type MdsAvatarProps = {
  type?: "Photo" | "Icons" | "Initials";
  initials?: string;
  online?: boolean;
  size?: number;
  className?: string;
};

export default function Avatar({ type = "Photo", initials = "OR", online = true, size = 44, className = "" }: MdsAvatarProps) {
  const tinted = type === "Icons" || type === "Initials";
  return (
    <div
      className={["relative flex items-end justify-end rounded-lg", tinted ? "bg-[var(--mds-brand-50)]" : "", className].join(" ")}
      style={{ width: size, height: size }}
    >
      {type === "Photo" && (
        <div
          className="h-full w-full rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(135deg,#c7d7e3,#8fa7bb)" }}
        />
      )}
      {type === "Initials" && (
        <span className="absolute inset-0 flex items-center justify-center text-[18px] font-medium uppercase leading-6 text-[var(--mds-brand-900)]">
          {initials}
        </span>
      )}
      {type === "Icons" && (
        <svg viewBox="0 0 24 24" fill="none" className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 text-[var(--mds-brand-900)]">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {online && (
        <span
          className="relative rounded-full border-[1.5px] border-white bg-[var(--mds-success)]"
          style={{ width: 10, height: 10 }}
        />
      )}
    </div>
  );
}
