import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import Breadcrumbs from "@/components/mds/Breadcrumbs";

export default function BreadcrumbsPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Navigation"
        title="Breadcrumbs"
        description="Shows the user's location within a hierarchy and lets them jump back to a parent level. Truncates automatically for deep paths."
      />

      <Stage label="Truncated: No / Yes">
        <div className="flex w-full max-w-[350px] flex-col gap-4">
          <Breadcrumbs items={["Menu", "Menu", "Menu"]} />
          <Breadcrumbs items={["Menu", "Menu", "Menu", "Menu"]} truncated />
        </div>
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<Breadcrumbs items={["Home", "Settings", "Profile"]} />
<Breadcrumbs items={["Home", "Settings", "Security", "Profile"]} truncated />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "items", type: "string[]", default: '["Menu","Menu","Menu"]', description: "Ordered list of crumb labels, current page last." },
          { name: "truncated", type: "boolean", default: "false", description: "Collapses middle crumbs into an ellipsis." },
        ]}
      />
    </div>
  );
}
