"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface DecryptedTextProps {
  text: string;
  animateOnHover?: boolean;
  revealDirection?: "start" | "end" | "center";
  className?: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  sequential?: boolean;
}

export function DecryptedText({
  text,
  animateOnHover = true,
  revealDirection = "start",
  className = "",
  speed = 50,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+",
  sequential = true,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Efecto inicial (al montar)
  useEffect(() => {
    animate(0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const animate = (startIteration: number = 0) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = startIteration;

    intervalRef.current = setInterval(() => {
      setDisplayText((prevText) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3; // Velocidad de resolución
    }, speed);
  };

  const handleMouseEnter = () => {
    if (animateOnHover) {
      setIsHovering(true);
      animate(0);
    }
  };

  return (
    <span
      className={cn("inline-block whitespace-nowrap", className)}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
}
