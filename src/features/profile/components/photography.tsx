import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { PhotographyGallery } from "./photography-gallery";

// Replace these with your own photos. Each item needs { image: string, text: string }.
const PHOTOS = [
  {
    image: "/assets/photography/photo_2026-02-25_13-10-53.jpg",
    text: "Cabo Girão · Madeira",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-10-54.jpg",
    text: "Friends · Santander",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-10-55.jpg",
    text: "Fragas do Eume · A Coruña",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-10-55 (2).jpg",
    text: "Exposition",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-10-56.jpg",
    text: "Asturias · Spain",
  },
  { image: "/assets/photography/photo_2026-02-25_13-10-58.jpg", text: "Ski" },
  {
    image: "/assets/photography/photo_2026-02-25_13-10-59.jpg",
    text: "Isla de Ons",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-00.jpg",
    text: "Sierra Nevada",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-00 (2).jpg",
    text: "Asturias · Spain",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-01.jpg",
    text: "Praia do Seichal · Madeira",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-02.jpg",
    text: "Sunset · Cádiz",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-03.jpg",
    text: "Poças das Lesmas · Madeira",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-03 (2).jpg",
    text: "Graduation · URJC",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-04.jpg",
    text: "Faro de Cabo Mayor · Santander",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-11-05.jpg",
    text: "Film Friends",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-39-45.jpg",
    text: "Art Installation",
  },
  {
    image: "/assets/photography/photo_2026-02-25_13-39-47.jpg",
    text: "Art Exhibition",
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
      </PanelContent>
    </Panel>
  );
}
