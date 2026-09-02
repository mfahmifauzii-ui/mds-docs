"use client";

import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import Toggle from "@/components/mds/Toggle";
import { variables } from "@/data/variables";

export default function TogglePage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Toggle"
        description="An on/off switch, typically used for settings that take effect immediately."
      />

      <Playground
        controls={[
          { key: "label", label: "Label", type: "text", default: "Remember me" },
          { key: "hint", label: "Hint", type: "text", default: "This is a hint text to help user" },
          { key: "showHint", label: "Show hint", type: "boolean", default: true },
          { key: "tick", label: "On", type: "boolean", default: false },
        ]}
        render={(v) => <Toggle label={v.label} hint={v.hint} showHint={v.showHint} tick={v.tick} />}
        code={(v) => `<Toggle\n  label="${v.label}"${v.tick ? "\n  tick" : ""}${v.showHint ? `\n  hint="${v.hint}"` : "\n  showHint={false}"}\n/>`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Remember me"', description: "Setting label." },
          { name: "hint", type: "string", default: '"This is a hint text…"', description: "Supporting text below the label." },
          { name: "showHint", type: "boolean", default: "true", description: "Whether the hint line renders." },
          { name: "tick", type: "boolean", default: "false", description: "On/off state." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Toggle</strong> frame in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.toggle} />
    </div>
  );
}
