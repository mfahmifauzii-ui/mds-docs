"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import BottomNavigation from "@/components/mds/BottomNavigation";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

const labels = ["Home", "Search", "Cart", "Wishlist", "Profile"];

export default function BottomNavigationPage() {
  const { prev, next } = getPageNav("/components/bottom-navigation");
  return (
    <div>
      <DocHeader eyebrow="Components" title="Bottom navigation" description="A tab bar anchored to the bottom of the screen. Three layout styles, icon-only or icon+text, and a full-width or floating bar." />

      <DocSection id="playground" title="Playground">
        <Playground
          controls={[
            { key: "style", label: "Style", type: "select", options: ["Simple", "Offset", "Big in the center"], default: "Simple" },
            { key: "type", label: "Type", type: "select", options: ["Icon + text", "Icon only"], default: "Icon + text" },
            { key: "size", label: "Size", type: "select", options: ["Full-width", "Floating"], default: "Full-width" },
            { key: "active", label: "Active tab", type: "select", options: labels, default: "Home" },
          ]}
          render={(v) => (
            <div className="w-[348px]">
              <BottomNavigation style={v.style} type={v.type} size={v.size} items={labels.map((label) => ({ label, active: label === v.active }))} />
            </div>
          )}
          code={(v) =>
            `<BottomNavigation\n  style="${v.style}"\n  type="${v.type}"\n  size="${v.size}"\n  items={[\n${labels
              .map((l) => `    { label: "${l}"${l === v.active ? ", active: true" : ""} },`)
              .join("\n")}\n  ]}\n/>`
          }
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList when={["Mobile screens with 3–5 top-level destinations."]} whenNot={["There are more than 5 destinations — use a drawer or Sidebar instead."]} />
      </DocSection>

      <DocSection id="props" title="Props">
        <PropsTable
          rows={[
            { name: "style", type: '"Simple" | "Offset" | "Big in the center"', default: '"Simple"', description: "Layout treatment of the items." },
            { name: "type", type: '"Icon + text" | "Icon only"', default: '"Icon + text"', description: "Whether labels render under the icons." },
            { name: "size", type: '"Full-width" | "Floating"', default: '"Full-width"', description: "Bar shape and elevation." },
            { name: "items", type: "{ label: string; active?: boolean }[]", default: "5 default items", description: "Tab items, in order." },
          ]}
        />
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Bottom Navbar</strong> component set on the <em>Bottom Navigation Bar</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables["bottom-navigation"]} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
