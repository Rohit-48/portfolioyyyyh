"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "home",     href: "#hero" },
  { label: "project",  href: "#projects" },
  { label: "blogs",    href: "#blogs" },
  { label: "contacts", href: "#contact" },
];

function NavItem({
  label,
  href,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link href={href} onClick={onClick} className="group flex w-fit flex-col">
      <span
        className={`text-2xl tracking-wide transition-colors duration-300 ${
          isActive
            ? "text-black dark:text-white"
            : "text-[#AEAEB2] group-hover:text-black dark:group-hover:text-white"
        }`}
      >
        {label}
      </span>
      <span
        className={`h-0.5 bg-black dark:bg-white transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } 
    );

    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // no deps needed, links is static

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-56 border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#09090b]">
      <div className="flex h-full flex-col justify-center pl-12">
        <ul className="flex flex-col gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <NavItem
                {...link}
                isActive={active === link.label}
                onClick={() => setActive(link.label)}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
