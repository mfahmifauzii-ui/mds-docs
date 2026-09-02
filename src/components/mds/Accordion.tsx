"use client";
import { useState } from "react";

export type MdsAccordionProps = {
  title?: string;
  description?: string;
  flipIcon?: boolean;
  defaultExpanded?: boolean;
  className?: string;
};

export default function Accordion({
  title = "Accordion title",
  description = "Supporting text for the accordion item goes here.",
  flipIcon = false,
  defaultExpanded = false,
  className = "",
}: MdsAccordionProps) {
  const [expand, setExpand] = useState(defaultExpanded);
  return (
    <div className={["w-full max-w-[350px] overflow-hidden rounded-none border border-[var(--mds-neutral-300)] bg-white", className].join(" ")}>
      <button
        type="button"
        onClick={() => setExpand((v) => !v)}
        className={[
          "flex w-full items-center gap-1.5 px-3.5 py-2.5 text-left",
          expand ? "" : "border-b border-[var(--mds-neutral-300)]",
        ].join(" ")}
      >
        {!flipIcon && (
          <span className="flex-1 text-sm font-semibold leading-5 text-[var(--mds-neutral-900)]">{title}</span>
        )}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className={["shrink-0 text-[var(--mds-neutral-500)] transition-transform", expand ? "rotate-180" : ""].join(" ")}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {flipIcon && (
          <span className="flex-1 text-sm font-semibold leading-5 text-[var(--mds-neutral-900)]">{title}</span>
        )}
      </button>
      {expand && (
        <div className="border-b border-[var(--mds-neutral-300)] px-3.5 pb-2.5 pt-1">
          <p className="text-xs leading-4 text-[var(--mds-neutral-700)]">{description}</p>
        </div>
      )}
    </div>
  );
}
