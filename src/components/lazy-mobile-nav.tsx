"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

import { Button } from "./ui/button";

const MobileNav = dynamic(() =>
  import("@/components/mobile-nav").then((mod) => mod.MobileNav)
);

export function LazyMobileNav({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  const [isMounted, setIsMounted] = useState(false);

  if (isMounted) {
    return <MobileNav items={items} className={className} defaultOpen />;
  }

  return (
    <Button
      variant="ghost"
      className={cn("group/toggle flex flex-col gap-1", className)}
      size="icon"
      onClick={() => setIsMounted(true)}
      aria-label="Open mobile menu"
    >
      <span className="flex h-0.5 w-4 rounded-[1px] bg-foreground" />
      <span className="flex h-0.5 w-4 rounded-[1px] bg-foreground" />
      <span className="sr-only">Toggle Menu</span>
    </Button>
  );
}
