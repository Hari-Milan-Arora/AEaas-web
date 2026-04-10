import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  description: string;
  status: string;
  tech: string[];
  demoHref: string;
  githubHref: string;
};

export function ProjectCard({
  title,
  description,
  status,
  tech,
  demoHref,
  githubHref,
}: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div className="space-y-6">
        <CardHeader className="space-y-4">
          <Badge className="w-fit" variant={status === "Active Development" ? "outline" : "secondary"}>
            {status}
          </Badge>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-8 gap-3">
        <Button asChild size="sm">
          <Link href={demoHref}>
            Demo
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
        <Button asChild size="sm" variant="secondary">
          <Link href={githubHref} rel="noreferrer" target="_blank">
            GitHub
            <Github className="size-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
