"use client";
import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import Badge from "@/components/mds/Badge";
import { variables } from "@/data/variables";

export default function BadgePage() {
  return (
    <div>
      <DocHeader
        eyebrow="Data display"
        title="Badge"
        description="A small pill for status, category, or count. Eight color tones, three sizes, and an optional icon (dot, counter, or close)."
      />

      <Playground
        controls={[
          { key: "label", label: "Label", type: "text", default: "Label" },
          { key: "color", label: "Color", type: "select", options: ["Gray", "Primary", "Secondary", "Error", "Warning", "Info", "Success", "None"], default: "Gray" },
          { key: "size", label: "Size", type: "select", options: ["sm", "md", "lg"], default: "md" },
          { key: "icon", label: "Icon", type: "select", options: ["None", "Dot", "Counter", "X close"], default: "None" },
        ]}
        render={(v) => <Badge label={v.label} color={v.color} size={v.size} icon={v.icon} />}
        code={(v) => `<Badge label="${v.label}" color="${v.color}" size="${v.size}"${v.icon !== "None" ? ` icon="${v.icon}"` : ""} />`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Label"', description: "Badge text." },
          { name: "color", type: '"Gray" | "Primary" | "Secondary" | "Error" | "Warning" | "Info" | "Success" | "None"', default: '"Gray"', description: "Tone." },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"sm"', description: "Padding and text scale." },
          { name: "icon", type: '"None" | "Dot" | "Counter" | "X close"', default: '"None"', description: "Adornment. Figma also defines Avatar/Flag/Icon left/right/Only/Color variants for richer cases." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Badge</strong> component set on the <em>Badges/Chips</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.badge} />
    </div>
  );
}
