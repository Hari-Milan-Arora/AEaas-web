"use client";

import { motion } from "framer-motion";
import { Activity, Bot, BrainCircuit, DatabaseZap, Workflow } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const floatingCards = [
  {
    title: "AI Interview Employee",
    subtitle: "Candidate scoring in real time",
    icon: Bot,
    className: "left-0 top-8 md:left-10",
  },
  {
    title: "AI Marketing Employee",
    subtitle: "Market signals to action plans",
    icon: BrainCircuit,
    className: "right-0 top-1/2 md:right-10",
  },
  {
    title: "Workflow Orchestration",
    subtitle: "Memory, tools, and evaluation loops",
    icon: Workflow,
    className: "bottom-0 left-1/2 -translate-x-1/2",
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="absolute inset-8 rounded-full border border-sky-500/20 bg-gradient-to-br from-sky-500/15 via-transparent to-emerald-500/15 blur-2xl" />
      <div className="absolute inset-0 rounded-full border border-slate-200/80 bg-white/50 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-white/5" />
      <div className="absolute inset-10 rounded-full border border-dashed border-sky-500/20" />
      <div className="absolute inset-20 rounded-full border border-dashed border-emerald-500/20" />
      <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(circle,black_56%,transparent_78%)]" />

      <motion.div
        animate={{ rotate: 360 }}
        className="absolute inset-14"
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        <div className="absolute left-1/2 top-0 size-4 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.8)]" />
        <div className="absolute bottom-10 right-8 size-3 rounded-full bg-emerald-400 shadow-[0_0_26px_rgba(52,211,153,0.8)]" />
        <div className="absolute left-10 top-2/3 size-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.8)]" />
      </motion.div>

      <div className="absolute left-1/2 top-1/2 flex size-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-sky-500/20 bg-slate-950 text-white shadow-glow dark:bg-slate-900">
        <DatabaseZap className="mb-3 size-8 text-sky-300" />
        <span className="text-sm font-medium text-slate-300">AEaaS Core</span>
        <span className="mt-1 text-center text-xs text-slate-400">
          autonomous execution engine
        </span>
      </div>

      {floatingCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            animate={{ y: [0, -8, 0] }}
            className={`absolute w-52 ${card.className}`}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="surface rounded-[26px] border border-white/10 p-4">
              <Badge className="mb-3 w-fit gap-2" variant="secondary">
                <Activity className="size-3.5 text-emerald-400" />
                Active development
              </Badge>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex size-10 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300">
                  <Icon className="size-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
