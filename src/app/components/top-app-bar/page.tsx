"use client";
import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import TopAppBar from "@/components/mds/TopAppBar";
import { variables } from "@/data/variables";

export default function TopAppBarPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Navigation"
        title="Top app bar"
        description="A screen header. Two sizes, and independent Left/Right control slots (Back, Icon, Button text, or None)."
      />

      <Playground
        controls={[
          { key: "title", label: "Title", type: "text", default: "Page Title" },
          { key: "size", label: "Size", type: "select", options: ["md", "lg"], default: "md" },
          { key: "leftControl", label: "Left control", type: "select", options: ["Back", "Icon", "Button text", "None"], default: "Back" },
          { key: "rightControl", label: "Right control", type: "select", options: ["Icon", "Button text", "None"], default: "None" },
        ]}
        render={(v) => (
          <div className="w-[348px]">
            <TopAppBar title={v.title} size={v.size} leftControl={v.leftControl} rightControl={v.rightControl} />
          </div>
        )}
        code={(v) => `<TopAppBar title="${v.title}" size="${v.size}" leftControl="${v.leftControl}" rightControl="${v.rightControl}" />`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "title", type: "string", default: '"Page Title"', description: "Header title." },
          { name: "size", type: '"md" | "lg"', default: '"md"', description: "Bar height and title scale." },
          { name: "leftControl", type: '"Back" | "Icon" | "Button text" | "None"', default: '"Back"', description: "Leading control." },
          { name: "rightControl", type: '"Icon" | "Button text" | "None"', default: '"None"', description: "Trailing control." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Top App bar</strong> component set on the <em>Top App Bar</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables["top-app-bar"]} />
    </div>
  );
}
