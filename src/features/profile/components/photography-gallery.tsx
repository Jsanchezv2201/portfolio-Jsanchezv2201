"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import type { GalleryItem } from "@/components/CircularGallery";

const CircularGallery = dynamic(() => import("@/components/CircularGallery"), {
  ssr: false,
});

export function PhotographyGallery({ items }: { items: GalleryItem[] }) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  // Color adaptable: Blanco en oscuro, negro en claro
  const dynamicTextColor = currentTheme === "dark" ? "#fff" : "#000";

  return (
    <div style={{ height: "500px", position: "relative" }}>
      {mounted && (
        <CircularGallery
          items={items}
          bend={2}
          textColor={dynamicTextColor}
          font="normal 16px system-ui, sans-serif"
          borderRadius={0.07}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      )}
    </div>
  );
}
