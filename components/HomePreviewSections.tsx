import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import { InteractiveAddress } from "@/components/InteractiveAddress";
import { getBlogPosts } from "@/data/blogs";
import { projects } from "@/data/projects";

export function ProjectsPreview() {
  return (
    <section id="projects" className="scroll-mt-12">
      <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
        Selected work
      </p>
      <h2 className="mt-3 font-fraunces text-3xl font-semibold tracking-tight">
        My Projects
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col gap-3 rounded-xl border border-border
                       bg-card p-5
                       hover:border-foreground/20 hover:bg-muted/20 hover:scale-105 transition-all duration-300"
            >
              {/* Thumbnail */}
              {project.image && (
                <div className="h-36 w-full overflow-hidden rounded-lg border border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform
                             duration-500"
                  />
                </div>
              )}

              {/* Title + status */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="font-space-grotesk text-sm font-semibold
                               text-foreground group-hover:text-foreground"
                  >
                    {project.title}
                  </h3>
                  <span
                    className={`w-fit rounded px-1.5 py-0.5 text-[10px] font-medium ${
                      project.featured
                        ? "bg-green-500/10 text-green-600 dark:text-green-400"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    Featured
                  </span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="mt-0.5 shrink-0 text-muted-foreground/40 transition-all
                           duration-200 group-hover:-translate-y-0.5
                           group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5">
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
            </Link>
          ))}
      </div>
    </section>
  );
}

export function BlogsPreview() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section id="blogs" className="scroll-mt-12">
      <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
        Field notes
      </p>
      <h2 className="mt-3 font-fraunces text-3xl font-semibold tracking-tight">
        Recent writing
      </h2>

      <div className="mt-8 divide-y divide-border rounded-xl border border-border overflow-hidden">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group flex items-start justify-between gap-5 p-5
                       transition-colors hover:bg-muted/30"
          >
            <div className="flex flex-col gap-2 min-w-0">
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 text-[10px] text-muted-foreground">
                <span className="font-medium uppercase tracking-[0.16em]">
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

              {/* Title */}
              <h3
                className="font-fraunces text-base font-semibold leading-snug
                             tracking-tight"
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="line-clamp-2 text-xs leading-5 text-muted-foreground">
                {post.excerpt}
              </p>
            </div>

            <ArrowUpRight
              size={14}
              className="mt-1 shrink-0 text-muted-foreground/40 transition-all
                         duration-200 group-hover:-translate-y-0.5
                         group-hover:translate-x-0.5 group-hover:text-foreground"
            />
          </Link>
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
