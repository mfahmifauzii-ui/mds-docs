"use client";
import { useState } from "react";

export type MdsAccordionProps = {
  title?: string;
  description?: string;
  style?: "Default" | "Border" | "Line";
  state?: "Default" | "Hover" | "Expand" | "Disabled";
  flipIcon?: boolean;
  leftIcon?: boolean;
  defaultExpanded?: boolean;
  className?: string;
};

export default function Accordion({
  title = "Accordion title",
  description = "Accordion description goes here, explaining what this section contains.",
  style = "Default",
  state = "Default",
  flipIcon = false,
  leftIcon = true,
  defaultExpanded = false,
  className = "",
}: MdsAccordionProps) {
  const [hoverState, setHoverState] = useState(false);
  const isDisabled = state === "Disabled";
  const [expand, setExpand] = useState(defaultExpanded || state === "Expand");
  const effectiveExpand = state === "Expand" ? true : state === "Default" || state === "Hover" ? expand : false;
  const isHover = !isDisabled && (state === "Hover" || hoverState);

  const wrapClass =
    style === "Border"
      ? "border border-[var(--mds-neutral-300)] rounded-lg overflow-hidden"
      : style === "Line"
      ? "border-t border-b border-[var(--mds-neutral-300)]"
      : "border-b border-[var(--mds-neutral-300)]";

  const headerBg = isDisabled ? "" : isHover ? (style === "Default" ? "bg-[var(--mds-neutral-100)]" : "bg-[var(--mds-neutral-100)]") : effectiveExpand && style === "Border" ? "bg-[var(--mds-neutral-50)]" : "";

  const titleColor = isDisabled ? "text-[var(--mds-neutral-400)]" : "text-[var(--mds-neutral-900)]";
  const iconColor = isDisabled ? "text-[var(--mds-neutral-400)]" : "text-[var(--mds-neutral-900)]";

  const Chevron = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={["shrink-0 transition-transform", iconColor, effectiveExpand ? "rotate-180" : ""].join(" ")}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const Star = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={iconColor}>
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" />
    </svg>
  );

  return (
    <div className={className || `w-[328px] max-w-full ${wrapClass}`}>
      <button
        type="button"
        disabled={isDisabled}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
        onClick={() => !isDisabled && state !== "Expand" && setExpand((e) => !e)}
        className={`flex w-full items-center gap-4 p-4 text-left ${headerBg} ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        {!flipIcon && (
          <>
            <div className="flex flex-1 items-center gap-3 min-w-0">
              {leftIcon && Star}
              <span className={`flex-1 text-base font-semibold ${titleColor}`}>{title}</span>
            </div>
            {Chevron}
          </>
        )}
        {flipIcon && (
          <>
            {Chevron}
            <span className={`flex-1 text-base font-semibold ${titleColor}`}>{title}</span>
          </>
        )}
      </button>
      {effectiveExpand && (
        <div className={`px-4 pb-4 text-sm leading-5 text-[var(--mds-neutral-700)] ${style === "Border" ? "border-t border-[var(--mds-neutral-300)] pt-4 bg-white" : ""}`}>
          {description}
        </div>
      )}
    </div>
  );
}
