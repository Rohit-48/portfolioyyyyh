import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { MotionLink } from "@/components/MotionLink";
import { ProjectCard } from "@/components/ProjectCard";
import { getBlogPosts } from "@/data/blogs";
import { projects } from "@/data/projects";

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

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="preview" />
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

      <div className="mt-8 grid gap-3">
        {posts.map((post, index) => (
          <MotionLink
            key={post.slug}
            href={`/blogs/${post.slug}`}
            hoverScale={1.015}
            hoverY={-3}
            className="group relative grid overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-[var(--blog-accent)]/30 hover:bg-[var(--blog-accent)]/[0.02] hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/15 sm:grid-cols-[124px_1fr]"
            style={{ ["--blog-accent" as string]: post.accent }}
          >
            {/* Left accent bar */}
            <div className="absolute inset-y-0 left-0 w-[3px] bg-[var(--blog-accent)] opacity-75 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative h-32 overflow-hidden bg-muted sm:h-full">
              <img
                src={post.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              {/* Index number */}
              <span
                aria-hidden
                className="absolute bottom-2 right-2 select-none font-space-grotesk text-xl font-bold leading-none text-white/25"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex min-w-0 items-start justify-between gap-5 p-5">
              <div className="flex min-w-0 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3 text-[10px] text-muted-foreground">
                  {/* Category badge with solid accent color */}
                  <span
                    className="rounded px-2 py-0.5 font-semibold uppercase tracking-[0.16em] text-white"
                    style={{ backgroundColor: post.accent }}
                  >
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

                <h3 className="font-fraunces text-lg font-semibold leading-snug tracking-tight">
                  {post.title}
                </h3>

                <p className="line-clamp-2 text-xs leading-5 text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-1 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border/60 bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground transition-colors duration-200 group-hover:border-[var(--blog-accent)]/25"
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
    </section>
  );
}
