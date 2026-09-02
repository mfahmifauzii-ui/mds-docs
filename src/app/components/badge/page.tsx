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
        description="A small pill used to display a status, category, or count next to other content."
      />

      <Playground
        controls={[
          { key: "label", label: "Label", type: "text", default: "Label" },
          { key: "tone", label: "Tone", type: "select", options: ["neutral", "brand", "success", "danger"], default: "neutral" },
        ]}
        render={(v) => <Badge label={v.label} tone={v.tone} />}
        code={(v) => `<Badge label="${v.label}" tone="${v.tone}" />`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Label"', description: "Badge text." },
          { name: "tone", type: '"neutral" | "brand" | "success" | "danger"', default: '"neutral"', description: "Color treatment. The base Figma component ships neutral only; brand/success/danger are token-driven extensions." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Badge</strong> frame in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.badge} />
    </div>
  );
}
