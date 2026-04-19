"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const TOTAL_ECTS = 240;
const DONE_ECTS = 162;
const PROGRESS_PCT = Math.round((DONE_ECTS / TOTAL_ECTS) * 100); // 68

const STATS = [
  { label: "Passed", value: 27, color: "text-emerald-500" },
  { label: "Remaining", value: 6, color: "text-blue-400" },
] as const;

const PENDING_REQUIRED: { name: string; note?: string }[] = [
  { name: "Bachelor's Thesis (TFG)", note: "12 ECTS" },
  { name: "Internship", note: "15 ECTS" },
  { name: "Telematic Applications", note: "6 ECTS" },
  { name: "Telecom Engineering Projects", note: "3 ECTS · conditional" },
];

const PENDING_LABS: { name: string }[] = [
  { name: "Network & Systems Administration Lab" },
  { name: "Mobile & Ubiquitous Systems Lab" },
  { name: "Database Systems Lab" },
];

// ── Animated counter ──────────────────────────────────────────────────────────

function AnimatedNumber({
  value,
  delay = 0,
}: {
  value: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1200, bounce: 0 });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => motionVal.set(value), delay);
      return () => clearTimeout(t);
    }
  }, [inView, value, delay, motionVal]);

  useEffect(
    () =>
      spring.on("change", (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString();
      }),
    [spring]
  );

  return <span ref={ref}>0</span>;
}

// ── Accordion panel ───────────────────────────────────────────────────────────

function AccordionPanel({
  id,
  label,
  count,
  dotClass,
  delay,
  children,
}: {
  id: string;
  label: string;
  count: number;
  dotClass: string;
  delay: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className="overflow-hidden rounded-xl border border-edge bg-background/50"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition-colors select-none hover:bg-accent/50"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className={`size-2 shrink-0 rounded-full ${dotClass}`} />
        <span className="flex-1 text-sm font-medium">{label}</span>
        <span className="mr-2 rounded-full border border-edge bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
          {count}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-muted-foreground"
        >
          <ChevronDownIcon className="size-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-0.5 border-t border-edge px-3.5 py-2.5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main widget ───────────────────────────────────────────────────────────────

export function UrjcProgressWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -60px",
  });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
      className="mt-4 space-y-4 rounded-xl border border-edge bg-muted/40 p-4"
    >
      {/* ── Progress bar ── */}
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-semibold text-foreground">
            Degree Progress
          </span>
          <span className="text-sm font-bold text-foreground tabular-nums">
            <AnimatedNumber value={PROGRESS_PCT} delay={200} />
            <span className="text-xs font-normal text-muted-foreground">%</span>
          </span>
        </div>

        {/* Track */}
        <div className="relative h-3 w-full overflow-hidden rounded-full bg-border/70">
          {/* Fill */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400"
            initial={{ width: 0 }}
            animate={inView ? { width: `${PROGRESS_PCT}%` } : {}}
            transition={{
              duration: 1.2,
              ease: [0.34, 1.1, 0.64, 1],
              delay: 0.15,
            }}
          >
            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
              }}
              initial={{ backgroundPosition: "-100% 0" }}
              animate={inView ? { backgroundPosition: "200% 0" } : {}}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 1.3 }}
            />
          </motion.div>

          {/* Glow beneath fill */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 opacity-60 blur-sm"
            initial={{ width: 0 }}
            animate={inView ? { width: `${PROGRESS_PCT}%` } : {}}
            transition={{
              duration: 1.2,
              ease: [0.34, 1.1, 0.64, 1],
              delay: 0.15,
            }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <span>
            {DONE_ECTS} / {TOTAL_ECTS} ECTS completed
          </span>
          <span>{TOTAL_ECTS - DONE_ECTS} ECTS remaining</span>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 gap-2">
        {STATS.map(({ label, value, color }, i) => (
          <div
            key={label}
            className="flex flex-col items-center rounded-lg border border-edge bg-background/60 px-1 py-2.5"
          >
            <span className={`text-2xl font-bold tabular-nums ${color}`}>
              <AnimatedNumber value={value} delay={i * 120} />
            </span>
            <span className="mt-0.5 text-center text-[11px] leading-tight text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Internship callout ── */}
      <div className="flex items-stretch gap-3">
        <div className="w-0.5 shrink-0 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400" />
        <div>
          <p className="text-sm leading-snug font-semibold text-foreground">
            Open to internship opportunities
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            15 ECTS of mandatory internship ahead — available to join your team,
            hit the ground running, and grow through real engineering
            challenges.
          </p>
        </div>
      </div>

      {/* ── Accordion ── */}
      <AccordionPanel
        id="urjc-pending"
        label="What’s left to graduate (2026–2027)"
        count={6}
        dotClass="bg-blue-400"
        delay={0.35}
      >
        {PENDING_REQUIRED.map(({ name, note }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.22, delay: i * 0.05 }}
            className="flex items-center gap-2.5 rounded-md px-1 py-1 text-xs transition-colors hover:bg-accent/40"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-blue-400" />
            <span className="flex-1 text-muted-foreground">{name}</span>
            {note && (
              <span className="text-[10px] text-muted-foreground/50">
                {note}
              </span>
            )}
          </motion.div>
        ))}

        {/* Labs group */}
        <div className="mt-1.5 border-t border-edge pt-1.5">
          <p className="mb-1 px-1 text-[10px] font-medium tracking-wide text-muted-foreground/60 uppercase">
            Elective labs · pick 2 of 3
          </p>
          {PENDING_LABS.map(({ name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.22, delay: 0.2 + i * 0.05 }}
              className="flex items-center gap-2.5 rounded-md px-1 py-1 text-xs transition-colors hover:bg-accent/40"
            >
              <span className="size-1.5 shrink-0 rounded-full border border-blue-400/60" />
              <span className="flex-1 text-muted-foreground">{name}</span>
              <span className="text-[10px] text-muted-foreground/50">
                6 ECTS
              </span>
            </motion.div>
          ))}
        </div>
      </AccordionPanel>
    </motion.div>
  );
}
