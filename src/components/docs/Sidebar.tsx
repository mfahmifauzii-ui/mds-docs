"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/nav";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const flatIndex = nav.flatMap((g) => g.items);

  useEffect(() => {
    document.documentElement.style.setProperty("--doc-sidebar-w", collapsed ? "64px" : "272px");
  }, [collapsed]);

  return (
    <aside
      className={[
        "fixed inset-y-0 left-0 hidden shrink-0 overflow-y-auto border-r border-[var(--doc-line)] bg-[var(--doc-surface)] pb-10 pt-6 transition-[width,padding] duration-200 lg:block",
        collapsed ? "w-[64px] px-2" : "w-[272px] px-4",
      ].join(" ")}
    >
      <div className={`flex ${collapsed ? "justify-center" : "justify-end"} pb-2`}>
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="flex items-center rounded-lg border border-[var(--doc-line)] p-1.5 text-[var(--doc-text-faint)] transition-colors hover:border-[var(--doc-accent)] hover:text-[var(--doc-accent)]"
          aria-label="Toggle sidebar"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className={collapsed ? "rotate-180" : ""}>
            <path d="M11 19l-7-7 7-7M18 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <Link href="/" className={`mb-5 block px-1 ${collapsed ? "text-center" : ""}`}>
        {!collapsed && <p className="doc-eyebrow mb-2">MDS Docs</p>}
        {collapsed ? (
          <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--doc-accent)] text-[13px] font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            M
          </span>
        ) : (
          <>
            <h1 className="text-lg font-semibold leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--doc-accent)" }}>
              MDS Components
            </h1>
            <p className="mt-1 text-[12.5px] leading-5 text-[var(--doc-text-faint)]">Live docs, generated from the MDS — Variable Figma file.</p>
          </>
        )}
      </Link>

      <nav className="flex flex-col gap-5">
        {nav.map((group) => (
          <div key={group.title}>
            {!collapsed && (
              <p className="mb-1.5 px-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--doc-text-faint)]">{group.title}</p>
            )}
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active = pathname === item.href;
                const num = flatIndex.findIndex((i) => i.href === item.href) + 1;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={collapsed ? item.label : undefined}
                    className={[
                      "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13.5px] transition-colors",
                      collapsed ? "justify-center" : "",
                      active
                        ? "font-semibold text-[var(--doc-accent)]"
                        : "text-[var(--doc-text-dim)] hover:bg-[var(--doc-surface-2)] hover:text-[var(--doc-text)]",
                    ].join(" ")}
                    style={active ? { background: "var(--doc-accent-soft)" } : undefined}
                  >
                    {!collapsed && (
                      <span className="w-4 shrink-0 font-mono text-[10.5px]" style={{ color: active ? "var(--doc-accent)" : "var(--doc-text-faint)" }}>
                        {String(num).padStart(2, "0")}
                      </span>
                    )}
                    <span className={collapsed ? "text-[10px]" : ""}>{collapsed ? item.label.slice(0, 2).toUpperCase() : item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
