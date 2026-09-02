"use client";
import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import Checkbox from "@/components/mds/Checkbox";
import { variables } from "@/data/variables";

export default function CheckboxPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Checkbox"
        description="A multi-select control. Four types (solid/outline × square/circle), two sizes, an indeterminate state, and Default/Focused/Disabled states."
      />

      <Playground
        controls={[
          { key: "label", label: "Label", type: "text", default: "Remember me" },
          { key: "type", label: "Type", type: "select", options: ["Solid square", "Solid circle", "Outline square", "Outline circle"], default: "Solid square" },
          { key: "size", label: "Size", type: "select", options: ["sm", "md"], default: "sm" },
          { key: "state", label: "State", type: "select", options: ["Default", "Focused", "Disabled"], default: "Default" },
          { key: "checked", label: "Checked", type: "boolean", default: true },
          { key: "indeterminate", label: "Indeterminate", type: "boolean", default: false },
          { key: "showSupportText", label: "Support text", type: "boolean", default: true },
        ]}
        render={(v) => (
          <Checkbox label={v.label} type={v.type} size={v.size} state={v.state} checked={v.checked} indeterminate={v.indeterminate} showSupportText={v.showSupportText} />
        )}
        code={(v) =>
          `<Checkbox\n  label="${v.label}"\n  type="${v.type}"\n  size="${v.size}"\n  state="${v.state}"${v.checked ? "\n  checked" : ""}${v.indeterminate ? "\n  indeterminate" : ""}${v.showSupportText ? "\n  showSupportText" : ""}\n/>`
        }
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Remember me"', description: "Option label." },
          { name: "supportText", type: "string", default: '"Save my login details…"', description: "Secondary line below the label." },
          { name: "showSupportText", type: "boolean", default: "true", description: "Whether the support line renders." },
          { name: "checked", type: "boolean", default: "False", description: "Checked state." },
          { name: "indeterminate", type: "boolean", default: "False", description: "Dash state for partial selection, overrides checked visual." },
          { name: "size", type: '"sm" | "md"', default: '"sm"', description: "Box size." },
          { name: "type", type: '"Solid square" | "Solid circle" | "Outline square" | "Outline circle"', default: '"Solid square"', description: "Fill and shape." },
          { name: "state", type: '"Default" | "Focused" | "Disabled"', default: '"Default"', description: "Interaction state." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Checkbox</strong> component set on the <em>Checkbox &amp; Radio Button</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.checkbox} />
    </div>
  );
}
