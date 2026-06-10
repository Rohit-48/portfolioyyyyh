"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#hero", icon: "⌂" },
  { label: "Projects", href: "#projects", icon: "◫" },
  { label: "Stack", href: "#stack", icon: "◈" },
  { label: "Writing", href: "#writing", icon: "✦" },
  { label: "Contact", href: "#contact", icon: "→" },
];

export function Navbar() {
  const [active, setActive] = useState("Home");

  // Sync active state with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(
        (link) => document.querySelector(link.href) as HTMLElement
      );

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(section.getAttribute("id") || "Home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Fixed the Tailwind typo and added proper semantics
    <nav className="fixed left-6 top-1/2 z-50 -translate-y-1/2 flex flex-col items-center gap-4 xl:left-12">
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <NavItem
              {...link}
              isActive={
                active.toLowerCase() === link.label.toLowerCase() ||
                active === link.href.replace("#", "")
              }
              onClick={() => setActive(link.label)}
            />
          </li>
        ))}
      </ul>

      {/* Available Status Indicator */}
      <div
        className="mt-4 flex flex-col items-center gap-1"
        title="Status: Available"
      >
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
      </div>
    </nav>
  );
}

// Extracted NavItem for clean architecture
function NavItem({
  label,
  href,
  icon,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
        isActive
          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
          : "border-white/10 bg-black/20 text-neutral-400 hover:border-white/20 hover:text-white"
      }`}
      aria-label={label}
    >
      <span className="font-mono text-lg">{icon}</span>

      {/* Tooltip on hover */}
      <span className="absolute left-14 rounded-md border border-white/10 bg-black/80 px-2 py-1 font-mono text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
        {label}
      </span>
    </Link>
  );
}
