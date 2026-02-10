"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CopyIcon } from "lucide-react";
import { useRef, useState } from "react";
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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });

    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => {
    setOpacity(0);
    mouseX.set(0);
    mouseY.set(0);
  };

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
      <motion.div
        ref={divRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "aspect-3/1 border-x border-edge select-none sm:aspect-4/1",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5",
          "group relative overflow-hidden"
        )}
        style={{ perspective: 1000 }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        />

        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative z-10"
        >
          <ContextMenu>
            <ContextMenuTrigger>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0)",
                      "0 0 40px rgba(59, 130, 246, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.5,
                  }}
                  className="rounded-full"
                >
                  <LogoMark
                    id="js-cover-mark"
                    className="h-32 w-32 cursor-context-menu drop-shadow-2xl sm:h-32 sm:w-32"
                    style={{ transform: "translateZ(50px)" }}
                  />
                </motion.div>
              </motion.div>
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
        </motion.div>
      </motion.div>
    </BrandContextMenu>
  );
}
