"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import type { SocialLink } from "@/features/profile/types/social-links";
import { cn } from "@/lib/utils";

export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gradientBg = useMotionTemplate`radial-gradient(120px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.12), transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.a
      ref={ref}
      className={cn(
        "group/link relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-2xl p-4 pr-2 select-none",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener"
      onMouseMove={handleMouseMove}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* spotlight glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/link:opacity-100"
        style={{ background: gradientBg }}
      />

      {/* icon */}
      <motion.div
        className="relative size-12 shrink-0"
        whileHover={{ scale: 1.12, rotate: -6 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
      >
        <Image
          className="rounded-xl"
          src={icon}
          alt={title}
          width={48}
          height={48}
          quality={100}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
      </motion.div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <motion.div
        whileHover={{ x: 3, y: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <ArrowUpRightIcon className="size-4 text-muted-foreground transition-colors group-hover/link:text-foreground" />
      </motion.div>
    </motion.a>
  );
}
