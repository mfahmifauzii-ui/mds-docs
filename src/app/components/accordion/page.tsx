"use client";

import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import Accordion from "@/components/mds/Accordion";
import { variables } from "@/data/variables";

export default function AccordionPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Data display"
        title="Accordion"
        description="An expandable section that reveals supporting content on demand. The disclosure icon can sit on either side of the title."
      />

      <Playground
        controls={[
          { key: "title", label: "Title", type: "text", default: "Accordion title" },
          { key: "description", label: "Description", type: "text", default: "Supporting text for the accordion item goes here." },
          { key: "flipIcon", label: "Flip icon", type: "boolean", default: false },
          { key: "defaultExpanded", label: "Expanded", type: "boolean", default: true },
        ]}
        render={(v) => (
          <div className="w-[350px]">
            <Accordion key={`${v.title}-${v.description}-${v.flipIcon}-${v.defaultExpanded}`} title={v.title} description={v.description} flipIcon={v.flipIcon} defaultExpanded={v.defaultExpanded} />
          </div>
        )}
        code={(v) => `<Accordion\n  title="${v.title}"\n  description="${v.description}"${v.flipIcon ? "\n  flipIcon" : ""}${v.defaultExpanded ? "\n  defaultExpanded" : ""}\n/>`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "title", type: "string", default: '"Accordion title"', description: "Header text, always visible." },
          { name: "description", type: "string", default: '"Supporting text…"', description: "Body content, shown when expanded." },
          { name: "flipIcon", type: "boolean", default: "false", description: "Moves the chevron to the leading side of the header." },
          { name: "defaultExpanded", type: "boolean", default: "false", description: "Whether the item starts open. The component manages its own open state after that." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Accordion</strong> frame in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.accordion} />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Usage</h2>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--mds-neutral-500)]">
        <li>Group related but secondary content — FAQs, order details, settings sections.</li>
        <li>Keep titles short enough to read on one line.</li>
        <li>Use <code className="font-mono text-[var(--mds-neutral-700)]">flipIcon</code> when the row already has a leading icon slot elsewhere in the list.</li>
      </ul>
    </div>
  );
}
