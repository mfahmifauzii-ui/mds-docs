import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import Badge from "@/components/mds/Badge";

export default function BadgePage() {
  return (
    <div>
      <DocHeader
        eyebrow="Data display"
        title="Badge"
        description="A compact pill used to label status, category, or count next to other content."
      />

      <Stage label="Tone">
        <Badge label="Label" tone="neutral" />
        <Badge label="Verified" tone="brand" />
        <Badge label="Active" tone="success" />
        <Badge label="Failed" tone="danger" />
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<Badge label="Label" tone="neutral" />
<Badge label="Verified" tone="brand" />
<Badge label="Active" tone="success" />
<Badge label="Failed" tone="danger" />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: '"Label"', description: "Badge text." },
          { name: "tone", type: '"neutral" | "brand" | "success" | "danger"', default: '"neutral"', description: "Color treatment matched to meaning." },
        ]}
      />
    </div>
  );
}
