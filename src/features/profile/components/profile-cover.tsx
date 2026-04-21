"use client";

import { CopyIcon } from "lucide-react";
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
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5",
          "group relative overflow-hidden transition-transform duration-300 ease-out hover:scale-[1.01]"
        )}
      >
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="relative z-10">
              <LogoMark
                id="js-cover-mark"
                className="h-32 w-32 cursor-context-menu sm:h-32 sm:w-32"
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
      </div>
    </BrandContextMenu>
  );
}
