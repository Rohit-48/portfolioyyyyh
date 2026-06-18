"use client";

import { motion } from "motion/react";
import Typewriter from "./fancy/text/typewriter";
import { TextHighlighter } from "./fancy/text/text-highlighter";
import { stackItems, typewriterPhrases } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="flex max-w-2xl flex-col gap-8">
      <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40">
        About
      </p>

      <div className="font-inter text-2xl font-bold leading-snug tracking-tight">
        <span>I was built to </span>
        <Typewriter
          text={typewriterPhrases}
          speed={65}
          waitTime={1400}
          deleteSpeed={35}
          cursorChar="_"
          className="text-yellow-400"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-3"
      >
        <p className="text-sm leading-relaxed text-foreground/70">
          <TextHighlighter highlightColor="hsl(45, 90%, 70%)" direction="ltr">
            Full-stack engineer
          </TextHighlighter>{" "}
          building end-to-end products —{" "}
          <TextHighlighter highlightColor="hsl(0, 80%, 70%)" direction="ltr">
            tight Rust services
          </TextHighlighter>{" "}
          in prod, polished React UIs in the browser, everything wired with
          TypeScript. I treat engineering as a craft:{" "}
          <TextHighlighter highlightColor="hsl(180, 80%, 70%)" direction="ltr">
            every abstraction has to earn its place.
          </TextHighlighter>
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Outside of shipping I{" "}
          <TextHighlighter highlightColor="hsl(280, 70%, 75%)" direction="ltr">
            play CTFs
          </TextHighlighter>
          , dig into systems programming, and obsess over DX. I care about tools
          that feel good to use and code that's honest about what it does.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap gap-1.5"
      >
        {stackItems.map(({ name, accent }, i) => (
          <motion.span
            key={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: i * 0.035 }}
            whileHover={{ y: -1 }}
            className="inline-flex cursor-default select-none items-center gap-1.5 rounded-md border border-border/40 bg-muted/30 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:border-border/70 hover:text-foreground"
          >
            <span
              className="size-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: accent }}
            />
            {name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
