"use client";
import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import InputField from "@/components/mds/InputField";
import { variables } from "@/data/variables";

export default function InputFieldPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Input field"
        description="A text input. Five types (affixes/payment), three frame styles (Box, Outline, Underline), and eight states covering the full interaction lifecycle."
      />

      <Playground
        controls={[
          { key: "type", label: "Type", type: "select", options: ["Default", "Leading dropdown", "Trailing dropdown", "Leading text", "Payment input"], default: "Default" },
          { key: "style", label: "Style", type: "select", options: ["Box", "Outline", "Underline"], default: "Box" },
          { key: "state", label: "State", type: "select", options: ["Default", "Selected", "Typing", "Filled", "Focused", "Disabled", "Error", "Error focused"], default: "Default" },
          { key: "label", label: "Label", type: "text", default: "Input Label" },
          { key: "placeholder", label: "Placeholder", type: "text", default: "Placeholder text..." },
          { key: "mandatory", label: "Mandatory", type: "boolean", default: true },
          { key: "showLabel", label: "Show label", type: "boolean", default: true },
          { key: "showHintText", label: "Hint text", type: "boolean", default: false },
        ]}
        render={(v) => (
          <InputField
            type={v.type}
            style={v.style}
            state={v.state}
            label={v.label}
            placeholder={v.placeholder}
            mandatory={v.mandatory}
            showLabel={v.showLabel}
            showHintText={v.showHintText}
          />
        )}
        code={(v) =>
          `<InputField\n  type="${v.type}"\n  style="${v.style}"\n  state="${v.state}"\n  label="${v.label}"\n  placeholder="${v.placeholder}"${v.mandatory ? "\n  mandatory" : ""}${v.showHintText ? "\n  showHintText" : ""}\n/>`
        }
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "type", type: '"Default" | "Leading dropdown" | "Trailing dropdown" | "Leading text" | "Payment input"', default: '"Default"', description: "Affix layout." },
          { name: "style", type: '"Box" | "Outline" | "Underline"', default: '"Box"', description: "Frame treatment." },
          { name: "state", type: '"Default" | "Selected" | "Typing" | "Filled" | "Focused" | "Disabled" | "Error" | "Error focused"', default: '"Default"', description: "Full interaction lifecycle state." },
          { name: "label", type: "string", default: '"Input Label"', description: "Field label." },
          { name: "placeholder", type: "string", default: '"Placeholder text..."', description: "Placeholder shown when empty." },
          { name: "showLabel", type: "boolean", default: "true", description: "Whether the label row renders." },
          { name: "mandatory", type: "boolean", default: "false", description: "Shows the required asterisk on the label." },
          { name: "showHintText", type: "boolean", default: "true", description: "Shows a hint (or error message, in Error states) below the field." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Input field</strong> component set on the <em>Input Field</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables["input-field"]} />
    </div>
  );
}
