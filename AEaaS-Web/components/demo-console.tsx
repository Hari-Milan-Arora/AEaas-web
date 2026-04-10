"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const scoreSegmentClasses = [
  "bg-sky-500",
  "bg-cyan-500",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-cyan-500",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-cyan-500",
  "bg-emerald-500",
  "bg-sky-500",
];

function buildMockResponse(role: string, skills: string) {
  const normalizedSkills = skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  const primarySkill = normalizedSkills[0] ?? "problem solving";
  const secondarySkill = normalizedSkills[1] ?? "stakeholder communication";
  const roleLabel = role || "AI Product Strategist";

  const scoreBase = Math.min(94, 76 + normalizedSkills.length * 4);
  const confidenceScore = Math.min(97, scoreBase + 2);
  const communicationScore = Math.max(71, scoreBase - 5);
  const executionScore = Math.min(96, scoreBase + 4);

  return {
    question: `You are hiring for ${roleLabel}. Describe a system you would build to evaluate ${primarySkill} while still measuring ${secondarySkill} under real operating constraints.`,
    evaluation:
      "The candidate shows strong systems thinking and a founder-level ability to convert ambiguous tasks into measurable workflows. Recommend advancing to the next stage with a deeper execution test.",
    scores: [
      {
        label: "Role fit",
        value: scoreBase,
      },
      {
        label: "Execution depth",
        value: executionScore,
      },
      {
        label: "Communication",
        value: communicationScore,
      },
      {
        label: "Confidence",
        value: confidenceScore,
      },
    ],
  };
}

export function DemoConsole() {
  const [role, setRole] = useState("Founding Product Engineer");
  const [skills, setSkills] = useState("LLMs, Prompt Engineering, Multi-Agent Systems");
  const [submittedRole, setSubmittedRole] = useState("Founding Product Engineer");
  const [submittedSkills, setSubmittedSkills] = useState(
    "LLMs, Prompt Engineering, Multi-Agent Systems",
  );
  const response = useMemo(
    () => buildMockResponse(submittedRole, submittedSkills),
    [submittedRole, submittedSkills],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
      <Card className="h-full">
        <CardHeader className="space-y-4">
          <Badge className="w-fit gap-2" variant="outline">
            <Sparkles className="size-3.5" />
            Live simulation
          </Badge>
          <div className="space-y-2">
            <CardTitle>Try AI Interview Employee</CardTitle>
            <CardDescription>
              Enter a role and skills. The interface generates a realistic question,
              summary evaluation, and score breakdown.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="role">
              Role
            </label>
            <Input id="role" value={role} onChange={(event) => setRole(event.target.value)} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="skills">
              Skills
            </label>
            <Input
              id="skills"
              value={skills}
              onChange={(event) => setSkills(event.target.value)}
            />
          </div>
          <Button
            className="w-full"
            size="lg"
            onClick={() => {
              setSubmittedRole(role);
              setSubmittedSkills(skills);
            }}
          >
            Generate Interview Output
          </Button>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden">
        <div className="halo right-8 top-6 size-24 bg-sky-500/20" />
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <Badge className="w-fit gap-2" variant="secondary">
              <CheckCircle2 className="size-3.5 text-emerald-400" />
              Evaluation ready
            </Badge>
            <span className="text-sm text-slate-500 dark:text-slate-400">Mock output</span>
          </div>
          <div className="space-y-2">
            <CardTitle>Generated output</CardTitle>
            <CardDescription>
              This is the type of structured response AEaaS can generate for hiring
              workflows.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3 rounded-[24px] border border-slate-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">
              AI-generated question
            </p>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              {response.question}
            </p>
          </div>

          <div className="space-y-3 rounded-[24px] border border-slate-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">
              Evaluation
            </p>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              {response.evaluation}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {response.scores.map((item) => {
              const filledSegments = Math.round(item.value / 10);

              return (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-slate-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold text-slate-950 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                  <div className="grid grid-cols-10 gap-1.5">
                    {scoreSegmentClasses.map((segmentClass, index) => (
                      <span
                        key={`${item.label}-${index}`}
                        className={`h-2 rounded-full ${
                          index < filledSegments
                            ? segmentClass
                            : "bg-slate-200 dark:bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
