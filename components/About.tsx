import { Skill } from "@/data/skill";
import { skills } from "@/data/skill";

export function AboutSection() {
  return (
    <section id="about" className="max-w-2xl">
      <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
        About
      </p>

      <h2 className="mt-5 max-w-xl font-fraunces text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        I build software that feels clear, fast, and dependable.
      </h2>

      <div className="mt-10 space-y-5 text-sm leading-7 text-muted-foreground">
        <p>
          I&apos;m a{" "}
          <strong className="font-semibold text-foreground">full-stack engineer</strong>{" "}
          working across product interfaces, backend systems, and the tooling between them.
          My usual stack is React and TypeScript in the browser, with Rust or Node.js behind it.
        </p>
        <p>
          I care about{" "}
          <strong className="font-semibold text-foreground">useful abstractions</strong>,
          thoughtful details, and systems that remain understandable after the first version ships.
        </p>
        <p>
          Away from product work, I{" "}
          <strong className="font-semibold text-foreground">play CTFs</strong>,
          explore systems programming, tune my editor, and write about things I learn along the way.
        </p>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
          Tools I work with
        </p>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill: Skill) => (
            <li
              key={skill.name}
              className="flex items-center gap-1.5 rounded-lg border border-border
                         bg-muted/30 px-2.5 py-1.5 text-xs font-medium
                         text-foreground
                         hover:border-foreground/30 hover:bg-muted/60
                         hover:text-foreground cursor-default
                         hover:cursor-pointer
                         hover:scale-105 transition-all duration-500
                         "
            >
              <skill.icon size={13} aria-hidden={true as const} />
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}