import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { DEPLOYMENTS } from "../data/deployments";
import { DeploymentItem } from "./deployment-item";
import { Panel } from "./panel";

export function Deployments() {
  return (
    <Panel id="blog" withOuterLines={false}>
      <div className="screen-line-before" />

      <div className="px-4 pt-4">
        <h2 className="text-3xl font-semibold">Blog</h2>
      </div>

      <div className="p-4">
        <div className="relative py-2">
          <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-edge"></div>
            <div className="border-l border-edge"></div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DEPLOYMENTS.map((deployment) => (
              <DeploymentItem key={deployment.title} deployment={deployment} />
            ))}
          </div>
        </div>

        <div className="flex justify-center py-2">
          <Button variant="default" asChild>
            <Link href="/#projects">
              View projects
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>

        <div className="screen-line-after" />
      </div>
    </Panel>
  );
}
