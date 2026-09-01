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
    image: "/vista-previa.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MDX"],
  },
  {
    title: "ChatIA Web",
    href: "https://chatia-228425879204.europe-west2.run.app/",
    period: "04.2026",
    summary:
      "Academic chat application built with Django, HTMX, and a real LLM connection, now also migrated to a modern TypeScript stack.",
    image: "/assets/chatia-web-top.webp",
    technologies: ["Django", "HTMX", "Python", "TypeScript", "LLM API"],
  },
  {
    title: "Photo Collection Manager",
    href: "https://github.com/Jsanchezv2201",
    period: "12.2025",
    summary:
      "Shell-based tool for bulk organization and normalization of photo libraries and media collections.",
    image: "/assets/photocall.webp",
    technologies: [
      "Shell",
      "Linux",
      "Automation",
      "Bash",
      "System Administration",
    ],
  },
];
