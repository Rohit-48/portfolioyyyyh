"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import type { BlogPost } from "@/types/blog";

type BlogCardsProps = {
  posts: BlogPost[];
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.12 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 26 },
  },
};

export function BlogCards({ posts }: BlogCardsProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="mt-10 flex flex-col gap-5"
    >
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          variants={card}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.99 }}
          className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:border-[var(--blog-accent)]/30 hover:bg-[var(--blog-accent)]/[0.025] hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
          style={{ ["--blog-accent" as string]: post.accent }}
        >
          <Link href={`/blogs/${post.slug}`} className="block">
            {/* Left accent bar */}
            <div className="absolute inset-y-0 left-0 w-[3px] bg-[var(--blog-accent)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="grid min-h-56 grid-cols-1 sm:grid-cols-[200px_1fr]">
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-muted sm:h-full">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 200px, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:bg-gradient-to-r sm:from-black/15 sm:to-transparent" />
                {/* Category badge — solid accent color */}
                <div
                  className="absolute left-3 top-3 rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
                  style={{ backgroundColor: post.accent }}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="relative flex min-w-0 flex-col p-5 sm:p-6">
                {/* Decorative large index number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 select-none font-space-grotesk text-[96px] font-bold leading-none text-foreground opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.07]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={12} />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="max-w-xl font-fraunces text-2xl font-semibold leading-tight tracking-tight text-foreground">
                  {post.title}
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border/60 bg-muted/40 px-2 py-0.5 text-[10px] text-muted-foreground transition-colors duration-200 group-hover:border-[var(--blog-accent)]/25"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="h-px flex-1 overflow-hidden bg-border">
                    <motion.div
                      className="h-full origin-left bg-[var(--blog-accent)]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.7, delay: index * 0.08 }}
                    />
                  </div>
                  {/* CTA pill with accent tint */}
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--blog-accent)]/25 bg-[var(--blog-accent)]/[0.08] px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 group-hover:border-[var(--blog-accent)]/45 group-hover:bg-[var(--blog-accent)]/[0.14]">
                    Read note
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
