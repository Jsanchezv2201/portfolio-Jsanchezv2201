"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Download,
  ExternalLink,
  RefreshCw,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import * as React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/lib/i18n";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

const UI_COPY = {
  en: {
    prompts: [
      "Summarize his main projects",
      "What is his availability for internships?",
      "What experience does he have with networks and distributed systems?",
      "What could he contribute to an R&D telecom team?",
    ],
    welcome:
      "Hi! I am Juan Sánchez's virtual assistant. I can answer questions about his Rust/C++ projects, Telematics degree, technologies, and internship availability. What would you like to know?",
    reset:
      "Conversation reset. Ask me anything about Juan's technical profile or projects.",
    title: "Ask Juan",
    subtitle: "Profile and projects assistant",
    now: "Now",
    resetTitle: "Reset conversation",
    closeTitle: "Close window",
    close: "Close",
    loading: "Checking Juan's profile...",
    suggestions: "Suggested questions:",
    placeholder: "Ask a question about Juan...",
    send: "Send message",
    openCv: "Open CV",
    downloadCv: "Download CV",
    assistantLabel: "Ask Juan (AI assistant)",
  },
  es: {
    prompts: [
      "Resume sus proyectos principales",
      "¿Qué disponibilidad tiene para prácticas?",
      "¿Qué experiencia tiene en redes y sistemas distribuidos?",
      "¿Qué puede aportar a un equipo de I+D en telecomunicaciones?",
    ],
    welcome:
      "¡Hola! Soy el asistente virtual de Juan Sánchez. Puedo resolver dudas sobre sus proyectos en Rust/C++, formación en Telemática, tecnologías y disponibilidad para prácticas. ¿Qué te gustaría saber?",
    reset:
      "Historial reiniciado. Pregúntame lo que necesites sobre el perfil técnico o proyectos de Juan.",
    title: "Pregúntale a Juan",
    subtitle: "Asistente de perfil y proyectos",
    now: "Ahora",
    resetTitle: "Reiniciar conversación",
    closeTitle: "Cerrar ventana",
    close: "Cerrar",
    loading: "Consultando el perfil de Juan...",
    suggestions: "Preguntas sugeridas:",
    placeholder: "Haz una pregunta sobre Juan...",
    send: "Enviar mensaje",
    openCv: "Abrir CV",
    downloadCv: "Descargar CV",
    assistantLabel: "Pregúntale a Juan (asistente de IA)",
  },
};

const getTimestamp = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

type ResizeDirection =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

interface PanelRect {
  width: number;
  height: number;
  right: number;
  bottom: number;
}

const MIN_PANEL_WIDTH = 320;
const MIN_PANEL_HEIGHT = 520;
const MAX_PANEL_WIDTH = 720;

