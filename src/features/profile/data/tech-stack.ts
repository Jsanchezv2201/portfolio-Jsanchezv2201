import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // --- TUS LENGUAJES PRINCIPALES (Sistemas & Ingeniería) ---
  {
    key: "rust", // Coincide con Icons.rust
    title: "Rust",
    href: "https://www.rust-lang.org/",
    categories: ["Language", "Systems"],
    theme: true,
  },
  {
    key: "go", // Coincide con Icons.go
    title: "Go (Golang)",
    href: "https://go.dev/",
    categories: ["Language", "Systems"],
  },
  {
    key: "c", // Coincide con Icons.c
    title: "C",
    href: "https://en.cppreference.com/w/c",
    categories: ["Language", "Systems"],
  },
  {
    key: "cpp", // Coincide con Icons.cpp
    title: "C++",
    href: "https://isocpp.org/",
    categories: ["Language", "Systems"],
  },
  {
    key: "python", // Coincide con Icons.python
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language", "AI"],
  },
  {
    key: "bash", // Coincide con Icons.bash
    title: "Bash Scripting",
    href: "https://www.gnu.org/software/bash/",
    categories: ["Language", "Scripting"],
  },
  {
    key: "matlab", // Coincide con Icons.matlab
    title: "MATLAB",
    href: "https://www.mathworks.com/products/matlab.html",
    categories: ["Language", "Math"],
  },
  {
    key: "arduino", // Coincide con Icons.arduino
    title: "Arduino",
    href: "https://www.arduino.cc/",
    categories: ["Hardware", "Embedded"],
  },

  // --- ROBÓTICA E IA ---
  {
    key: "ros2", // Coincide con Icons.ros2
    title: "ROS 2",
    href: "https://docs.ros.org/",
    categories: ["Framework", "Robotics"],
    theme: true,
  },
  {
    key: "gazebo", // Coincide con Icons.gazebo
    title: "Gazebo",
    href: "https://gazebosim.org/",
    categories: ["Tools", "Simulation"],
  },
  {
    key: "opencv", // Coincide con Icons.opencv
    title: "OpenCV",
    href: "https://opencv.org/",
    categories: ["Library", "AI", "Computer Vision"],
  },
  {
    key: "jupyter", // Coincide con Icons.jupyter
    title: "Jupyter",
    href: "https://jupyter.org/",
    categories: ["Tools", "Data Science"],
  },
  {
    key: "tensorflow", // Coincide con Icons.tensorflow
    title: "TensorFlow",
    href: "https://www.tensorflow.org/",
    categories: ["Library", "AI", "Deep Learning"],
  },
  {
    key: "scikit-learn", // Coincide con Icons["scikit-learn"]
    title: "Scikit-Learn",
    href: "https://scikit-learn.org/",
    categories: ["Library", "AI", "Machine Learning"],
  },

  // --- REDES Y SISTEMAS ---
  {
    key: "wireshark", // Coincide con Icons.wireshark
    title: "Wireshark",
    href: "https://www.wireshark.org/",
    categories: ["Tools", "Networking"],
  },
  {
    key: "linux", // Coincide con Icons.linux
    title: "Linux",
    href: "https://www.kernel.org/",
    categories: ["OS", "Systems"],
    theme: true,
  },
  {
    key: "quagga", // Coincide con Icons.quagga
    title: "Quagga",
    href: "https://www.nongnu.org/quagga/",
    categories: ["Tools", "Networking", "Routing"],
  },
  {
    key: "riscv", // Coincide con Icons.riscv
    title: "RISC-V",
    href: "https://riscv.org/",
    categories: ["Architecture", "Hardware"],
  },

  // --- STACK WEB (Originales) ---
  {
    key: "ts", // Cambiado de "typescript" a "ts" para coincidir mejor (aunque ambos suelen funcionar)
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language", "Web"],
  },
  {
    key: "js", // Coincide con Icons.js
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language", "Web"],
  },
  {
    key: "react", // Coincide con Icons.react
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs2", // Coincide con Icons.nextjs2
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
  },
  {
    key: "tailwindcss", // Coincide con Icons.tailwindcss
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui", // Coincide con Icons["shadcn-ui"]
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
  },
  {
    key: "nodejs", // Coincide con Icons.nodejs
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    key: "git", // Coincide con Icons.git
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "docker", // Coincide con Icons.docker
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
  },
  {
    key: "mongodb", // Coincide con Icons.mongodb
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },
  {
    key: "redis", // Coincide con Icons.redis
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
  },
  {
    key: "mysql", // Coincide con Icons.mysql
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },
  {
    key: "php", // Coincide con Icons.php
    title: "PHP",
    href: "https://www.php.net/",
    categories: ["Language"],
  },
  {
    key: "java", // Coincide con Icons.java
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
  },
  {
    key: "figma", // Coincide con Icons.figma
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },
  {
    key: "chatgpt", // Coincide con Icons.chatgpt
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    categories: ["Tools", "AI"],
  },
];
