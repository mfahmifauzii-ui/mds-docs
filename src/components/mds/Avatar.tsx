export type MdsAvatarProps = {
  initial?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  placeholder?: boolean;
  showText?: boolean;
  statusIcon?: "False" | "Online indicator" | "Company";
  state?: "Default" | "Focused";
  className?: string;
};

const sizeMap: Record<string, number> = { xs: 24, sm: 32, md: 40, lg: 48, xl: 56, "2xl": 64 };

export default function Avatar({
  initial = "OR",
  size = "md",
  placeholder = false,
  showText = false,
  statusIcon = "False",
  state = "Default",
  className = "",
}: MdsAvatarProps) {
  const px = sizeMap[size];
  const tinted = placeholder || showText;

  return (
    <div
      className={[
        "relative flex items-center justify-center rounded-full",
        tinted ? "bg-[var(--mds-brand-50)]" : "bg-cover bg-center",
        state === "Focused" ? "ring-2 ring-[var(--mds-brand-100)] ring-offset-2" : "",
        className,
      ].join(" ")}
      style={{ width: px, height: px, backgroundImage: !tinted ? "linear-gradient(135deg,#c7d7e3,#8fa7bb)" : undefined }}
    >
      {showText && (
        <span className="font-medium uppercase text-[var(--mds-brand-900)]" style={{ fontSize: px * 0.4 }}>
          {initial}
        </span>
      )}
      {placeholder && !showText && (
        <svg viewBox="0 0 24 24" fill="none" className="text-[var(--mds-brand-900)]" style={{ width: px * 0.5, height: px * 0.5 }}>
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {statusIcon === "Online indicator" && (
        <span
          className="absolute rounded-full border-[1.5px] border-white bg-[var(--mds-success)]"
          style={{ width: px * 0.24, height: px * 0.24, right: -1, bottom: -1 }}
        />
      )}
      {statusIcon === "Company" && (
        <span
          className="absolute flex items-center justify-center rounded-full border-[1.5px] border-white bg-[var(--mds-brand-900)]"
          style={{ width: px * 0.32, height: px * 0.32, right: -2, bottom: -2 }}
        >
          <svg viewBox="0 0 24 24" fill="none" style={{ width: px * 0.16, height: px * 0.16 }}>
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2" />
          </svg>
        </span>
      )}
    </div>
  );
}
