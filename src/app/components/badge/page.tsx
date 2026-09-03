"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import Badge from "@/components/mds/Badge";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function BadgePage() {
  const { prev, next } = getPageNav("/components/badge");
  return (
    <div>
      <DocHeader eyebrow="Components" title="Badge" description="A small pill for status, category, or count. Eight color tones, three sizes, and an optional icon." />

      <DocSection id="playground" title="Playground">
        <Playground
          controls={[
            { key: "label", label: "Label", type: "text", default: "Label" },
            { key: "color", label: "Color", type: "select", options: ["Gray", "Primary", "Secondary", "Error", "Warning", "Info", "Success", "None"], default: "Gray" },
            { key: "size", label: "Size", type: "select", options: ["sm", "md", "lg"], default: "md" },
            { key: "icon", label: "Icon", type: "select", options: ["None", "Dot", "Counter", "X close"], default: "None" },
          ]}
          render={(v) => <Badge label={v.label} color={v.color} size={v.size} icon={v.icon} />}
          code={(v) => `<Badge label="${v.label}" color="${v.color}" size="${v.size}"${v.icon !== "None" ? ` icon="${v.icon}"` : ""} />`}
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList
          when={["Flagging a status (Verified, Pending) next to a title or row.", "Showing an unread count."]}
          whenNot={["The information is the primary content — badges are for secondary signals."]}
        />
      </DocSection>

      <DocSection id="props" title="Props">
        <PropsTable
          rows={[
            { name: "label", type: "string", default: '"Label"', description: "Badge text." },
            { name: "color", type: '"Gray" | "Primary" | "Secondary" | "Error" | "Warning" | "Info" | "Success" | "None"', default: '"Gray"', description: "Tone." },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"sm"', description: "Padding and text scale." },
            { name: "icon", type: '"None" | "Dot" | "Counter" | "X close"', default: '"None"', description: "Adornment." },
          ]}
        />
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Badge</strong> component set on the <em>Badges/Chips</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables.badge} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
