"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  // Detect mobile devices and prefers-reduced-motion
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use IntersectionObserver to pause animation when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const totalWidth = (width + gap) * items.length;

  useAnimationFrame((_, delta) => {
    // Pause if not visible, user is pausing, or on mobile with reduced motion
    if (isPaused || !isVisible) return;

    // Reduce speed on mobile to save battery
    const effectiveSpeed = isMobile ? speed * 0.7 : speed;

    let current = x.get();
    current -= (effectiveSpeed * delta) / 1000;
    if (current <= -totalWidth) {
      current += totalWidth;
    }
    x.set(current);
  });

  const captureRef = useRef<{ element: HTMLElement; pointerId: number } | null>(
    null
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = x.get();
    setIsPaused(true);
    setIsGrabbing(true);
    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);
    captureRef.current = { element: el, pointerId: e.pointerId };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    let newX = dragStartScroll.current + delta;
    if (newX <= -totalWidth) newX += totalWidth;
    if (newX > 0) newX -= totalWidth;
    x.set(newX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    setIsPaused(false);
    setIsGrabbing(false);
    if (captureRef.current) {
      const { element, pointerId } = captureRef.current;
      if (element.hasPointerCapture(pointerId)) {
        element.releasePointerCapture(pointerId);
      }
      captureRef.current = null;
    }
  };

  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden"
      style={{ height: `${height + 48}px`, cursor: isGrabbing ? "grabbing" : "grab" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
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
                sizes={isMobile ? "200px" : `${width}px`}
                quality={isMobile ? 70 : 85}
                className="object-cover"
                draggable={false}
                loading="lazy"
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
