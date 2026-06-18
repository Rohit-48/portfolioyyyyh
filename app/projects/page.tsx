import { ProjectsList } from "@/components/ProjectList";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="font-fraunces text-3xl font-semibold">Projects</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Things I&apos;ve built.
      </p>
      <ProjectsList />
    </div>
  );
}
