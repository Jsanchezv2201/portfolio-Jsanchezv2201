"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Copy,
  CornerDownLeft,
  Download,
  ExternalLink,
  Maximize2,
  Minimize2,
  Terminal as TerminalIcon,
  X,
} from "lucide-react";
import * as React from "react";

import { useTranslation } from "@/lib/i18n";

interface TerminalLine {
  id: string;
  type: "command" | "output" | "error" | "system";
  content: React.ReactNode;
  promptPath?: string;
}

const VIRTUAL_FS: Record<string, string> = {
  "cv.txt": `======================================================================
JUAN SÁNCHEZ VINUESA — CURRÍCULUM VITAE
Estudiante de Ingeniería Telemática | Universidad Rey Juan Carlos (URJC)
Contacto: sanchezvinuesajuan@gmail.com | github.com/Jsanchezv2201
Ubicación: Madrid, España
======================================================================

[ESTADO ACTUAL]
>> Buscando activamente prácticas curriculares / extracurriculares.
>> Intereses: Programación de sistemas, redes, Rust, C/C++, Linux, IA.

[EDUCACIÓN]
* Grado en Ingeniería Telemática — Universidad Rey Juan Carlos (2021 - 2027)

[COMPETENCIAS TÉCNICAS]
* Rust, C++, C, Go, Python, Bash/Shell Scripting
* TCP/IP, sockets, DNS, HTTP/S, Wireshark, subnetting
* ROS 2 (Humble), Gazebo, Nav2, SLAM
* Linux, Docker, Git, Django, Next.js
* TensorFlow, Keras, CNNs y APIs de LLMs

[PROYECTOS DESTACADOS]
1. Concurrent TCP Group Chat (Rust, sockets raw, multithreading)
2. ChatIA Web (Django, HTMX, integración de LLMs)
3. Dog Breed Classification (TensorFlow/Keras, CNNs)
4. Autonomous Navigation Robot (ROS 2, Gazebo, SLAM, Nav2)
5. Interactive RISC-V Guide (Assembly, arquitectura de computadores)
======================================================================`,
  "skills.md": `# Competencias Técnicas & Herramientas

## Lenguajes
- Rust: concurrencia segura, sockets TCP y macros.
- C++ / C: punteros, gestión de memoria, STL y POSIX threads.
- Python: TensorFlow, NumPy, automatización y Django.
- Go: goroutines, channels y APIs de red.
- Bash: automatización y administración Linux.

## Redes & Sistemas
- TCP/UDP, IPv4/IPv6, ICMP, ARP, DHCP, DNS y TLS.
- Wireshark, tcpdump, nmap, netcat e iptables.
- Linux Ubuntu/Debian, Docker y Docker Compose.
- ROS 2 y Gazebo para robótica móvil.`,
  "contact.info": `Contacto directo con Juan:
------------------------------------------
Email:      sanchezvinuesajuan@gmail.com
GitHub:     https://github.com/Jsanchezv2201
LinkedIn:   https://linkedin.com/in/juan-sanchez-vinuesa
Ubicación:  Madrid, España
Disponibilidad: Inmediata para prácticas profesionales`,
  "network.conf": `# Simulación de configuración de interfaz
[interface: eth0]
status = UP
inet = 192.168.1.42/24
gateway = 192.168.1.1
dns = 193.147.168.10 (URJC DNS), 1.1.1.1
mtu = 1500
carrier = FULL DUPLEX 1000BaseT`,
};

const PROJECTS = [
  ["concurrent-tcp-chat", "Rust", "Chat multihilo en sockets TCP"],
  ["chatia-web", "Python/Django", "Plataforma de conversación con IA"],
  ["dog-breed-classifier", "TensorFlow", "Clasificación con CNNs"],
  ["ros2-navigation-robot", "C++/ROS2", "Navegación autónoma con SLAM"],
  ["riscv-guide", "Assembly", "Guía interactiva RISC-V"],
] as const;

