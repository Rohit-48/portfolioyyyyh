import { MotionLink } from "@/components/MotionLink";
import { getAllProjects } from "@/data/projects";
import { ArrowUpRight, CalendarDays, Code2, Radio } from "lucide-react";

const statusStyles = {
  live: "bg-green-500/10 text-green-700 dark:text-green-400",
  wip: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  archived: "bg-muted text-muted-foreground",
} as const;

export function ProjectsList() {
  const projects = getAllProjects();

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <MotionLink
          key={project.slug}
          href={`/projects/${project.slug}`}
          hoverScale={1.025}
          hoverY={-4}
          className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-[#E8A820]/40 hover:bg-muted/15"
        >
          {project.featured && (
            <span className="absolute right-4 top-4 z-10 rounded-md border border-[#E8A820]/30 bg-background/90 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-[#E8A820] backdrop-blur">
              Featured
            </span>
          )}

          {project.image ? (
            <div className="h-44 w-full overflow-hidden border-b border-border bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex h-44 w-full items-center justify-center border-b border-dashed border-muted-foreground/30 bg-muted/25">
              <Code2 className="text-muted-foreground/35" size={28} />
            </div>
          )}

          <div className="flex flex-1 flex-col p-5">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
              <span
                className={`rounded px-2 py-1 font-medium uppercase tracking-[0.16em] ${
                  statusStyles[project.status]
                }`}
              >
                {project.status}
              </span>
              <span className="inline-flex items-center gap-1">
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

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Radio size={12} />
                {project.liveUrl ? "Live preview" : "Source available"}
              </span>
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
      ))}
    </div>
  );
}
