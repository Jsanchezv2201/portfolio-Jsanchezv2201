import fs from "node:fs";
import path from "node:path";

import {
  BriefcaseBusinessIcon,
  LineSquiggleIcon,
  MoonStarIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { codeToHtml } from "shiki";

import { Icons } from "@/components/icons";
import { LocalizedText } from "@/components/localized-text";
import { PortfolioComponentShowcase } from "@/components/portfolio-component-showcase";
import { getPostsByCategory } from "@/features/blog/data/posts";

export const metadata: Metadata = {
  title: "Components",
  description: "A collection of reusable components.",
};

const FEATURED_COMPONENTS = [
  {
    id: "assistant" as const,
    title: "Ask Juan Assistant",
    technologies: ["React", "TypeScript", "Framer Motion", "Gemini API"],
    extension: ".tsx",
    language: "tsx",
    sourcePath: "src/components/ask-juan-assistant.tsx",
  },
  {
    id: "terminal" as const,
    title: "Portfolio Terminal",
    technologies: ["React", "TypeScript", "Framer Motion", "Lucide"],
    extension: ".tsx",
    language: "tsx",
    sourcePath: "src/components/terminal-modal.tsx",
  },
];

export default async function Page() {
  const posts = getPostsByCategory("components");
  const featuredComponents = await Promise.all(
    FEATURED_COMPONENTS.map(async (component) => {
      const source = fs.readFileSync(
        path.join(process.cwd(), component.sourcePath),
        "utf8"
      );
      const [highlightedSourceLight, highlightedSourceDark] = await Promise.all(
        [
          codeToHtml(source, {
            lang: component.language,
            theme: "github-light",
          }),
          codeToHtml(source, {
            lang: component.language,
            theme: "github-dark",
          }),
        ]
      );

      return {
        id: component.id,
        title: component.title,
        technologies: component.technologies,
        extension: component.extension,
        source,
        highlightedSourceLight,
        highlightedSourceDark,
      };
    })
  );

  return (
    <div className="min-h-svh">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">
          <LocalizedText en="Components" es="Componentes" />
        </h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          <LocalizedText
            en="A collection of reusable components."
            es="Una colección de componentes reutilizables."
          />
        </p>
      </div>

      <PortfolioComponentShowcase components={featuredComponents} />

      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/components/${post.slug}`}
          className="group/post flex items-center border-b border-edge pr-4"
        >
          <div
            className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
            aria-hidden
          >
            <ComponentIcon
              className="pointer-events-none size-4 text-muted-foreground"
              variant={post.metadata.icon}
            />
          </div>

          <div className="border-l border-dashed border-edge p-4">
            <h2 className="leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
              {post.metadata.title}
            </h2>
          </div>

          {post.metadata.new && (
            <span className="flex items-center justify-center">
              <span className="flex size-2 rounded-sm bg-info" />
              <span className="sr-only">New</span>
            </span>
          )}
        </Link>
      ))}

      <div className="h-4" />
    </div>
  );
}

type ComponentIconProps = React.ComponentProps<"svg"> & {
  variant?: string;
};

function ComponentIcon({ variant, ...props }: ComponentIconProps) {
  switch (variant) {
    case "work-experience":
      return <BriefcaseBusinessIcon {...props} />;

    case "react-wheel-picker":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          {...props}
        >
          <path
            d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm2.34,146.34a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,172.69V83.31L109.66,93.66A8,8,0,0,1,98.34,82.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,1-11.32,11.32L136,83.31v89.38Z"
            fill="currentColor"
          />
        </svg>
      );

    case "theme-switcher":
      return <MoonStarIcon {...props} />;

    case "apple-hello-effect":
      return <LineSquiggleIcon {...props} />;

    case "slide-to-unlock":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          {...props}
        >
          <path
            d="M237.66,133.66l-96,96A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96A8,8,0,0,1,237.66,133.66Z"
            fill="currentColor"
          />
        </svg>
      );

    default:
      return <Icons.react {...props} />;
  }
}
