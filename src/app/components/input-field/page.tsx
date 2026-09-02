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
        description="A text input with an optional leading or trailing affix, help icon, and hint text."
      />

      <Playground
        controls={[
          { key: "type", label: "Type", type: "select", options: ["Default", "Leading dropdown", "Trailing dropdown"], default: "Default" },
          { key: "label", label: "Label", type: "text", default: "Input Label" },
          { key: "placeholder", label: "Placeholder", type: "text", default: "Placeholder text..." },
          { key: "mandatory", label: "Mandatory", type: "boolean", default: true },
          { key: "showHelpIcon", label: "Help icon", type: "boolean", default: false },
          { key: "showHint", label: "Hint text", type: "boolean", default: false },
        ]}
        render={(v) => (
          <InputField type={v.type} label={v.label} placeholder={v.placeholder} mandatory={v.mandatory} showHelpIcon={v.showHelpIcon} showHint={v.showHint} />
        )}
        code={(v) =>
          `<InputField\n  type="${v.type}"\n  label="${v.label}"\n  placeholder="${v.placeholder}"${v.mandatory ? "\n  mandatory" : ""}${v.showHelpIcon ? "\n  showHelpIcon" : ""}${v.showHint ? "\n  showHint" : ""}\n/>`
        }
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "type", type: '"Default" | "Leading dropdown" | "Trailing dropdown"', default: '"Default"', description: "Position of the affix chip." },
          { name: "label", type: "string", default: '"Input Label"', description: "Field label." },
          { name: "placeholder", type: "string", default: '"Placeholder text..."', description: "Placeholder shown when empty." },
          { name: "mandatory", type: "boolean", default: "false", description: "Shows the required asterisk on the label." },
          { name: "showHelpIcon", type: "boolean", default: "false", description: "Shows a help icon inside the field." },
          { name: "showHint", type: "boolean", default: "false", description: "Shows a hint line below the field." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Input field</strong> frame in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables["input-field"]} />
    </div>
  );
}
