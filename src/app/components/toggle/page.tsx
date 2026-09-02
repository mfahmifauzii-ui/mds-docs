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
        description="An on/off switch. Two sizes, label position left/right, a Dark/Light track theme, and Default/Focused/Disabled states."
      />

      <Playground
        controls={[
          { key: "label", label: "Label", type: "text", default: "Remember me" },
          { key: "size", label: "Size", type: "select", options: ["sm", "md"], default: "sm" },
          { key: "position", label: "Position", type: "select", options: ["Left", "Right"], default: "Left" },
          { key: "theme", label: "Theme", type: "select", options: ["Dark", "Light"], default: "Dark" },
          { key: "state", label: "State", type: "select", options: ["Default", "Focused", "Disabled"], default: "Default" },
          { key: "tick", label: "On", type: "boolean", default: false },
          { key: "showSupportText", label: "Support text", type: "boolean", default: false },
        ]}
        render={(v) => (
          <Toggle label={v.label} size={v.size} position={v.position} theme={v.theme} state={v.state} tick={v.tick} showSupportText={v.showSupportText} />
        )}
        code={(v) =>
          `<Toggle\n  label="${v.label}"\n  size="${v.size}"\n  position="${v.position}"\n  theme="${v.theme}"\n  state="${v.state}"${v.tick ? "\n  tick" : ""}${v.showSupportText ? "\n  showSupportText" : ""}\n/>`
        }
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Remember me"', description: "Setting label." },
          { name: "showSupportText", type: "boolean", default: "False", description: "Whether the support line renders." },
          { name: "tick", type: "boolean", default: "No", description: "On/off state." },
          { name: "size", type: '"sm" | "md"', default: '"sm"', description: "Track size." },
          { name: "position", type: '"Left" | "Right"', default: '"Left"', description: "Where the switch sits relative to the label." },
          { name: "theme", type: '"Dark" | "Light"', default: '"Dark"', description: "On-color intensity." },
          { name: "state", type: '"Default" | "Focused" | "Disabled"', default: '"Default"', description: "Interaction state." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Toggle</strong> component set on the <em>Toggles</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.toggle} />
    </div>
  );
}
