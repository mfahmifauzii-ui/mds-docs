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
        description="Combines an avatar, actor name, timestamp, and description into a single feed row — used in timelines and activity logs."
      />

      <Playground
        controls={[
          { key: "name", label: "Name", type: "text", default: "Jane Doe" },
          { key: "time", label: "Time", type: "text", default: "00 mins ago" },
          { key: "description", label: "Description", type: "text", default: "Description" },
          { key: "showConnector", label: "Connector line", type: "boolean", default: true },
          { key: "showDot", label: "Unread dot", type: "boolean", default: true },
          { key: "showAction", label: "Action menu", type: "boolean", default: true },
        ]}
        render={(v) => (
          <div className="w-[343px]">
            <ActivityFeed name={v.name} time={v.time} description={v.description} showConnector={v.showConnector} showDot={v.showDot} showAction={v.showAction} />
          </div>
        )}
        code={(v) =>
          `<ActivityFeed\n  name="${v.name}"\n  time="${v.time}"\n  description="${v.description}"${v.showConnector ? "\n  showConnector" : ""}${v.showDot ? "\n  showDot" : ""}${v.showAction ? "\n  showAction" : ""}\n/>`
        }
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "name", type: "string", default: '"Jane Doe"', description: "Actor name." },
          { name: "time", type: "string", default: '"00 mins ago"', description: "Relative timestamp." },
          { name: "description", type: "string", default: '"Description"', description: "What happened." },
          { name: "showConnector", type: "boolean", default: "true", description: "Shows the vertical line connecting to the next item." },
          { name: "showDot", type: "boolean", default: "true", description: "Shows the unread indicator next to the timestamp." },
          { name: "showAction", type: "boolean", default: "true", description: "Shows the trailing menu icon." },
        ]}
      />

      <h2 className="doc-prose mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Variables used</h2>
      <p className="doc-prose mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
        From the <strong>Activity Feed</strong> frame in the MDS — Variable Figma file.
      </p>
      <VariablesTable rows={variables["activity-feed"]} />
    </div>
  );
}
