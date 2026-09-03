import { nav } from "@/data/nav";

const flat = nav.flatMap((g) => g.items);

export function getPageNav(href: string) {
  const idx = flat.findIndex((i) => i.href === href);
  return {
    prev: idx > 0 ? flat[idx - 1] : undefined,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : undefined,
  };
}