const FILES = Object.keys(VIRTUAL_FS);
const UI_COPY = {
  en: {
    help: [
      ["cat <file>", "Reads profile files"],
      ["ls [projects/]", "Lists files or projects"],
      ["cd <dir>", "Navigates between ~ and projects"],
      ["ping <host>", "Simulates ICMP packets"],
      ["uname -a", "System information"],
      ["whoami", "Shows the active profile"],
      ["netstat -tuln", "Active sockets"],
      ["history", "Command history"],
      ["clear", "Clears the console"],
      ["exit", "Closes the terminal"],
    ],
    welcome: "Type help to see the available commands.",
    missingFile: "cat: missing file. Try: cat cv.txt",
    unknownFile: "cat: {file}: does not exist. Type ls.",
    missingDirectory: "bash: cd: {destination}: directory does not exist",
    unknownCommand: "bash: {command}: command not found. Type help.",
    close: "Close terminal",
    minimize: "Minimize",
    maximize: "Maximize",
    restore: "Restore size",
    fullscreen: "Fullscreen",
    closeEsc: "Close (Esc)",
    copyCv: "Copy formatted CV",
    copied: "Copied",
    copy: "Copy CV",
    openCv: "Open CV",
    downloadCv: "Download CV",
    placeholder: "type a command...",
    shortcuts: "Shortcuts:",
    hint: "Tab autocompletes · Esc exits",
  },
  es: {
    help: [
      ["cat <archivo>", "Lee archivos del perfil"],
      ["ls [projects/]", "Lista archivos o proyectos"],
      ["cd <dir>", "Navega entre ~ y projects"],
      ["ping <host>", "Simula paquetes ICMP"],
      ["uname -a", "Información del sistema"],
      ["whoami", "Muestra el perfil activo"],
      ["netstat -tuln", "Sockets activos"],
      ["history", "Historial de comandos"],
      ["clear", "Limpia la consola"],
      ["exit", "Cierra la terminal"],
    ],
    welcome: "Escribe help para ver los comandos disponibles.",
    missingFile: "cat: falta el archivo. Prueba: cat cv.txt",
    unknownFile: "cat: {file}: no existe. Escribe ls.",
    missingDirectory: "bash: cd: {destination}: no existe el directorio",
    unknownCommand: "bash: {command}: no se encontró la orden. Escribe help.",
    close: "Cerrar terminal",
    minimize: "Minimizar",
    maximize: "Maximizar",
    restore: "Restaurar tamaño",
    fullscreen: "Pantalla completa",
    closeEsc: "Cerrar (Esc)",
    copyCv: "Copiar CV formateado",
    copied: "Copiado",
    copy: "Copiar CV",
    openCv: "Abrir CV",
    downloadCv: "Descargar CV",
    placeholder: "escribe un comando...",
    shortcuts: "Atajos:",
    hint: "Tab autocompleta · Esc sale",
  },
};
const lineId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random()}`;

export function TerminalModal() {
  const copy = useTranslation(UI_COPY);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMaximized, setIsMaximized] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [currentPath, setCurrentPath] = React.useState("~");
  const [history, setHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState(-1);
  const [copied, setCopied] = React.useState(false);
  const [lines, setLines] = React.useState<TerminalLine[]>([
    {
      id: "init",
      type: "system",
      content: (
        <div className="space-y-1 text-zinc-400">
          <p className="font-bold text-emerald-400">
            Juan Sánchez Vinuesa — GNU/Linux Telematics Terminal v6.8.0
          </p>
          <p>{copy.welcome}</p>
        </div>
      ),
    },
  ]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setLines((previous) => {
      if (previous.length !== 1 || previous[0].id !== "init") return previous;

      return [
        {
          ...previous[0],
          content: (
            <div className="space-y-1 text-zinc-400">
              <p className="font-bold text-emerald-400">
                Juan Sánchez Vinuesa — GNU/Linux Telematics Terminal v6.8.0
              </p>
              <p>{copy.welcome}</p>
            </div>
          ),
        },
      ];
    });
  }, [copy.welcome]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isInput =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;

      if (event.key === "Escape" && isOpen) setIsOpen(false);
      if (
        (event.key === "`" ||
          event.key === "~" ||
          (event.altKey && event.key.toLowerCase() === "t")) &&
        !isInput
      ) {
        event.preventDefault();
        setIsOpen((previous) => !previous);
      }
    };
    const openTerminal = () => setIsOpen(true);
    window.addEventListener("open-terminal", openTerminal);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-terminal", openTerminal);
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isOpen, lines]);

  const addOutput = (
    content: React.ReactNode,
    type: TerminalLine["type"] = "output"
  ) => {
    setLines((previous) => [...previous, { id: lineId("out"), type, content }]);
  };

  const executeCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) {
      setLines((previous) => [
        ...previous,
        {
          id: lineId("empty"),
          type: "command",
          content: "",
          promptPath: currentPath,
        },
      ]);
      return;
    }

    const parts = trimmed.split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    setHistory((previous) => [
      trimmed,
      ...previous.filter((item) => item !== trimmed),
    ]);
    setHistoryIndex(-1);
    setLines((previous) => [
      ...previous,
      {
        id: lineId("cmd"),
        type: "command",
        content: trimmed,
        promptPath: currentPath,
      },
    ]);

    switch (command) {
      case "help":
      case "?":
        addOutput(
          <div className="grid gap-x-4 gap-y-1 text-xs text-zinc-400 sm:grid-cols-2">
            {copy.help.map(([name, description]) => (
              <div key={name}>
                <span className="font-bold text-sky-300">{name}</span>
                <span className="ml-2 text-zinc-500">— {description}</span>
              </div>
            ))}
          </div>
        );
        break;
      case "clear":
        setLines([]);
        break;
      case "ls": {
        const target = args.find((argument) => !argument.startsWith("-"));
        if (
          target === "projects" ||
          target === "projects/" ||
          currentPath === "~/projects"
        ) {
          addOutput(
            <div className="grid gap-1 text-xs text-sky-300 sm:grid-cols-2">
              {PROJECTS.map(([name, language, description]) => (
                <div key={name}>
                  <span className="font-bold text-emerald-400">drwxr-xr-x</span>{" "}
                  {name}/
                  <span className="ml-1 text-zinc-500">({language})</span>
                  <p className="pl-24 text-zinc-500">{description}</p>
                </div>
              ))}
            </div>
          );
        } else {
          addOutput(
            <div className="flex flex-wrap gap-4 text-xs text-sky-400">
              <span className="font-bold">projects/</span>
              {FILES.map((file) => (
                <span key={file} className="text-zinc-200">
                  {file}
                </span>
              ))}
            </div>
          );
        }
        break;
      }
      case "cat": {
        const file = args[0];
        if (!file)
          addOutput(
            <p className="text-rose-400">{copy.missingFile}</p>,
            "error"
          );
        else if (VIRTUAL_FS[file])
          addOutput(
            <pre className="max-h-96 overflow-x-auto text-xs leading-relaxed whitespace-pre-wrap text-zinc-300">
              {VIRTUAL_FS[file]}
            </pre>
          );
        else
          addOutput(
            <p className="text-rose-400">
              {copy.unknownFile.replace("{file}", file)}
            </p>,
            "error"
          );
        break;
      }
      case "cd": {
        const destination = args[0] || "~";
        if (
          destination === "~" ||
          destination === "/home/juan" ||
          destination === ".."
        )
          setCurrentPath("~");
        else if (["projects", "projects/", "./projects"].includes(destination))
          setCurrentPath("~/projects");
        else
          addOutput(
            <p className="text-rose-400">
              {copy.missingDirectory.replace("{destination}", destination)}
            </p>,
            "error"
          );
        break;
      }
      case "pwd":
        addOutput(
          <p className="text-zinc-300">
            {currentPath === "~" ? "/home/juan" : "/home/juan/projects"}
          </p>
        );
        break;
      case "ping": {
        const host = args[0] || "urjc.es";
        const ip = host.includes("urjc")
          ? "193.147.168.10"
          : host === "8.8.8.8"
            ? host
            : "142.250.184.206";
        addOutput(
          <div className="space-y-1 text-zinc-300">
            <p className="text-zinc-400">
              PING {host} ({ip}) 56(84) bytes of data.
            </p>
            {[1, 2, 3, 4].map((sequence) => (
              <p key={sequence}>
                64 bytes from {ip}: icmp_seq={sequence} ttl=56 time=
                {12 + sequence / 10} ms
              </p>
            ))}
            <p className="border-t border-zinc-800 pt-1 text-emerald-400">
              4 packets transmitted, 4 received, 0% packet loss
            </p>
          </div>
        );
        break;
      }
      case "uname":
        addOutput(
          <p className="text-emerald-400">
            Linux portfolio 6.8.0-telematic-urjc #1 SMP x86_64 GNU/Linux
          </p>
        );
        break;
      case "whoami":
        addOutput(
          <div className="space-y-1 text-zinc-300">
            <p className="font-bold text-emerald-400">
              juan (UID: 1000, GID: 1000 [telematic])
            </p>
            <p>Grado en Ingeniería Telemática — Universidad Rey Juan Carlos</p>
            <p className="text-amber-300">
              Disponible para prácticas (Rust, C++, Redes, Linux, IA)
            </p>
          </div>
        );
        break;
      case "netstat":
      case "ss":
        addOutput(
          <pre className="overflow-x-auto text-xs whitespace-pre text-zinc-300">{`Proto Local Address       State       PID/Program\ntcp   0.0.0.0:8080         LISTEN      1337/rust_tcp_chat\ntcp   127.0.0.1:8000       LISTEN      2048/django_chatia\nudp   0.0.0.0:11311                    884/ros2_daemon`}</pre>
        );
        break;
      case "history":
        addOutput(
          <div className="space-y-0.5 text-zinc-400">
            {history.slice(0, 10).map((item, index) => (
              <p key={`${item}-${index}`}>
                <span className="mr-2 text-zinc-600">{index + 1}</span>
                {item}
              </p>
            ))}
          </div>
        );
        break;
      case "date":
        addOutput(<p className="text-zinc-300">{new Date().toString()}</p>);
        break;
      case "echo":
        addOutput(<p className="text-zinc-300">{args.join(" ")}</p>);
        break;
      case "exit":
        setIsOpen(false);
        break;
      default:
        addOutput(
          <p className="text-rose-400">
            {copy.unknownCommand.replace("{command}", command)}
          </p>,
          "error"
        );
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      executeCommand(input);
      setInput("");
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = Math.min(historyIndex + 1, history.length - 1);
      if (history[nextIndex]) {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      setInput(nextIndex >= 0 ? history[nextIndex] : "");
    } else if (event.key === "Tab") {
      event.preventDefault();
      const candidates = [
        "cat cv.txt",
        "cat skills.md",
        "cat contact.info",
        "ls projects/",
        "ping urjc.es",
        "uname -a",
        "netstat -tuln",
        "whoami",
        "clear",
        "help",
      ];
      const match = candidates.find((candidate) =>
        candidate.startsWith(input.trim())
      );
      if (match) setInput(match);
    }
  };

  const copyCv = async () => {
    await navigator.clipboard.writeText(VIRTUAL_FS["cv.txt"]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-2 backdrop-blur-xs sm:p-4"
          onClick={(event) =>
            event.target === event.currentTarget && setIsOpen(false)
          }
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`flex flex-col overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-950 text-zinc-100 shadow-2xl ${isMaximized ? "fixed inset-2 h-[calc(100vh-1rem)] w-[calc(100vw-1rem)]" : "h-[560px] max-h-[92vh] w-full max-w-3xl"}`}
            onClick={() => inputRef.current?.focus()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-3.5 py-2.5 select-none">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    aria-label={copy.close}
                    onClick={() => setIsOpen(false)}
                    className="size-3 rounded-full bg-rose-500"
                  />
                  <button
                    type="button"
                    aria-label={copy.minimize}
                    onClick={() => setIsOpen(false)}
                    className="size-3 rounded-full bg-amber-500"
                  />
                  <button
                    type="button"
                    aria-label={copy.maximize}
                    onClick={() => setIsMaximized((previous) => !previous)}
                    className="size-3 rounded-full bg-emerald-500"
                  />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                  <TerminalIcon className="size-3.5 text-emerald-400" />
                  juan@portfolio: {currentPath} (bash)
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => void copyCv()}
                  title={copy.copyCv}
                  className="flex items-center gap-1 rounded bg-zinc-800/80 px-2 py-0.5 font-mono text-[11px] text-zinc-300 hover:bg-zinc-700 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="size-3 text-emerald-400" />
                      {copy.copied}
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" />
                      {copy.copy}
                    </>
                  )}
                </button>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={copy.openCv}
                  aria-label={copy.openCv}
                  className="flex items-center gap-1 rounded bg-zinc-800/80 px-2 py-0.5 font-mono text-[11px] text-zinc-300 hover:bg-zinc-700 hover:text-white"
                >
                  <ExternalLink className="size-3" />
                  {copy.openCv}
                </a>
                <a
                  href="/cv.pdf"
                  download="CV-Juan-Sanchez-Vinuesa.pdf"
                  title={copy.downloadCv}
                  aria-label={copy.downloadCv}
                  className="flex items-center gap-1 rounded bg-zinc-800/80 px-2 py-0.5 font-mono text-[11px] text-zinc-300 hover:bg-zinc-700 hover:text-white"
                >
                  <Download className="size-3" />
                  {copy.downloadCv}
                </a>
                <button
                  type="button"
                  onClick={() => setIsMaximized((previous) => !previous)}
                  title={isMaximized ? copy.restore : copy.fullscreen}
                  className="hidden p-1 text-zinc-400 hover:text-zinc-200 sm:block"
                >
                  {isMaximized ? (
                    <Minimize2 className="size-3.5" />
                  ) : (
                    <Maximize2 className="size-3.5" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title={copy.closeEsc}
                  className="p-1 text-zinc-400 hover:text-zinc-200"
                >
                  <X className="size-3.5" />
                </button>
              </div>
            </div>
            <div className="flex-1 space-y-2.5 overflow-y-auto p-4 font-mono text-xs selection:bg-emerald-500/30 selection:text-emerald-200">
              {lines.map((line) => (
                <div key={line.id} className="space-y-1">
                  {line.type === "command" ? (
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span className="font-semibold text-emerald-400">
                        juan@portfolio
                      </span>
                      <span className="text-zinc-500">:</span>
                      <span className="font-medium text-sky-400">
                        {line.promptPath || "~"}
                      </span>
                      <span className="font-bold text-zinc-200">$</span>
                      <span className="text-zinc-100">{line.content}</span>
                    </div>
                  ) : (
                    <div>{line.content}</div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2 pt-1 text-zinc-300">
                <span className="font-semibold text-emerald-400">
                  juan@portfolio
                </span>
                <span className="text-zinc-500">:</span>
                <span className="font-medium text-sky-400">{currentPath}</span>
                <span className="font-bold text-zinc-200">$</span>
                <input
                  ref={inputRef}
                  id="terminal-active-input"
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  autoComplete="off"
                  spellCheck={false}
                  className="min-w-0 flex-1 bg-transparent font-mono text-xs text-zinc-100 outline-none placeholder:text-zinc-600"
                  placeholder={copy.placeholder}
                />
                <CornerDownLeft className="size-3 text-zinc-600" />
              </div>
              <div ref={bottomRef} />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800/80 bg-zinc-900/50 px-3 py-1.5 font-mono text-[11px] text-zinc-400">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-zinc-500">{copy.shortcuts}</span>
                {["cat cv.txt", "ls projects/", "ping urjc.es", "uname -a"].map(
                  (command) => (
                    <button
                      key={command}
                      type="button"
                      onClick={() => executeCommand(command)}
                      className="underline decoration-zinc-700 hover:text-emerald-400"
                    >
                      {command}
                    </button>
                  )
                )}
              </div>
              <span className="text-[10px] text-zinc-500">{copy.hint}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
