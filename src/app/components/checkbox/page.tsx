import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import Checkbox from "@/components/mds/Checkbox";

export default function CheckboxPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Checkbox"
        description="A multi-select control for choosing zero or more options, paired with a label and optional hint."
      />

      <Stage label="Style: Outline / Solid">
        <div className="flex w-full max-w-[350px] flex-col gap-4">
          <Checkbox style="Outline" checked={false} />
          <Checkbox style="Solid" checked />
        </div>
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<Checkbox label="Remember me" checked={false} />
<Checkbox label="Remember me" checked />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Remember me"', description: "Option label." },
          { name: "hint", type: "string", default: "—", description: "Supporting text under the label." },
          { name: "showHint", type: "boolean", default: "true", description: "Toggles the hint line." },
          { name: "checked", type: "boolean", default: "false", description: "Checked state." },
        ]}
      />
    </div>
  );
}