export function AskJuanAssistant() {
  const copy = useTranslation(UI_COPY);
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      text: copy.welcome,
      timestamp: copy.now,
    },
  ]);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const [panelRect, setPanelRect] = React.useState<PanelRect | null>(null);

  React.useEffect(() => {
    setMessages((previous) => {
      if (previous.length !== 1 || previous[0].role !== "assistant") {
        return previous;
      }

      return [{ ...previous[0], text: copy.welcome, timestamp: copy.now }];
    });
  }, [copy.now, copy.welcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener("open-ask-juan", handleOpenEvent);
    return () => window.removeEventListener("open-ask-juan", handleOpenEvent);
  }, []);

  React.useEffect(() => {
    if (!isOpen) return;
    scrollToBottom();
    const timeoutId = window.setTimeout(() => inputRef.current?.focus(), 150);
    return () => window.clearTimeout(timeoutId);
  }, [isOpen, messages]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSend = async (userText?: string) => {
    const textToSend = userText || input.trim();
    if (!textToSend || loading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: getTimestamp(),
    };

    setMessages((previous) => [...previous, userMessage]);
    if (!userText) setInput("");
    setLoading(true);

    try {
      const historyPayload = messages
        .filter((message) => message.id !== "welcome")
        .map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          text: message.text,
        }));

      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload,
          language,
        }),
      });
      const data = (await response.json()) as { reply?: string };

      if (!response.ok) throw new Error("Assistant request failed");

      setMessages((previous) => [
        ...previous,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text:
            data.reply ||
            "No pude procesar la respuesta en este momento. Puedes escribir a Juan directamente a sanchezvinuesajuan@gmail.com.",
          timestamp: getTimestamp(),
        },
      ]);
    } catch {
      setMessages((previous) => [
        ...previous,
        {
          id: `error-${Date.now()}`,
          role: "assistant",
          text: "Hubo un breve inconveniente de conexión. Puedes contactar directamente con Juan en sanchezvinuesajuan@gmail.com.",
          timestamp: getTimestamp(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        text: copy.reset,
        timestamp: copy.now,
      },
    ]);
  };

  const handleResizeStart = (
    event: React.PointerEvent<HTMLDivElement>,
    direction: ResizeDirection
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const currentPanel = panelRef.current;
    if (!currentPanel) return;

    const bounds = currentPanel.getBoundingClientRect();
    const startRect: PanelRect = {
      width: bounds.width,
      height: bounds.height,
      right: window.innerWidth - bounds.right,
      bottom: window.innerHeight - bounds.bottom,
    };

    const clamp = (value: number, minimum: number, maximum: number) =>
      Math.min(Math.max(value, minimum), maximum);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - event.clientX;
      const deltaY = moveEvent.clientY - event.clientY;
      const horizontalDirection = direction.includes("left") ? "left" : "right";
      const verticalDirection = direction.includes("top") ? "top" : "bottom";
      const maxWidth = Math.min(MAX_PANEL_WIDTH, window.innerWidth - 24);
      const maxHeight = Math.max(MIN_PANEL_HEIGHT, window.innerHeight - 24);
      const width = clamp(
        horizontalDirection === "left"
          ? startRect.width - deltaX
          : startRect.width + deltaX,
        MIN_PANEL_WIDTH,
        maxWidth
      );
      const height = clamp(
        verticalDirection === "top"
          ? startRect.height - deltaY
          : startRect.height + deltaY,
        MIN_PANEL_HEIGHT,
        maxHeight
      );

      setPanelRect({
        width,
        height,
        right:
          horizontalDirection === "right"
            ? startRect.right - (width - startRect.width)
            : startRect.right,
        bottom:
          verticalDirection === "bottom"
            ? startRect.bottom - (height - startRect.height)
            : startRect.bottom,
      });
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp, { once: true });
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="open-ask-juan-assistant-btn"
            initial={{ scale: 0.8, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="group fixed right-4 bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] z-40 flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-blue-500 !bg-white !text-zinc-900 shadow-md backdrop-blur-md transition-all hover:scale-105 hover:!bg-blue-50 focus:outline-none active:scale-95 lg:right-8 lg:bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] dark:border-blue-300 dark:!bg-black dark:!text-white dark:hover:!bg-zinc-900"
            aria-label={copy.assistantLabel}
            title={copy.assistantLabel}
          >
            <Bot className="size-5 shrink-0 transition-transform group-hover:scale-110" />
            <span className="absolute -top-0.5 -right-0.5 flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full border border-background bg-emerald-500" />
            </span>
            <span className="sr-only">{copy.assistantLabel}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] md:hidden"
            />

            <motion.div
              ref={panelRef}
              id="ask-juan-assistant-panel"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              style={
                panelRect
                  ? {
                      width: panelRect.width,
                      height: panelRect.height,
                      right: panelRect.right,
                      bottom: panelRect.bottom,
                    }
                  : undefined
              }
              className="fixed right-3 bottom-3 z-50 flex h-[580px] max-h-[calc(100vh-1.5rem)] min-h-[520px] w-[calc(100vw-1.5rem)] max-w-[min(92vw,720px)] min-w-[320px] flex-col overflow-hidden rounded-2xl border border-blue-500 bg-background shadow-2xl sm:right-6 sm:bottom-6 sm:w-[min(92vw,380px)] lg:right-8 lg:bottom-8"
            >
              <div className="flex items-center justify-between border-b border-edge bg-zinc-100 px-3.5 py-3 dark:bg-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-lg border border-edge bg-background text-foreground shadow-2xs">
                    <Bot className="size-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 leading-none">
                      <h3 className="text-xs font-semibold tracking-tight text-foreground">
                        {copy.title}
                      </h3>
                      <span className="rounded-md border border-edge bg-muted/60 px-1.5 py-0.5 font-mono text-[9px] tracking-wider text-muted-foreground uppercase">
                        AI
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      {copy.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={copy.openCv}
                    aria-label={copy.openCv}
                    className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <ExternalLink className="size-3.5" />
                  </a>
                  <a
                    href="/cv.pdf"
                    download="CV-Juan-Sanchez-Vinuesa.pdf"
                    title={copy.downloadCv}
                    aria-label={copy.downloadCv}
                    className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Download className="size-3.5" />
                  </a>
                  <button
                    id="reset-chat-btn"
                    onClick={resetChat}
                    title={copy.resetTitle}
                    className="cursor-pointer rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <RefreshCw className="size-3.5" />
                    <span className="sr-only">{copy.resetTitle}</span>
                  </button>
                  <button
                    id="close-chat-btn"
                    onClick={() => setIsOpen(false)}
                    title={copy.closeTitle}
                    className="cursor-pointer rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <X className="size-4" />
                    <span className="sr-only">{copy.close}</span>
                  </button>
                </div>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto p-3.5 text-xs">
                {messages.map((message) => {
                  const isUser = message.role === "user";
                  return (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}
                    >
                      {!isUser && (
                        <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-edge bg-muted/40 text-muted-foreground">
                          <Bot className="size-3" />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] rounded-xl px-3 py-2 leading-relaxed ${
                          isUser
                            ? "bg-foreground font-normal text-background"
                            : "border border-edge bg-muted/30 text-foreground"
                        }`}
                      >
                        {isUser ? (
                          <p className="whitespace-pre-wrap">{message.text}</p>
                        ) : (
                          <div className="text-xs leading-relaxed [&_a]:underline [&_a]:underline-offset-2 [&_code]:rounded [&_code]:border [&_code]:border-edge [&_code]:bg-muted/80 [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[10px] [&_strong]:font-semibold [&_strong]:text-foreground [&>li]:my-0.5 [&>ol]:my-1.5 [&>ol]:list-decimal [&>ol]:pl-3.5 [&>p]:mb-1.5 [&>p:last-child]:mb-0 [&>ul]:my-1.5 [&>ul]:list-disc [&>ul]:pl-3.5">
                            <Markdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                p: ({ children }) => <p>{children}</p>,
                                strong: ({ children }) => (
                                  <strong>{children}</strong>
                                ),
                                ul: ({ children }) => <ul>{children}</ul>,
                                ol: ({ children }) => <ol>{children}</ol>,
                                li: ({ children }) => <li>{children}</li>,
                                code: ({ children }) => <code>{children}</code>,
                                a: ({ href, children }) => (
                                  <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {children}
                                  </a>
                                ),
                              }}
                            >
                              {message.text}
                            </Markdown>
                          </div>
                        )}
                        <span
                          className={`mt-1 block text-[9px] ${
                            isUser
                              ? "text-background/60"
                              : "text-muted-foreground"
                          }`}
                        >
                          {message.timestamp}
                        </span>
                      </div>
                      {isUser && (
                        <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-edge bg-foreground/10 text-foreground">
                          <User className="size-3" />
                        </div>
                      )}
                    </div>
                  );
                })}
                {loading && (
                  <div className="flex items-center gap-2 pl-7 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
                      <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.2s]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.4s]" />
                    </div>
                    <span>{copy.loading}</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t border-edge bg-zinc-100 px-3.5 py-2.5 dark:bg-zinc-800">
                <div className="mb-2 flex items-center justify-between text-[11px] font-medium text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="size-3 text-amber-500/90 dark:text-amber-400" />
                    <span className="font-semibold text-foreground/80">
                      {copy.suggestions}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {copy.prompts.map((prompt) => (
                    <button
                      key={prompt}
                      disabled={loading}
                      onClick={() => handleSend(prompt)}
                      className="group flex min-h-[46px] cursor-pointer items-center justify-between rounded-xl border border-edge bg-background/95 p-2 text-left text-[11px] leading-snug text-foreground/90 shadow-2xs transition-all hover:border-foreground/30 hover:bg-muted hover:text-foreground active:scale-[0.98] disabled:opacity-50"
                    >
                      <span className="line-clamp-2">{prompt}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-edge bg-background p-2.5">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    void handleSend();
                  }}
                  className="flex items-center gap-1.5"
                >
                  <input
                    ref={inputRef}
                    id="assistant-input-field"
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder={copy.placeholder}
                    disabled={loading}
                    className="flex-1 rounded-lg border border-edge bg-muted/20 px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:bg-background focus:outline-none disabled:opacity-50"
                  />
                  <button
                    id="send-assistant-msg-btn"
                    type="submit"
                    disabled={!input.trim() || loading}
                    aria-label={copy.send}
                    className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-foreground text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Send className="size-3" />
                  </button>
                </form>
              </div>

              <div
                aria-hidden="true"
                onPointerDown={(event) => handleResizeStart(event, "top")}
                className="absolute inset-x-3 top-0 z-10 h-2 cursor-ns-resize touch-none"
              />
              <div
                aria-hidden="true"
                onPointerDown={(event) => handleResizeStart(event, "right")}
                className="absolute inset-y-3 right-0 z-10 w-2 cursor-ew-resize touch-none"
              />
              <div
                aria-hidden="true"
                onPointerDown={(event) => handleResizeStart(event, "bottom")}
                className="absolute inset-x-3 bottom-0 z-10 h-2 cursor-ns-resize touch-none"
              />
              <div
                aria-hidden="true"
                onPointerDown={(event) => handleResizeStart(event, "left")}
                className="absolute inset-y-3 left-0 z-10 w-2 cursor-ew-resize touch-none"
              />
              <div
                aria-hidden="true"
                onPointerDown={(event) => handleResizeStart(event, "top-left")}
                className="absolute top-0 left-0 z-20 size-3 cursor-nwse-resize touch-none"
              />
              <div
                aria-hidden="true"
                onPointerDown={(event) => handleResizeStart(event, "top-right")}
                className="absolute top-0 right-0 z-20 size-3 cursor-nesw-resize touch-none"
              />
              <div
                aria-hidden="true"
                onPointerDown={(event) =>
                  handleResizeStart(event, "bottom-left")
                }
                className="absolute bottom-0 left-0 z-20 size-3 cursor-nesw-resize touch-none"
              />
              <div
                aria-hidden="true"
                onPointerDown={(event) =>
                  handleResizeStart(event, "bottom-right")
                }
                className="absolute right-0 bottom-0 z-20 size-3 cursor-nwse-resize touch-none"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
