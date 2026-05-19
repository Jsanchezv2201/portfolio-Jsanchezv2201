import { Suspense } from "react";

import { getCombinedActivity } from "../../data/activity";
import { Panel } from "../panel";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";

export function GitHubContributions() {
  // Pass the Promise directly to the child component
  // The child component will use React.use() to unwrap it
  const activityPromise = getCombinedActivity();

  return (
    <Panel>
      <h2 className="sr-only">GitHub and GitLab Activity</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph activity={activityPromise} />
      </Suspense>
    </Panel>
  );
}
