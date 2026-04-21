"use client";

import InfiniteGallery, {
  type GalleryItem,
} from "@/components/InfiniteGallery";

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
