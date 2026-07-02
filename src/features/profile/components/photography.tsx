import Image from "next/image";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { PhotographyGallery } from "./photography-gallery";

// Replace these with your own photos. Each item needs { image: string, text: string }.
const PHOTOS = [
  {
    image: "/assets/photography/photo_2026-02-25_13-10-53.webp",
    text: "Cabo Girão · Madeira",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-10-54.webp",
    text: "Friends · Santander",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-10-55.webp",
    text: "Fragas do Eume · A Coruña",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-10-55 (2).webp",
    text: "Art Exhibition",
  },
  { image: "/assets/photography/photo_2026-02-25_13-10-58.webp", text: "Ski" },
  {
    image: "/assets/photography/photo_2026-02-25_13-10-59.webp",
    text: "Isla de Ons · Galicia",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-00.webp",
    text: "La Pinilla · Segovia",
    imageClassName: "brightness-110 saturate-110",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-00 (2).webp",
    text: "Asturias · Spain",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-01.webp",
    text: "Praia do Seichal · Madeira",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-02.webp",
    text: "Friends · Cádiz",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-03.webp",
    text: "Poças das Lesmas · Madeira",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-03 (2).webp",
    text: "Graduation · URJC",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-04.webp",
    text: "Faro de Cabo Mayor · Santander",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-05.webp",
    text: "University Friends · URJC",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-39-45.webp",
    text: "Pico do Arieiro · Madeira",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-39-47.webp",
    text: "Art Exhibition",
  },
  {
    image: "/assets/photography/photo_2026-04-19_17-38-18.webp",
    text: "Sierra Nevada · Granada",
  },
];

export function Photography() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Photography</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <p className="mb-4 text-sm text-muted-foreground">
          Beyond the code — a selection of moments I have captured while
          traveling and exploring the world of engineering and design.
        </p>
        <PhotographyGallery items={PHOTOS} />

        {/* Banner removed per request */}
      </PanelContent>
    </Panel>
  );
}
