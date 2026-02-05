"use client";

import { CopyIcon } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner"; // Assuming you use Sonner for notifications

import { BrandContextMenu } from "@/components/brand-context-menu";
import { ChanhDaiMark } from "@/components/chanhdai-mark";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  // --- FUNCTION TO COPY SVG ---
  const handleCopyLogo = async () => {
    try {
      // Find the SVG element by the ID we passed to it
      const svgElement = document.getElementById("js-cover-mark");

      if (svgElement) {
        // Get the full HTML code of the SVG
        const svgCode = svgElement.outerHTML;

        // Write it to the clipboard
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
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "aspect-3/1 border-x border-edge select-none sm:aspect-4/1",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5",
          "group relative"
        )}
      >
        {/* --- LOGO WITH SPECIFIC CONTEXT MENU --- */}
        <div className="relative z-10 transition-transform duration-500 hover:scale-105">
          <ContextMenu>
            <ContextMenuTrigger>
              <ChanhDaiMark
                id="js-cover-mark"
                className="h-32 w-32 cursor-context-menu drop-shadow-lg sm:h-32 sm:w-32"
              />
            </ContextMenuTrigger>

            {/* Menu that appears ONLY when right-clicking the logo */}
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
      </div>
    </BrandContextMenu>
  );
}
