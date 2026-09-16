"use client";

import { FileText } from "lucide-react";

import { useTranslation } from "@/lib/i18n";

import { Button } from "./ui/button";

export function CvDownload() {
  const label = useTranslation({ en: "Open CV", es: "Abrir CV" });

  return (
    <Button
      asChild
      variant="outline"
      className="h-8 gap-1.5 border-2 px-2"
      title={label}
    >
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <FileText className="size-4" />
        <span className="font-mono text-xs font-semibold">CV</span>
        <span className="sr-only">{label}</span>
      </a>
    </Button>
  );
}
