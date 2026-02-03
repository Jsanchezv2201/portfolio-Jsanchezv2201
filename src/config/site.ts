import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  // Change this to your actual Vercel domain when you deploy
  url: process.env.APP_URL || "https://juan-sanchez-portfolio.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home", // Before: "Inicio"
    href: "/",
  },
  {
    title: "Components", // Before: "Componentes"
    href: "/components",
  },
];

// --- GITHUB CONFIGURATION ---
export const GITHUB_USERNAME = "Jsanchezv2201";

// Links to your source code
export const SOURCE_CODE_GITHUB_REPO = "Jsanchezv2201/david-portfolio";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/Jsanchezv2201/david-portfolio";

export const UTM_PARAMS = {
  utm_source: "juan-portfolio",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
