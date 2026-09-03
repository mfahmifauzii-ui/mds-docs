"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import PageNav from "@/components/docs/PageNav";
import TopAppBar from "@/components/mds/TopAppBar";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function TopAppBarPage() {
  const { prev, next } = getPageNav("/components/top-app-bar");
  return (
    <div>
      <DocHeader eyebrow="Components" title="Top app bar" description="A screen header. Two sizes, and independent Left/Right control slots." />

      <DocSection id="playground" title="Playground">
        <Playground
          controls={[
            { key: "title", label: "Title", type: "text", default: "Page Title" },
            { key: "size", label: "Size", type: "select", options: ["md", "lg"], default: "md" },
            { key: "leftControl", label: "Left control", type: "select", options: ["Back", "Icon", "Button text", "None"], default: "Back" },
            { key: "rightControl", label: "Right control", type: "select", options: ["Icon", "Button text", "None"], default: "None" },
          ]}
          render={(v) => (
            <div className="w-[348px]">
              <TopAppBar title={v.title} size={v.size} leftControl={v.leftControl} rightControl={v.rightControl} />
            </div>
          )}
          code={(v) => `<TopAppBar title="${v.title}" size="${v.size}" leftControl="${v.leftControl}" rightControl="${v.rightControl}" />`}
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList when={["Every screen needs a consistent, predictable place for the title and back navigation."]} whenNot={["The screen is a modal that already has its own header pattern."]} />
      </DocSection>

      <DocSection id="props" title="Props">
        <PropsTable
          rows={[
            { name: "title", type: "string", default: '"Page Title"', description: "Header title." },
            { name: "size", type: '"md" | "lg"', default: '"md"', description: "Bar height and title scale." },
            { name: "leftControl", type: '"Back" | "Icon" | "Button text" | "None"', default: '"Back"', description: "Leading control." },
            { name: "rightControl", type: '"Icon" | "Button text" | "None"', default: '"None"', description: "Trailing control." },
          ]}
        />
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Top App bar</strong> component set on the <em>Top App Bar</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables["top-app-bar"]} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
