"use client";
import { useState } from "react";
import CodeBlock from "./CodeBlock";

export type Control =
  | { key: string; label: string; type: "boolean"; default: boolean }
  | { key: string; label: string; type: "select"; options: string[]; default: string }
  | { key: string; label: string; type: "text"; default: string };

export default function Playground({
  controls,
  render,
  code,
}: {
  controls: Control[];
  render: (values: Record<string, any>) => React.ReactNode;
  code: (values: Record<string, any>) => string;
}) {
  const [values, setValues] = useState<Record<string, any>>(
    Object.fromEntries(controls.map((c) => [c.key, c.default]))
  );

  return (
    <div className="mb-10 overflow-hidden rounded-xl border border-[var(--doc-line)] bg-white">
      <div className="mds-checker flex min-h-[200px] items-center justify-center px-8 py-12">
        {render(values)}
      </div>

      {controls.length > 0 && (
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--doc-line)] bg-[var(--doc-surface-2)] px-5 py-4">
          {controls.map((c) => (
            <div key={c.key} className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-wide text-[var(--doc-text-faint)]">
                {c.label}
              </label>

              {c.type === "boolean" && (
                <button
                  type="button"
                  role="switch"
                  aria-checked={values[c.key]}
                  onClick={() => setValues((v) => ({ ...v, [c.key]: !v[c.key] }))}
                  className={[
                    "relative h-6 w-[42px] rounded-full transition-colors",
                    values[c.key] ? "bg-[var(--doc-accent)]" : "bg-[var(--doc-line)]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white shadow-sm transition-transform",
                      values[c.key] ? "translate-x-[21px]" : "translate-x-[3px]",
                    ].join(" ")}
                  />
                </button>
              )}

              {c.type === "select" && (
                <select
                  value={values[c.key]}
                  onChange={(e) => setValues((v) => ({ ...v, [c.key]: e.target.value }))}
                  className="rounded-md border border-[var(--doc-line)] bg-white px-2.5 py-1.5 text-sm text-[var(--doc-text)]"
                >
                  {c.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              )}

              {c.type === "text" && (
                <input
                  value={values[c.key]}
                  onChange={(e) => setValues((v) => ({ ...v, [c.key]: e.target.value }))}
                  className="w-[180px] rounded-md border border-[var(--doc-line)] bg-white px-2.5 py-1.5 text-sm text-[var(--doc-text)]"
                />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-[var(--doc-line)]">
        <CodeBlock code={code(values)} />
      </div>
    </div>
  );
}
