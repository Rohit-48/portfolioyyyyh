import { MotionLink } from "@/components/MotionLink";
import { getAllProjects } from "@/data/projects";
import { ArrowUpRight, CalendarDays, Code2, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const statusConfig = {
  live: {
    cls: "bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20",
    dot: "bg-green-500",
  },
  wip: {
    cls: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20",
    dot: "bg-amber-500",
  },
  archived: {
    cls: "bg-muted text-muted-foreground border border-border",
    dot: "bg-muted-foreground/50",
  },
} as const;

function getInitials(title: string) {
  return title
    .replace(/[^a-zA-Z\s]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

function NoImagePlaceholder({ title }: { title: string }) {
  return (
    <div className="relative flex h-44 w-full items-center justify-center overflow-hidden border-b border-dashed border-muted-foreground/20 bg-gradient-to-br from-muted/80 via-muted/50 to-muted/20">
      <span className="pointer-events-none select-none font-fraunces text-7xl font-bold tracking-tighter text-foreground/[0.07]">
        {getInitials(title)}
      </span>
      <Code2 className="absolute text-muted-foreground/20" size={22} />
    </div>
  );
}

export function ProjectsList() {
  const projects = getAllProjects();

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => {
        const { cls, dot } = statusConfig[project.status];

        return (
          <MotionLink
            key={project.slug}
            href={`/projects/${project.slug}`}
            hoverScale={1.02}
            hoverY={-4}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-[#E8A820]/35 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
          >
            {project.featured && (
              <span className="absolute right-3 top-3 z-10 rounded border border-[#E8A820]/30 bg-background/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#E8A820] backdrop-blur-sm">
                Featured
              </span>
            )}

            {project.image ? (
              <div className="relative h-44 w-full overflow-hidden border-b border-border bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              </div>
            ) : (
              <NoImagePlaceholder title={project.title} />
            )}

            <div className="flex flex-1 flex-col p-5">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] ${cls}`}
                >
                  <span className={`size-1.5 rounded-full ${dot}`} />
                  {project.status}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
                  <CalendarDays size={11} />
                  {project.year}
                </span>
              </div>

              <h3 className="relative w-fit font-space-grotesk text-base font-semibold text-foreground transition-colors duration-200 group-hover:text-[#E8A820]">
                {project.title}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E8A820] transition-all duration-300 group-hover:w-full" />
              </h3>

              <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-muted/60 px-2 py-0.5 text-[10px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground/50">
                  {project.liveUrl && (
                    <ExternalLink size={13} aria-label="Live project" />
                  )}
                  {project.repoUrl && (
                    <SiGithub size={13} aria-label="Repository" />
                  )}
                </div>
                <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                  View project
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </div>
          </MotionLink>
        );
      })}
    </div>
  );
}
