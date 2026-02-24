"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { Icons } from "@/components/icons";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -80px 0px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
          className="flex flex-wrap gap-4 select-none"
        >
          {TECH_STACK.map((tech, index) => {
            const icon = Icons[tech.key as keyof typeof Icons];

            return (
              <motion.li
                key={tech.key}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    },
                  },
                }}
                className="flex"
              >
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                    className="relative flex h-8 w-8 items-center justify-center transition-transform hover:scale-125 active:scale-90"
                  >
                    {typeof icon === "function" ? (
                      icon({ className: "w-full h-full relative z-10" })
                    ) : (
                      <Image
                        src={`/icons/tech/${tech.key}.svg`}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        unoptimized
                        className="relative z-10"
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </motion.li>
            );
          })}
        </motion.ul>
      </PanelContent>
    </Panel>
  );
}
