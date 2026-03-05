import React from "react";

import type { Experience } from "../../types/experiences";
import {
  ExperienceItemAnimated,
  ExperienceLogoAnimated,
} from "./experience-item-animated";
import { ExperiencePositionItem } from "./experience-position-item";

export function ExperienceItem({
  experience,
  positionExtraContent,
}: {
  experience: Experience;
  positionExtraContent?: Record<string, React.ReactNode>;
}) {
  return (
    <ExperienceItemAnimated>
      <div className="flex items-center gap-3">
        <ExperienceLogoAnimated>
          {experience.companyLogo ? (
            <>
              <img
                src={experience.companyLogo.replace(".svg", "-light.svg")}
                alt={experience.companyName}
                width={24}
                height={24}
                className="h-6 w-6 rounded-full dark:hidden"
                aria-hidden
              />
              <img
                src={experience.companyLogo.replace(".svg", "-dark.svg")}
                alt={experience.companyName}
                width={24}
                height={24}
                className="hidden h-6 w-6 rounded-full dark:block"
                aria-hidden
              />
            </>
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </ExperienceLogoAnimated>

        <h3 className="text-lg leading-snug font-medium">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem
            key={position.id}
            position={position}
            extraContent={positionExtraContent?.[position.id]}
          />
        ))}
      </div>
    </ExperienceItemAnimated>
  );
}
