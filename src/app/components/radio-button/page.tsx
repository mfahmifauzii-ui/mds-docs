"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import RadioButton from "@/components/mds/RadioButton";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function RadioButtonPage() {
  const { prev, next } = getPageNav("/components/radio-button");
  return (
    <div>
      <DocHeader eyebrow="Components" title="Radio button" description="A single-select control. Solid or Circle type, two sizes, and Default/Focused/Disabled states." />

      <DocSection id="playground" title="Playground">
        <Playground
          controls={[
            { key: "label", label: "Label", type: "text", default: "Remember me" },
            { key: "type", label: "Type", type: "select", options: ["Solid", "Circle"], default: "Solid" },
            { key: "size", label: "Size", type: "select", options: ["sm", "md"], default: "sm" },
            { key: "state", label: "State", type: "select", options: ["Default", "Focused", "Disabled"], default: "Default" },
            { key: "checked", label: "Checked", type: "boolean", default: true },
            { key: "showSupportText", label: "Support text", type: "boolean", default: false },
          ]}
          render={(v) => <RadioButton label={v.label} type={v.type} size={v.size} state={v.state} checked={v.checked} showSupportText={v.showSupportText} />}
          code={(v) => `<RadioButton\n  label="${v.label}"\n  type="${v.type}"\n  size="${v.size}"\n  state="${v.state}"${v.checked ? "\n  checked" : ""}${v.showSupportText ? "\n  showSupportText" : ""}\n/>`}
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList
          when={["Exactly one option must be chosen from a small visible set."]}
          whenNot={["Users can select more than one option — use Checkbox.", "There are many options — a Select field scales better."]}
        />
      </DocSection>

      <DocSection id="props" title="Props">
        <PropsTable
          rows={[
            { name: "label", type: "string", default: '"Remember me"', description: "Option label." },
            { name: "supportText", type: "string", default: '"Save my login details…"', description: "Secondary line below the label." },
            { name: "showSupportText", type: "boolean", default: "False", description: "Whether the support line renders." },
            { name: "checked", type: "boolean", default: "False", description: "Selected state." },
            { name: "size", type: '"sm" | "md"', default: '"sm"', description: "Control size." },
            { name: "type", type: '"Solid" | "Circle"', default: '"Solid"', description: "Fill style when selected." },
            { name: "state", type: '"Default" | "Focused" | "Disabled"', default: '"Default"', description: "Interaction state." },
          ]}
        />
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Radio Button</strong> component set on the <em>Checkbox &amp; Radio Button</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables["radio-button"]} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
