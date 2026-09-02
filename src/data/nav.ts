export type NavItem = { label: string; href: string };
export type NavGroup = { title: string; items: NavItem[] };

export const nav: NavGroup[] = [
  {
    title: "Getting started",
    items: [
      { label: "Introduction", href: "/" },
      { label: "Colors", href: "/foundations/colors" },
      { label: "Typography", href: "/foundations/typography" },
    ],
  },
  {
    title: "Form & Input",
    items: [
      { label: "Button", href: "/components/button" },
      { label: "Input field", href: "/components/input-field" },
      { label: "Label text", href: "/components/label-text" },
      { label: "Radio button", href: "/components/radio-button" },
      { label: "Checkbox", href: "/components/checkbox" },
      { label: "Toggle", href: "/components/toggle" },
    ],
  },
  {
    title: "Data display",
    items: [
      { label: "Avatar", href: "/components/avatar" },
      { label: "Badge", href: "/components/badge" },
      { label: "Accordion", href: "/components/accordion" },
      { label: "Activity feed", href: "/components/activity-feed" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { label: "Breadcrumbs", href: "/components/breadcrumbs" },
      { label: "Top app bar", href: "/components/top-app-bar" },
      { label: "Bottom navigation", href: "/components/bottom-navigation" },
    ],
  },
];
