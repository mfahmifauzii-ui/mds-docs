import { ButtonHTMLAttributes } from "react";

export type MdsButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> & {
  btnText?: string;
  size?: "Tiny" | "Small" | "Medium" | "Large";
  hierarchy?: "Primary" | "Secondary" | "Tertiary" | "Text" | "Link";
  state?: "Default" | "Active/Pressed" | "Disable";
  destructive?: boolean;
  iconOnly?: boolean;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
};

const sizeMap = {
  Tiny: { pad: "px-3 py-2", text: "text-xs", gap: "gap-1.5", iconOnlyPad: "p-2" },
  Small: { pad: "px-4 py-2.5", text: "text-sm", gap: "gap-2", iconOnlyPad: "p-2.5" },
  Medium: { pad: "px-5 py-3", text: "text-sm", gap: "gap-2", iconOnlyPad: "p-3" },
  Large: { pad: "px-6 py-3.5", text: "text-base", gap: "gap-2", iconOnlyPad: "p-3.5" },
} as const;

const COLORS = {
  brand: "#00487a",
  brandPressed: "#003768",
  danger: "#a01713",
  dangerPressed: "#7d1210",
};

function hierarchyStyle(
  hierarchy: MdsButtonProps["hierarchy"],
  destructive: boolean,
  pressed: boolean
): { className: string; style?: React.CSSProperties } {
  const accent = destructive ? (pressed ? COLORS.dangerPressed : COLORS.danger) : pressed ? COLORS.brandPressed : COLORS.brand;

  if (hierarchy === "Secondary") {
    return { className: "bg-white border", style: { borderColor: accent, color: accent } };
  }
  if (hierarchy === "Tertiary") {
    return {
      className: pressed ? "bg-[var(--mds-neutral-100)]" : "bg-[var(--mds-neutral-50)]",
      style: { color: destructive ? accent : "var(--mds-neutral-700)" },
    };
  }
  if (hierarchy === "Text") {
    return { className: "bg-transparent", style: { color: destructive ? accent : "var(--mds-neutral-700)" } };
  }
  if (hierarchy === "Link") {
    return { className: "bg-transparent underline underline-offset-2", style: { color: accent } };
  }
  // Primary
  return { className: "text-white", style: { background: accent } };
}

export default function Button({
  btnText = "Get Started",
  size = "Medium",
  hierarchy = "Primary",
  state = "Default",
  destructive = false,
  iconOnly = false,
  leadingIcon = false,
  trailingIcon = false,
  className = "",
  style,
  disabled,
  ...rest
}: MdsButtonProps) {
  const isDisabled = disabled || state === "Disable";
  const pressed = state === "Active/Pressed";
  const dims = sizeMap[size];
  const variant = hierarchyStyle(hierarchy, destructive, pressed);

  const icon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  return (
    <button
      {...rest}
      disabled={isDisabled}
      style={style ?? variant.style}
      className={
        className ||
        [
          "inline-flex items-center justify-center rounded font-medium transition-colors",
          dims.gap,
          iconOnly ? dims.iconOnlyPad : dims.pad,
          hierarchy === "Link" ? "" : dims.text,
          variant.className,
          isDisabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
        ].join(" ")
      }
    >
      {leadingIcon && icon}
      {!iconOnly && btnText}
      {trailingIcon && icon}
    </button>
  );
}
