import type { Metadata } from "next";

import { BlogCards } from "@/components/BlogCards";
import { getBlogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Notes from Rohit on full-stack engineering, Rust, React, tooling, and CTFs.",
};

export default function BlogsPage() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-4xl">
      <header className="relative overflow-hidden border-b border-border/70 pb-8">
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.34em] text-muted-foreground/50">
          Field notes
        </p>
        <h1 className="mt-4 max-w-2xl font-fraunces text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Blogs from the parts of engineering that stay interesting.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Systems, frontend polish, CTF lessons, and tooling notes. Short enough
          to read with coffee, sharp enough to keep around.
        </p>
      </header>

      <BlogCards posts={posts} />
    </div>
  );
}
