import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "tfg-simulacion-determinista-rust",
    title: {
      en: "TFG — Distributed Systems Programming with Deterministic Simulation Testing",
      es: "TFG — Programación de Sistemas Distribuidos con Verificación Mediante Pruebas de Simulación Determinista",
    },
    period: {
      start: "11.2026",
    },
    link: "https://github.com/Jsanchezv2201",
    skills: [
      "Rust",
      "Distributed Systems",
      "Deterministic Simulation Testing",
      "madsim",
      "turmoil",
      "Fault Injection",
      "Concurrency",
      "Software Verification",
      "Network Simulation",
    ],
    description: {
      en: `Bachelor's Thesis (TFG) exploring the application of deterministic simulation testing to the verification and reliability of distributed systems developed in **Rust**.
- **Controlled simulation**: Study of tools such as **madsim** and **turmoil** to deterministically simulate concurrency, virtual time progression, network communications, and component failures.
- **Adversarial scenarios**: Designing and implementing test suites to reproduce adverse conditions, network partitions, and edge-case errors that are hard to identify through conventional testing.
- **Comparative evaluation**: Assessing the capabilities, limitations, and key differences of both environments, analyzing their effectiveness in enhancing distributed system reliability.`,
      es: `Trabajo de Fin de Grado (TFG) centrado en la exploración y aplicación de pruebas de simulación determinista a la verificación de sistemas distribuidos desarrollados en **Rust**.
- **Simulación controlada**: Estudio de cómo herramientas como **madsim** y **turmoil** permiten simular de forma controlada la concurrencia, el paso del tiempo, las comunicaciones de red y los fallos de los componentes.
- **Escenarios adversos**: Diseño e implementación de pruebas para reproducir escenarios adversos y detectar errores difíciles de identificar mediante pruebas convencionales.
- **Evaluación comparativa**: Evaluación de las capacidades, limitaciones y diferencias de ambos entornos, así como su utilidad para mejorar la fiabilidad de los sistemas distribuidos.`,
    },
    logo: "/icons/tech/rust.svg",
    mainLanguage: "Rust",
  },
  {
    id: "chatia-django-practice",
    title: "ChatIA Web",
    period: {
      start: "04.2026",
      end: "07.2026",
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
- 🌐 [Django + Python version](https://juansv22.pythonanywhere.com/)
- 🌐 [TypeScript migration](https://chatia-228425879204.europe-west2.run.app/)
- 🦊 [Source code (GitLab)](https://gitlab.eif.urjc.es/juansv1/final-chatia)
- 🎥 [Demo video — Basic](https://youtu.be/NwHQRQ5agu4)
- 🎥 [Demo video — Advanced](https://youtu.be/QM8VW4ZUVvg)
`,
      es: `Aplicación de chat académica impulsada por LLMs reales. Desarrollada originalmente con Django & HTMX y posteriormente migrada a una arquitectura moderna con React, Node.js y TypeScript.

🔗 **Enlaces del proyecto:**
- 🌐 [Versión Django + Python](https://juansv22.pythonanywhere.com/)
- 🌐 [Migración a TypeScript](https://chatia-228425879204.europe-west2.run.app/)
- 🦊 [Código fuente (GitLab)](https://gitlab.eif.urjc.es/juansv1/final-chatia)
- 🎥 [Vídeo demo — Básico](https://youtu.be/NwHQRQ5agu4)
- 🎥 [Vídeo demo — Avanzado](https://youtu.be/QM8VW4ZUVvg)
`,
    },
    logo: "/icons/tech/django.svg",
    mainLanguage: "Python",
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
    link: "https://github.com/Jsanchezv2201/portfolio-Jsanchezv2201",
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
- MDX content management system integration for blog and dynamic project rendering.

🔗 **Project links:**
- 🐙 [Source code (GitHub)](https://github.com/Jsanchezv2201/portfolio-Jsanchezv2201)
- 🌐 [Live site](https://juan-sanchez-portfolio.vercel.app/)`,
      es: `Diseño y desarrollo de este portfolio personal minimalista centrado en rendimiento y experiencia de usuario.
- Arquitectura basada en **Next.js 14 (App Router)** para renderizado híbrido (SSR/SSG) y optimización SEO.
- UI responsiva y accesible construida con **Tailwind CSS** y componentes de **Shadcn UI**.
- Integración de sistema de gestión de contenido MDX para blog y renderizado dinámico de proyectos.

🔗 **Enlaces del proyecto:**
- 🐙 [Código fuente (GitHub)](https://github.com/Jsanchezv2201/portfolio-Jsanchezv2201)
- 🌐 [Web en producción](https://juan-sanchez-portfolio.vercel.app/)`,
    },
    logo: "/icons/tech/nextjs2.svg",
    mainLanguage: "TypeScript",
  },

  {
    id: "distributed-systems-go",
    title: {
      en: "Distributed Systems — Car Workshop",
      es: "Sistemas Distribuidos — Taller de Coches",
    },
    period: {
      start: "11.2025",
      end: "01.2026",
    },
    link: "https://github.com/Jsanchezv2201/Dist-Practica1",
    skills: [
      "Go",
      "Goroutines",
      "Channels",
      "Concurrency",
      "Mutexes",
      "RWMutex",
      "WaitGroup",
      "Distributed Systems",
    ],
    description: {
      en: `4-part progressive project simulating a concurrent car workshop, each practice adding a layer of complexity:
- [**P1 — Sequential CRUD System**](https://github.com/Jsanchezv2201/Dist-Practica1): Management of clients, vehicles, mechanics, and incidents.
- [**P2 — Concurrent Simulation**](https://github.com/Jsanchezv2201/Dist-Practica2): Parallel vehicle processing with **goroutines** and **channels**.
- [**P3 — 4-Phase Pipeline**](https://github.com/Jsanchezv2201/Dist-Practica3): Entry, repair, cleaning, and revision using **RWMutex**, **WaitGroup**, and priority queues.
- [**P4 — Advanced Concurrency**](https://github.com/Jsanchezv2201/Dist-Practica4): Optimization patterns with statistical analysis and performance benchmarks.`,
      es: `Proyecto progresivo de 4 prácticas que simula un taller de coches concurrente, añadiendo complejidad en cada entrega:
- [**P1 — Sistema CRUD Secuencial**](https://github.com/Jsanchezv2201/Dist-Practica1): Gestión de clientes, vehículos, mecánicos e incidencias.
- [**P2 — Simulación Concurrente**](https://github.com/Jsanchezv2201/Dist-Practica2): Procesamiento paralelo de vehículos con **goroutines** y **channels**.
- [**P3 — Pipeline de 4 Fases**](https://github.com/Jsanchezv2201/Dist-Practica3): Entrada, reparación, lavado y revisión con **RWMutex**, **WaitGroup** y colas de prioridad.
- [**P4 — Concurrencia Avanzada**](https://github.com/Jsanchezv2201/Dist-Practica4): Patrones avanzados con análisis estadístico y benchmarks comparativos.`,
    },
    logo: "icon:go",
    mainLanguage: "Go",
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

🔗 **Project links:**
- 🐙 [Source code (GitHub)](https://github.com/Jsanchezv2201/Concurrent-TCP-GroupChat)
- 🎥 [Code walkthrough](https://drive.google.com/file/d/1FeUJZe0dRnOydD9XFfOTasWbzX8juY0N/view?usp=sharing)
- 🎥 [Execution demo](https://drive.google.com/file/d/1FbBsI290kuxJYQ0g28hkYejcB7Mg4JhQ/view?usp=sharing)`,
      es: `Diseño e implementación de un sistema de chat distribuido usando arquitectura **Cliente-Servidor** sobre sockets **TCP** puros.
- Gestión de concurrencia mediante **Multihilo**, soportando múltiples clientes simultáneos sin bloqueos.
- Sincronización de estado compartido y seguridad de memoria usando primitivas como **Arc** y **Mutex**.
- Protocolo de comunicación propio para gestión de salas (crear, unirse, listar) y mensajería en tiempo real.

🔗 **Enlaces del proyecto:**
- 🐙 [Código fuente (GitHub)](https://github.com/Jsanchezv2201/Concurrent-TCP-GroupChat)
- 🎥 [Explicación del código](https://drive.google.com/file/d/1FeUJZe0dRnOydD9XFfOTasWbzX8juY0N/view?usp=sharing)
- 🎥 [Demo de ejecución](https://drive.google.com/file/d/1FbBsI290kuxJYQ0g28hkYejcB7Mg4JhQ/view?usp=sharing)`,
    },
    logo: "/icons/tech/rust.svg",
    mainLanguage: "Rust",
    image: "/assets/projects/tcp-chat.jpg",
  },

  {
    id: "advanced-telematic-systems-cpp",
    title: {
      en: "Advanced Telematic Systems",
      es: "Ampliación de Sistemas Telemáticos",
    },
    period: {
      start: "02.2025",
      end: "05.2025",
    },
    link: "https://github.com/clases-julio/p1-introcpp-Jsanchezv2201",
    skills: [
      "C++",
      "OOP",
      "STL",
      "Operator Overloading",
      "Multithreading",
      "TCP Sockets",
      "Boost.Asio",
      "GDB",
      "Valgrind",
      "Doxygen",
    ],
    description: {
      en: `Coursework for **Advanced Telematic Systems (AST)** in the Telematic Engineering degree (URJC), combining an evolving core **C++** project (the greenhouse system) with specialized standalone laboratories:

🌱 **Core Project — Greenhouse Monitoring System:**
- [**P2 — Software Design (UML)**](https://github.com/clases-julio/p2-introds-Jsanchezv2201): Object-oriented architecture and UML class diagrams (sensors, RGB/thermal cameras, auth, dashboard).
- [**P3 — Class Implementation**](https://github.com/clases-julio/p3-implclases-Jsanchezv2201): Modular C++ implementation (.h/.cpp) with Makefile for greenhouse domain classes.
- [**P5 — STL Containers (std::set)**](https://github.com/clases-julio/p5-setusers-Jsanchezv2201): Duplicate-free storage auto-sorted by NIF (\`operator<\`), plus interactive terminal login.
- [**P6 — Exceptions, GDB & Doxygen**](https://github.com/clases-julio/p6-excep-gdb-doxygen-Jsanchezv2201): Custom exception hierarchies, GDB debugging, Valgrind leak elimination, and Doxygen docs.
- [**P7 — Binary File Persistence**](https://github.com/clases-julio/p7-ficheros-Jsanchezv2201): Persistent disk storage for greenhouse credentials in \`users.dat\` with binary streams (\`ios::binary\`).

⚡ **Specialized & Standalone Labs:**
- [**P1 — Introduction to C++**](https://github.com/clases-julio/p1-introcpp-Jsanchezv2201): Syntax fundamentals, stream I/O, mathematical series, and patterns.
- [**P4 — Operator Overloading**](https://github.com/clases-julio/p4-sobrecarga-Jsanchezv2201): Custom dynamic \`Coleccion\` container with heap memory management, bounds checks, and operators.
- [**P8 — Concurrent Robot Control**](https://github.com/clases-julio/p8-threads-Jsanchezv2201): Real-time concurrent robot control for sensors and actuators with \`std::thread\`, \`std::mutex\`, and queues.
- [**P9 — Multi-Client Network Chat**](https://github.com/clases-julio/p9-chat-Jsanchezv2201): Distributed real-time client-server chat over TCP sockets with **Boost.Asio** and per-client worker threads.`,
      es: `Asignatura de **Ampliación de Sistemas Telemáticos (AST)** en el Grado de Ingeniería Telemática (URJC), combinando un proyecto troncal en **C++** (el sistema del invernadero) con laboratorios especializados de estructuras, concurrencia y sockets de red:

🌱 **Proyecto Central — Monitorización de Invernadero:**
- [**P2 — Diseño Software (UML)**](https://github.com/clases-julio/p2-introds-Jsanchezv2201): Modelado con diagramas de clases (sensores, cámaras RGB/térmicas, autenticación y dashboard).
- [**P3 — Implementación de Clases**](https://github.com/clases-julio/p3-implclases-Jsanchezv2201): Codificación modular en C++ (.h/.cpp) con Makefile de la arquitectura del invernadero.
- [**P5 — Contenedores STL (std::set)**](https://github.com/clases-julio/p5-setusers-Jsanchezv2201): Gestión de empleados sin duplicados y ordenados por NIF (\`operator<\`), más login interactivo.
- [**P6 — Excepciones, GDB & Doxygen**](https://github.com/clases-julio/p6-excep-gdb-doxygen-Jsanchezv2201): Control de errores personalizado, depuración en GDB, análisis Valgrind y docs con Doxygen.
- [**P7 — Persistencia en Ficheros Binarios**](https://github.com/clases-julio/p7-ficheros-Jsanchezv2201): Almacenamiento persistente en disco (\`users.dat\`) mediante streams binarios (\`ios::binary\`).

⚡ **Módulos Complementarios & Especializados:**
- [**P1 — Introducción a C++**](https://github.com/clases-julio/p1-introcpp-Jsanchezv2201): Sintaxis básica, flujos de E/S, series matemáticas y patrones.
- [**P4 — Sobrecarga de Operadores**](https://github.com/clases-julio/p4-sobrecarga-Jsanchezv2201): Clase \`Coleccion\` dinámica con memoria en heap, límites y operadores sobrecargados (\`[]\`, \`=\`, \`==\`, \`!=\`, \`<<\`, \`>>\`).
- [**P8 — Concurrencia con Hilos (Robot)**](https://github.com/clases-julio/p8-threads-Jsanchezv2201): Control en tiempo real de sensores y motores con \`std::thread\`, \`std::mutex\`, \`std::condition_variable\` y colas protegidas.
- [**P9 — Chat Multiusuario TCP (Boost.Asio)**](https://github.com/clases-julio/p9-chat-Jsanchezv2201): Chat cliente-servidor distribuido sobre sockets TCP con **Boost.Asio** y multihilo independiente por cliente.`,
    },
    logo: "icon:cpp",
    mainLanguage: "C++",
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
- Evaluation of **Transfer Learning** architectures (Xception, NASNet) optimizing the accuracy-computational cost tradeoff.

🔗 **Project links:**
- 🐙 [Source code (GitHub)](https://github.com/Jsanchezv2201/CNNs-Dog_Breed_Identification/tree/main)`,
      es: `Sistema de clasificación de imágenes en 120 clases basado en procesamiento de señal digital 2D.
- Implementación de **Redes Neuronales Convolucionales (CNNs)** como bancos de filtros adaptativos para extracción de características.
- **Preprocesado de señal**: normalización, downsampling y data augmentation para robustez frente a ruido y variaciones.
- Evaluación de arquitecturas de **Transfer Learning** (Xception, NASNet) optimizando el compromiso precisión-coste computacional.

🔗 **Enlaces del proyecto:**
- 🐙 [Código fuente (GitHub)](https://github.com/Jsanchezv2201/CNNs-Dog_Breed_Identification/tree/main)`,
    },
    logo: "/icons/tech/tensorflow.svg",
    mainLanguage: "Python",
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
    mainLanguage: "C++ / Python",
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
    mainLanguage: "Bash",
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
    mainLanguage: "Assembly",
  },
];
