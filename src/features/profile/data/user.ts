import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Juan",
  lastName: "Sánchez",
  displayName: "Juan Sánchez Vinuesa",
  username: "Jsanchezv2201",
  // Pronouns removed as requested

  // Short bio for metadata and header
  bio: "Last-year Telematic Engineering student, finishing my degree this year and focused on networking, systems, and AI.",

  // Dynamic typewriter effect sentences
  flipSentences: [
    "Telematic Engineer",
    "Architecting Scalable Networks",
    "Systems Programming (Rust/C++)",
    "AI & Computer Vision Research",
    "Open Source Contributor",
  ],

  address: "Madrid, Spain",

  phoneNumber: "KzM0NjUxNTM1NTg5",

  email: "c2FuY2hlenZpbnVlc2FqdWFuQGdtYWlsLmNvbQ==",

  website: "https://github.com/Jsanchezv2201",
  jobTitle: "Telematic Engineer",

  // Timeline / Experience
  jobs: [
    {
      title: "Last-year Telematic Engineering Student",
      company: "Universidad Rey Juan Carlos",
      website: "https://www.urjc.es",
    },
    {
      title: "Looking for Internship opportunities",
      website: "https://github.com/Jsanchezv2201",
      company: "",
      showAt: false,
    },
  ],

  // Expanded "About Me" section (Markdown supported)
  about: `
I am a **last-year Telematic Engineering student** at **Universidad Rey Juan Carlos** in Madrid, and I will complete my degree this year.

I also want to carry forward a family tradition of engineering through work at the intersection of **networking, low-level software, and AI**.

### Focus Areas

* **Systems Programming:** Rust and C++ for performance and memory safety.
* **Networking:** TCP/IP and network architecture fundamentals.
* **AI & Robotics:** Computer vision with TensorFlow and ROS 2 projects.

Currently **looking for internship opportunities** where I can contribute and keep growing as an engineer.
  `,

  // ⚠️ Ensure you have the chosen avatar image in your 'public' folder
  avatar: "/avatar.jpg",

  // Image used when sharing your site on social media
  ogImage: "/avatar.jpg",

  namePronunciationUrl: "", // Optional

  // GPG Public Key Information
  gpgFingerprint: "0E06 F9BE EA82 84C0 3F51 5851 D976 0F73 5FE1 0666",
  gpgPublicKeyUrl: "/jsanchezv.asc",

  // SEO Keywords
  keywords: [
    "Juan Sánchez Vinuesa",
    "Jsanchezv2201",
    "Telematic Engineer",
    "Systems Engineer",
    "Rust Developer",
    "Network Engineer",
    "Computer Vision",
    "Madrid",
  ],

  dateCreated: "2024-02-02",
};
