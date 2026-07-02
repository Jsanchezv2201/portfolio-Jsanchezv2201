"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="screen-line-before screen-line-after flex border-x border-edge">
      <div className="group/photo shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px] rounded-full bg-background p-[3px]">
          <div className="rounded-full ring-3 ring-border/80 ring-offset-2">
            <Image
              width={160}
              height={160}
              className="size-32 transform-gpu rounded-full object-cover object-[50%_28%] grayscale-[0.2] saturate-125 transition-[transform,box-shadow,filter] duration-500 ease-out select-none group-hover/photo:-translate-y-0.5 group-hover/photo:rotate-[-0.5deg] group-hover/photo:shadow-xl sm:size-40"
              alt={`${USER.displayName}'s avatar`}
              src={USER.avatar}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div
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
        </div>

        <div className="border-t border-edge">
          <h1 className="py-1 pl-4 text-2xl font-semibold sm:text-3xl">
            {/* Nombre siempre en su propia línea */}
            <span className="mr-2 whitespace-nowrap">{USER.displayName}</span>

            {/* Tick + bandera + opentowork: misma línea entre ellos, pueden ir debajo del nombre en móvil */}
            <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 align-middle">
              <SimpleTooltip content="Verified Account">
                <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
              </SimpleTooltip>

              <SimpleTooltip content="Based in Madrid, Spain">
                <svg
                  className="h-5 w-auto rounded-sm opacity-90 shadow-sm transition-opacity hover:opacity-100 sm:h-6"
                  viewBox="0 0 30 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="30" height="20" fill="#AD1519" />
                  <rect y="5" width="30" height="10" fill="#FABD00" />
                </svg>
              </SimpleTooltip>

              <span className="inline-flex cursor-default items-center justify-center rounded-full border border-green-500/30 bg-background/95 px-2 py-0.5 text-[10px] font-bold text-green-500 shadow-sm sm:px-3 sm:py-1 sm:text-xs">
                <span className="relative mr-1.5 flex h-2 w-2 sm:mr-2">
                  {!isMobile && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  )}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                #OPENTOWORK
              </span>
            </span>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <div>
                  <PronounceMyName
                    className="translate-y-px"
                    namePronunciationUrl={USER.namePronunciationUrl}
                  />
                </div>
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} startDelayMs={800} />
          </div>
        </div>
      </div>
    </div>
  );
}
