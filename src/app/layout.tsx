import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/docs/Sidebar";

export const metadata: Metadata = {
  title: "MDS Components",
  description: "Component documentation for the MDS design system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <div className="transition-[padding] duration-200 lg:pl-[var(--doc-sidebar-w,272px)]">
          <main className="mx-auto max-w-3xl px-6 py-12 lg:px-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
