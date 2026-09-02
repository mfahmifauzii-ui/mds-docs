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
        description="Shows the user's location in a hierarchy. Middle items can collapse into an ellipsis for deep paths."
      />

      <Playground
        controls={[
          { key: "current", label: "Current page", type: "text", default: "Menu" },
          { key: "truncated", label: "Truncated", type: "boolean", default: false },
        ]}
        render={(v) => <Breadcrumbs items={["Menu", "Menu", v.current]} truncated={v.truncated} />}
        code={(v) => `<Breadcrumbs items={["Menu", "Menu", "${v.current}"]}${v.truncated ? " truncated" : ""} />`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "items", type: "string[]", default: '["Menu","Menu","Menu"]', description: "Path segments, in order." },
          { name: "truncated", type: "boolean", default: "false", description: "Collapses middle segments into an ellipsis chip when there are more than two." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Breadcrumbs</strong> frame in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.breadcrumbs} />
    </div>
  );
}
