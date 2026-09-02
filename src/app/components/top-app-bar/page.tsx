import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import TopAppBar from "@/components/mds/TopAppBar";

export default function TopAppBarPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Navigation"
        title="Top app bar"
        description="The persistent header at the top of a screen, showing the page title, an optional back action, and a primary action."
      />

      <Stage label="Show back: Yes / No">
        <div className="flex w-full max-w-[348px] flex-col gap-4">
          <TopAppBar showBack />
          <TopAppBar showBack={false} title="Home" />
        </div>
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<TopAppBar title="Page Title" showBack />
<TopAppBar title="Home" showBack={false} />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "title", type: "string", default: '"Page Title"', description: "Screen title." },
          { name: "showBack", type: "boolean", default: "true", description: "Shows the back-navigation chevron." },
        ]}
      />
    </div>
  );
}
