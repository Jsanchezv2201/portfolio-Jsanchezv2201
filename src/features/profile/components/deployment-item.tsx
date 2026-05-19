import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

import type { Deployment } from "../data/deployments";

export function DeploymentItem({ deployment }: { deployment: Deployment }) {
  return (
    <Link
      href={deployment.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/deployment flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      <div className="relative overflow-hidden rounded-xl select-none">
        {deployment.image ? (
          <Image
            src={deployment.image}
            alt={deployment.title}
            width={1200}
            height={630}
            quality={100}
            priority={deployment.title === "Portfolio Web"}
            unoptimized
            className="aspect-1200/630 object-cover"
          />
        ) : (
          <div className="flex aspect-1200/630 items-end bg-[linear-gradient(135deg,var(--color-muted),var(--color-background)_65%)] p-4">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Live deployment
              </p>
              <p className="mt-2 text-xl font-semibold text-balance">
                {deployment.title}
              </p>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
      </div>

      <div className="flex flex-col gap-1 p-2">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/deployment:underline">
            {deployment.title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">
            {deployment.period}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">{deployment.summary}</p>

        <ul className="mt-1 flex flex-wrap gap-1.5">
          {deployment.technologies.map((technology) => (
            <li key={technology} className="flex">
              <Tag>{technology}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
