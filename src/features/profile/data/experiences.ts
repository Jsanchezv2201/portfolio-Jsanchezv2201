import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "internship-search",
    companyName: "Open to Internship",
    positions: [
      {
        id: "looking-for-internship",
        title: {
          en: "Seeking Telematics Internship",
          es: "Buscando Prácticas en Telemática",
        },
        employmentPeriod: {
          start: "2026",
          end: "2027",
        },
        employmentType: {
          en: "Internship",
          es: "Prácticas",
        },
        icon: "idea",
        description: {
          en: "Seeking a university internship in telematics and telecom engineering.",
          es: "Buscando prácticas universitarias en ingeniería telemática y telecomunicaciones.",
        },
        skills: ["Telematics", "Networking", "Telecom"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];
