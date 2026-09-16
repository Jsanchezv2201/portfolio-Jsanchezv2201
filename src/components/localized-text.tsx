"use client";

import { useTranslation } from "@/lib/i18n";

export function LocalizedText({ en, es }: { en: string; es: string }) {
  return useTranslation({ en, es });
}
