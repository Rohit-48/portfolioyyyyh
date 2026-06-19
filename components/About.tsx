import { stackItems } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="max-w-2xl">
      <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
        About
      </p>

      <h1 className="mt-5 max-w-xl font-fraunces text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        I build software that feels clear, fast, and dependable.
      </h1>

      <div className="mt-10 space-y-5 text-[15px] leading-7 text-muted-foreground">
        <p>
          I&apos;m a{" "}
          <strong className="font-semibold text-foreground">
            full-stack engineer
          </strong>{" "}
          working across product interfaces, backend systems, and the tooling
          between them. My usual stack is React and TypeScript in the browser,
          with Rust or Node.js behind it.
        </p>

        <p>
          I care about{" "}
          <strong className="font-semibold text-foreground">
            useful abstractions
          </strong>
          , thoughtful details, and systems that remain understandable after the
          first version ships. Good software should be pleasant for the person
          using it and honest for the person maintaining it.
        </p>

        <p>
          Away from product work, I{" "}
          <strong className="font-semibold text-foreground">play CTFs</strong>,{" "}
          explore systems programming, tune my editor, and write about the
          things I learn along the way.
        </p>
      </div>

      <div className="mt-12 border-t border-border pt-7">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Tools I work with
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {stackItems.map(({ name }) => (
            <li key={name} className="font-medium text-foreground/80">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
