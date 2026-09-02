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
        description="A single-action control used for primary calls to action and destructive actions. Comes in a default and destructive style."
      />

      <Playground
        controls={[
          { key: "label", label: "Label", type: "text", default: "Button CTA" },
          { key: "destructive", label: "Destructive", type: "boolean", default: false },
        ]}
        render={(v) => <Button label={v.label} destructive={v.destructive} />}
        code={(v) => `<Button label="${v.label}"${v.destructive ? " destructive" : ""} />`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Button CTA"', description: "Text rendered inside the button." },
          { name: "destructive", type: "boolean", default: "false", description: "Switches to the destructive (danger) style, for irreversible actions." },
          { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction and reduces opacity." },
          { name: "onClick", type: "() => void", default: "—", description: "Click handler." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Button</strong> frame in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.button} />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Usage</h2>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--mds-neutral-500)]">
        <li>Use the default style for the primary action on a screen.</li>
        <li>Use <code className="font-mono text-[var(--mds-neutral-700)]">destructive</code> only for actions that delete or permanently change data.</li>
        <li>Keep one primary button per view — pair it with a text link or ghost action, not a second filled button.</li>
      </ul>
    </div>
  );
}
