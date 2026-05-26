"use client";

import { CopyIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";

import { BrandContextMenu } from "@/components/brand-context-menu";
import { LogoMark } from "@/components/logo-mark";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  const divRef = useRef<HTMLDivElement>(null);

  const handleCopyLogo = async () => {
    try {
      const svgElement = document.getElementById("js-cover-mark");
      if (svgElement) {
        const svgCode = svgElement.outerHTML;
        await navigator.clipboard.writeText(svgCode);
        toast.success("SVG Logo copied to clipboard");
      } else {
        toast.error("Logo element not found");
      }
    } catch (err) {
      console.error("Copy error:", err);
      toast.error("Failed to copy SVG");
    }
  };

  return (
    <BrandContextMenu>
      <div
        ref={divRef}
        className={cn(
          "aspect-3/1 border-x border-edge select-none sm:aspect-4/1",
          "flex items-center justify-center px-4 py-4 text-black sm:px-6 sm:py-6 dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5",
          "group relative transition-transform duration-300 ease-out"
        )}
      >
        <div className="absolute inset-4 overflow-hidden rounded-3xl border-2 border-zinc-400/60 bg-background/40 shadow-[0_18px_50px_rgba(0,0,0,0.14)] sm:inset-6 dark:border-zinc-500/50">
          <Image
            src="/banner2.jpg"
            alt="Banner background"
            fill
            priority
            className="absolute inset-0 z-0 scale-105 object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 z-0 bg-black/10 dark:bg-black/20" />
        </div>

        <ContextMenu>
          <ContextMenuTrigger>
            <div className="relative z-20 flex items-center justify-center">
              <LogoMark
                id="js-cover-mark"
                className="h-32 w-32 cursor-context-menu text-white transition-transform duration-300 ease-out hover:scale-110 sm:h-32 sm:w-32"
              />
            </div>
          </ContextMenuTrigger>

          <ContextMenuContent className="w-48">
            <ContextMenuItem
              onClick={handleCopyLogo}
              className="cursor-pointer gap-2"
            >
              <CopyIcon className="h-4 w-4" />
              Copy SVG Code
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <span className="pointer-events-none absolute right-10 bottom-10 z-30 rounded-[4px] bg-black/60 px-[10px] py-1 text-[10px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Espacio Fundación Telefónica · Fuencarral, Madrid
        </span>
      </div>
    </BrandContextMenu>
  );
}
