import type { LucideIcon } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <div className="halo -right-8 top-4 size-24 bg-sky-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <CardHeader className="space-y-5">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300">
          <Icon className="size-5" />
        </div>
        <div className="space-y-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
