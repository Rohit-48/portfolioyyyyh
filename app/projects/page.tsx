import { ProjectsList } from "@/components/ProjectList";
import { getAllProjects } from "@/data/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const liveCount = projects.filter(
    (project) => project.status === "live"
  ).length;
  const featuredCount = projects.filter((project) => project.featured).length;

  return (
    <div className="max-w-4xl">
      <header className="border-b border-border pb-8">
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.34em] text-muted-foreground/50">
          Work archive
        </p>
        <h1 className="mt-4 max-w-2xl font-fraunces text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Projects built across product, tooling, and infrastructure.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          A running archive of shipped tools, experiments, and work-in-progress
          systems. Most of these are built around practical developer workflows.
        </p>

        <div className="mt-7 grid grid-cols-3 gap-3 text-xs">
          <div className="border-l border-border pl-3">
            <p className="font-space-grotesk text-lg font-semibold text-foreground">
              {projects.length}
            </p>
            <p className="mt-1 text-muted-foreground">projects</p>
          </div>
          <div className="border-l border-border pl-3">
            <p className="font-space-grotesk text-lg font-semibold text-foreground">
              {liveCount}
            </p>
            <p className="mt-1 text-muted-foreground">live</p>
          </div>
          <div className="border-l border-border pl-3">
            <p className="font-space-grotesk text-lg font-semibold text-foreground">
              {featuredCount}
            </p>
            <p className="mt-1 text-muted-foreground">featured</p>
          </div>
        </div>
      </header>

      <ProjectsList />
    </div>
  );
}
