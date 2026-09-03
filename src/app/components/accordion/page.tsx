"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import Accordion from "@/components/mds/Accordion";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function AccordionPage() {
  const { prev, next } = getPageNav("/components/accordion");
  return (
    <div>
      <DocHeader
        eyebrow="Components"
        title="Accordion"
        description="An expandable section that reveals content on demand. Three frame styles, four states, and a flippable disclosure icon."
      />

      <DocSection id="playground" title="Playground">
        <Playground
          controls={[
            { key: "title", label: "Title", type: "text", default: "Accordion title" },
            { key: "style", label: "Style", type: "select", options: ["Default", "Border", "Line"], default: "Default" },
            { key: "state", label: "State", type: "select", options: ["Default", "Hover", "Expand", "Disabled"], default: "Expand" },
            { key: "flipIcon", label: "Flip icon", type: "boolean", default: false },
            { key: "leftIcon", label: "Left icon", type: "boolean", default: true },
          ]}
          render={(v) => (
            <div className="w-[328px]">
              <Accordion key={`${v.style}-${v.state}-${v.flipIcon}-${v.leftIcon}-${v.title}`} title={v.title} style={v.style} state={v.state} flipIcon={v.flipIcon} leftIcon={v.leftIcon} />
            </div>
          )}
          code={(v) => `<Accordion\n  title="${v.title}"\n  style="${v.style}"\n  state="${v.state}"${v.flipIcon ? "\n  flipIcon" : ""}${!v.leftIcon ? "\n  leftIcon={false}" : ""}\n/>`}
        />
      </DocSection>

      <DocSection id="anatomy" title="Anatomy">
        <ol className="space-y-2 pl-5 text-sm leading-6 text-[var(--mds-neutral-500)]" style={{ listStyleType: "decimal" }}>
          <li><strong className="text-[var(--mds-neutral-900)]">Leading icon</strong> — optional, reinforces the section topic.</li>
          <li><strong className="text-[var(--mds-neutral-900)]">Title</strong> — always visible, summarizes the content.</li>
          <li><strong className="text-[var(--mds-neutral-900)]">Chevron</strong> — indicates open/closed; can flip to the leading side.</li>
          <li><strong className="text-[var(--mds-neutral-900)]">Description</strong> — revealed when expanded.</li>
        </ol>
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList
          when={["Grouping related but secondary content, like FAQs or order details.", "Content that most users won't need to read every time."]}
          whenNot={["The content is critical and should always be visible.", "There's only one section — a static block reads better."]}
        />
      </DocSection>

      <DocSection id="props" title="Props">
        <PropsTable
          rows={[
            { name: "title", type: "string", default: '"Accordion title"', description: "Header text, always visible." },
            { name: "description", type: "string", default: "auto", description: "Body content, shown when expanded." },
            { name: "style", type: '"Default" | "Border" | "Line"', default: '"Default"', description: "Frame treatment of the item." },
            { name: "state", type: '"Default" | "Hover" | "Expand" | "Disabled"', default: '"Default"', description: "Interaction / open state." },
            { name: "flipIcon", type: "boolean", default: "Off", description: "Moves the chevron to the leading side." },
            { name: "leftIcon", type: "boolean", default: "true", description: "Shows a leading icon next to the title." },
          ]}
        />
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Accordion</strong> component set on the <em>Accordion</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables.accordion} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
