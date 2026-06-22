import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { getAllProjects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="max-w-2xl selection:bg-accent-foreground selection:text-background">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        <ArrowLeft size={14} />
        Back to projects
      </Link>

      <h1 className="mt-4 origin-left font-fraunces text-3xl font-semibold tracking-tight transition-transform duration-500 hover:scale-[1.03]">
        {project.title}
      </h1>

      <p className="mt-2 text-sm text-muted-foreground">
        {project.description}
      </p>

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink size={14} />
              Live
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <Code2 size={14} />
              Source
            </Link>
          )}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border px-2.5 py-1 text-sm text-muted-foreground transition-all duration-300 hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>

      <Separator className="mt-12 border-dashed" />

      <div className="mt-8">
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </div>
  );
}
