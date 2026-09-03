"use client";
import DocHeader from "@/components/docs/DocHeader";
import DocSection from "@/components/docs/DocSection";
import Playground from "@/components/docs/Playground";
import PropsTable from "@/components/docs/PropsTable";
import VariablesTable from "@/components/docs/VariablesTable";
import UsageList from "@/components/docs/UsageList";
import DoDontCard from "@/components/docs/DoDontCard";
import PageNav from "@/components/docs/PageNav";
import Button from "@/components/mds/Button";
import { variables } from "@/data/variables";
import { getPageNav } from "@/lib/nav-helpers";

export default function ButtonPage() {
  const { prev, next } = getPageNav("/components/button");
  return (
    <div>
      <DocHeader
        eyebrow="Components"
        title="Button"
        description="Used to initiate an action or trigger a change. Five hierarchies, four sizes, and a destructive variant for irreversible actions."
      />

      <DocSection id="playground" title="Playground">
        <Playground
          controls={[
            { key: "btnText", label: "Text", type: "text", default: "Get Started" },
            { key: "hierarchy", label: "Hierarchy", type: "select", options: ["Primary", "Secondary", "Tertiary", "Text", "Link"], default: "Primary" },
            { key: "size", label: "Size", type: "select", options: ["Tiny", "Small", "Medium", "Large"], default: "Medium" },
            { key: "state", label: "State", type: "select", options: ["Default", "Active/Pressed", "Disable"], default: "Default" },
            { key: "destructive", label: "Destructive", type: "boolean", default: false },
            { key: "leadingIcon", label: "Leading icon", type: "boolean", default: false },
            { key: "trailingIcon", label: "Trailing icon", type: "boolean", default: false },
          ]}
          render={(v) => (
            <Button btnText={v.btnText} hierarchy={v.hierarchy} size={v.size} state={v.state} destructive={v.destructive} leadingIcon={v.leadingIcon} trailingIcon={v.trailingIcon} />
          )}
          code={(v) =>
            `<Button\n  btnText="${v.btnText}"\n  hierarchy="${v.hierarchy}"\n  size="${v.size}"\n  state="${v.state}"${v.destructive ? "\n  destructive" : ""}${v.leadingIcon ? "\n  leadingIcon" : ""}${v.trailingIcon ? "\n  trailingIcon" : ""}\n/>`
          }
        />
      </DocSection>

      <DocSection id="anatomy" title="Anatomy">
        <ol className="space-y-2 pl-5 text-sm leading-6 text-[var(--mds-neutral-500)]" style={{ listStyleType: "decimal" }}>
          <li><strong className="text-[var(--mds-neutral-900)]">Leading / trailing icon</strong> — optional, reinforces the action.</li>
          <li><strong className="text-[var(--mds-neutral-900)]">Label</strong> — the text describing the action.</li>
          <li><strong className="text-[var(--mds-neutral-900)]">Container</strong> — the clickable area, sized by the Size prop.</li>
        </ol>
      </DocSection>

      <DocSection id="usage" title="Usage">
        <UsageList
          when={["The user needs a single, clear action to take.", "You want to visually rank actions by importance across hierarchies."]}
          whenNot={["You have many actions competing for attention at once.", "The action is a navigation link inside body text — use Link hierarchy or an anchor instead."]}
        />
      </DocSection>

      <DocSection id="hierarchy-guidance" title="Choosing a hierarchy">
        <DoDontCard
          doTitle="One Primary per view"
          doText="Pair a Primary action with a lower-emphasis Secondary or Text button."
          doExample={
            <div className="flex gap-2">
              <Button btnText="Save" size="Small" hierarchy="Primary" />
              <Button btnText="Cancel" size="Small" hierarchy="Text" />
            </div>
          }
          dontTitle="Two Primary buttons"
          dontText="Competing Primary buttons force the user to guess which action matters more."
          dontExample={
            <div className="flex gap-2">
              <Button btnText="Save" size="Small" hierarchy="Primary" />
              <Button btnText="Cancel" size="Small" hierarchy="Primary" />
            </div>
          }
        />
      </DocSection>

      <DocSection id="props" title="Props">
        <PropsTable
          rows={[
            { name: "btnText", type: "string", default: '"Get Started"', description: "Button text." },
            { name: "hierarchy", type: '"Primary" | "Secondary" | "Tertiary" | "Text" | "Link"', default: '"Primary"', description: "Visual weight." },
            { name: "size", type: '"Tiny" | "Small" | "Medium" | "Large"', default: '"Tiny"', description: "Padding and text scale." },
            { name: "state", type: '"Default" | "Active/Pressed" | "Disable"', default: '"Default"', description: "Interaction state." },
            { name: "destructive", type: "boolean", default: "False", description: "Swaps the accent color to the danger palette." },
            { name: "iconOnly", type: "boolean", default: "Off", description: "Hides the label and centers the icon." },
            { name: "leadingIcon", type: "boolean", default: "false", description: "Shows an icon before the text." },
            { name: "trailingIcon", type: "boolean", default: "false", description: "Shows an icon after the text." },
          ]}
        />
      </DocSection>

      <DocSection id="variables" title="Variables used">
        <p className="mb-4 -mt-2 text-[13px] text-[var(--mds-neutral-500)]">
          From the <strong>Button</strong> component set on the <em>Button</em> page in the MDS — Variable Figma file.
        </p>
        <VariablesTable rows={variables.button} />
      </DocSection>

      <PageNav prev={prev} next={next} />
    </div>
  );
}
