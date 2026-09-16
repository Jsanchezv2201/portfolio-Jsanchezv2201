"use client";

import * as React from "react";

export type Language = "es" | "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("en");

  React.useEffect(() => {
    const storedLanguage = window.localStorage.getItem("language");
    const cookieLanguage = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("language="))
      ?.split("=")[1];
    const nextLanguage = storedLanguage || cookieLanguage;

    if (nextLanguage === "es" || nextLanguage === "en") {
      setLanguageState(nextLanguage);
      document.documentElement.lang = nextLanguage;
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("language", nextLanguage);
    document.cookie = `language=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = nextLanguage;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage: () => setLanguage(language === "en" ? "es" : "en"),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export function useTranslation<T>(translations: { en: T; es: T }) {
  const { language } = useLanguage();
  return translations[language];
}
