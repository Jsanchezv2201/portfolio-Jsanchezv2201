"use client";

import { Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

export function TerminalTrigger() {
  const copy = useTranslation({
    en: "Open terminal",
    es: "Abrir terminal",
  });

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="border-2"
      onClick={() => window.dispatchEvent(new Event("open-terminal"))}
      aria-label={copy}
      title={copy}
    >
      <Terminal className="size-4" />
      <span className="sr-only">{copy}</span>
    </Button>
  );
}
