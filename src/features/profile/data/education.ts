import type { Experience } from "../types/experiences";

export const EDUCATION: Experience[] = [
  {
    id: "urjc",
    companyName: "Universidad Rey Juan Carlos",
    companyLogo: "/icons/urjc.svg",
    positions: [
      {
        id: "urjc-student",
        title: "Bachelor's in Telematic Engineering",
        employmentPeriod: {
          start: "09.2021",
          end: "2027",
        },
        employmentType: "Student",
        icon: "education",
        description: `- Currently pursuing a degree with a focus on Communication Networks, Cybersecurity, and Distributed Systems.
- Solid foundation in engineering fundamentals: Mathematics, Physics, and Electronics.
- Developing strong skills in low-level programming and computer architecture.`,
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
        title: "Technological Baccalaureate",
        employmentPeriod: {
          start: "09.2019",
          end: "06.2021",
        },
        employmentType: "Student",
        icon: "education",
        description: `- Completed technological baccalaureate in Madrid with focus on Science and Technology track.
- Specialized in Mathematics, Physics, and Computer Science preparing for engineering studies.
- Developed strong analytical and problem-solving skills through advanced STEM courses.`,
        skills: ["Mathematics", "Physics", "Technology", "Computer Science"],
      },
    ],
    isCurrentEmployer: false,
  },
];
