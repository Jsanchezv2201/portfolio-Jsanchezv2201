"use client";

import { useEffect, useState } from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

// --- SUB-COMPONENTE: SOLO RELOJ Y PING (Derecha) ---
function TelemetryRight() {
  const [time, setTime] = useState<string>("");
  const [ping, setPing] = useState<number>(24);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Reloj Madrid
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("es-ES", {
          timeZone: "Europe/Madrid",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    // Efecto de Ping
    const updatePing = () => {
      setPing(Math.floor(Math.random() * (45 - 18 + 1) + 18));
    };

    updateTime();
    const timerInterval = setInterval(updateTime, 1000);
    const pingInterval = setInterval(updatePing, 3000);

    return () => {
      clearInterval(timerInterval);
      clearInterval(pingInterval);
    };
  }, []);

  if (!mounted) return <span className="opacity-0">...</span>;

  return (
    <div className="flex items-center gap-3 font-mono text-[10px] tracking-wider text-muted-foreground uppercase opacity-80 select-none">
      <div className="flex items-center gap-2">
        {/* Ping con punto verde palpitante */}
        <span className="flex items-center gap-1.5">
          <span className="hidden sm:inline">PING:</span>
          <span className="text--600 font-bold dark:text-green-400">
            {ping}ms
          </span>
        </span>
      </div>

      <span className="min-w-[55px] rounded border border-border/50 bg-muted/50 px-1.5 py-0.5 text-center font-semibold text-foreground">
        {time}
      </span>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export function ProfileHeader() {
  return (
    <div className="group/header screen-line-after flex border-x border-edge">
      {/* Columna Izquierda: Avatar */}
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background grayscale-[0.3] transition-all duration-500 ease-out select-none group-hover/header:ring-green-500/50 group-hover/header:grayscale-0 sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Columna Derecha: Información */}
      <div className="flex flex-1 flex-col">
        {/* Barra Superior con Patrón y Telemetría */}
        {/* Mantenemos estrictamente las clases originales para no romper bordes */}
        <div
          className={cn(
            "flex grow items-end justify-between pr-4 pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          {/* IZQUIERDA: Texto Decorativo Original */}
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>

          {/* DERECHA: Telemetría (Reloj + Ping) */}
          <div className="mb-0.5">
            <TelemetryRight />
          </div>
        </div>

        {/* Zona de Nombre y Badges */}
        {/* Este div tiene 'border-t' -> Es la línea superior del bloque de nombre */}
        <div className="border-t border-edge">
          <h1 className="flex flex-wrap items-center gap-y-2 py-1 pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified Account">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {/* BANDERA DE ESPAÑA */}
            <SimpleTooltip content="Based in Madrid, Spain">
              <svg
                className="ml-3 h-6 w-auto rounded-sm opacity-90 shadow-sm transition-opacity hover:opacity-100"
                viewBox="0 0 30 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="30" height="20" fill="#AD1519" />
                <rect y="5" width="30" height="10" fill="#FABD00" />
              </svg>
            </SimpleTooltip>
            {/* BADGE #OPENTOWORK ANIMADO */}
            <div className="ml-3 flex animate-in items-center delay-100 duration-700 fade-in slide-in-from-left-4 zoom-in">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]" />
                <div className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-background/95 px-3 py-1 text-xs font-bold text-green-500 shadow-sm backdrop-blur-3xl">
                  <span className="relative mr-2 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  #OPENTOWORK
                </div>
              </span>
            </div>
            {/* Botón de Pronunciación */}
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          {/* Frases cambiantes */}
          {/* Este div tiene 'border-t' -> Es la línea que separa el nombre de las frases */}
          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
