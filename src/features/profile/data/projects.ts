import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  // --- TUS PROYECTOS (Ingeniería Telemática & Desarrollo) ---

  {
    id: "chatia-django-practice",
    title: "ChatIA Web",
    period: {
      start: "04.2026",
    },
    link: "https://juansv22.pythonanywhere.com/",
    skills: [
      "Django",
      "Python",
      "HTMX",
      "LLM API Integration",
      "Session Authentication",
      "SQLite",
      "Linux (Ubuntu)",
    ],
    description: `Aplicación de chat académico desarrollada para la práctica de la asignatura. Implementada con **Django + HTMX**, autenticación por sesiones y conexión real a un LLM.
  - Integración segura con proveedor LLM por API (credenciales en variables de entorno / .env).
  - Admin Site operativo y endpoints documentados para consumo.

**Estado (05/2026):**
- ✅ Proyecto completado y probado.
- ✅ Despliegue público: https://juansv22.pythonanywhere.com/
- ✅ Documentación y entregables finales incluidos.
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
];
