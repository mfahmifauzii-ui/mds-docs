import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import InputField from "@/components/mds/InputField";

export default function InputFieldPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Input field"
        description="A single-line text input with a label, optional help icon, hint text, and leading or trailing dropdown adornments."
      />

      <Stage label="Type: Default / Leading dropdown / Trailing dropdown" minH={260}>
        <div className="flex w-full max-w-[341px] flex-col gap-6">
          <InputField />
          <InputField type="Leading dropdown" />
          <InputField type="Trailing dropdown" showHint />
        </div>
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<InputField label="Input Label" placeholder="Placeholder text..." />
<InputField type="Leading dropdown" />
<InputField type="Trailing dropdown" showHint showHelpIcon />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "type", type: '"Default" | "Leading dropdown" | "Trailing dropdown"', default: '"Default"', description: "Adornment layout." },
          { name: "label", type: "string", default: '"Input Label"', description: "Field label." },
          { name: "placeholder", type: "string", default: '"Placeholder text..."', description: "Placeholder copy." },
          { name: "mandatory", type: "boolean", default: "true", description: "Shows the required-field asterisk on the label." },
          { name: "showHelpIcon", type: "boolean", default: "false", description: "Shows a help glyph at the end of the field." },
          { name: "showHint", type: "boolean", default: "false", description: "Shows supporting hint text below the field." },
        ]}
      />
    </div>
  );
}
