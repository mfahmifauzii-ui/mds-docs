"use client";
import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import LabelText from "@/components/mds/LabelText";
import { variables } from "@/data/variables";

export default function LabelTextPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Label text"
        description="A standalone field label. Two sizes, three font weights, an optional required marker, and an info affordance."
      />

      <Playground
        controls={[
          { key: "text", label: "Text", type: "text", default: "Input Label" },
          { key: "size", label: "Size", type: "select", options: ["md", "lg"], default: "md" },
          { key: "fontWeight", label: "Font weight", type: "select", options: ["Regular", "Medium", "Semibold"], default: "Medium" },
          { key: "mandatory", label: "Mandatory", type: "boolean", default: false },
          { key: "infoIcon", label: "Info icon", type: "boolean", default: false },
        ]}
        render={(v) => <LabelText text={v.text} size={v.size} fontWeight={v.fontWeight} mandatory={v.mandatory} infoIcon={v.infoIcon} />}
        code={(v) => `<LabelText text="${v.text}" size="${v.size}" fontWeight="${v.fontWeight}"${v.mandatory ? " mandatory" : ""}${v.infoIcon ? " infoIcon" : ""} />`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "text", type: "string", default: '"Input Label"', description: "Label text." },
          { name: "size", type: '"md" | "lg"', default: '"md"', description: "Text scale." },
          { name: "fontWeight", type: '"Regular" | "Medium" | "Semibold"', default: '"Regular"', description: "Weight of the label text." },
          { name: "mandatory", type: "boolean", default: "False", description: "Shows a red asterisk to mark the field as required." },
          { name: "infoIcon", type: "boolean", default: "No", description: "Shows an info glyph, usually paired with a tooltip." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Label text</strong> component set on the <em>Label text</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables["label-text"]} />
    </div>
  );
}
