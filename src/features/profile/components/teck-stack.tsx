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
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
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
                      stiffness: 100,
                      damping: 10,
                    },
                  },
                }}
                className="flex"
              >
                <SimpleTooltip content={tech.title}>
                  <motion.a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative flex h-8 w-8 items-center justify-center"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{
                        opacity: 1,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    {typeof icon === "function" ? (
                      icon({ className: "w-full h-full relative z-10" })
                    ) : (
                      <Image
                        src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        unoptimized
                        className="relative z-10"
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </motion.a>
                </SimpleTooltip>
              </motion.li>
            );
          })}
        </motion.ul>
      </PanelContent>
    </Panel>
  );
}
