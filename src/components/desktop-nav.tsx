"use client";

import { usePathname } from "next/navigation";

import { Nav } from "@/components/nav";
import { useLanguage } from "@/lib/i18n";
import type { NavItem } from "@/types/nav";

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const localizedItems = items.map((item) => ({
    ...item,
    title:
      language === "es"
        ? { Home: "Inicio", Blog: "Blog", Components: "Componentes" }[
            item.title
          ] || item.title
        : item.title,
  }));

  return (
    <Nav className="max-sm:hidden" items={localizedItems} activeId={pathname} />
  );
}
