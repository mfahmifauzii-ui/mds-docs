import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import Accordion from "@/components/mds/Accordion";

export default function AccordionPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Data display"
        title="Accordion"
        description="A collapsible content section used to hide secondary information until the user asks for it. Supports leading or trailing chevron placement."
      />

      <Stage label="Expand: No / Yes" minH={220}>
        <div className="flex flex-col gap-4">
          <Accordion />
          <Accordion defaultExpanded />
        </div>
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<Accordion title="Accordion title" description="Supporting text..." />
<Accordion defaultExpanded />
<Accordion flipIcon />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "title", type: "string", default: '"Accordion title"', description: "Header text." },
          { name: "description", type: "string", default: "—", description: "Body text shown when expanded." },
          { name: "flipIcon", type: "boolean", default: "false", description: "Moves the chevron to the leading edge." },
          { name: "defaultExpanded", type: "boolean", default: "false", description: "Initial expanded state." },
        ]}
      />
    </div>
  );
}
