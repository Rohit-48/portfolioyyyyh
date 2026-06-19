import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  source: string;
};

export function MarkdownContent({ source }: MarkdownContentProps) {
  return (
    <article className="markdown-content">
      <MDXRemote
        source={source}
        options={{
          parseFrontmatter: true,
          mdxOptions: { remarkPlugins: [remarkGfm] },
        }}
      />
    </article>
  );
}
