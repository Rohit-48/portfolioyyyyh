export const siteConfig = {
  name: "Rohit",
  role: "Full Stack Engineer",
  title: "Rohit | Web Engineer",
  description:
    "Web Engineer crafting digital art for the web. TypeScript and React are my go-to tools, backed by rigorous engineering.",
  url: "https://rohitvince.in",
  profileImage: "/images/profile/profile-image.png",
  ogImage: "/images/profile/card.png",
  xHandle: "@rohitcpp",
  socials: [
    { href: "https://github.com/rohitvince", label: "GitHub" },
    { href: "https://twitter.com/rohitcpp", label: "X / Twitter" },
  ],
} as const;

export const profileImages = [
  "/images/profile/profile-image.png",
  "/images/profile/prfileeyyh.png",
  "/images/profile/profile-01.png",
  "/images/profile/profile-02.png",
  "/images/profile/profile-03.png",
  "/images/profile/IMG_20260109_002332_404.png",
  "/images/profile/Clove.png",
  "/images/profile/Giyuu.png",
  "/images/profile/gojo.png",
  "/images/profile/higuruma.png",
  "/images/profile/toji.png",
] as const;

export const galleryImages = [
  { src: "/images/profile/profile-image.png", alt: "Profile" },
  { src: "/images/profile/Giyuu.png", alt: "Giyuu" },
  { src: "/images/profile/Clove.png", alt: "Clove" },
  { src: "/images/profile/gojo.png", alt: "Gojo" },
  { src: "/images/profile/toji.png", alt: "Toji" },
  { src: "/images/profile/higuruma.png", alt: "Higuruma" },
] as const;

export const typewriterPhrases = [
  "write code",
  "ship products",
  "break things in CTF",
  "build in Rust",
  "deploy to prod",
  "figure out systems",
] as const;

export const stackItems = [
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
] as const;
