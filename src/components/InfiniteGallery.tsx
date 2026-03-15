"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export interface GalleryItem {
  image: string;
  text: string;
}

interface InfiniteGalleryProps {
  items: GalleryItem[];
  /** Card height in pixels. Default: 320 */
  height?: number;
  /** Card width in pixels. Default: 240 */
  width?: number;
  /** Scrolling speed in pixels per second. Default: 50 */
  speed?: number;
  /** Gap between cards in pixels. Default: 16 */
  gap?: number;
}

export default function InfiniteGallery({
  items,
  height = 320,
  width = 240,
  speed = 50,
  gap = 16,
}: InfiniteGalleryProps) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const totalWidth = (width + gap) * items.length;

  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    let current = x.get();
    current -= (speed * delta) / 1000;
    if (current <= -totalWidth) {
      current += totalWidth;
    }
    x.set(current);
  });

  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden"
      style={{ height: `${height + 48}px` }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex will-change-transform"
      >
        {doubled.map((item, i) => (
          <div
            key={`${i}-${item.image}`}
            className="flex flex-shrink-0 flex-col"
            style={{ width: `${width}px`, marginRight: `${gap}px` }}
          >
            <div
              className="relative overflow-hidden rounded-xl"
              style={{ width: `${width}px`, height: `${height}px` }}
            >
              <Image
                src={item.image}
                alt={item.text}
                fill
                sizes={`${width}px`}
                className="object-cover"
                draggable={false}
              />
            </div>
            <p className="mt-2 truncate px-1 text-center text-xs text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
