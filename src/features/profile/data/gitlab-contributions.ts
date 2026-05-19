import dayjs from "dayjs";

import type { Activity } from "@/components/ui/contribution-graph";

const GITLAB_BASE_URL = "https://gitlab.eif.urjc.es";
const GITLAB_USERNAME = "juansv1";
const REVALIDATE_SECONDS = 86400;

type GitLabUser = {
  id: number;
};

type GitLabProject = {
  id: number;
  default_branch?: string;
  visibility?: string;
};

type GitLabCommit = {
  committed_date?: string;
  authored_date?: string;
  created_at?: string;
};

type GitLabCommitCountMap = Map<string, number>;

const getDateKey = (date: string) => dayjs(date).format("YYYY-MM-DD");

const levelFromCount = (count: number) => {
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
};

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      console.warn(`GitLab API returned ${response.status} for ${url}`);
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.warn(`Failed to fetch GitLab data from ${url}:`, error);
    return null;
  }
}

async function getGitLabUserId() {
  const users = await fetchJson<GitLabUser[]>(
    `${GITLAB_BASE_URL}/api/v4/users?username=${GITLAB_USERNAME}`
  );

  return users?.[0]?.id ?? null;
}

async function getGitLabProjects(userId: number) {
  const projects = await fetchJson<GitLabProject[]>(
    `${GITLAB_BASE_URL}/api/v4/users/${userId}/projects?membership=true&simple=true&per_page=100&order_by=last_activity_at&sort=desc`
  );

  return (projects ?? []).filter((project) => project.visibility === "public");
}

async function getProjectCommits(
  project: GitLabProject,
  since: string,
  until: string
) {
  const perPage = 100;
  let page = 1;
  const commitDates: string[] = [];

  while (true) {
    const commits = await fetchJson<GitLabCommit[]>(
      `${GITLAB_BASE_URL}/api/v4/projects/${project.id}/repository/commits?author_username=${GITLAB_USERNAME}&ref_name=${project.default_branch ?? "main"}&since=${encodeURIComponent(since)}&until=${encodeURIComponent(until)}&per_page=${perPage}&page=${page}`
    );

    if (!commits || commits.length === 0) {
      break;
    }

    for (const commit of commits) {
      const date =
        commit.committed_date ?? commit.authored_date ?? commit.created_at;

      if (date) {
        commitDates.push(date);
      }
    }

    if (commits.length < perPage) {
      break;
    }

    page += 1;
  }

  return commitDates;
}

function buildActivities(commitDates: string[]) {
  const dailyCounts: GitLabCommitCountMap = new Map();

  for (const date of commitDates) {
    const dayKey = getDateKey(date);
    dailyCounts.set(dayKey, (dailyCounts.get(dayKey) ?? 0) + 1);
  }

  return Array.from(dailyCounts.entries())
    .map<Activity>(([date, count]) => ({
      date,
      count,
      level: levelFromCount(count),
    }))
    .sort((left, right) => left.date.localeCompare(right.date));
}

export async function getGitLabContributions() {
  const userId = await getGitLabUserId();

  if (!userId) {
    return [];
  }

  const projects = await getGitLabProjects(userId);

  if (projects.length === 0) {
    return [];
  }

  const since = dayjs().subtract(1, "year").startOf("day").toISOString();
  const until = dayjs().endOf("day").toISOString();

  const commitDates = (
    await Promise.all(
      projects.map((project) => getProjectCommits(project, since, until))
    )
  ).flat();

  return buildActivities(commitDates);
}
