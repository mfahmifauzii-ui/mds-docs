import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import RadioButton from "@/components/mds/RadioButton";

export default function RadioButtonPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Radio button"
        description="A single-select control for choosing one option from a set, paired with a label and optional hint."
      />

      <Stage label="Style: Outline / Solid">
        <div className="flex w-full max-w-[322px] flex-col gap-4">
          <RadioButton style="Outline" checked={false} />
          <RadioButton style="Solid" checked />
        </div>
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<RadioButton label="Remember me" checked={false} />
<RadioButton label="Remember me" checked />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Remember me"', description: "Option label." },
          { name: "hint", type: "string", default: "—", description: "Supporting text under the label." },
          { name: "showHint", type: "boolean", default: "true", description: "Toggles the hint line." },
          { name: "checked", type: "boolean", default: "false", description: "Selected state." },
        ]}
      />
    </div>
  );
}
