import type { Activity } from "@/components/ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

type ContributionDay = {
  date: string;
  contributionCount: number;
};

type GitHubGraphQLResponse = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          weeks: Array<{
            contributionDays: ContributionDay[];
          }>;
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
};

function levelFromCount(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) return 0;
  if (count <= 1) return 1;
  if (count <= 3) return 2;
  if (count <= 7) return 3;
  return 4;
}

export async function getGitHubContributions(): Promise<Activity[]> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn("GITHUB_TOKEN is not set, returning empty contributions");
    return [];
  }

  // Request contributions for the last year using GitHub GraphQL API.
  // When authenticated, this includes private repository contributions.
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables: { username: GITHUB_USERNAME } }),
      next: { revalidate: 86400 }, // Cache for 1 day
    });

    if (!res.ok) {
      console.warn(
        `GitHub GraphQL API returned ${res.status}, returning empty contributions`
      );
      return [];
    }

    const json = (await res.json()) as GitHubGraphQLResponse;

    if (json.errors?.length) {
      console.warn("GitHub GraphQL errors:", json.errors);
      return [];
    }

    const weeks =
      json.data?.user?.contributionsCollection?.contributionCalendar?.weeks ??
      [];

    const activities: Activity[] = weeks
      .flatMap((week) => week.contributionDays)
      .map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: levelFromCount(day.contributionCount),
      }));

    return activities;
  } catch (error) {
    console.warn("Failed to fetch GitHub contributions:", error);
    return [];
  }
}
