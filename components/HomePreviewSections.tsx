import { ArrowUpRight, CalendarDays, Clock3, Code2, Radio } from "lucide-react";

import { InteractiveAddress } from "@/components/InteractiveAddress";
import { MotionLink } from "@/components/MotionLink";
import { getBlogPosts } from "@/data/blogs";
import { projects } from "@/data/projects";

const projectStatusStyles = {
  live: "bg-green-500/10 text-green-700 dark:text-green-400",
  wip: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  archived: "bg-muted text-muted-foreground",
} as const;

export function ProjectsPreview() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section id="projects" className="scroll-mt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
            Selected work
          </p>
          <h2 className="mt-3 font-fraunces text-3xl font-semibold tracking-tight">
            Featured projects
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
            Tools and systems with enough shape to show the engineering behind
            them.
          </p>
        </div>
        <MotionLink
          href="/projects"
          className="group inline-flex w-fit items-center gap-1.5 text-xs font-medium text-foreground"
          hoverScale={1.01}
          hoverY={-1}
        >
          View archive
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </MotionLink>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <MotionLink
            key={project.slug}
            href={`/projects/${project.slug}`}
            hoverScale={1.025}
            hoverY={-4}
            className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-foreground/20 hover:bg-muted/20"
          >
            {project.image ? (
              <div className="h-36 w-full overflow-hidden border-b border-border bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform
                             duration-700 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="flex h-36 w-full items-center justify-center border-b border-dashed border-muted-foreground/30 bg-muted/25">
                <Code2 size={24} className="text-muted-foreground/35" />
              </div>
            )}

            <div className="flex flex-1 flex-col p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span
                  className={`rounded px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${
                    projectStatusStyles[project.status]
                  }`}
                >
                  {project.status}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
                  <CalendarDays size={11} />
                  {project.year}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3">
                <h3
                  className="font-space-grotesk text-base font-semibold
                               text-foreground group-hover:text-foreground"
                >
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={14}
                  className="mt-0.5 shrink-0 text-muted-foreground/40 transition-all
                             duration-200 group-hover:-translate-y-0.5
                             group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </div>

              <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-muted px-1.5
                               py-0.5 text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-1.5 border-t border-border pt-4 text-[11px] text-muted-foreground">
                <Radio size={12} />
                <span>
                  {project.liveUrl ? "Live project" : "Development notes"}
                </span>
              </div>
            </div>
          </MotionLink>
        ))}
      </div>
    </section>
  );
}

export function BlogsPreview() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section id="blogs" className="scroll-mt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
            Field notes
          </p>
          <h2 className="mt-3 font-fraunces text-3xl font-semibold tracking-tight">
            Recent writing
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
            Short notes from systems, frontend polish, Linux, and developer
            tooling.
          </p>
        </div>
        <MotionLink
          href="/blogs"
          className="group inline-flex w-fit items-center gap-1.5 text-xs font-medium text-foreground"
          hoverScale={1.01}
          hoverY={-1}
        >
          View all notes
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </MotionLink>
      </div>

      <div className="mt-8 grid gap-4">
        {posts.map((post) => (
          <MotionLink
            key={post.slug}
            href={`/blogs/${post.slug}`}
            hoverScale={1.015}
            hoverY={-3}
            className="group relative grid overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/20 hover:bg-muted/20 sm:grid-cols-[124px_1fr]"
            style={{ ["--blog-accent" as string]: post.accent }}
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-[var(--blog-accent)]" />
            <div className="relative h-32 overflow-hidden bg-muted sm:h-full">
              <img
                src={post.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/35 to-transparent" />
            </div>

            <div className="flex min-w-0 items-start justify-between gap-5 p-5">
              <div className="flex min-w-0 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3 text-[10px] text-muted-foreground">
                  <span className="rounded bg-[var(--blog-accent)]/10 px-2 py-1 font-medium uppercase tracking-[0.16em] text-[var(--blog-accent)]">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={10} />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 size={10} />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="font-fraunces text-lg font-semibold leading-snug
                               tracking-tight"
                >
                  {post.title}
                </h3>

                <p className="line-clamp-2 text-xs leading-5 text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-1 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-foreground">
                Read
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </MotionLink>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-12">
      <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
        Contact
      </p>
      <h2 className="mt-3 font-fraunces text-3xl font-semibold tracking-tight">
        Let&apos;s make something useful.
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
        Have a project, an engineering problem, or an idea worth exploring? Send
        me a note.
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-card px-3 py-8 sm:px-7 sm:py-10">
        <InteractiveAddress email="rohit@rohitxyz.me" />
      </div>
    </section>
  );
}
