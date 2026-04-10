import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:aeaas.ailabs@gmail.com",
    value: "AEaaS",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hari-milan-arora",
    value: "linkedin.com/in/harimilanarora",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/hari-milan-arora",
    value: "github.com/harimilanarora",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <div className="pb-24 pt-20">
      <section className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-8">
          <SectionHeading
            description="Reach out to discuss autonomous AI employees, product partnerships, founder conversations, or early access to the AEaaS platform."
            eyebrow="Contact"
            title="Build the future of work with AEaaS"
          />

          <div className="space-y-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  className="surface flex items-center justify-between rounded-[24px] p-5 transition hover:-translate-y-0.5"
                  href={link.href}
                  rel="noreferrer"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{link.label}</p>
                      <p className="font-medium text-slate-900 dark:text-white">{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-slate-400" />
                </Link>
              );
            })}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Start a conversation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="name">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="email">
                  Email
                </label>
                <Input id="email" placeholder="name@company.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="company">
                Company
              </label>
              <Input id="company" placeholder="Your company or project" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="message">
                What are you building?
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about the workflow you want to automate or the collaboration you want to discuss."
              />
            </div>
            <Button className="w-full" size="lg">
              Send Inquiry
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
