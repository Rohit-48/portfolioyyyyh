import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, BookOpen } from "lucide-react";
import fs from "fs";
import path from "path";

import { MarkdownContent } from "@/components/MarkdownContent";
import { MotionLink } from "@/components/MotionLink";
import { ReadingProgress } from "@/components/ReadingProgress";
import { getBlogPost, getBlogPosts } from "@/data/blogs";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return { title: "Blog Post" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const filePath = path.join(process.cwd(), "content", "blogs", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const source = fs.readFileSync(filePath, "utf8");

  return (
    <div className="mx-auto w-full max-w-[68ch]">
      <ReadingProgress />

      <MotionLink
        href="/blogs"
        hoverScale={1.01}
        hoverY={-1}
        className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft
          size={14}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        Back to blogs
      </MotionLink>

      <header className="mt-10 border-b border-border pb-9">
        <span
          className="inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ borderColor: post.accent, color: post.accent }}
        >
          {post.category}
        </span>

        <h1 className="mt-5 text-balance font-fraunces text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
          {post.title}
        </h1>

        <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {post.excerpt}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{siteConfig.name}</span>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {post.readTime} read
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen size={13} />
            Article
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted/70 px-2 py-1 text-[10px] text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div className="pt-9">
        <MarkdownContent source={source} />
      </div>

      <footer className="mt-14 border-t border-border pt-7">
        <MotionLink
          href="/blogs"
          hoverScale={1.01}
          hoverY={-1}
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <ArrowLeft
            size={15}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Read more articles
        </MotionLink>
      </footer>
    </div>
  );
}
