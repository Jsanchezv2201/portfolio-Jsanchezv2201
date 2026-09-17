"use client";

import { LinkIcon } from "lucide-react";
import React from "react";

import { Icons } from "@/components/icons";
import { MarkdownClient } from "@/components/markdown-client";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { useLanguage, useLocalizable } from "@/lib/i18n";
import { addQueryParams } from "@/utils/url";

import type { Project } from "../../types/projects";
import {
  ProjectItemAnimated,
  ProjectRowAnimated,
} from "./project-item-animated";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const { start, end } = project.period;
  const { language } = useLanguage();
  const isOngoing = !end;

  const title = useLocalizable(project.title) ?? "";
  const description = useLocalizable(project.description);

  const presentLabel = language === "es" ? "Presente" : "Present";
  const openLinkLabel =
    language === "es" ? "Abrir enlace del proyecto" : "Open Project Link";

  // Logos que son negros/oscuros y necesitan invertirse en modo oscuro
  const blackLogos = [
    "/icons/tech/nextjs2.svg",
    "/icons/tech/ros2.svg",
    "/icons/tech/django.png",
  ];
  const needsInvert = project.logo && blackLogos.includes(project.logo);
  const logoScaleClass =
    project.logo === "/icons/tech/django.svg" ? "scale-150" : "";

  return (
    <ProjectItemAnimated className={className}>
      <CollapsibleWithContext defaultOpen={project.isExpanded}>
        <ProjectRowAnimated>
          {project.logo ? (
            <div className="mx-4 flex size-6 shrink-0 items-center justify-center select-none">
              <img
                src={project.logo}
                alt={title}
                width="24"
                height="24"
                className={`h-full w-full object-contain ${logoScaleClass} ${needsInvert ? "dark:brightness-0 dark:contrast-200 dark:invert" : ""}`}
                aria-hidden
              />
            </div>
          ) : (
            <div
              className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <Icons.project className="size-4" />
            </div>
          )}

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {title}
                </h3>

                <dl className="text-sm text-muted-foreground">
                  <dt className="sr-only">
                    {language === "es" ? "Período" : "Period"}
                  </dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <span>{presentLabel}</span>
                    ) : (
                      <span>{end}</span>
                    )}
                  </dd>
                </dl>
              </div>

              <SimpleTooltip content={openLinkLabel}>
                <a
                  className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                  href={addQueryParams(project.link, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener"
                >
                  <LinkIcon className="pointer-events-none size-4" />
                  <span className="sr-only">{openLinkLabel}</span>
                </a>
              </SimpleTooltip>

              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <CollapsibleChevronsIcon />
              </div>
            </CollapsibleTrigger>
          </div>
        </ProjectRowAnimated>

        <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-t border-dashed border-edge">
            <div className="space-y-4 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
              {project.image && (
                <div className="overflow-hidden rounded-lg border border-edge">
                  <img
                    src={project.image}
                    alt={`${title} preview`}
                    className="max-h-72 w-full object-cover"
                    style={{
                      objectPosition: project.imagePosition ?? "center",
                    }}
                    loading="lazy"
                  />
                </div>
              )}

              {description && (
                <Prose>
                  <MarkdownClient>{description}</MarkdownClient>
                </Prose>
              )}

              {project.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="flex">
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </CollapsibleWithContext>

      {/* Preload preview image while item is collapsed to avoid first-open flash. */}
      {project.image && (
        <img
          src={project.image}
          alt=""
          className="hidden"
          aria-hidden="true"
          loading="eager"
          decoding="async"
        />
      )}
    </ProjectItemAnimated>
  );
}
