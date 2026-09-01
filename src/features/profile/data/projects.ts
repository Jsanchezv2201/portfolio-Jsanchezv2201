import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  // --- TUS PROYECTOS (Ingeniería Telemática & Desarrollo) ---

  {
    id: "chatia-django-practice",
    title: "ChatIA Web",
    period: {
      start: "04.2026",
    },
    link: "https://chatia-228425879204.europe-west2.run.app/",
    skills: [
      "Django",
      "Python",
      "HTMX",
      "LLM API Integration",
      "Session Authentication",
      "SQLite",
      "Linux (Ubuntu)",
    ],
    description: `Academic chat application powered by real LLMs. Originally built with Django & HTMX, and later migrated to a modern React, Node.js, and TypeScript architecture.

🔗 **Project links:**
- [Django + Python version](https://juansv22.pythonanywhere.com/)
- [TypeScript migration](https://chatia-228425879204.europe-west2.run.app/)
`,
    logo: "/icons/tech/django.svg",
  },

  {
    id: "personal-portfolio",
    title: "Portfolio Web",
    period: {
      start: "01.2026",
      // Sin 'end' para que salga "Present"
    },
    link: "https://github.com/Jsanchezv2201/portfolio", // Ajusta si el nombre del repo es distinto
    skills: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Shadcn UI",
      "Vercel",
    ],
    description: `Design and development of this minimalist personal portfolio focused on performance and user experience.
- Architecture based on **Next.js 14 (App Router)** for hybrid rendering (SSR/SSG) and SEO optimization.
- Responsive and accessible UI built with **Tailwind CSS** and **Shadcn UI** components.
- MDX content management system integration for blog and dynamic project rendering.`,
    logo: "/icons/tech/nextjs2.svg",
  },

  {
    id: "rust-tcp-chat",
    title: "Concurrent TCP Group Chat",
    period: {
      start: "12.2024",
      end: "05.2025",
    },
    link: "https://github.com/Jsanchezv2201/Concurrent-TCP-GroupChat",
    skills: [
      "Rust",
      "TCP/IP",
      "Socket Programming",
      "Concurrency",
      "Multithreading",
      "System Design",
    ],
    description: `Design and implementation of a distributed chat system using a **Client-Server** architecture over raw **TCP** sockets.
- Concurrency management via **Multithreading**, supporting multiple simultaneous clients without blocking.
- Shared state synchronization and memory safety using primitives such as **Arc** and **Mutex**.
- Custom communication protocol for room management (create, join, list) and real-time messaging.

🔗 **Project Demos:**
- [ View Code Walkthrough](https://drive.google.com/file/d/1FeUJZe0dRnOydD9XFfOTasWbzX8juY0N/view?usp=sharing)
- [ View Execution Demo](https://drive.google.com/file/d/1FbBsI290kuxJYQ0g28hkYejcB7Mg4JhQ/view?usp=sharing)`,
    logo: "/icons/tech/rust.svg",
    image: "/assets/projects/tcp-chat.jpg",
  },

  {
    id: "dog-breed-identification",
    title: "Dog Breed Identification (CNNs)",
    period: {
      start: "11.2023",
      end: "01.2024",
    },
    link: "https://github.com/Jsanchezv2201/CNNs-Dog_Breed_Identification/tree/main",
    skills: [
      "Computer Vision",
      "Signal Processing",
      "CNNs",
      "Deep Learning",
      "TensorFlow",
      "Keras",
    ],
    description: `120-class image classification system based on 2D digital signal processing.
- Implementation of **Convolutional Neural Networks (CNNs)** as adaptive filter banks for feature extraction.
- **Signal preprocessing**: normalization, downsampling and data augmentation for robustness against noise and variations.
- Evaluation of **Transfer Learning** architectures (Xception, NASNet) optimizing the accuracy-computational cost tradeoff.`,
    logo: "/icons/tech/tensorflow.svg",
    image: "/assets/projects/dog-breed.jpg",
    imagePosition: "center 30%",
  },

  {
    id: "ros2-nav-bot",
    title: "Autonomous Navigation Robot",
    period: {
      start: "03.2024",
      end: "05.2024",
    },
    link: "https://github.com/Jsanchezv2201",
    skills: ["Robotics", "ROS 2", "Gazebo", "Python", "C++", "SLAM", "Nav2"],
    description: `Development of an autonomous navigation system for mobile robots using the **ROS 2** framework.
- Implementation of **SLAM** (Simultaneous Localization and Mapping) algorithms for real-time mapping.
- Simulation of complex physical environments using **Gazebo**.
- Control node programming and trajectory planning in **C++ and Python**.`,
    logo: "/icons/tech/ros2.svg",
    image: "/assets/projects/ros2-robot.jpg",
  },

  {
    id: "shell-photo-organizer",
    title: "Automated Photo Collection Manager",
    period: {
      start: "12.2025",
      end: "12.2025",
    },
    link: "https://github.com/Jsanchezv2201",
    skills: [
      "Shell Scripting",
      "Linux Automation",
      "Bash/Sh",
      "Regular Expressions",
      "System Administration",
    ],
    description: `**Shell Script** automation tool for bulk organization and normalization of multimedia libraries.
- Recursive search and format filtering (JPEG, PNG, TIFF) using **find** and **grep**.
- Automatic filename and extension normalization via stream manipulation with **sed** and **tr**.
- Metadata report generation and storage statistics calculation with **awk**.
- Robust error handling, collision detection and automatic cleanup of temporary environments.`,
    logo: "/icons/tech/bash.svg",
  },

  {
    id: "riscv-interactive-docs",
    title: "Interactive RISC-V Assembly Guide",
    period: {
      start: "12.2025",
      end: "01.2026",
    },
    link: "https://github.com/Jsanchezv2201",
    skills: [
      "RISC-V",
      "Assembly",
      "Computer Architecture",
      "HTML5",
      "JavaScript",
      "Technical Documentation",
    ],
    description: `Interactive web platform for documenting and accelerating **RISC-V** architecture learning.
- Structured collection of low-level design patterns: **String** manipulation, **Matrix** operations and **Floating Point** arithmetic (IEEE 754).
- Reactive interface built with **HTML/CSS/JS** featuring a real-time search and dynamic code snippet visualization.
- Quick technical reference for register management, system calls (Syscalls) and stack handling.`,
    logo: "/icons/tech/riscv.svg",
  },
];
