"use client";
import DocHeader from "@/components/docs/DocHeader";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import ActivityFeed from "@/components/mds/ActivityFeed";
import { variables } from "@/data/variables";

export default function ActivityFeedPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Data display"
        title="Activity feed"
        description="Combines an avatar, actor name, timestamp, and description into a feed row. Two sizes, an optional contextual content block (File/Labels/Text/Chat), a timeline connector, and a trailing action menu."
      />

      <Playground
        controls={[
          { key: "name", label: "Name", type: "text", default: "Jane Doe" },
          { key: "time", label: "Time", type: "text", default: "00 mins ago" },
          { key: "description", label: "Description", type: "text", default: "Description" },
          { key: "size", label: "Size", type: "select", options: ["sm", "lg"], default: "sm" },
          { key: "contextualContent", label: "Contextual content", type: "select", options: ["False", "File", "Labels", "Text", "Chat"], default: "False" },
          { key: "connector", label: "Connector line", type: "boolean", default: true },
          { key: "newDot", label: "Unread dot", type: "boolean", default: true },
          { key: "actionIcon", label: "Action menu", type: "boolean", default: true },
        ]}
        render={(v) => (
          <div className="w-[343px]">
            <ActivityFeed
              name={v.name}
              time={v.time}
              description={v.description}
              size={v.size}
              contextualContent={v.contextualContent}
              connector={v.connector}
              newDot={v.newDot}
              actionIcon={v.actionIcon}
            />
          </div>
        )}
        code={(v) =>
          `<ActivityFeed\n  name="${v.name}"\n  time="${v.time}"\n  description="${v.description}"\n  size="${v.size}"${v.contextualContent !== "False" ? `\n  contextualContent="${v.contextualContent}"` : ""}${v.connector ? "\n  connector" : ""}${v.newDot ? "\n  newDot" : ""}${v.actionIcon ? "\n  actionIcon" : ""}\n/>`
        }
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "name", type: "string", default: '"Jane Doe"', description: "Actor name." },
          { name: "time", type: "string", default: '"00 mins ago"', description: "Relative timestamp." },
          { name: "description", type: "string", default: '"Description"', description: "What happened." },
          { name: "size", type: '"sm" | "lg"', default: '"sm"', description: "Avatar and name scale." },
          { name: "contextualContent", type: '"False" | "File" | "Labels" | "Text" | "Chat"', default: '"False"', description: "Optional block rendered below the description." },
          { name: "connector", type: "boolean", default: "True", description: "Shows the vertical line connecting to the next item." },
          { name: "newDot", type: "boolean", default: "True", description: "Shows the unread indicator next to the timestamp." },
          { name: "actionIcon", type: "boolean", default: "True", description: "Shows the trailing menu icon." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Activity Feed</strong> component set on the <em>Activity Feed</em> page in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables["activity-feed"]} />
    </div>
  );
}
