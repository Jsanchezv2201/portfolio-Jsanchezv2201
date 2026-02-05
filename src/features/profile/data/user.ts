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

  // ⚠️ IMPORTANT: Run in terminal: echo -n "+34YOUR_NUMBER" | base64
  phoneNumber: "KzM0NjUxNTM1NTg5",

  // ⚠️ IMPORTANT: Run in terminal: echo -n "your_email@gmail.com" | base64
  email: "c2FuY2hlenZpbnVlc2FqdWFuQGdtYWlsLmNvbQ==",

  website: "https://github.com/Jsanchezv2201",
  jobTitle: "Telematic Engineer",

  // Timeline / Experience
  jobs: [
    {
      title: "Telematic Engineering Undergraduate",
      company: "Universidad Rey Juan Carlos",
      website: "https://www.urjc.es",
    },
    {
      title: "Open Source Developer",
      company: "GitHub",
      website: "https://github.com/Jsanchezv2201",
    },
  ],

  // Expanded "About Me" section (Markdown supported)
  about: `
I am a **Telematic Engineering Student** based in Madrid, driven by the intersection of **Hardware, Networking, and Software**. My goal is to build systems that are not only intelligent but also secure and highly efficient.

Unlike typical web developers, I enjoy diving deep into the **low-level details**: from analyzing TCP/IP packets to optimizing memory safety in Rust.

### Core Competencies

* **Systems Programming:** Expert in memory management and concurrency with **Rust** and **C++**.
* **Networking:** Deep understanding of protocols (BGP, OSPF, TCP/IP) and network simulation (Cisco Packet Tracer, GNS3).
* **Artificial Intelligence:** Implementing CNNs and Computer Vision algorithms using **TensorFlow** and **Python**.
* **Robotics:** Navigating autonomous systems with **ROS 2** and **Gazebo**.

I am currently looking for opportunities to apply my skills in **Cybersecurity**, **Backend Engineering**, or **Embedded Systems**.
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
