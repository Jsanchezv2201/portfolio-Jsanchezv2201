import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  // --- TUS PROYECTOS (Ingeniería Telemática & Desarrollo) ---

  {
    id: "chatia-django-practice",
    title: "ChatIA Web",
    period: {
      start: "04.2026",
    },
    link: "https://chat-ia-zeta.vercel.app/",
    skills: [
      "Django",
      "Python",
      "HTMX",
      "LLM API Integration",
      "Session Authentication",
      "SQLite",
      "Linux (Ubuntu)",
    ],
    description: `Aplicación de chat académico desarrollada para la práctica de la asignatura, con autenticación por sesiones y conexión real a un LLM.
  - Implementación de la parte obligatoria con **Django + HTMX** (actualización parcial de mensajes mediante "hx-post").
  - Integración real con proveedor LLM por API, manteniendo credenciales fuera del repositorio (variables de entorno / .env).
- Admin Site operativo y estructura de recursos HTTP documentada para la entrega.

**Estado actual (23/04/2026):**
- ✅ Núcleo funcional completado: autenticación, chat con HTMX, integración LLM y validación técnica base.
- 🟡 En mejora: robustez UX en casos límite de red, validación final en Firefox laboratorio y cierre de documentación.
- 🔴 Pendiente de entrega: URL pública de despliegue, vídeo demostración y credenciales finales en README estricto.`,
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
    description: `Diseño y desarrollo de este portafolio personal interactivo y minimalista enfocado en el rendimiento y la experiencia de usuario.
- Arquitectura basada en **Next.js 14 (App Router)** para renderizado híbrido (SSR/SSG) y optimización SEO.
- Diseño de interfaz responsivo y accesible implementando **Tailwind CSS** y componentes de **Shadcn UI**.
- Integración de sistema de gestión de contenidos (MDX) para blog y renderizado dinámico de proyectos.`,
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
    description: `Diseño e implementación de un sistema de chat distribuido bajo arquitectura **Cliente-Servidor** sobre sockets **TCP** puros.
- Gestión de concurrencia mediante **Multithreading**, permitiendo múltiples clientes simultáneos sin bloqueo.
- Sincronización de estado compartido y seguridad de memoria utilizando primitivas como **Arc** y **Mutex**.
- Definición de un protocolo de comunicación personalizado para la gestión de salas (crear, unirse, listar) y mensajería en tiempo real.

🔗 **Demos del Proyecto:**
- [ Ver Explicación del Código](https://drive.google.com/file/d/1FeUJZe0dRnOydD9XFfOTasWbzX8juY0N/view?usp=sharing)
- [ Ver Demo de Ejecución](https://drive.google.com/file/d/1FbBsI290kuxJYQ0g28hkYejcB7Mg4JhQ/view?usp=sharing)`,
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
    description: `Sistema de clasificación de 120 clases basado en el procesamiento digital de señales 2D (imágenes).
- Implementación de **Redes Neuronales Convolucionales (CNNs)** como bancos de filtros adaptativos para la extracción de características.
- **Preprocesamiento de señal**: Normalización, diezmado y Data Augmentation para robustez frente a ruido y variaciones.
- Evaluación de arquitecturas de **Transfer Learning** (Xception, NASNet) optimizando el compromiso precisión-coste computacional.`,
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
    description: `Desarrollo de un sistema de navegación autónoma para robots móviles utilizando el framework **ROS 2**.
- Implementación de algoritmos de **SLAM** (Simultaneous Localization and Mapping) para mapeo en tiempo real.
- Simulación de entornos físicos complejos utilizando **Gazebo**.
- Programación de nodos de control y planificación de trayectorias en **C++ y Python**.`,
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
    description: `Herramienta de automatización en **Shell Script** para la organización masiva y normalización de bibliotecas multimedia.
- Implementación de búsqueda recursiva y filtrado de formatos (JPEG, PNG, TIFF) utilizando **find** y **grep**.
- Normalización automática de nombres de archivo y extensiones mediante manipulación de streams con **sed** y **tr**.
- Generación de informes de metadatos y cálculo de estadísticas de almacenamiento con **awk**.
- Gestión robusta de errores, detección de colisiones y limpieza automática de entornos temporales.`,
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
    description: `Plataforma web interactiva desarrollada para documentar y agilizar el aprendizaje de la arquitectura **RISC-V**.
- Recopilación estructurada de patrones de diseño en bajo nivel: manipulación de **Strings**, operaciones con **Matrices** y aritmética de **Punto Flotante** (IEEE 754).
- Interfaz reactiva construida con **HTML/CSS/JS** que incluye buscador en tiempo real y visualización dinámica de snippets de código.
- Referencia técnica rápida para gestión de registros, llamadas al sistema (Syscalls) y manejo de la pila (Stack).`,
    logo: "/icons/tech/riscv.svg",
  },

  {
    id: "rust-sniffer",
    title: "High-Performance Network Sniffer",
    period: {
      start: "2024",
    },
    link: "https://github.com/Jsanchezv2201",
    skills: [
      "Rust",
      "Networking",
      "TCP/IP",
      "Packet Analysis",
      "Systems Programming",
      "Linux",
    ],
    description: `Herramienta de análisis de tráfico de red construida desde cero en **Rust** para maximizar el rendimiento y la seguridad de memoria.
- Captura y disección de paquetes en tiempo real (similar a Wireshark pero en terminal).
- Análisis de protocolos **TCP/IP, UDP e ICMP**.
- Implementación de filtros de paquetes personalizados y estadísticas de tráfico.`,
    logo: "/icons/tech/rust.svg",
  },
  /*
  {
    id: "ai-traffic-sign",
    title: "Traffic Sign Recognition System",
    period: {
      start: "2023",
    },
    link: "https://github.com/Jsanchezv2201",
    skills: [
      "AI",
      "Computer Vision",
      "Python",
      "TensorFlow",
      "OpenCV",
      "Deep Learning",
    ],
    description: `Sistema de visión por computador capaz de detectar y clasificar señales de tráfico en tiempo real.
- Entrenamiento de redes neuronales convolucionales (**CNNs**) con TensorFlow/Keras.
- Preprocesamiento de imágenes y detección de bordes con **OpenCV**.
- Optimización del modelo para inferencia rápida en dispositivos con recursos limitados.`,
    logo: "/icons/tech/opencv.svg",
  },


  // =========================================================================
  // PROYECTOS ORIGINALES (COMENTADOS)
  // =========================================================================

  {
    id: "react-wheel-picker",
    title: "React Wheel Picker",
    period: {
      start: "05.2025",
    },
    link: "https://react-wheel-picker.chanhdai.com",
    skills: [
      "Open Source",
      "React",
      "TypeScript",
      "Monorepo",
      "Turborepo",
      "pnpm-workspace",
      "Package Publishing",
      "NPM Registry",
      "GitHub Actions",
    ],
    description: `iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. / Backed by [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker)
- 📱 Natural touch scrolling with smooth inertia effect
- 🖱️ Mouse drag and scroll support for desktop
- 🔄 Infinite loop scrolling
- 🎨 Unstyled components for complete style customization
- ⚡️ Easy installation via shadcn CLI
`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "chanhdaidotcom",
    title: "chanhdai.com",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/ncdai/chanhdai.com",
    skills: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description: `A minimal dev portfolio, component registry, and blog.

**Featured:**

- Clean & modern design
- Light/Dark themes
- vCard integration
- SEO optimized ([JSON-LD schema](https://json-ld.org), sitemap, robots)
- AI-ready with [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable as PWA

**Blog:**

- Supports MDX & Markdown
- Raw \`.mdx\` endpoints for AI readability
- Syntax highlighting for clear code presentation
- Dynamic OG images for rich link previews
- RSS feed for easy content distribution

**Registry:**

- Easily build and distribute reusable components, hooks, and pages using a custom registry powered by the [shadcn CLI](https://ui.shadcn.com/docs/cli).
- Each entry is well-documented and includes:
  - Live preview & code snippets
  - Beautiful, readable code blocks
  - One-click command blocks (pnpm, npm, yarn, bun)`,
    logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
  },
  {
    id: "quaricdotcom",
    title: "quaric.com",
    period: {
      start: "03.2024",
    },
    link: "https://quaric.com",
    skills: [
      "Company Project",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "Strapi 5",
      "VNPAY-QR",
      "Docker",
      "Docker Compose",
      "NGINX",
    ],
    logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  },
  {
    id: "zadark",
    title: "ZaDark",
    period: {
      start: "01.2022",
    },
    link: "https://zadark.com",
    skills: [
      "Pet Project",
      "Open Source",
      "Browser Extension",
      "CLI",
      "Docusaurus 3",
    ],
    description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.
- Earned 10M+ VND in net sales from a paid Safari Extension
- 80k+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
- 20k+ active users via Chrome Web Store (as of Sep 2025)
- Bronze Medal — 10th Design, Manufacturing, and Application Award 2022`,
    logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
  },
  {
    id: "qabox",
    title: "QABox",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    link: "https://github.com/ncdai/qabox",
    skills: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox",
  },
  {
    id: "taskbox",
    title: "TaskBox",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    link: "https://github.com/ncdai/taskbox",
    skills: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/taskbox",
  },
  {
    id: "daichat-app",
    title: "DaiChat App",
    period: {
      start: "07.2020",
      end: "07.2020",
    },
    link: "https://www.youtube.com/watch?v=H5U3J_W1low",
    skills: ["University Project", "Java", "Java Swing", "Java Networking"],
    description: `- Course: Java Application Programming — FIT@HCMUS
- Requirement: Developed a real-time chat application using Java technologies
- Project Score: 10/10
- Source Code:
  - Server: https://github.com/ncdai/ltudjava-summer2020-chatapp_server
  - Client: https://github.com/ncdai/ltudjava-summer2020-chatapp_client`,
  },
  {
    id: "qlsv-app",
    title: "QLSV App",
    period: {
      start: "06.2020",
      end: "06.2020",
    },
    link: "https://www.youtube.com/watch?v=tG9SZEBrwog",
    skills: ["University Project", "Java", "Java Swing", "Hibernate", "MySQL"],
    description: `- Course: Java Application Programming — FIT@HCMUS
- Requirement: Built a student management system with role-based functionalities using Java technologies
- Project Score: 10/10
- Source Code: https://github.com/ncdai/ltudjava-summer2020-hibernate`,
  },
  {
    id: "penphy",
    title: "Penphy",
    period: {
      start: "01.2019",
      end: "08.2019",
    },
    link: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
    skills: ["Startup Project", "JavaScript", "React Native"],
    description: "2nd Prize — Business Startup Competition 2019",
  },
  {
    id: "unlimitedstudy",
    title: "UnlimitedStudy",
    period: {
      start: "01.2017",
      end: "08.2018",
    },
    link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
    skills: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
      "jQuery",
      "Bootstrap 3",
    ],
    description: `UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.
- 3rd Prize — National Science and Engineering Fair 2018 (ViSEF)
- 1st Prize — Can Tho City Science and Engineering Fair 2018
- 3rd Prize — National Young Informatics Contest 2018
- 2nd Prize — Can Tho City Youth and Children's Creativity Contest 2018
- 3rd Prize — Can Tho City Young Informatics Contest 2018
- Reached 7k+ users, mainly high school students in Can Tho City
- Pilot implemented in high schools across Can Tho City with English quizzes, supervised by English subject specialists from the Can Tho City Department of Education and Training`,
    logo: "https://assets.chanhdai.com/images/project-logos/unlimitedstudy.webp",
  },
  {
    id: "dmessage",
    title: "DMessage",
    period: {
      start: "05.2017",
      end: "05.2017",
    },
    link: "https://github.com/ncdai/DMessage",
    skills: [
      "Self-learning Project",
      "Pet Project",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Mongoose ODM",
    ],
    description:
      "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
  },
  {
    id: "study-english",
    title: "Study English",
    period: {
      start: "11.2016",
      end: "12.2017",
    },
    link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
    skills: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
    ],
    description: `Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.
- Consolation Prize — National Youth and Children's Creativity Contest 2016
- 1st Prize — Can Tho City Youth and Children's Creativity Contest 2016
- Consolation Prize — Can Tho City Young Informatics Contest 2016`,
  },
  */
];
