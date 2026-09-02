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
        description="Represents a user as a photo, an icon, or initials, with an optional online indicator."
      />

      <Playground
        controls={[
          { key: "type", label: "Type", type: "select", options: ["Photo", "Icons", "Initials"], default: "Photo" },
          { key: "initials", label: "Initials", type: "text", default: "OR" },
          { key: "online", label: "Online indicator", type: "boolean", default: true },
        ]}
        render={(v) => <Avatar type={v.type} initials={v.initials} online={v.online} />}
        code={(v) => `<Avatar type="${v.type}"${v.type === "Initials" ? ` initials="${v.initials}"` : ""}${v.online ? " online" : ""} />`}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "type", type: '"Photo" | "Icons" | "Initials"', default: '"Photo"', description: "Which avatar content to render." },
          { name: "initials", type: "string", default: '"OR"', description: "Text shown when type is Initials." },
          { name: "online", type: "boolean", default: "true", description: "Shows the green online indicator dot." },
          { name: "size", type: "number", default: "44", description: "Width and height in pixels." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Avatar</strong> frame in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables.avatar} />
    </div>
  );
}
