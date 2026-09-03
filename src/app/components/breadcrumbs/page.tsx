"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import Breadcrumbs from "@/components/mds/Breadcrumbs";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function BreadcrumbsPage() {
  const { prev, next } = getPageNav("/components/breadcrumbs");
  return (
    <div>
      <DocHeader eyebrow="Components" title="Breadcrumbs" description="Shows the user's location in a hierarchy. Three divider styles, plain-text or button chips, and a collapsed mode for deep paths." />

      <DocSection id="playground" title="Playground">
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
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList when={["The user is 3+ levels deep in a hierarchy and needs an easy way back up."]} whenNot={["The site has a flat structure — a back link is enough."]} />
      </DocSection>

      <DocSection id="props" title="Props">
        <PropsTable
          rows={[
            { name: "items", type: "string[]", default: '["Home","Category","Product"]', description: "Path segments, in order." },
            { name: "divider", type: '"Chevron" | "Minus" | "Slash"', default: '"Chevron"', description: "Separator glyph between segments." },
            { name: "type", type: '"Text" | "Btn gray" | "Btn primary"', default: '"Text"', description: "Plain text trail vs. button-style chips." },
            { name: "collapsed", type: "boolean", default: "False", description: "Collapses middle segments into an ellipsis when there are more than two." },
          ]}
        />
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Breadcumb button</strong> component set on the <em>Breadcrumbs</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables.breadcrumbs} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
