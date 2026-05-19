import type { Activity } from "@/components/ui/contribution-graph";

import { getGitHubContributions } from "./github-contributions";
import { getGitLabContributions } from "./gitlab-contributions";

export type ActivitySources = {
  githubTotal: number;
  gitlabTotal: number;
};

export type CombinedActivity = {
  activities: Activity[];
  sources: ActivitySources;
};

function levelFromCount(count: number) {
  if (count <= 0) {
    return 0;
  }

  if (count <= 1) {
    return 1;
  }

  if (count <= 3) {
    return 2;
  }

  if (count <= 7) {
    return 3;
  }

  return 4;
}

function mergeActivities(activityGroups: Activity[][]) {
  const dailyCounts = new Map<string, number>();

  for (const activities of activityGroups) {
    for (const activity of activities) {
      dailyCounts.set(
        activity.date,
        (dailyCounts.get(activity.date) ?? 0) + activity.count
      );
    }
  }

  return Array.from(dailyCounts.entries())
    .map<Activity>(([date, count]) => ({
      date,
      count,
      level: levelFromCount(count),
    }))
    .sort((left, right) => left.date.localeCompare(right.date));
}

export async function getCombinedActivity(): Promise<CombinedActivity> {
  const [githubActivities, gitlabActivities] = await Promise.all([
    getGitHubContributions(),
    getGitLabContributions(),
  ]);

  return {
    activities: mergeActivities([githubActivities, gitlabActivities]),
    sources: {
      githubTotal: githubActivities.reduce(
        (sum, activity) => sum + activity.count,
        0
      ),
      gitlabTotal: gitlabActivities.reduce(
        (sum, activity) => sum + activity.count,
        0
      ),
    },
  };
}
