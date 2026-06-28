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
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
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
          whileHover={{ y: -5 }}
          className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/80 shadow-sm transition-colors hover:border-foreground/20"
          style={{ ["--blog-accent" as string]: post.accent }}
        >
          <Link href={`/blogs/${post.slug}`} className="block">
            <div className="absolute inset-y-0 left-0 w-1 bg-[var(--blog-accent)] opacity-80" />
            <div className="grid min-h-56 grid-cols-1 sm:grid-cols-[190px_1fr]">
              <div className="relative h-56 overflow-hidden bg-muted sm:h-full">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 190px, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-md border border-white/20 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                  {post.category}
                </div>
              </div>

              <div className="relative flex min-w-0 flex-col p-5 sm:p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={13} />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="max-w-xl font-fraunces text-2xl font-semibold leading-tight tracking-tight text-foreground">
                  {post.title}
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/70 bg-muted/40 px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {tag}
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
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
                    Read note
                    <ArrowUpRight
                      size={14}
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
