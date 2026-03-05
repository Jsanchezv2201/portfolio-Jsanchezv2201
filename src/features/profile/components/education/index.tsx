import { CollapsibleList } from "@/components/collapsible-list";

import { EDUCATION } from "../../data/education";
import { ExperienceItem } from "../experiences/experience-item";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";
import { UrjcProgressWidget } from "./urjc-progress-widget";

const URJC_EXTRA: Record<string, React.ReactNode> = {
  "urjc-student": <UrjcProgressWidget />,
};

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <CollapsibleList
          items={EDUCATION}
          renderItem={(education) => (
            <ExperienceItem
              experience={education}
              positionExtraContent={
                education.id === "urjc" ? URJC_EXTRA : undefined
              }
            />
          )}
        />
      </PanelContent>
    </Panel>
  );
}
