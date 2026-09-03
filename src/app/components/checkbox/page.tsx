"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import Checkbox from "@/components/mds/Checkbox";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function CheckboxPage() {
  const { prev, next } = getPageNav("/components/checkbox");
  return (
    <div>
      <DocHeader
        eyebrow="Components"
        title="Checkbox"
        description="A multi-select control. Four types, two sizes, an indeterminate state, and Default/Focused/Disabled states."
      />

      <DocSection id="playground" title="Playground">
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
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList
          when={["Users can select zero, one, or many options.", "Use indeterminate for a parent checkbox representing a partially-selected group."]}
          whenNot={["Exactly one option must be chosen — use Radio button."]}
        />
      </DocSection>

      <DocSection id="props" title="Props">
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
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Checkbox</strong> component set on the <em>Checkbox &amp; Radio Button</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables.checkbox} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
