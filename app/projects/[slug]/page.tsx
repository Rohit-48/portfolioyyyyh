import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Code2,
  ExternalLink,
  Radio,
} from "lucide-react";

import { MarkdownContent } from "@/components/MarkdownContent";
import { MotionLink } from "@/components/MotionLink";
import { Separator } from "@/components/ui/separator";
import { getAllProjects, getProject } from "@/data/projects";

const statusStyles = {
  live: "bg-green-500/10 text-green-700 dark:text-green-400",
  wip: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  archived: "bg-muted text-muted-foreground",
} as const;

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
    <div className="max-w-3xl selection:bg-accent-foreground selection:text-background">
      <MotionLink
        href="/projects"
        hoverScale={1.01}
        hoverY={-1}
        className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        <ArrowLeft size={14} />
        Back to projects
      </MotionLink>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
          <span
            className={`rounded px-2 py-1 font-medium uppercase tracking-[0.16em] ${
              statusStyles[project.status]
            }`}
          >
            {project.status}
          </span>
          <span className="inline-flex items-center gap-1 rounded border border-border px-2 py-1">
            <CalendarDays size={11} />
            {project.year}
          </span>
          {project.featured && (
            <span className="rounded border border-[#E8A820]/30 px-2 py-1 font-medium uppercase tracking-[0.16em] text-[#E8A820]">
              Featured
            </span>
          )}
        </div>

        <h1 className="mt-5 text-balance font-fraunces text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {(project.liveUrl || project.repoUrl) && (
            <>
              {project.liveUrl && (
                <MotionLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-foreground px-3 text-xs font-semibold text-background transition-colors hover:bg-foreground/90"
                >
                  <ExternalLink size={14} />
                  Live project
                </MotionLink>
              )}
              {project.repoUrl && (
                <MotionLink
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Code2 size={14} />
                  Source
                </MotionLink>
              )}
            </>
          )}
        </div>
      </header>

      {project.image ? (
        <div className="mt-9 overflow-hidden rounded-xl border border-border bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="h-72 w-full object-cover sm:h-80"
          />
        </div>
      ) : (
        <div className="mt-9 flex h-64 items-center justify-center rounded-xl border border-dashed border-muted-foreground/30 bg-muted/20">
          <Code2 size={34} className="text-muted-foreground/35" />
        </div>
      )}

      <div className="mt-8 grid gap-6 border-y border-border py-6 sm:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-space-grotesk text-[10px] uppercase tracking-[0.24em] text-muted-foreground/60">
            Project context
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Radio size={14} />
            {project.liveUrl ? "Available to try" : "Repository or writeup"}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Separator className="mt-12 border-dashed" />

      <div className="mt-8">
        <MarkdownContent source={project.content} />
      </div>
    </div>
  );
}
