"use client";

import dynamic from "next/dynamic";

import type { GalleryItem } from "@/components/CircularGallery";

const CircularGallery = dynamic(() => import("@/components/CircularGallery"), {
  ssr: false,
});

export function PhotographyGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div style={{ height: "500px", position: "relative" }}>
      <CircularGallery
        items={items}
        bend={2}
        textColor="#ffffff"
        borderRadius={0.07}
        scrollSpeed={2}
        scrollEase={0.05}
      />
    </div>
  );
}
