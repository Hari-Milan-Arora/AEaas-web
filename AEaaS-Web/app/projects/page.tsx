import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site";

export default function ProjectsPage() {
  return (
    <div className="pb-24 pt-20">
      <section className="container space-y-12">
        <SectionHeading
          description="A product-focused portfolio of AI employee concepts and systems designed around operational outcomes, not generic demos."
          eyebrow="Projects"
          title="The startup roadmap behind AEaaS"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
