"use client";

import { Languages } from "lucide-react";

import { useLanguage } from "@/lib/i18n";

import { Button } from "./ui/button";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "es" : "en";

  return (
    <Button
      type="button"
      variant="outline"
      className="h-8 min-w-8 gap-1 border-2 px-2"
      onClick={toggleLanguage}
      aria-label={`Cambiar idioma a ${nextLanguage === "en" ? "inglés" : "español"}`}
      title={`Cambiar idioma a ${nextLanguage === "en" ? "English" : "Español"}`}
    >
      <Languages className="size-4" />
      <span className="font-mono text-[10px] font-semibold uppercase">
        {language}
      </span>
      <span className="sr-only">
        {language === "en" ? "English" : "Español"}
      </span>
    </Button>
  );
}
