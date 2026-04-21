"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  const normalizeX = (value: number) => {
    if (totalWidth <= 0) return 0;
    const loop = ((-value % totalWidth) + totalWidth) % totalWidth;
    return -loop;
  };

  // Detect mobile devices and prefers-reduced-motion
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Use IntersectionObserver to pause animation when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const totalWidth = (width + gap) * items.length;

  useAnimationFrame((_, delta) => {
    // Pause if not visible, user is pausing, or on mobile with reduced motion
    if (isPaused || !isVisible || totalWidth <= 0) return;

    // Reduce speed on mobile to save battery
    const effectiveSpeed = isMobile ? speed * 0.7 : speed;

    const next = x.get() - (effectiveSpeed * delta) / 1000;
    x.set(normalizeX(next));
  });

  const captureRef = useRef<{ element: HTMLElement; pointerId: number } | null>(
    null
  );

  const handlePointerUp = useCallback(() => {
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
  }, []);

  // Ensure dragging state is always released when the tab/window loses focus.
  useEffect(() => {
    const handleWindowBlur = () => {
      handlePointerUp();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        handlePointerUp();
      }
    };

    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handlePointerUp]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
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
    const newX = dragStartScroll.current + delta;
    x.set(normalizeX(newX));
  };

  const doubled = [...items, ...items];

  return (
    <div
      ref={viewportRef}
      className="w-full overflow-hidden"
      style={{
        height: `${height + 48}px`,
        cursor: isGrabbing ? "grabbing" : "grab",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onLostPointerCapture={handlePointerUp}
    >
      <motion.div style={{ x }} className="flex will-change-transform">
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
              <img
                src={item.image}
                alt={item.text}
                width={width}
                height={height}
                className="h-full w-full object-cover"
                draggable={false}
                loading={i < 4 ? "eager" : "lazy"}
                fetchPriority={i < 4 ? "high" : "auto"}
                decoding="async"
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
