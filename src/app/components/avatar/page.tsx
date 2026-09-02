"use client";
import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import Avatar from "@/components/mds/Avatar";
import { variables } from "@/data/variables";

export default function AvatarPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Data display"
        title="Avatar"
        description="Represents a user. Six sizes, a placeholder icon or initials fallback, and an optional status icon (online indicator or company badge)."
      />

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

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
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

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Avatar</strong> component set on the <em>Avatar</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.avatar} />
    </div>
  );
}
