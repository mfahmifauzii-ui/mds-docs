"use client";
import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import Button from "@/components/mds/Button";
import { variables } from "@/data/variables";

export default function ButtonPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Button"
        description="A single-action control. Five hierarchies (Primary, Secondary, Tertiary, Text, Link), four sizes, and a destructive variant for irreversible actions — mirrors the full Button component set in Figma."
      />

      <Playground
        controls={[
          { key: "btnText", label: "Text", type: "text", default: "Get Started" },
          { key: "hierarchy", label: "Hierarchy", type: "select", options: ["Primary", "Secondary", "Tertiary", "Text", "Link"], default: "Primary" },
          { key: "size", label: "Size", type: "select", options: ["Tiny", "Small", "Medium", "Large"], default: "Medium" },
          { key: "state", label: "State", type: "select", options: ["Default", "Active/Pressed", "Disable"], default: "Default" },
          { key: "destructive", label: "Destructive", type: "boolean", default: false },
          { key: "leadingIcon", label: "Leading icon", type: "boolean", default: false },
          { key: "trailingIcon", label: "Trailing icon", type: "boolean", default: false },
        ]}
        render={(v) => (
          <Button btnText={v.btnText} hierarchy={v.hierarchy} size={v.size} state={v.state} destructive={v.destructive} leadingIcon={v.leadingIcon} trailingIcon={v.trailingIcon} />
        )}
        code={(v) =>
          `<Button\n  btnText="${v.btnText}"\n  hierarchy="${v.hierarchy}"\n  size="${v.size}"\n  state="${v.state}"${v.destructive ? "\n  destructive" : ""}${v.leadingIcon ? "\n  leadingIcon" : ""}${v.trailingIcon ? "\n  trailingIcon" : ""}\n/>`
        }
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "btnText", type: "string", default: '"Get Started"', description: "Button text." },
          { name: "hierarchy", type: '"Primary" | "Secondary" | "Tertiary" | "Text" | "Link"', default: '"Primary"', description: "Visual weight, from the Hierarchy variant." },
          { name: "size", type: '"Tiny" | "Small" | "Medium" | "Large"', default: '"Tiny"', description: "Padding and text scale." },
          { name: "state", type: '"Default" | "Active/Pressed" | "Disable"', default: '"Default"', description: "Interaction state." },
          { name: "destructive", type: "boolean", default: "False", description: "Swaps the accent color to the danger palette." },
          { name: "iconOnly", type: "boolean", default: "false (Off)", description: "Hides the label and centers the icon." },
          { name: "leadingIcon", type: "boolean", default: "false", description: "Shows an icon before the text." },
          { name: "trailingIcon", type: "boolean", default: "false", description: "Shows an icon after the text." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Button</strong> component set on the <em>Button</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.button} />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Usage</h2>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--mds-neutral-500)]">
        <li>Primary for the one main action on a screen; Secondary/Tertiary for supporting actions.</li>
        <li>Text and Link hierarchies read as lower-emphasis actions inline with content.</li>
        <li>Use <code className="font-mono text-[var(--mds-neutral-700)]">destructive</code> only for actions that delete or permanently change data.</li>
      </ul>
    </div>
  );
}
