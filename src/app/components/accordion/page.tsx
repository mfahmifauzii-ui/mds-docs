"use client";
import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import Accordion from "@/components/mds/Accordion";
import { variables } from "@/data/variables";

export default function AccordionPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Data display"
        title="Accordion"
        description="An expandable content section. Three frame styles (Default underline, Border, Line), four states, and an optional flipped chevron — matches the Accordion component set in Figma."
      />

      <Playground
        controls={[
          { key: "title", label: "Title", type: "text", default: "Accordion title" },
          { key: "style", label: "Style", type: "select", options: ["Default", "Border", "Line"], default: "Default" },
          { key: "state", label: "State", type: "select", options: ["Default", "Hover", "Expand", "Disabled"], default: "Expand" },
          { key: "flipIcon", label: "Flip icon", type: "boolean", default: false },
          { key: "leftIcon", label: "Left icon", type: "boolean", default: true },
        ]}
        render={(v) => (
          <div className="w-[328px]">
            <Accordion key={`${v.style}-${v.state}-${v.flipIcon}-${v.leftIcon}-${v.title}`} title={v.title} style={v.style} state={v.state} flipIcon={v.flipIcon} leftIcon={v.leftIcon} />
          </div>
        )}
        code={(v) => `<Accordion\n  title="${v.title}"\n  style="${v.style}"\n  state="${v.state}"${v.flipIcon ? "\n  flipIcon" : ""}${!v.leftIcon ? "\n  leftIcon={false}" : ""}\n/>`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "title", type: "string", default: '"Accordion title"', description: "Header text, always visible." },
          { name: "description", type: "string", default: "auto", description: "Body content, shown when expanded." },
          { name: "style", type: '"Default" | "Border" | "Line"', default: '"Default"', description: "Frame treatment of the item." },
          { name: "state", type: '"Default" | "Hover" | "Expand" | "Disabled"', default: '"Default"', description: "Interaction / open state." },
          { name: "flipIcon", type: "boolean", default: "Off", description: "Moves the chevron to the leading side." },
          { name: "leftIcon", type: "boolean", default: "true", description: "Shows a leading icon next to the title." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Accordion</strong> component set on the <em>Accordion</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.accordion} />
    </div>
  );
}
