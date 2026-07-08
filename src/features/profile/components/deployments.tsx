import React from "react";

import { DEPLOYMENTS } from "../data/deployments";
import { DeploymentItem } from "./deployment-item";
import { Panel } from "./panel";

export function Deployments() {
  return (
    <Panel id="blog" withOuterLines={false}>
      <div className="screen-line-before screen-line-after px-4">
        <h2 className="text-3xl font-semibold">Blog</h2>
      </div>

      <div className="px-4 pt-4 pb-0">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 left-1/2 -z-1 hidden w-px -translate-x-1/2 bg-edge sm:block" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DEPLOYMENTS.map((deployment, index) => (
              <React.Fragment key={index}>
                <DeploymentItem
                  key={deployment.title}
                  deployment={deployment}
                />
                {index === 1 && ( // After the second item (index 1)
                  <div className="screen-line-after col-span-full my-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="screen-line-after" />
    </Panel>
  );
}
