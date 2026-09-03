"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import Avatar from "@/components/mds/Avatar";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function AvatarPage() {
  const { prev, next } = getPageNav("/components/avatar");
  return (
    <div>
      <DocHeader eyebrow="Components" title="Avatar" description="Represents a user. Six sizes, a placeholder icon or initials fallback, and an optional status icon." />

      <DocSection id="playground" title="Playground">
        <Playground
          controls={[
            { key: "size", label: "Size", type: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"], default: "md" },
            { key: "placeholder", label: "Placeholder icon", type: "boolean", default: false },
            { key: "showText", label: "Show initials", type: "boolean", default: false },
            { key: "initial", label: "Initials", type: "text", default: "OR" },
            { key: "statusIcon", label: "Status icon", type: "select", options: ["False", "Online indicator", "Company"], default: "False" },
          ]}
          render={(v) => <Avatar size={v.size} placeholder={v.placeholder} showText={v.showText} initial={v.initial} statusIcon={v.statusIcon} />}
          code={(v) => `<Avatar size="${v.size}"${v.showText ? ` showText initial="${v.initial}"` : v.placeholder ? " placeholder" : ""}${v.statusIcon !== "False" ? ` statusIcon="${v.statusIcon}"` : ""} />`}
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList
          when={["Representing a specific person or account across the product.", "Showing presence with the online indicator in chat or activity contexts."]}
          whenNot={["Representing a generic brand or system entity — use a logo mark instead."]}
        />
      </DocSection>

      <DocSection id="props" title="Props">
        <PropsTable
          rows={[
            { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"', default: '"xs"', description: "Avatar diameter." },
            { name: "placeholder", type: "boolean", default: "False", description: "Shows a generic person icon instead of a photo." },
            { name: "showText", type: "boolean", default: "False", description: "Shows initials instead of a photo." },
            { name: "initial", type: "string", default: '"OR"', description: "Text shown when showText is true." },
            { name: "statusIcon", type: '"False" | "Online indicator" | "Company"', default: '"False"', description: "Badge in the corner." },
            { name: "state", type: '"Default" | "Focused"', default: '"Default"', description: "Focus ring state." },
          ]}
        />
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Avatar</strong> component set on the <em>Avatar</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables.avatar} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
