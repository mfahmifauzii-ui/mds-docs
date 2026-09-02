import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import Toggle from "@/components/mds/Toggle";

export default function TogglePage() {
  return (
    <div>
      <DocHeader
        eyebrow="Form & Input"
        title="Toggle"
        description="An on/off switch for a single setting that takes effect immediately, without a form submission."
      />

      <Stage label="Tick: Off / On">
        <div className="flex w-full max-w-[350px] flex-col gap-4">
          <Toggle tick={false} />
          <Toggle tick />
        </div>
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<Toggle label="Remember me" tick={false} />
<Toggle label="Remember me" tick />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Remember me"', description: "Setting label." },
          { name: "hint", type: "string", default: "—", description: "Supporting text under the label." },
          { name: "showHint", type: "boolean", default: "true", description: "Toggles the hint line." },
          { name: "tick", type: "boolean", default: "false", description: "On/off state." },
        ]}
      />
    </div>
  );
}
