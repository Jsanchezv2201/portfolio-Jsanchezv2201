import { LocalizedMarkdown } from "@/components/localized-markdown";
import { LocalizedText } from "@/components/localized-text";
import TiltedCard from "@/components/tilted-card";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/features/profile/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>
          <LocalizedText en="About" es="Sobre mí" />
        </PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-start">
          <Prose>
            <LocalizedMarkdown
              en={USER.about}
              es={`Soy estudiante de último año de **Ingeniería Telemática** en la **Universidad Rey Juan Carlos** de Madrid y terminaré el grado este año.

Quiero continuar una tradición familiar de ingeniería trabajando en la intersección entre **redes**, **software de bajo nivel** e **inteligencia artificial**.

### Áreas de interés

* **Programación de sistemas:** Rust y C++ para rendimiento y seguridad de memoria.
* **Redes:** TCP/IP y arquitectura de redes.
* **IA y robótica:** visión por computador con TensorFlow y proyectos con ROS 2.

Actualmente **busco oportunidades de prácticas** en las que pueda contribuir y seguir creciendo como ingeniero.`}
            />
          </Prose>

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
      </PanelContent>
    </Panel>
  );
}
