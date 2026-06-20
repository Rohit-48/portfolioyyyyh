import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowLeft, LuMail } from "react-icons/lu";

import { getAllProjects } from "@/data/projects";
import { siteConfig, stackItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and selected work for Rohit, Full Stack Engineer.",
};

export default function ResumePage() {
  const projects = getAllProjects();
  return (
    <article className="mx-auto max-w-2xl">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground"
      >
        <LuArrowLeft size={14} /> Back home
      </Link>
      <header className="mt-10 border-b border-border pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Resume
        </p>
        <h1 className="mt-3 font-fraunces text-5xl font-semibold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{siteConfig.role}</p>
        <a
          href="mailto:rohit@rohitxyz.me"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline decoration-border underline-offset-4"
        >
          <LuMail size={15} /> rohit@rohitxyz.me
        </a>
      </header>
      <section className="py-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">
          Profile
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {siteConfig.description}
        </p>
      </section>
      <section className="border-t border-border py-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">
          Selected work
        </h2>
        <div className="mt-5 space-y-6">
          {projects.map((project) => (
            <div key={project.slug}>
              <h3 className="text-sm font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {project.longDescription}
              </p>
              <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                {project.tech.join(" / ")}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-border py-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">
          Skills
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {stackItems.map((item) => item.name).join(" · ")}
        </p>
      </section>
    </article>
  );
}
