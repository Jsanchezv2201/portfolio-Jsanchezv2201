"use client";

import { motion } from "framer-motion";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group/header screen-line-before screen-line-after flex border-x border-edge"
    >
      <div className="shrink-0 border-r border-edge">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-[2px] my-[3px]"
        >
          <motion.img
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background grayscale-[0.3] transition-all duration-500 ease-out select-none group-hover/header:ring-green-500/50 group-hover/header:grayscale-0 sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={cn(
            "flex grow items-end justify-between pr-4 pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </motion.div>

        <div className="border-t border-edge">
          <h1 className="flex flex-wrap items-center gap-y-2 py-1 pl-4 text-3xl font-semibold">
            {USER.displayName}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              className="ml-2"
            >
              <SimpleTooltip content="Verified Account">
                <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
              </SimpleTooltip>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9, type: "spring" }}
            >
              <SimpleTooltip content="Based in Madrid, Spain">
                <svg
                  className="ml-3 h-6 w-auto rounded-sm opacity-90 shadow-sm transition-opacity hover:opacity-100"
                  viewBox="0 0 30 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="30" height="20" fill="#AD1519" />
                  <rect y="5" width="30" height="10" fill="#FABD00" />
                </svg>
              </SimpleTooltip>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="ml-3 flex items-center"
            >
              <span className="inline-flex cursor-default items-center justify-center rounded-full border border-green-500/30 bg-background/95 px-3 py-1 text-xs font-bold text-green-500 shadow-sm">
                <span className="relative mr-2 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                #OPENTOWORK
              </span>
            </motion.div>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <PronounceMyName
                    className="translate-y-px"
                    namePronunciationUrl={USER.namePronunciationUrl}
                  />
                </motion.div>
              </>
            )}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-12 border-t border-edge py-1 pl-4 sm:h-auto"
          >
            <FlipSentences sentences={USER.flipSentences} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
