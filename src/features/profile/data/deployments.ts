import { SITE_INFO } from "@/config/site";

export type Deployment = {
  title: string;
  href: string;
  period: string;
  summary: string;
  image?: string;
  technologies: string[];
};

export const DEPLOYMENTS: Deployment[] = [
  {
    title: "Portfolio Web",
    href: SITE_INFO.url,
    period: "2026",
    summary:
      "My personal portfolio built with Next.js, MDX, interactive sections, and a clean aesthetic focused on showcasing my work.",
    image: "/vista-previa.png",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MDX"],
  },
  {
    title: "ChatIA Web",
    href: "https://juansv22.pythonanywhere.com/",
    period: "04.2026",
    summary:
      "Academic chat application built with Django, HTMX, and a real LLM connection.",
    technologies: ["Django", "HTMX", "Python", "LLM API"],
  },
];
