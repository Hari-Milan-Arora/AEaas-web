import { Activity, Bot, CheckCircle2, ShieldCheck } from "lucide-react";

import { DemoConsole } from "@/components/demo-console";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const demoPoints = [
  {
    title: "Role-aware questioning",
    description: "Generates prompts matched to the target job instead of generic interview scripts.",
    icon: Bot,
  },
  {
    title: "Structured scoring",
    description: "Breaks output into role fit, execution, communication, and confidence signals.",
    icon: Activity,
  },
  {
    title: "Operational trust",
    description: "Designed for human review, auditability, and production-minded workflow handoff.",
    icon: ShieldCheck,
  },
];

export default function DemoPage() {
  return (
    <div className="pb-24 pt-20">
      <section className="container space-y-12">
        <SectionHeading
          description="This mock demo is intentionally productized. It shows how an AI employee can accept role context, generate interview logic, and return decision-ready output."
          eyebrow="Interactive demo"
          title="Try AI Interview Employee"
        />
        <DemoConsole />
      </section>

      <section className="container py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {demoPoints.map((point) => {
            const Icon = point.icon;

            return (
              <Card key={point.title}>
                <CardContent className="space-y-5 p-6">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                      {point.title}
                    </h3>
                    <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                      {point.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container">
        <Card className="overflow-hidden bg-gradient-to-br from-sky-500/10 via-white to-emerald-500/10 dark:via-slate-950">
          <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="space-y-3">
              <Badge className="w-fit gap-2" variant="outline">
                <CheckCircle2 className="size-3.5" />
                Product demo state
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                A mock workflow that already feels like a usable SaaS product surface.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
              The UI is ready to connect to a real agent backend whenever the product
              is ready for live inference and evaluation pipelines.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
