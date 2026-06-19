import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import { InteractiveAddress } from "@/components/InteractiveAddress";
import { getBlogPosts } from "@/data/blogs";
import { getAllProjects } from "@/data/projects";

function SectionHeader({
  eyebrow,
  title,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-fraunces text-3xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      <Link
        href={href}
        className="group mb-1 inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {linkLabel}
        <ArrowUpRight
          size={13}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </div>
  );
}

export function ProjectsPreview() {
  const projects = getAllProjects().slice(0, 2);

  return (
    <section id="projects" className="scroll-mt-12">
      <SectionHeader
        eyebrow="Selected work"
        title="Projects"
        href="/projects"
        linkLabel="View all"
      />

      <div className="mt-8 border-y border-border">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group grid grid-cols-[2rem_1fr_auto] gap-3 border-b border-border py-5 last:border-b-0"
          >
            <span className="pt-0.5 font-mono text-[10px] text-muted-foreground/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h3 className="font-space-grotesk text-sm font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-2 text-[10px] text-muted-foreground/70">
                {project.tech.slice(0, 4).join(" / ")}
              </p>
            </div>
            <ArrowUpRight
              size={15}
              className="mt-0.5 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            />
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
      <SectionHeader
        eyebrow="Field notes"
        title="Recent writing"
        href="/blogs"
        linkLabel="View all"
      />

      <div className="mt-8 space-y-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group block rounded-xl border border-border/80 p-5 transition-colors hover:border-foreground/20 hover:bg-muted/20"
          >
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-muted-foreground">
              <span className="font-medium uppercase tracking-[0.16em]">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <CalendarDays size={11} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock3 size={11} />
                {post.readTime}
              </span>
            </div>
            <div className="mt-3 flex items-start justify-between gap-5">
              <div>
                <h3 className="font-fraunces text-xl font-semibold leading-snug tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
              <ArrowUpRight
                size={15}
                className="mt-1 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
              />
            </div>
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
