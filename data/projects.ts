export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects = [
  {
    slug: "nocturn",
    title: "NOCTURN",
    description: "Luxury sneaker e-commerce platform",
    longDescription:
      "A full-stack e-commerce platform for luxury sneakers with real-time inventory, payment integration, and admin dashboard.",
    image: "/images/profile/profile-image.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind"],
    featured: true,
  },
  {
    slug: "ctf-toolkit",
    title: "CTF Toolkit",
    description: "Collection of CTF solving utilities",
    longDescription:
      "A modular toolkit for common CTF challenges including crypto, stego, forensics, and reverse engineering helpers.",
    image: "/images/profile/profile-image.png",
    tech: ["Rust", "Python", "CLI", "Crypto"],
    featured: false,
  },
] satisfies Project[];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
