"use client";

import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import RadioButton from "@/components/mds/RadioButton";
import { variables } from "@/data/variables";

export default function RadioButtonPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Radio button"
        description="A single-select control for choosing one option from a set."
      />

      <Playground
        controls={[
          { key: "label", label: "Label", type: "text", default: "Remember me" },
          { key: "hint", label: "Hint", type: "text", default: "This is a hint text to help user" },
          { key: "showHint", label: "Show hint", type: "boolean", default: true },
          { key: "style", label: "Style", type: "select", options: ["Outline", "Solid"], default: "Outline" },
        ]}
        render={(v) => <RadioButton label={v.label} hint={v.hint} showHint={v.showHint} style={v.style} />}
        code={(v) => `<RadioButton\n  label="${v.label}"\n  style="${v.style}"${v.showHint ? `\n  hint="${v.hint}"` : "\n  showHint={false}"}\n/>`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Remember me"', description: "Option label." },
          { name: "hint", type: "string", default: '"This is a hint text…"', description: "Supporting text below the label." },
          { name: "showHint", type: "boolean", default: "true", description: "Whether the hint line renders." },
          { name: "style", type: '"Outline" | "Solid"', default: '"Outline"', description: "Unselected vs. selected appearance." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Radio Button</strong> frame in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables["radio-button"]} />
    </div>
  );
}
