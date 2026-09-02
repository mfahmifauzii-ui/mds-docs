"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/nav";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-[264px] shrink-0 overflow-y-auto border-r border-[var(--mds-neutral-100)] bg-white px-5 pb-10 pt-6 lg:block">
      <Link href="/" className="flex items-center gap-2 px-1 pb-6">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--mds-brand-900)] text-[13px] font-bold text-white">M</span>
        <span className="text-sm font-semibold text-[var(--mds-neutral-900)]">MDS Components</span>
      </Link>
      <nav className="flex flex-col gap-6">
        {nav.map((group) => (
          <div key={group.title}>
            <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--mds-neutral-400)]">
              {group.title}
            </p>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                      active
                        ? "bg-[var(--mds-brand-50)] font-medium text-[var(--mds-brand-900)]"
                        : "text-[var(--mds-neutral-700)] hover:bg-[var(--mds-neutral-50)] hover:text-[var(--mds-neutral-900)]",
                    ].join(" ")}
                  >
                    {item.label}
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
