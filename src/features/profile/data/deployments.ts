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
      "My personal portfolio built with Next.js, MDX and interactive sections showcasing my work.",
    image: "/assets/portfoliov2.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MDX"],
  },
  {
    title: "ChatIA Web",
    href: "https://juansv22.pythonanywhere.com/",
    period: "04.2026",
    summary:
      "Academic chat application built with Django, HTMX, and a real LLM connection.",
    image: "/assets/chatia.webp",
    technologies: ["Django", "HTMX", "Python", "LLM API"],
  },
  {
    title: "Photo Collection Manager",
    href: "https://photocall-228425879204.europe-west2.run.app",
    period: "12.2025",
    summary: "A web application for organizing and displaying photos.",
    image: "/assets/photocall.webp",
    technologies: ["Cloud Deployment", "Shell Scripting"],
  },
];
