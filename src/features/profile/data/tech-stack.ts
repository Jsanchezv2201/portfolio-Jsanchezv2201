import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // ========================================================================
  // 1. LENGUAJES DE PROGRAMACIÓN (Sistemas, Web y Scripting)
  // ========================================================================
  {
    key: "rust",
    title: "Rust",
    href: "https://www.rust-lang.org/",
    categories: ["Language", "Systems"],
    theme: true, // Destacado
  },
  {
    key: "cpp",
    title: "C++",
    href: "https://isocpp.org/",
    categories: ["Language", "Systems"],
  },
  {
    key: "c",
    title: "C",
    href: "https://en.cppreference.com/w/c",
    categories: ["Language", "Systems"],
  },
  {
    key: "go",
    title: "Go (Golang)",
    href: "https://go.dev/",
    categories: ["Language", "Systems"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language", "AI"],
  },
  {
    key: "ts",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language", "Web"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language", "Web"],
  },
  {
    key: "bash",
    title: "Bash Scripting",
    href: "https://www.gnu.org/software/bash/",
    categories: ["Language", "Scripting"],
  },
  {
    key: "matlab",
    title: "MATLAB",
    href: "https://www.mathworks.com/products/matlab.html",
    categories: ["Language", "Math"],
  },

    // ========================================================================
  // 3. DESARROLLO WEB FULLSTACK (Frontend & Backend)
  // ========================================================================
  {
    key: "django",
    title: "Django",
    href: "https://www.djangoproject.com/",
    categories: ["Framework", "Python", "Web"],
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Deployment", "Platform"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },

  // ========================================================================
  // 2. ROBÓTICA, INTELIGENCIA ARTIFICIAL Y SIMULACIÓN
  // ========================================================================
  {
    key: "ros2",
    title: "ROS 2",
    href: "https://docs.ros.org/",
    categories: ["Framework", "Robotics"],
    theme: true, // Destacado
  },
  {
    key: "opencv",
    title: "OpenCV",
    href: "https://opencv.org/",
    categories: ["Library", "AI", "Computer Vision"],
  },
  {
    key: "tensorflow",
    title: "TensorFlow",
    href: "https://www.tensorflow.org/",
    categories: ["Library", "AI", "Deep Learning"],
  },
  {
    key: "scikitlearn",
    title: "Scikit-Learn",
    href: "https://scikit-learn.org/",
    categories: ["Library", "AI", "Machine Learning"],
  },
  {
    key: "nvidia",
    title: "NVIDIA (CUDA)",
    href: "https://developer.nvidia.com/cuda-zone",
    categories: ["Hardware", "AI"],
  },
  {
    key: "gazebo",
    title: "Gazebo",
    href: "https://gazebosim.org/",
    categories: ["Tools", "Simulation"],
  },
  {
    key: "robotframework",
    title: "Robot Framework",
    href: "https://robotframework.org/",
    categories: ["Testing", "Robotics"],
  },
  {
    key: "jupyter",
    title: "Jupyter",
    href: "https://jupyter.org/",
    categories: ["Tools", "Data Science"],
  },

  // ========================================================================
  // 4. INFRAESTRUCTURA, SISTEMAS OPERATIVOS Y REDES
  // ========================================================================
  {
    key: "ubuntu",
    title: "Ubuntu",
    href: "https://ubuntu.com/",
    categories: ["OS", "Linux"],
  },
  {
    key: "android",
    title: "Android",
    href: "https://developer.android.com/",
    categories: ["OS", "Mobile"],
  },
  {
    key: "gnome",
    title: "GNOME",
    href: "https://www.gnome.org/",
    categories: ["Desktop Environment", "Linux"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
  },
  {
    key: "wireshark",
    title: "Wireshark",
    href: "https://www.wireshark.org/",
    categories: ["Tools", "Networking"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },

  // ========================================================================
  // 5. HARDWARE Y ARQUITECTURA
  // ========================================================================
  {
    key: "riscv",
    title: "RISC-V",
    href: "https://riscv.org/",
    categories: ["Architecture", "Hardware"],
  },
  {
    key: "arduino",
    title: "Arduino",
    href: "https://www.arduino.cc/",
    categories: ["Hardware", "Embedded"],
  },

  // ========================================================================
  // 6. HERRAMIENTAS DE DESARROLLO Y DISEÑO
  // ========================================================================
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Platform", "Version Control"],
  },
  {
    key: "vscode",
    title: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
    categories: ["Tools", "IDE"],
  },
  {
    key: "pycharm",
    title: "PyCharm",
    href: "https://www.jetbrains.com/pycharm/",
    categories: ["Tools", "IDE", "Python"],
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },
  {
    key: "openai",
    title: "OpenAI API",
    href: "https://openai.com/",
    categories: ["AI", "API"],
  },
  {
    key: "claude",
    title: "Claude",
    href: "https://www.anthropic.com/",
    categories: ["AI", "Tools"],
  }
];

