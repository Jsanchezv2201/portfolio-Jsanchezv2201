# Portfolio - Juan Sánchez

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

> **Ingeniero Telemático | Systems Programming (Rust/C++) | AI & Computer Vision**

Este repositorio contiene el código fuente de mi portfolio personal, diseñado para ser minimalista, rápido y accesible. Aquí muestro mi trayectoria en ingeniería de redes, desarrollo de bajo nivel y robótica.

🌐 [jsanchezv2201.com](https://portfolio-jsanchezv2201.vercel.app/) 

---

## 📸 Vista Previa

<div align="center">
  <img src="vista-previa.png" alt="Vista previa del portfolio" width="800" />
  </div>

---

## 🛠️ Stack Tecnológico

A continuación se explica cada tecnología utilizada en este proyecto, qué tipo de herramienta es y para qué sirve:

### 🟢 Entorno de ejecución (Runtime)

| Herramienta | Qué es | Para qué se usa aquí |
|---|---|---|
| **[Node.js](https://nodejs.org/)** | *Runtime* (entorno de ejecución) de JavaScript en el servidor. Permite ejecutar código JavaScript fuera del navegador, en tu propio ordenador o en un servidor. | Se necesita para ejecutar todas las herramientas de desarrollo: instalar paquetes, compilar el código, arrancar el servidor local, etc. |

### 📦 Gestor de paquetes (Package Manager)

| Herramienta | Qué es | Para qué se usa aquí |
|---|---|---|
| **[pnpm](https://pnpm.io/)** | *Package manager* (gestor de paquetes). Una alternativa más rápida y eficiente a `npm`. Un "gestor de paquetes" permite instalar, actualizar y gestionar las librerías externas (llamadas *dependencias*) que usa el proyecto. | Se usa para instalar todas las dependencias del proyecto con el comando `pnpm install`. |

### ⚛️ Framework y librería principal

| Herramienta | Qué es | Para qué se usa aquí |
|---|---|---|
| **[React](https://react.dev/)** | *Librería* (biblioteca) de JavaScript creada por Meta (Facebook) para construir interfaces de usuario. La idea central es dividir la UI en pequeños bloques reutilizables llamados **componentes**. | Es la base sobre la que está construida toda la interfaz visual de la web: cada sección, tarjeta o botón es un componente React. |
| **[Next.js 15](https://nextjs.org/)** | *Framework* (marco de trabajo) construido encima de React. Un framework es como un "conjunto de reglas y herramientas" que facilita construir una aplicación completa. Next.js añade a React funcionalidades como enrutado automático de páginas, renderizado en servidor (SSR), generación estática (SSG) y optimización de imágenes. | Es el "esqueleto" del proyecto. Gestiona las páginas, las rutas (`/`, `/blog`, etc.), el SEO y el rendimiento de la web. |

### 🎨 Estilos y diseño (CSS)

| Herramienta | Qué es | Para qué se usa aquí |
|---|---|---|
| **[Tailwind CSS v4](https://tailwindcss.com/)** | *Framework de CSS utilitario*. En lugar de escribir CSS tradicional en archivos separados, Tailwind proporciona cientos de clases pequeñas (utilidades) que se aplican directamente en el HTML/JSX. Por ejemplo, `text-center` centra el texto, `bg-blue-500` pone el fondo azul. | Se usa para dar estilo a todos los elementos visuales de la web (colores, espaciados, tipografía, diseño responsivo) de forma rápida y consistente. |
| **[Shadcn/ui](https://ui.shadcn.com/)** | *Colección de componentes de UI* accesibles y personalizables, construidos con Radix UI y Tailwind CSS. No es una librería que se "instala" como un paquete, sino que se copian los componentes directamente al proyecto para poder modificarlos libremente. | Aporta los componentes visuales reutilizables como botones, modales, menús desplegables, tooltips, etc., siguiendo estándares de accesibilidad web. |

### 🔷 Lenguaje de programación

| Herramienta | Qué es | Para qué se usa aquí |
|---|---|---|
| **[TypeScript](https://www.typescriptlang.org/)** | *Superset* (extensión) de JavaScript desarrollado por Microsoft. Añade **tipado estático** opcional al lenguaje, lo que significa que se puede declarar qué tipo de dato espera cada variable o función (número, texto, objeto con tal forma...). El navegador no entiende TypeScript directamente; se **transpila** (convierte) a JavaScript normal antes de ejecutarse. | Ayuda a detectar errores en el código *antes* de ejecutarlo, mejora el autocompletado del editor y hace el código más fácil de entender y mantener a medida que el proyecto crece. |

### ✍️ Contenido y Blog

| Herramienta | Qué es | Para qué se usa aquí |
|---|---|---|
| **[MDX](https://mdxjs.com/)** | Formato de archivo que combina **Markdown** (un lenguaje de marcado ligero para escribir texto formateado) con **JSX** (la sintaxis de componentes de React). Permite escribir posts del blog en Markdown, pero incrustando componentes interactivos de React dentro del texto. | Se usa para escribir los artículos del blog de forma sencilla, sin necesidad de escribir HTML completo. |

### 🚀 Despliegue (Deployment)

| Herramienta | Qué es | Para qué se usa aquí |
|---|---|---|
| **[Vercel](https://vercel.com/)** | *Plataforma cloud de despliegue* (hosting). Es la empresa que creó Next.js y ofrece una infraestructura optimizada para alojar proyectos Next.js en internet. Un "despliegue" es el proceso de publicar el código en un servidor para que sea accesible públicamente en una URL. | Cada vez que se hace un `git push` al repositorio de GitHub, Vercel detecta el cambio automáticamente, compila el proyecto y lo publica en cuestión de segundos. |

### 🔧 Herramientas de desarrollo (DevTools / Workflow)

Estas herramientas **no forman parte del producto final** (no llegan al navegador del usuario), sino que ayudan durante el proceso de desarrollo:

| Herramienta | Qué es | Para qué se usa aquí |
|---|---|---|
| **[ESLint](https://eslint.org/)** | *Linter* (herramienta de análisis estático de código). Analiza el código en busca de errores, malas prácticas o patrones problemáticos y avisa de ellos antes de ejecutar el programa. | Garantiza la calidad y consistencia del código JavaScript/TypeScript del proyecto. |
| **[Prettier](https://prettier.io/)** | *Formateador de código automático*. Se encarga de dar formato consistente al código (indentación, punto y coma, comillas, longitud de línea...) de forma automática al guardar un archivo. | Evita discusiones sobre estilo de código y mantiene un formato uniforme en todos los archivos. |
| **[Husky](https://typicode.github.io/husky/)** | Herramienta que permite ejecutar scripts en los *Git hooks* (puntos de enganche de Git). Un "Git hook" es un script que se ejecuta automáticamente antes o después de ciertas acciones de Git (como hacer un commit). | Ejecuta el linter y el formateador automáticamente justo antes de cada `git commit`, para impedir subir código con errores al repositorio. |
| **[Git](https://git-scm.com/)** | *Sistema de control de versiones distribuido*. Permite registrar el historial de cambios de un proyecto, colaborar con otras personas y volver a versiones anteriores del código. | Se usa para gestionar todo el historial del código fuente del proyecto. |
| **[GitHub](https://github.com/)** | *Plataforma de alojamiento de repositorios Git*. Es donde se almacena remotamente el código del proyecto. También ofrece funcionalidades de colaboración como issues (incidencias), pull requests y revisión de código. | Aloja el repositorio de este portfolio y actúa de puente con Vercel para el despliegue continuo. |

---

## ⚡ Características del Portafolio

Esta web ha sido construida prestando atención al detalle técnico y al rendimiento:

* **Arquitectura Moderna:** Basado en Next.js 15 (App Router) y React Server Components.
* **Diseño Responsivo:** UI construida con Tailwind CSS v4 y componentes accesibles de Shadcn/ui.
* **SEO Optimizado:** Integración completa de Metadata, Sitemap y JSON-LD Schema.
* **Modo Oscuro/Claro:** Detección automática de preferencias del sistema.
* **Blog Integrado:** Soporte para MDX con resaltado de sintaxis para compartir conocimiento técnico.

---

## 💻 Instalación y Desarrollo Local

Si quieres explorar el código de este portfolio:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Jsanchezv2201/portfolio.git](https://github.com/Jsanchezv2201/portfolio.git)
    cd portfolio
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    # o si usas npm:
    # npm install
    ```

3.  **Ejecutar servidor de desarrollo:**
    ```bash
    pnpm dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).

---
