import { Separator } from "@/components/ui/separator";
import Typewriter from "./fancy/text/typewriter";

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-8">
      {/* Label */}
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        About
      </span>

      {/* Heading */}
      <div className="flex flex-col gap-3">
        <p className="whitespace-pre-wrap text-3xl">
          <span>{"I was built to "}</span>
          <Typewriter
            text={[
              "write code",
              "ship products",
              "break things in CTF",
              "build in Rust",
              "deploy to prod",
              "figure out systems",
            ]}
            speed={70}
            className="text-yellow-500 text-pretty"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </p>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
       Web Engineer crafting digital art for the web. TypeScript and React are my go-to tools, backed by rigorous engineering.
      </p>

      <Separator />
    </section>
  );
}
