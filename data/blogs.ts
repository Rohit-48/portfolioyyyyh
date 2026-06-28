import type { BlogPost } from "@/types/blog";
export const blogPosts = [
  {
    slug: "cloudflared-tunnel",
    title:
      "Cloudflare Tunnel (cloudflared): Expose Local Services Without Port Forwarding",
    excerpt:
      "A quick mental model for how Cloudflare Tunnel works and why it's safer than port forwarding.",
    category: "Infrastructure",
    date: "Jan 2026",
    readTime: "8 min",
    image: "/images/profile/higuruma.png",
    accent: "#CE422B",
    tags: ["Cloudflare", "Tunnel", "Self-hosting", "Networking", "NixOS"],
  },
  {
    slug: "nixos-distro",
    title: "NixOS: A Purely Functional Linux Distribution",
    excerpt:
      "In meme lang: The ultimate boss of distro fight — an immutable, declarative distro where everything is configured in just one file.",
    category: "Systems",
    date: "Dec 2025",
    readTime: "5 min",
    image: "/images/profile/Clove.png",
    accent: "#7EBAE4",
    tags: ["Nix", "NixOS", "Distro", "Linux"],
  },
  {
    slug: "nvim-stuff",
    title: "My Neovim Config: I'm slowly becoming vim guy.",
    excerpt:
      "A practical tour of my NvChad-based Neovim setup for LSP, formatting, debugging, navigation, and daily terminal-first development.",
    category: "Tooling",
    date: "May 2026",
    readTime: "10 min",
    image: "/images/profile/gojo.png",
    accent: "#38BDF8",
    tags: ["Neovim", "NvChad", "LSP", "Developer Tools"],
  },
] satisfies BlogPost[];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
