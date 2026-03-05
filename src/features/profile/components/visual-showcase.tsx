"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "/assets/marketing-5g.jpg",
    alt: "Beyond Standard Web Stacks — 5G infrastructure demands memory safety and protocol-level precision",
  },
  {
    src: "/assets/marketing-telecom.jpg",
    alt: "Ready for the telecom frontier — Specialized telematic engineering",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function VisualShowcase() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="mx-4 grid grid-cols-2 gap-3 sm:gap-4"
    >
      {images.map((img) => (
        <motion.div
          key={img.src}
          variants={itemVariants}
          className="overflow-hidden rounded-2xl border border-edge shadow-sm"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
