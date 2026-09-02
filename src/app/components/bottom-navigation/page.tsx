import DocHeader from "@/components/docs/DocHeader";
import Stage from "@/components/docs/Stage";
import CodeBlock from "@/components/docs/CodeBlock";
import PropsTable from "@/components/docs/PropsTable";
import BottomNavigation from "@/components/mds/BottomNavigation";

export default function BottomNavigationPage() {
  return (
    <div>
      <DocHeader
        eyebrow="Navigation"
        title="Bottom navigation"
        description="The primary navigation bar for mobile screens, pinned to the bottom of the viewport. Available docked or floating."
      />

      <Stage label="Style: Default / Floating" minH={220}>
        <div className="flex w-full max-w-[348px] flex-col gap-6">
          <BottomNavigation style="Default" />
          <BottomNavigation style="Floating" />
        </div>
      </Stage>

      <div className="mt-4">
        <CodeBlock code={`<BottomNavigation
  items={[
    { label: "Home", active: true },
    { label: "Search" },
    { label: "Cart" },
    { label: "Wishlist" },
    { label: "Profile" },
  ]}
/>
<BottomNavigation style="Floating" items={items} />`} />
      </div>

      <h2 className="mt-10 mb-3 text-lg font-semibold text-[var(--mds-neutral-900)]">Props</h2>
      <PropsTable
        rows={[
          { name: "style", type: '"Default" | "Floating"', default: '"Default"', description: "Docked bar vs. floating pill." },
          { name: "items", type: "{ label: string; active?: boolean }[]", default: "5 default items", description: "Navigation destinations, in order." },
        ]}
      />
    </div>
  );
}
