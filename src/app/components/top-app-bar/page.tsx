"use client";

import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import TopAppBar from "@/components/mds/TopAppBar";
import { variables } from "@/data/variables";

export default function TopAppBarPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Navigation"
        title="Top app bar"
        description="A screen header with an optional back button and a trailing action."
      />

      <Playground
        controls={[
          { key: "title", label: "Title", type: "text", default: "Page Title" },
          { key: "showBack", label: "Show back", type: "boolean", default: true },
        ]}
        render={(v) => (
          <div className="w-[348px]">
            <TopAppBar title={v.title} showBack={v.showBack} />
          </div>
        )}
        code={(v) => `<TopAppBar title="${v.title}"${v.showBack ? " showBack" : " showBack={false}"} />`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "title", type: "string", default: '"Page Title"', description: "Header title." },
          { name: "showBack", type: "boolean", default: "true", description: "Shows the leading back arrow." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Top App Bar</strong> frame in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables["top-app-bar"]} />
    </div>
  );
}
