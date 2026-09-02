"use client";

import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import BottomNavigation from "@/components/mds/BottomNavigation";
import { variables } from "@/data/variables";

const labels = ["Home", "Search", "Cart", "Wishlist", "Profile"];

export default function BottomNavigationPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Navigation"
        title="Bottom navigation"
        description="A tab bar anchored to the bottom of the screen, in a default (shadow) style and a floating (pill) style."
      />

      <Playground
        controls={[
          { key: "style", label: "Style", type: "select", options: ["Default", "Floating"], default: "Default" },
          { key: "active", label: "Active tab", type: "select", options: labels, default: "Home" },
        ]}
        render={(v) => (
          <div className="w-[348px]">
            <BottomNavigation
              style={v.style}
              items={labels.map((label) => ({ label, active: label === v.active }))}
            />
          </div>
        )}
        code={(v) =>
          `<BottomNavigation\n  style="${v.style}"\n  items={[\n${labels
            .map((l) => `    { label: "${l}"${l === v.active ? ", active: true" : ""} },`)
            .join("\n")}\n  ]}\n/>`
        }
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "style", type: '"Default" | "Floating"', default: '"Default"', description: "Bar shape and elevation." },
          { name: "items", type: "{ label: string; active?: boolean }[]", default: "5 default items", description: "Tab items, in order. Exactly one should have active: true." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Bottom Navigation</strong> and <strong>_navigation-base</strong> frames in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables["bottom-navigation"]} />
    </div>
  );
}
