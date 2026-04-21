"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function FlipSentences({
  className,
  sentences,
  startDelayMs = 800,
}: {
  className?: string;
  sentences: string[];
  startDelayMs?: number;
}) {
  const [currentSentence, setCurrentSentence] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 2500);
  };

  useEffect(() => {
    startTimeoutRef.current = setTimeout(() => {
      startAnimation();
    }, startDelayMs);

    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.visibilityState !== "visible") {
          if (startTimeoutRef.current) {
            clearTimeout(startTimeoutRef.current);
            startTimeoutRef.current = null;
          }

          if (intervalRef.current) {
            clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
            intervalRef.current = null;
          }
        } else if (document.visibilityState === "visible") {
          setCurrentSentence((prev) => (prev + 1) % sentences.length); // Show the next sentence immediately
          startAnimation(); // Restart the interval when the tab becomes visible
        }
      },
      { signal }
    );

    return () => {
      if (startTimeoutRef.current) {
        clearTimeout(startTimeoutRef.current);
      }

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentences]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.p
        key={`current-sentence-${currentSentence}`}
        className={cn(
          "font-mono text-sm text-balance text-muted-foreground select-none",
          className
        )}
        initial={{
          y: 8,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -8,
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
      >
        {sentences[currentSentence]}
      </motion.p>
    </AnimatePresence>
  );
}
