import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { getBlogPost, getBlogPosts } from "@/data/blogs";

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

  const filePath = path.join(process.cwd(), "content", "blogs", `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf8");

  return (
    <div className="max-w-2xl">
      <Link
        href="/blogs"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        Back to blogs
      </Link>

      <div className="mt-4 flex items-center gap-3 text-[11px] text-muted-foreground">
        <span
          className="rounded-md border px-2 py-0.5 text-[10px] font-medium"
          style={{ borderColor: post.accent, color: post.accent }}
        >
          {post.category}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {post.readTime}
        </span>
      </div>

      <h1 className="mt-3 font-fraunces text-3xl font-semibold leading-tight tracking-tight">
        {post.title}
      </h1>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <hr className="my-8 border-dashed border-border" />

      <article className="prose prose-sm dark:prose-invert max-w-none">
        <MDXRemote source={source} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>
    </div>
  );
}
