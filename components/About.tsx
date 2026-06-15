"use client";

import { motion } from "motion/react";
import Typewriter from "./fancy/text/typewriter";

const TYPEWRITER_PHRASES = [
  "write code",
  "ship products",
  "break things in CTF",
  "build in Rust",
  "deploy to prod",
  "figure out systems",
];

const STACK: { name: string; accent: string }[] = [
  { name: "TypeScript", accent: "#3178C6" },
  { name: "React", accent: "#61DAFB" },
  { name: "Next.js", accent: "#aaaaaa" },
  { name: "Rust", accent: "#CE422B" },
  { name: "Node.js", accent: "#539E43" },
  { name: "Hono", accent: "#E36002" },
  { name: "Tailwind", accent: "#38BDF8" },
  { name: "PostgreSQL", accent: "#336791" },
  { name: "C / C++", accent: "#A8B9CC" },
  { name: "Nix", accent: "#7EBAE4" },
];

export function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-8 max-w-2xl">
      {/* Overline */}
      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40 font-space-grotesk">
        About
      </p>

      {/* Heading */}
      <div className="text-2xl font-bold font-inter leading-snug tracking-tight">
        <span>I was built to </span>
        <Typewriter
          text={TYPEWRITER_PHRASES}
          speed={65}
          waitTime={1400}
          deleteSpeed={35}
          cursorChar="_"
          className="text-yellow-400"
        />
      </div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col gap-3"
      >
        <p className="text-sm leading-relaxed text-foreground/70">
          Full-stack engineer building end-to-end products — tight Rust services
          in prod, polished React UIs in the browser, everything wired with
          TypeScript. I treat engineering as a craft: every abstraction has to
          earn its place.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Outside of shipping I play CTFs, dig into systems programming, and
          obsess over DX. I care about tools that feel good to use and code
          that's honest about what it does.
        </p>
      </motion.div>

      {/* Stack */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap gap-1.5"
      >
        {STACK.map(({ name, accent }, i) => (
          <motion.span
            key={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: i * 0.035 }}
            whileHover={{ y: -1 }}
            className="inline-flex items-center gap-1.5 rounded-md border border-border/40 bg-muted/30 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-border/70 cursor-default select-none"
          >
            <span
              className="size-1.5 rounded-full shrink-0"
              style={{ backgroundColor: accent }}
            />
            {name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
