import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { StatCounter } from "@/components/stat-counter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featureCards, projects, stats, testimonials, workflowSteps } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-24">
        <div className="container space-y-12">
          <SectionHeading
            description="Each system is designed around a business role, measurable output, and a workflow that can operate without constant human supervision."
            eyebrow="AI employees"
            title="Founder-led product systems built to own real workflows"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container space-y-12">
          <SectionHeading
            align="center"
            description="AEaaS treats every AI employee like a product: defined role, bounded context, measurable quality, and production-minded execution."
            eyebrow="How it works"
            title="A three-step system for replacing manual work"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="relative overflow-hidden">
                  <CardContent className="space-y-6 p-6">
                    <Badge className="w-fit" variant="secondary">
                      0{index + 1}
                    </Badge>
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              description="The product direction is already focused on specific business roles where AI can take over repetitive, knowledge-heavy execution."
              eyebrow="Highlighted projects"
              title="AI employees shipping inside the AEaaS platform"
            />
            <Button asChild variant="secondary">
              <Link href="/projects">
                View all projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Card className="overflow-hidden border-slate-200/70 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white dark:border-white/10">
            <CardContent className="grid gap-10 p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="space-y-5">
                <span className="section-label border-white/10 bg-white/10 text-sky-200">
                  Operating signals
                </span>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Building the execution layer for the future of work
                </h2>
                <p className="max-w-xl text-base leading-7 text-slate-300">
                  AEaaS is being shaped like a venture-scale product company: sharp
                  positioning, clear workflows, and systems that can turn AI
                  potential into business output.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <p className="text-4xl font-semibold text-white">
                      <StatCounter suffix={stat.suffix} value={stat.value} />
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24">
        <div className="container space-y-12">
          <SectionHeading
            align="center"
            description="Mocked, but intentionally realistic. The goal is to make the company feel credible today and expandable tomorrow."
            eyebrow="Social proof"
            title="How operators describe the AEaaS vision"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="h-full">
                <CardContent className="space-y-6 p-6">
                  <Sparkles className="size-6 text-sky-500" />
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                    “{testimonial.quote}”
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-950 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <Card className="overflow-hidden border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-white to-emerald-500/10 dark:from-sky-500/10 dark:via-slate-950 dark:to-emerald-500/10">
            <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-2xl space-y-4">
                <Badge className="w-fit gap-2" variant="outline">
                  <CheckCircle2 className="size-3.5" />
                  Active Development
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                  Designing the AI company website like the product already belongs
                  in the market
                </h2>
                <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                  Explore the platform story, product architecture, and demo flow
                  built around AEaaS.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/product">Explore Platform</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Contact Founder</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
