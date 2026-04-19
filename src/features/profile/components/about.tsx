import { Markdown } from "@/components/markdown";
import TiltedCard from "@/components/tilted-card";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/features/profile/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-start">
          <Prose>
            <Markdown>{USER.about}</Markdown>
          </Prose>

          <div>
            <TiltedCard
              imageSrc="/assets/photography/photo_2026-04-19_17-38-18.jpg"
              altText="Juan skiing near a large satellite antenna"
              captionText="Pico Veleta · IRAM Radio Telescope"
              containerHeight="auto"
              containerWidth="100%"
              imageHeight="auto"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
