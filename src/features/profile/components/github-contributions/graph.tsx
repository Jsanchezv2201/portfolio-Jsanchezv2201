"use client";

import dayjs from "dayjs";
import { LoaderIcon } from "lucide-react";
import { use } from "react";

import type { Activity } from "@/components/ui/contribution-graph";
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

  return (
    <ContributionGraph
      className="mx-auto py-2"
      data={activities}
      blockSize={11}
      blockMargin={3}
      blockRadius={0}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub and GitLab Activity"
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
          {({ totalCount, year }) => (
            <div className="text-muted-foreground">
              {totalCount.toLocaleString("en")} activity entries in {year} on{" "}
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
