"use client";

import { motion } from "framer-motion";
import React from "react";

export function ExperienceItemAnimated({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="screen-line-after space-y-4 py-4"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ExperienceLogoAnimated({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex size-6 shrink-0 items-center justify-center select-none"
      initial={{ scale: 0, rotate: -20 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
