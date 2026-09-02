import { ButtonHTMLAttributes } from "react";

export type MdsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  destructive?: boolean;
  label?: string;
};

export default function Button({ destructive = false, label = "Button CTA", className = "", ...rest }: MdsButtonProps) {
  return (
    <button
      {...rest}
      className={[
        "inline-flex h-10 min-w-[40px] items-center justify-center gap-1.5 rounded-[var(--mds-radius-sm)] border px-3.5 text-sm font-medium leading-5 transition-colors",
        destructive
          ? "border-[var(--mds-danger)] bg-[var(--mds-danger)] text-white hover:bg-[#8a1310]"
          : "border-[var(--mds-brand-900)] bg-[var(--mds-brand-900)] text-white hover:bg-[var(--mds-brand-700)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      ].join(" ")}
    >
      {label}
    </button>
  );
}
