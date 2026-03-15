"use client";

import dynamic from "next/dynamic";

import type { GalleryItem } from "@/components/InfiniteGallery";

const InfiniteGallery = dynamic(() => import("@/components/InfiniteGallery"), {
  ssr: false,
});

export function PhotographyGallery({ items }: { items: GalleryItem[] }) {
  return (
    <InfiniteGallery
      items={items}
      height={300}
      width={220}
      speed={45}
      gap={14}
    />
  );
}
