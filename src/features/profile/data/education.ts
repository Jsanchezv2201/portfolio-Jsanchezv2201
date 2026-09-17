import type { Experience } from "../types/experiences";

export const EDUCATION: Experience[] = [
  {
    id: "urjc",
    companyName: "Universidad Rey Juan Carlos",
    companyLogo: "/icons/urjc.svg",
    positions: [
      {
        id: "urjc-student",
        title: {
          en: "Bachelor's in Telematic Engineering",
          es: "Grado en Ingeniería Telemática",
        },
        employmentPeriod: {
          start: "09.2021",
          end: "2027",
        },
        employmentType: {
          en: "Student",
          es: "Estudiante",
        },
        icon: "education",
        description: {
          en: `- Currently pursuing a degree with a focus on Communication Networks, Cybersecurity, and Distributed Systems.
- Solid foundation in engineering fundamentals: Mathematics, Physics, and Electronics.
- Developing strong skills in low-level programming and computer architecture.`,
          es: `- Cursando el grado con especialización en Redes de Comunicaciones, Ciberseguridad y Sistemas Distribuidos.
- Base sólida en fundamentos de ingeniería: Matemáticas, Física y Electrónica.
- Desarrollando habilidades en programación de bajo nivel y arquitectura de computadores.`,
        },
        skills: [
          "C",
          "C++",
          "Python",
          "Network Security",
          "Telecommunications",
          "Electronics",
          "Matlab",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },

  {
    id: "forges",
    companyName: "IES Antonio Fraguas Forges",
    companyLogo: "/icons/forges.png",
    positions: [
      {
        id: "bachillerato",
        title: {
          en: "Technological Baccalaureate",
          es: "Bachillerato Tecnológico",
        },
        employmentPeriod: {
          start: "09.2019",
          end: "06.2021",
        },
        employmentType: {
          en: "Student",
          es: "Estudiante",
        },
        icon: "education",
        description: {
          en: `- Completed technological baccalaureate in Madrid with focus on Science and Technology track.
- Specialized in Mathematics, Physics, and Computer Science preparing for engineering studies.
- Developed strong analytical and problem-solving skills through advanced STEM courses.`,
          es: `- Bachillerato tecnológico en Madrid con itinerario de Ciencias y Tecnología.
- Especialización en Matemáticas, Física e Informática como preparación para estudios de ingeniería.
- Desarrollé competencias analíticas y de resolución de problemas mediante cursos avanzados de STEM.`,
        },
        skills: ["Mathematics", "Physics", "Technology", "Computer Science"],
      },
    ],
    isCurrentEmployer: false,
  },
];
