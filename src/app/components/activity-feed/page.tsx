import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import ActivityFeed from "@/components/mds/ActivityFeed";

export default function ActivityFeedPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Data display"
        title="Activity feed"
        description="A single entry in a chronological feed of user activity — avatar, name, timestamp, and a short description, connected to the next item."
      />

      <Stage label="Connector: On / Off" minH={220}>
        <div className="flex w-full max-w-[343px] flex-col">
          <ActivityFeed name="Jane Doe" time="2 mins ago" description="Uploaded 3 new files to the project." />
          <ActivityFeed name="Arif Nugroho" time="1 hour ago" description="Commented on the design review." showConnector={false} showDot={false} />
        </div>
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<ActivityFeed name="Jane Doe" time="2 mins ago" description="Uploaded 3 new files." />
<ActivityFeed name="Arif Nugroho" time="1 hour ago" description="Commented on the review." showConnector={false} />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "name", type: "string", default: '"Jane Doe"', description: "Actor name." },
          { name: "time", type: "string", default: '"00 mins ago"', description: "Relative timestamp." },
          { name: "description", type: "string", default: '"Description"', description: "What happened." },
          { name: "showConnector", type: "boolean", default: "true", description: "Draws the vertical line to the next feed item." },
          { name: "showDot", type: "boolean", default: "true", description: "Shows the unread indicator dot." },
          { name: "showAction", type: "boolean", default: "true", description: "Shows the trailing overflow-menu icon." },
        ]}
      />
    </div>
  );
}
