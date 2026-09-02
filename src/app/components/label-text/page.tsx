import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import LabelText from "@/components/mds/LabelText";

export default function LabelTextPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Label text"
        description="The text label paired with form fields. Can indicate a mandatory field or attach an info tooltip trigger."
      />

      <Stage label="Mandatory × Info icon">
        <div className="flex flex-col gap-3">
          <LabelText />
          <LabelText mandatory />
          <LabelText infoIcon />
          <LabelText mandatory infoIcon />
        </div>
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<LabelText text="Input Label" />
<LabelText text="Input Label" mandatory />
<LabelText text="Input Label" infoIcon />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "text", type: "string", default: '"Input Label"', description: "Label copy." },
          { name: "mandatory", type: "boolean", default: "false", description: "Appends a required-field asterisk." },
          { name: "infoIcon", type: "boolean", default: "false", description: "Shows an info glyph for a tooltip trigger." },
        ]}
      />
    </div>
  );
}
