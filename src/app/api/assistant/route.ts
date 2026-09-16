import { NextResponse } from "next/server";

interface AssistantRequest {
  message?: string;
  language?: "es" | "en";
  history?: Array<{
    role: "user" | "model";
    text: string;
  }>;
}

const apiKey = process.env.GEMINI_API_KEY;
const PROFILE_CONTEXT = `
PERFIL DE JUAN SÁNCHEZ VINUESA

Juan Sánchez Vinuesa tiene 23 años, vive en Madrid y es estudiante de último año del Grado en Ingeniería Telemática en la Universidad Rey Juan Carlos (URJC), que comenzó en septiembre de 2021 y prevé terminar en 2027. Está buscando prácticas curriculares o extracurriculares.

Tiene especial interés en incorporarse a Ericsson, especialmente en entornos de I+D relacionados con telecomunicaciones, redes, sistemas distribuidos y packet core. Todavía está explorando qué puesto concreto encajaría mejor con su perfil, pero su objetivo es aportar valor y seguir desarrollándose dentro de la empresa. Su padre trabaja en Ericsson como R&D System Manager for Packet Core y cuenta con 36 años de trayectoria en la compañía; este vínculo familiar es una de sus motivaciones personales para conocer la empresa.

PERFIL PROFESIONAL
Tiene formación sólida en sistemas de bajo nivel, redes de alta capacidad, sistemas distribuidos y desarrollo de software robusto. Le interesan la infraestructura de telecomunicaciones, las redes escalables, la programación de sistemas, la inteligencia artificial y la robótica.

EDUCACIÓN Y FORMACIÓN DESTACADA
- Sistemas Distribuidos (8.9/10), Servicios Telemáticos (8.7/10) y Arquitectura de Sistemas de Telecomunicación (7.6/10).
- Sistemas Digitales (8.8/10), Programación de Sistemas de Telecomunicación (7.5/10) y Fundamentos de la Programación (7.15/10).
- Diseño de topologías TCP/IP, BGP y OSPF, criptografía, protocolos seguros y análisis de vulnerabilidades.

PROYECTOS
- Portfolio web full-stack con Next.js, TypeScript, Tailwind CSS, React y shadcn/ui.
- ChatIA: aplicación de chat con LLM desarrollada con Python, Django, HTMX y Nvidia Build API.
- Sistema de chat distribuido TCP en Rust, con arquitectura cliente-servidor, sockets TCP y concurrencia.
- Clasificación multiclase de 120 razas mediante TensorFlow, Keras, Python y redes neuronales convolucionales, incluyendo preprocesamiento, diezmado y data augmentation.
- Navegación autónoma de robots con C++, ROS 2, Gazebo, Nav2 y SLAM.

COMPETENCIAS TÉCNICAS
- Lenguajes: C, C++, Rust, Go, Python, TypeScript, JavaScript, Bash, Pascal y ensamblador RISC-V.
- Redes: TCP/IP, UDP, BGP, OSPF, HTTP/HTTPS, VLAN, OpenVPN, Wireshark, NetGui y sockets.
- Sistemas y entornos: Ubuntu/Linux, APIs REST, VirtualBox, concurrencia, asignación de memoria, Git y Docker.
- IA y datos: TensorFlow, Keras, Scikit-Learn, NumPy, MATLAB, OpenCV, Jupyter y procesamiento de señales.
- Desarrollo: Django, Node.js, Next.js, React, Tailwind CSS, shadcn/ui, GitHub/GitLab y Vercel.

CERTIFICACIONES E IDIOMAS
- Generative AI for Students (URJC, mayo de 2026).
- MATLAB Onramp (MathWorks, abril de 2026).
- TOEIC: 920/990 (Capman Testing Solutions, febrero de 2023).
- Español nativo e inglés nivel B2.

CONTACTO PROFESIONAL
- Email: sanchezvinuesajuan@gmail.com
- GitHub: https://github.com/Jsanchezv2201
- LinkedIn: https://www.linkedin.com/in/jsanchezv2201
- Portfolio: https://portfolio-jsanchezv2201.vercel.app
`;

