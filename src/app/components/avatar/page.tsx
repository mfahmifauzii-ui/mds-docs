import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import Avatar from "@/components/mds/Avatar";

export default function AvatarPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Data display"
        title="Avatar"
        description="Represents a person or entity as a photo, icon, or initials, with an optional online-status indicator."
      />

      <Stage label="Type: Photo / Icons / Initials">
        <Avatar type="Photo" />
        <Avatar type="Icons" />
        <Avatar type="Initials" initials="OR" />
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<Avatar type="Photo" />
<Avatar type="Icons" />
<Avatar type="Initials" initials="OR" online={false} />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "type", type: '"Photo" | "Icons" | "Initials"', default: '"Photo"', description: "Which visual representation to render." },
          { name: "initials", type: "string", default: '"OR"', description: "Text shown when type is Initials." },
          { name: "online", type: "boolean", default: "true", description: "Shows the green online-status dot." },
          { name: "size", type: "number", default: "44", description: "Width/height in pixels." },
        ]}
      />
    </div>
  );
}
