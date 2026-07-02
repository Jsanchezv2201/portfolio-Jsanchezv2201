"use client";

import dayjs from "dayjs";
import { LoaderIcon } from "lucide-react";
import { use, useEffect, useState } from "react";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/ui/contribution-graph";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GITHUB_USERNAME } from "@/config/site";

import type { CombinedActivity } from "../../data/activity";

export function GitHubContributionGraph({
  activity,
}: {
  activity: Promise<CombinedActivity>;
}) {
  const { activities } = use(activity);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // En móvil mostrar solo los últimos 6 meses
  const cutoff = isMobile
    ? dayjs().subtract(7, "month").format("YYYY-MM-DD")
    : null;
  const visibleActivities = cutoff
    ? activities.filter((a) => a.date >= cutoff)
    : activities;

  return (
    <ContributionGraph
      className="mx-auto py-2"
      data={visibleActivities}
      blockSize={11}
      blockMargin={3}
      blockRadius={0}
    >
      <ContributionGraphCalendar
        className="no-scrollbar overflow-x-auto px-2"
        title="Activity"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </g>
            </TooltipTrigger>

            <TooltipContent className="font-sans" sideOffset={0}>
              <p>
                {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                on {dayjs(activity.date).format("DD.MM.YYYY")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <ContributionGraphTotalCount>
          {({ totalCount }) => (
            <div className="text-muted-foreground">
              {totalCount.toLocaleString("en")} activity entries in{" "}
              {new Date().getFullYear()} on{" "}
              <a
                className="font-medium underline underline-offset-4"
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>{" "}
              +{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://gitlab.eif.urjc.es/juansv1"
                target="_blank"
                rel="noopener"
              >
                GitLab
              </a>
              .
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-[162px] w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  );
}
