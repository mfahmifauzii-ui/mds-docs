"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import Toggle from "@/components/mds/Toggle";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function TogglePage() {
  const { prev, next } = getPageNav("/components/toggle");
  return (
    <div>
      <DocHeader eyebrow="Components" title="Toggle" description="An on/off switch. Two sizes, label position left/right, a Dark/Light track theme, and Default/Focused/Disabled states." />

      <DocSection id="playground" title="Playground">
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
          render={(v) => <Toggle label={v.label} size={v.size} position={v.position} theme={v.theme} state={v.state} tick={v.tick} showSupportText={v.showSupportText} />}
          code={(v) =>
            `<Toggle\n  label="${v.label}"\n  size="${v.size}"\n  position="${v.position}"\n  theme="${v.theme}"\n  state="${v.state}"${v.tick ? "\n  tick" : ""}${v.showSupportText ? "\n  showSupportText" : ""}\n/>`
          }
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList
          when={["A setting takes effect immediately on change, without a Save step."]}
          whenNot={["The change requires explicit confirmation — pair with a Checkbox and a Save action instead."]}
        />
      </DocSection>

      <DocSection id="props" title="Props">
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
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Toggle</strong> component set on the <em>Toggles</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables.toggle} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
