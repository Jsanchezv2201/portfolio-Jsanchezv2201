"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useTranslation } from "@/lib/i18n";

export function LocalizedMarkdown({ en, es }: { en: string; es: string }) {
  const content = useTranslation({ en, es });
  return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>;
}
