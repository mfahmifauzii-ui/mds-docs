"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import ActivityFeed from "@/components/mds/ActivityFeed";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function ActivityFeedPage() {
  const { prev, next } = getPageNav("/components/activity-feed");
  return (
    <div>
      <DocHeader
        eyebrow="Components"
        title="Activity feed"
        description="Combines an avatar, actor name, timestamp, and description into a feed row. Two sizes and an optional contextual content block."
      />

      <DocSection id="playground" title="Playground">
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
              <ActivityFeed name={v.name} time={v.time} description={v.description} size={v.size} contextualContent={v.contextualContent} connector={v.connector} newDot={v.newDot} actionIcon={v.actionIcon} />
            </div>
          )}
          code={(v) =>
            `<ActivityFeed\n  name="${v.name}"\n  time="${v.time}"\n  description="${v.description}"\n  size="${v.size}"${v.contextualContent !== "False" ? `\n  contextualContent="${v.contextualContent}"` : ""}${v.connector ? "\n  connector" : ""}${v.newDot ? "\n  newDot" : ""}${v.actionIcon ? "\n  actionIcon" : ""}\n/>`
          }
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList when={["Displaying a chronological log of events, like order history or audit trails."]} whenNot={["The list isn't time-based — a plain List component is simpler."]} />
      </DocSection>

      <DocSection id="props" title="Props">
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
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Activity Feed</strong> component set on the <em>Activity Feed</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables["activity-feed"]} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
