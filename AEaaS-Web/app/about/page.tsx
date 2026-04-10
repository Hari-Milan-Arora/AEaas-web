import { BrainCircuit, BriefcaseBusiness, Rocket } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const narrativeCards = [
  {
    title: "Founder perspective",
    description:
      "Hari Milan Arora is positioning AEaaS as a company that productizes AI labor, not just AI interfaces.",
    icon: Rocket,
  },
  {
    title: "Systems thinking",
    description:
      "Every workflow is treated like an operating system problem: inputs, memory, coordination, evaluation, and outcomes.",
    icon: BrainCircuit,
  },
  {
    title: "Business execution",
    description:
      "The focus is practical replacement of repetitive workflows across hiring, research, and go-to-market operations.",
    icon: BriefcaseBusiness,
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24 pt-20">
      <section className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          description="AEaaS is being shaped as a founder-led AI company that builds autonomous employees for modern businesses. The goal is not to showcase a resume. The goal is to present a credible company creating the next layer of work infrastructure."
          eyebrow="About the vision"
          title="A story about replacing workflows, not collecting portfolio trophies"
        />
        <Card>
          <CardContent className="space-y-5 p-8">
            <p className="text-base leading-8 text-slate-700 dark:text-slate-200">
              Hari Milan Arora is building from a belief that most operational work
              can be translated into systems. Once the role is mapped clearly, an AI
              employee can be designed to execute it with structure, memory, and
              measurable quality.
            </p>
            <p className="text-base leading-8 text-slate-700 dark:text-slate-200">
              That is why AEaaS is framed like a product company. The website, the
              demos, and the architecture all point toward a future where businesses
              adopt digital labor the way they once adopted SaaS.
            </p>
            <p className="text-base leading-8 text-slate-700 dark:text-slate-200">
              The long-term vision is to replace traditional workflows with
              autonomous systems that are specialized, reviewable, and designed for
              real business environments.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {narrativeCards.map((card) => {
            const Icon = card.icon;

            return (
              <Card key={card.title}>
                <CardContent className="space-y-5 p-6">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300">
                    <Icon className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
