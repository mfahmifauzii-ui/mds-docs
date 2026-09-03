"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import LabelText from "@/components/mds/LabelText";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function LabelTextPage() {
  const { prev, next } = getPageNav("/components/label-text");
  return (
    <div>
      <DocHeader eyebrow="Components" title="Label text" description="A standalone field label. Two sizes, three font weights, an optional required marker, and an info affordance." />

      <DocSection id="playground" title="Playground">
        <Playground
          controls={[
            { key: "text", label: "Text", type: "text", default: "Input Label" },
            { key: "size", label: "Size", type: "select", options: ["md", "lg"], default: "md" },
            { key: "fontWeight", label: "Font weight", type: "select", options: ["Regular", "Medium", "Semibold"], default: "Medium" },
            { key: "mandatory", label: "Mandatory", type: "boolean", default: false },
            { key: "infoIcon", label: "Info icon", type: "boolean", default: false },
          ]}
          render={(v) => <LabelText text={v.text} size={v.size} fontWeight={v.fontWeight} mandatory={v.mandatory} infoIcon={v.infoIcon} />}
          code={(v) => `<LabelText text="${v.text}" size="${v.size}" fontWeight="${v.fontWeight}"${v.mandatory ? " mandatory" : ""}${v.infoIcon ? " infoIcon" : ""} />`}
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList
          when={["Every form field needs a visible label — never rely on placeholder text alone.", "Mark required fields consistently across a form."]}
          whenNot={["A field's purpose is already obvious from surrounding context, like a search bar."]}
        />
      </DocSection>

      <DocSection id="props" title="Props">
        <PropsTable
          rows={[
            { name: "text", type: "string", default: '"Input Label"', description: "Label text." },
            { name: "size", type: '"md" | "lg"', default: '"md"', description: "Text scale." },
            { name: "fontWeight", type: '"Regular" | "Medium" | "Semibold"', default: '"Regular"', description: "Weight of the label text." },
            { name: "mandatory", type: "boolean", default: "False", description: "Shows a red asterisk to mark the field as required." },
            { name: "infoIcon", type: "boolean", default: "No", description: "Shows an info glyph, usually paired with a tooltip." },
          ]}
        />
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Label text</strong> component set on the <em>Label text</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables["label-text"]} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
