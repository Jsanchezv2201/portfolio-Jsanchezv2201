import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Juan",
  lastName: "Sánchez",
  displayName: "Juan Sánchez Vinuesa",
  username: "Jsanchezv2201",
  // Pronouns removed as requested

  // Short bio for metadata and header
  bio: "Telematic Engineer & Systems Developer. Focused on High-Performance Networking, Rust, and AI.",

  // Dynamic typewriter effect sentences
  flipSentences: [
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
      title: "Telematic Engineering Student",
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
I am a **Telematic Engineering Student** based in Madrid, focused on building reliable systems at the intersection of **networking, low-level software, and AI**.

### Focus Areas

* **Systems Programming:** Rust and C++ for performance and memory safety.
* **Networking:** TCP/IP and network architecture fundamentals.
* **AI & Robotics:** Computer vision with TensorFlow and ROS 2 projects.

Currently **looking for internship opportunities** where I can contribute and keep growing as an engineer.
  `,

  // ⚠️ Ensure you have 'avatar.jpg' in your 'public' folder
  avatar: "/avatar.jpg",

  // Image used when sharing your site on social media
  ogImage: "/avatar.jpg",

  namePronunciationUrl: "", // Optional

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
