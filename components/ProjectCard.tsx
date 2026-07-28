import { MotionLink } from "@/components/MotionLink";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  CalendarDays,
  Code2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

const statusConfig = {
  live: {
    label: "Live",
    cls: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  wip: {
    label: "WIP",
    cls: "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
  },
  archived: {
    label: "Archived",
    cls: "border-border bg-muted text-muted-foreground",
    dot: "bg-muted-foreground/60",
  },
} as const;

type ProjectCardProps = {
  project: Project;
  variant?: "archive" | "preview";
};

function getInitials(title: string) {
  return title
    .replace(/[^a-zA-Z\s]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join("");
}

function hasUsableImage(image?: string) {
  return Boolean(image && image !== "/images/projects/");
}

function ProjectArtwork({
  project,
  compact,
}: {
  project: Project;
  compact: boolean;
}) {
  const showImage = hasUsableImage(project.image);

  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-border bg-muted",
        compact ? "h-40" : "h-48"
      )}
    >
      {showImage ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted via-muted/70 to-background">
          <span className="pointer-events-none select-none font-fraunces text-7xl font-bold text-foreground/[0.07]">
            {getInitials(project.title)}
          </span>
          <Code2
            aria-hidden="true"
            className="absolute text-muted-foreground/20"
            size={compact ? 22 : 26}
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-85" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E8A820]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

function TechList({ tech, compact }: { tech: string[]; compact: boolean }) {
  const visibleTech = tech.slice(0, compact ? 4 : 5);
  const hiddenCount = tech.length - visibleTech.length;

  return (
    <div className="flex flex-wrap gap-1.5">
      {visibleTech.map((item) => (
        <span
          key={item}
          className="rounded-md border border-border/80 bg-muted/55 px-2 py-1 text-[10px] leading-none text-muted-foreground transition-colors group-hover:border-[#E8A820]/20 group-hover:bg-[#E8A820]/5 group-hover:text-foreground/75"
        >
          {item}
        </span>
      ))}
      {hiddenCount > 0 && (
        <span className="rounded-md border border-dashed border-border px-2 py-1 text-[10px] leading-none text-muted-foreground/70">
          +{hiddenCount}
        </span>
      )}
    </div>
  );
}

export function ProjectCard({
  project,
  variant = "archive",
}: ProjectCardProps) {
  const compact = variant === "preview";
  const status = statusConfig[project.status];

  return (
    <MotionLink
      href={`/projects/${project.slug}`}
      hoverScale={compact ? 1.018 : 1.015}
      hoverY={-4}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-md border border-border bg-card shadow-sm shadow-black/[0.025] transition-colors duration-300",
        "hover:border-[#E8A820]/45 hover:bg-card hover:shadow-xl hover:shadow-black/[0.07] dark:shadow-black/10 dark:hover:shadow-black/30",
        compact ? "min-h-[380px]" : "min-h-[430px]"
      )}
    >
      <ProjectArtwork project={project} compact={compact} />

      {project.featured && (
        <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-md border border-[#E8A820]/30 bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase leading-none tracking-[0.16em] text-[#B57B00] shadow-sm backdrop-blur-md dark:text-[#F4C74A]">
          <Sparkles aria-hidden="true" size={11} />
          Featured
        </span>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-medium uppercase leading-none tracking-[0.16em]",
              status.cls
            )}
          >
            <span className={cn("size-1.5 rounded-full", status.dot)} />
            {status.label}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
            <CalendarDays aria-hidden="true" size={11} />
            {project.year}
          </span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <h3 className="font-space-grotesk text-lg font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-[#B57B00] dark:group-hover:text-[#F4C74A]">
            {project.title}
          </h3>
          <span className="grid size-8 shrink-0 place-items-center rounded-md border border-border bg-background text-muted-foreground transition-all duration-200 group-hover:border-[#E8A820]/35 group-hover:text-foreground">
            <ArrowUpRight
              aria-hidden="true"
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <p
          className={cn(
            "mt-3 flex-1 text-sm leading-6 text-muted-foreground",
            compact && "text-xs leading-relaxed"
          )}
        >
          {project.description}
        </p>

        <div className="mt-5">
          <TechList tech={project.tech} compact={compact} />
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground/55">
            {project.liveUrl && (
              <ExternalLink aria-hidden="true" size={compact ? 12 : 13} />
            )}
            {project.repoUrl && (
              <SiGithub aria-hidden="true" size={compact ? 12 : 13} />
            )}
          </div>
          <span className="font-medium text-foreground/85 transition-colors group-hover:text-foreground">
            {compact
              ? project.liveUrl
                ? "Live project"
                : "Case notes"
              : "View project"}
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
