import Link from "next/link";
import { getAllProjects } from "@/data/projects";

export function ProjectsList() {
  const projects = getAllProjects();

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:scale-[1.02] hover:border-[#E8A820]/40"
        >
          {project.featured && (
            <span className="absolute -top-2.5 right-4 rounded border border-[#E8A820]/30 bg-background px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#E8A820]">
              Featured
            </span>
          )}

          {project.image ? (
            <div className="mb-4 h-40 w-full overflow-hidden rounded-lg border border-dashed border-gray-400">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="mb-4 flex h-40 w-full items-center justify-center rounded-lg border border-dashed border-muted-foreground/30 bg-muted/20">
              <span className="text-xs text-muted-foreground/50">no image</span>
            </div>
          )}

          <h3 className="relative w-fit font-space-grotesk text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-[#E8A820]">
            {project.title}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E8A820] transition-all duration-300 group-hover:w-full" />
          </h3>

          <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
