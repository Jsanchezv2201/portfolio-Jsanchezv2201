import { CollapsibleList } from "@/components/collapsible-list";

import { EDUCATION } from "../../data/education";
import { ExperienceItem } from "../experiences/experience-item";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <CollapsibleList
          items={EDUCATION}
          renderItem={(education) => <ExperienceItem experience={education} />}
        />
      </PanelContent>
    </Panel>
  );
}
