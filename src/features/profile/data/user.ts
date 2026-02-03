import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Juan",
  lastName: "Sánchez",
  displayName: "Juan Sánchez Vinuesa",
  username: "Jsanchezv2201",
  gender: "male",
  pronouns: "he/him",

  // Tu frase corta de presentación
  bio: "Telematic Engineering Student & Full-Stack Developer. Passionate about Networks, Security, and AI.",

  // Frases que rotan (efecto máquina de escribir)
  flipSentences: [
    "Telematic Engineering Student",
    "Network & Security Enthusiast",
    "Rust & Python Developer",
    "AI & Robotics Hobbyist",
  ],

  address: "Madrid, Spain",

  // ⚠️ IMPORTANTE: Ejecuta en tu terminal: echo -n "+34TU_NUMERO" | base64
  phoneNumber: "KzM0NjUxNTM1NTg5",

  // ⚠️ IMPORTANTE: Pega aquí el código que te salga al hacer: echo -n "sanchezvinuesajuan@gmail.com" | base64
  email: "c2FuY2hlenZpbnVlc2FqdWFuQGdtYWlsLmNvbQ==",

  website: "https://github.com/Jsanchezv2201", // He puesto tu GitHub por ahora
  jobTitle: "Telematic Engineer",

  // He adaptado esto a tu perfil de estudiante/investigador
  jobs: [
    {
      title: "Telematic Engineering Student",
      company: "Universidad Rey Juan Carlos",
      website: "https://www.urjc.es",
    },
    {
      title: "Open Source Contributor",
      company: "GitHub",
      website: "https://github.com/Jsanchezv2201",
    },
  ],

  // He redactado esto basándome en tus badges de GitHub
  about: `
Hello, World! I am Juan Sánchez — a **Telematic Engineering Student** at Universidad Rey Juan Carlos (Madrid) with a deep passion for low-level programming, network security, and intelligent systems.

My journey involves mastering the full spectrum of computing, from **Network Protocols** (TCP/IP, OSPF, BGP) to **Modern Software Development**. I thrive in environments where hardware meets software.

### 🛠 Technical Arsenal
I have experience working with a diverse set of languages and tools:
* **Systems & Core:** Rust, C, C++, Go, Python, Pascal, Assembly (RISC-V).
* **Scripting & Web:** Python, Bash, HTML5, Markdown.
* **AI & Data:** Computer Vision, Deep Learning (CNNs), SVM, Jupyter.
* **Robotics:** ROS 2, TurtleBot, Gazebo.
* **Networking:** Wireshark, Quagga, Cisco (VLAN, STP), and Linux Administration.

Currently, I am expanding my knowledge in **Cybersecurity** and **Distributed Systems**, always looking for the next challenge to solve with code.

Let's connect and build something secure and scalable!
  `,

  // ⚠️ Asegúrate de poner una foto tuya llamada 'avatar.jpg' en la carpeta 'public'
  avatar: "/avatar.jpg",

  // Usamos la misma imagen para cuando compartas tu web en redes sociales
  ogImage: "/avatar.jpg",

  namePronunciationUrl: "", // Puedes dejarlo vacío

  // Palabras clave para que te encuentren en Google
  keywords: [
    "Juan Sánchez Vinuesa",
    "Jsanchezv2201",
    "Telematic Engineer",
    "Network Security",
    "Rust Developer",
    "Python Developer",
    "URJC",
    "Full Stack",
    "Robotics",
  ],

  dateCreated: "2024-02-02",
};
