import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { HeroVisual } from "@/components/hero-visual";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="halo left-10 top-16 size-56 bg-sky-500/20" />
      <div className="halo right-0 top-32 size-72 bg-emerald-500/10" />
      <div className="container relative">
        <div className="grid items-center gap-16 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-gradient-to-r from-sky-500/50 via-cyan-400/50 to-emerald-400/50 p-px">
              <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur dark:bg-slate-950/90 dark:text-slate-200">
                <Sparkles className="size-4 text-sky-500" />
                <span>🚀 Active Development</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-6xl lg:text-7xl">
                Building Autonomous AI Employees That{" "}
                <span className="text-gradient">Replace Work</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
                Currently building AEaaS, an AI workforce platform automating real
                business roles.
              </p>
              <p className="max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400 md:text-lg">
                From interview automation to marketing intelligence, AI replacing
                traditional workflows.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/product">
                  Explore Platform
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/demo">Try Live Demo</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
                AI Systems
              </span>
              <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
                LLM Workflows
              </span>
              <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
                Multi-Agent Architecture
              </span>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
