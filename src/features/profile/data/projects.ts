import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
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
    description: {
      en: `Academic chat application powered by real LLMs. Originally built with Django & HTMX, and later migrated to a modern React, Node.js, and TypeScript architecture.

🔗 **Project links:**
- [Django + Python version](https://juansv22.pythonanywhere.com/)
- [TypeScript migration](https://chatia-228425879204.europe-west2.run.app/)
`,
      es: `Aplicación de chat académica impulsada por LLMs reales. Desarrollada originalmente con Django & HTMX y posteriormente migrada a una arquitectura moderna con React, Node.js y TypeScript.

🔗 **Enlaces del proyecto:**
- [Versión Django + Python](https://juansv22.pythonanywhere.com/)
- [Migración a TypeScript](https://chatia-228425879204.europe-west2.run.app/)
`,
    },
    logo: "/icons/tech/django.svg",
  },

  {
    id: "personal-portfolio",
    title: {
      en: "Portfolio Web",
      es: "Portfolio Web",
    },
    period: {
      start: "01.2026",
    },
    link: "https://github.com/Jsanchezv2201/portfolio",
    skills: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Shadcn UI",
      "Vercel",
    ],
    description: {
      en: `Design and development of this minimalist personal portfolio focused on performance and user experience.
- Architecture based on **Next.js 14 (App Router)** for hybrid rendering (SSR/SSG) and SEO optimization.
- Responsive and accessible UI built with **Tailwind CSS** and **Shadcn UI** components.
- MDX content management system integration for blog and dynamic project rendering.`,
      es: `Diseño y desarrollo de este portfolio personal minimalista centrado en rendimiento y experiencia de usuario.
- Arquitectura basada en **Next.js 14 (App Router)** para renderizado híbrido (SSR/SSG) y optimización SEO.
- UI responsiva y accesible construida con **Tailwind CSS** y componentes de **Shadcn UI**.
- Integración de sistema de gestión de contenido MDX para blog y renderizado dinámico de proyectos.`,
    },
    logo: "/icons/tech/nextjs2.svg",
  },

  {
    id: "rust-tcp-chat",
    title: {
      en: "Concurrent TCP Group Chat",
      es: "Chat Grupal TCP Concurrente",
    },
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
    description: {
      en: `Design and implementation of a distributed chat system using a **Client-Server** architecture over raw **TCP** sockets.
- Concurrency management via **Multithreading**, supporting multiple simultaneous clients without blocking.
- Shared state synchronization and memory safety using primitives such as **Arc** and **Mutex**.
- Custom communication protocol for room management (create, join, list) and real-time messaging.

🔗 **Project Demos:**
- [ View Code Walkthrough](https://drive.google.com/file/d/1FeUJZe0dRnOydD9XFfOTasWbzX8juY0N/view?usp=sharing)
- [ View Execution Demo](https://drive.google.com/file/d/1FbBsI290kuxJYQ0g28hkYejcB7Mg4JhQ/view?usp=sharing)`,
      es: `Diseño e implementación de un sistema de chat distribuido usando arquitectura **Cliente-Servidor** sobre sockets **TCP** puros.
- Gestión de concurrencia mediante **Multihilo**, soportando múltiples clientes simultáneos sin bloqueos.
- Sincronización de estado compartido y seguridad de memoria usando primitivas como **Arc** y **Mutex**.
- Protocolo de comunicación propio para gestión de salas (crear, unirse, listar) y mensajería en tiempo real.

🔗 **Demos del proyecto:**
- [ Ver explicación del código](https://drive.google.com/file/d/1FeUJZe0dRnOydD9XFfOTasWbzX8juY0N/view?usp=sharing)
- [ Ver demo de ejecución](https://drive.google.com/file/d/1FbBsI290kuxJYQ0g28hkYejcB7Mg4JhQ/view?usp=sharing)`,
    },
    logo: "/icons/tech/rust.svg",
    image: "/assets/projects/tcp-chat.jpg",
  },

  {
    id: "dog-breed-identification",
    title: {
      en: "Dog Breed Identification (CNNs)",
      es: "Identificación de Razas de Perros (CNNs)",
    },
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
    description: {
      en: `120-class image classification system based on 2D digital signal processing.
- Implementation of **Convolutional Neural Networks (CNNs)** as adaptive filter banks for feature extraction.
- **Signal preprocessing**: normalization, downsampling and data augmentation for robustness against noise and variations.
- Evaluation of **Transfer Learning** architectures (Xception, NASNet) optimizing the accuracy-computational cost tradeoff.`,
      es: `Sistema de clasificación de imágenes en 120 clases basado en procesamiento de señal digital 2D.
- Implementación de **Redes Neuronales Convolucionales (CNNs)** como bancos de filtros adaptativos para extracción de características.
- **Preprocesado de señal**: normalización, downsampling y data augmentation para robustez frente a ruido y variaciones.
- Evaluación de arquitecturas de **Transfer Learning** (Xception, NASNet) optimizando el compromiso precisión-coste computacional.`,
    },
    logo: "/icons/tech/tensorflow.svg",
    image: "/assets/projects/dog-breed.jpg",
    imagePosition: "center 30%",
  },

  {
    id: "ros2-nav-bot",
    title: {
      en: "Autonomous Navigation Robot",
      es: "Robot de Navegación Autónoma",
    },
    period: {
      start: "03.2024",
      end: "05.2024",
    },
    link: "https://github.com/Jsanchezv2201",
    skills: ["Robotics", "ROS 2", "Gazebo", "Python", "C++", "SLAM", "Nav2"],
    description: {
      en: `Development of an autonomous navigation system for mobile robots using the **ROS 2** framework.
- Implementation of **SLAM** (Simultaneous Localization and Mapping) algorithms for real-time mapping.
- Simulation of complex physical environments using **Gazebo**.
- Control node programming and trajectory planning in **C++ and Python**.`,
      es: `Desarrollo de un sistema de navegación autónoma para robots móviles usando el framework **ROS 2**.
- Implementación de algoritmos de **SLAM** (Localización y Mapeo Simultáneo) para mapeo en tiempo real.
- Simulación de entornos físicos complejos con **Gazebo**.
- Programación de nodos de control y planificación de trayectorias en **C++ y Python**.`,
    },
    logo: "/icons/tech/ros2.svg",
    image: "/assets/projects/ros2-robot.jpg",
  },

  {
    id: "shell-photo-organizer",
    title: {
      en: "Automated Photo Collection Manager",
      es: "Gestor Automatizado de Colección de Fotos",
    },
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
    description: {
      en: `**Shell Script** automation tool for bulk organization and normalization of multimedia libraries.
- Recursive search and format filtering (JPEG, PNG, TIFF) using **find** and **grep**.
- Automatic filename and extension normalization via stream manipulation with **sed** and **tr**.
- Metadata report generation and storage statistics calculation with **awk**.
- Robust error handling, collision detection and automatic cleanup of temporary environments.`,
      es: `Herramienta de automatización **Shell Script** para organización y normalización masiva de bibliotecas multimedia.
- Búsqueda recursiva y filtrado de formatos (JPEG, PNG, TIFF) usando **find** y **grep**.
- Normalización automática de nombres de archivo y extensiones mediante manipulación de flujos con **sed** y **tr**.
- Generación de informes de metadatos y cálculo de estadísticas de almacenamiento con **awk**.
- Manejo robusto de errores, detección de colisiones y limpieza automática de entornos temporales.`,
    },
    logo: "/icons/tech/bash.svg",
  },

  {
    id: "riscv-interactive-docs",
    title: {
      en: "Interactive RISC-V Assembly Guide",
      es: "Guía Interactiva de Ensamblador RISC-V",
    },
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
    description: {
      en: `Interactive web platform for documenting and accelerating **RISC-V** architecture learning.
- Structured collection of low-level design patterns: **String** manipulation, **Matrix** operations and **Floating Point** arithmetic (IEEE 754).
- Reactive interface built with **HTML/CSS/JS** featuring a real-time search and dynamic code snippet visualization.
- Quick technical reference for register management, system calls (Syscalls) and stack handling.`,
      es: `Plataforma web interactiva para documentar y acelerar el aprendizaje de la arquitectura **RISC-V**.
- Colección estructurada de patrones de diseño de bajo nivel: manipulación de **cadenas**, operaciones con **matrices** y aritmética de **coma flotante** (IEEE 754).
- Interfaz reactiva construida con **HTML/CSS/JS** con búsqueda en tiempo real y visualización dinámica de fragmentos de código.
- Referencia técnica rápida para gestión de registros, llamadas al sistema (Syscalls) y manejo de pila.`,
    },
    logo: "/icons/tech/riscv.svg",
  },
];
