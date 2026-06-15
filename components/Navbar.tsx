"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Stack from "./fancy/Stack";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Separator } from "./ui/separator";

const NAV_LINKS = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: Briefcase },
  { href: "#blogs", label: "Blogs", icon: BookOpen },
  { href: "#contact", label: "Contact", icon: Mail },
] as const;

const SOCIAL_LINKS = [
  { href: "https://github.com/rohitvince", label: "GitHub" },
  { href: "https://twitter.com/rohitcpp", label: "X / Twitter" },
] as const;

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const [active, setActive] = useState<string>("#hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { threshold: 0.5 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function scrollTo(href: string) {
    setActive(href);
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  const sidebar = (
    <div className="flex h-full flex-col px-3 py-5">
      {/* Photo stack + name */}
      <div className="flex flex-col items-center gap-3 pb-5">
        <div style={{ width: 96, height: 96 }}>
          <Stack
            autoplay
            pauseOnHover
            randomRotation
            sendToBackOnClick
            sensitivity={80}
            autoplayDelay={2500}
            cards={[
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
            ].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`Rohit ${i + 1}`}
                className="card-image"
              />
            ))}
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold leading-none tracking-tight">
            Rohit
          </p>
          <p className="mt-1 text-[11px] text-muted-foreground">
            Full Stack Engineer
          </p>
        </div>
      </div>

      <Separator className="mb-4 opacity-50" />

      {/* Nav links */}
      <nav className="flex flex-col gap-0.5">
        {NAV_LINKS.map(({ href, label, icon: Icon }) => {
          const isActive = active === href;
          return (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                isActive
                  ? "bg-foreground/8 text-foreground"
                  : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              <Icon
                size={16}
                className={`shrink-0 transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground/70 group-hover:text-foreground/80"
                }`}
              />
              <span className="tracking-tight">{label}</span>
              {isActive && (
                <span className="ml-auto size-1.5 rounded-full bg-foreground/50" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="flex-1" />

      <Separator className="mb-4 opacity-50" />

      {/* Social links + theme toggle */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1">
          {SOCIAL_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink size={14} />
            </Link>
          ))}
        </div>
        <AnimatedThemeToggler
          variant="circle"
          duration={500}
          className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 flex size-9 items-center justify-center rounded-lg border border-border/60 bg-background text-foreground shadow-sm md:hidden"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar — absolute within the max-w container so it centres with the page */}
      <aside
        className={`absolute top-0 left-0 z-50 h-full w-52 border-r border-border/60 bg-background transition-transform duration-300 max-md:fixed ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="sticky top-0 h-screen overflow-y-auto">{sidebar}</div>
      </aside>
    </>
  );
}
