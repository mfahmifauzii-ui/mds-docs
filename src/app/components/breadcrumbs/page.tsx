"use client";
import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import Breadcrumbs from "@/components/mds/Breadcrumbs";
import { variables } from "@/data/variables";

export default function BreadcrumbsPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Navigation"
        title="Breadcrumbs"
        description="Shows the user's location in a hierarchy. Three divider styles, plain-text or button chips, and a collapsed mode for deep paths."
      />

      <Playground
        controls={[
          { key: "current", label: "Current page", type: "text", default: "Product" },
          { key: "divider", label: "Divider", type: "select", options: ["Chevron", "Minus", "Slash"], default: "Chevron" },
          { key: "type", label: "Type", type: "select", options: ["Text", "Btn gray", "Btn primary"], default: "Text" },
          { key: "collapsed", label: "Collapsed", type: "boolean", default: false },
        ]}
        render={(v) => <Breadcrumbs items={["Home", "Category", v.current]} divider={v.divider} type={v.type} collapsed={v.collapsed} />}
        code={(v) => `<Breadcrumbs items={["Home", "Category", "${v.current}"]} divider="${v.divider}" type="${v.type}"${v.collapsed ? " collapsed" : ""} />`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "items", type: "string[]", default: '["Home","Category","Product"]', description: "Path segments, in order." },
          { name: "divider", type: '"Chevron" | "Minus" | "Slash"', default: '"Chevron"', description: "Separator glyph between segments." },
          { name: "type", type: '"Text" | "Btn gray" | "Btn primary"', default: '"Text"', description: "Plain text trail vs. button-style chips. Figma also defines background/line variants for gray and primary." },
          { name: "collapsed", type: "boolean", default: "False", description: "Collapses middle segments into an ellipsis when there are more than two." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Breadcumb button</strong> component set on the <em>Breadcrumbs</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.breadcrumbs} />
    </div>
  );
}
