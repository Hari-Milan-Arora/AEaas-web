import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Layers3, Sparkles } from "lucide-react";

import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { architectureLayers, featureCards } from "@/lib/site";

const productFeatures = featureCards.slice(0, 2);

export default function ProductPage() {
  return (
    <div className="pb-24 pt-20">
      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <Badge className="w-fit gap-2" variant="outline">
              <Sparkles className="size-3.5" />
              Active Development
            </Badge>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-6xl">
                AEaaS is building an AI workforce platform, not another chatbot layer.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                The product vision is simple: turn specific business functions into
                autonomous AI employees that can reason, evaluate, and execute.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/demo">
                  Try Demo
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/projects">See Use Cases</Link>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="space-y-5 p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200/80 bg-white/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <p className="mb-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Problem
                  </p>
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                    Teams still depend on repetitive manual workflows across hiring,
                    research, analysis, and reporting.
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-200/80 bg-slate-950 p-5 text-white dark:border-white/10">
                  <p className="mb-2 text-sm font-semibold text-slate-400">Solution</p>
                  <p className="text-base leading-7 text-slate-200">
                    AEaaS packages those workflows into AI employees with clear roles,
                    memory, tooling, and scoring logic.
                  </p>
                </div>
              </div>
              <div className="rounded-[28px] border border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-white to-emerald-500/10 p-6 dark:via-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">
                  Current focus
                </p>
                <p className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                  Interview automation and marketing intelligence are the first
                  vertical AI employees in the platform.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-24">
        <SectionHeading
          description="Each AI employee is designed as a productized workflow with decision logic, measurable output, and a business-facing interface."
          eyebrow="Core features"
          title="The first employees inside the AEaaS system"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {productFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="container py-24">
        <SectionHeading
          description="The company narrative is backed by a systems architecture story: inputs, orchestration, evaluation, and action."
          eyebrow="Architecture"
          title="How the product is structured under the hood"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {architectureLayers.map((layer, index) => {
            const icons = [Layers3, BrainCircuit, Bot, ArrowRight];
            const Icon = icons[index];

            return (
              <Card key={layer.title} className="relative">
                <CardHeader className="space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle>{layer.title}</CardTitle>
                    <CardDescription>{layer.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container">
        <Card className="overflow-hidden bg-slate-950 text-white dark:border-white/10">
          <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                Product direction
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                AEaaS is being positioned like an operating system for digital labor.
              </h2>
            </div>
            <Button asChild size="lg">
              <Link href="/demo">Try Demo</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