function getReply(message: string, language: "es" | "en") {
  const normalizedMessage = message.toLocaleLowerCase("es");

  if (language === "en") {
    if (
      normalizedMessage.includes("ericsson") ||
      normalizedMessage.includes("packet core") ||
      normalizedMessage.includes("i+d") ||
      normalizedMessage.includes("i&d")
    ) {
      return "Juan is especially interested in joining Ericsson, particularly teams working with telecommunications, networks, distributed systems, or packet core. He is still exploring which role best fits his profile, but he can contribute knowledge of TCP/IP, BGP, OSPF, distributed systems, Rust, C++, Python, and robust software development.";
    }
    if (
      normalizedMessage.includes("project") ||
      normalizedMessage.includes("summar")
    ) {
      return "His projects focus on systems programming with Rust and C++, TCP/IP networking, computer vision, and robotics. They show experience with concurrency, distributed architectures, machine learning, and practical software development.";
    }
    if (
      normalizedMessage.includes("availab") ||
      normalizedMessage.includes("intern")
    ) {
      return "Juan is looking for curricular or extracurricular internship opportunities where he can contribute to networks, systems, AI, or telecommunications while continuing to grow as an engineer. Contact him at sanchezvinuesajuan@gmail.com.";
    }
    if (
      normalizedMessage.includes("network") ||
      normalizedMessage.includes("distribut")
    ) {
      return "He has worked with TCP/IP, UDP, BGP, OSPF, HTTP/HTTPS, VLANs, OpenVPN, Wireshark, sockets, concurrency, and distributed systems. His strongest interests are telecommunications infrastructure and robust low-level software.";
    }
    return "Juan is a final-year Telematics Engineering student at Universidad Rey Juan Carlos in Madrid. He is looking for internships related to telecommunications, networks, systems, AI, and software engineering.";
  }

  if (
    normalizedMessage.includes("docker") ||
    normalizedMessage.includes("ros")
  ) {
    return "Sí. Docker forma parte de su experiencia técnica y también ha trabajado con proyectos de robótica y visión por computador usando ROS 2. Su enfoque combina sistemas, redes e inteligencia artificial.";
  }

  if (
    normalizedMessage.includes("ericsson") ||
    normalizedMessage.includes("packet core") ||
    normalizedMessage.includes("i+d") ||
    normalizedMessage.includes("i&d")
  ) {
    return "Juan tiene especial interés en incorporarse a Ericsson, sobre todo en equipos relacionados con telecomunicaciones, redes, sistemas distribuidos o packet core. Aunque todavía está explorando el puesto concreto que mejor encaja con su perfil, puede aportar formación en TCP/IP, BGP, OSPF, sistemas distribuidos, Rust, C++, Python y desarrollo de software robusto.";
  }

  if (
    normalizedMessage.includes("proyecto") ||
    normalizedMessage.includes("resume") ||
    normalizedMessage.includes("resumen")
  ) {
    return "Sus proyectos se concentran en programación de sistemas con Rust y C++, redes TCP/IP, visión por computador y robótica con ROS 2. También mantiene una línea de trabajo orientada a rendimiento, seguridad de memoria y aprendizaje práctico.";
  }

  if (
    normalizedMessage.includes("disponib") ||
    normalizedMessage.includes("práct") ||
    normalizedMessage.includes("pract")
  ) {
    return "Juan está buscando oportunidades de prácticas en las que pueda contribuir en networking, sistemas, Rust/C++, IA o visión por computador mientras continúa creciendo como ingeniero. Puedes contactarle en sanchezvinuesajuan@gmail.com.";
  }

  if (
    normalizedMessage.includes("estudia") ||
    normalizedMessage.includes("urjc") ||
    normalizedMessage.includes("formación") ||
    normalizedMessage.includes("formacion")
  ) {
    return "Estudia Ingeniería Telemática en la Universidad Rey Juan Carlos y está terminando el grado este año. Sus áreas de interés son redes, programación de bajo nivel, IA y robótica.";
  }

  return `${PROFILE_CONTEXT} Puedes preguntarme por sus proyectos, formación, tecnologías o disponibilidad para prácticas.`;
}

async function getGeminiReply(
  message: string,
  language: "es" | "en",
  history: AssistantRequest["history"] = []
) {
  if (!apiKey) return null;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          parts: [
            {
              text: `Respond in ${language === "en" ? "English" : "Spanish"} clearly and briefly. Only use known information about Juan and do not invent facts. ${PROFILE_CONTEXT}`,
            },
          ],
        },
        contents: [
          ...history.map(({ role, text }) => ({
            role,
            parts: [{ text }],
          })),
          { role: "user", parts: [{ text: message }] },
        ],
      }),
    }
  );

  if (!response.ok) return null;

  const data = (await response.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };

  return (
    data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text)
      .filter(Boolean)
      .join("") || null
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AssistantRequest;
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const language = body.language === "en" ? "en" : "es";
    const reply = await getGeminiReply(message, language, body.history);
    return NextResponse.json({ reply: reply || getReply(message, language) });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
