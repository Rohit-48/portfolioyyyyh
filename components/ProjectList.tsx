import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/data/projects";

export function ProjectsList() {
  const projects = getAllProjects();

  return (
    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
