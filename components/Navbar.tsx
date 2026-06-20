"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Stack from "./fancy/Stack";
import {
  BookOpen,
  Briefcase,
  Menu,
  Home,
  Images,
  Mail,
  User,
  X,
} from "lucide-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Separator } from "./ui/separator";
import { useTheme } from "./ThemeProvider";
import { profileImages, siteConfig } from "@/lib/site";

const NAV_LINKS = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/blogs", label: "Blogs", icon: BookOpen },
  { href: "#contact", label: "Contact", icon: Mail },
  { href: "/gallery", label: "Gallery", icon: Images },
] as const;

const HASH_IDS = NAV_LINKS.filter((l) => l.href.startsWith("#")).map((l) =>
  l.href.slice(1)
);

function ProfileStack() {
  const cards = useMemo(
    () =>
      profileImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`${siteConfig.name} ${index + 1}`}
          width={96}
          height={96}
          className="card-image"
          priority={index === 0}
        />
      )),
    []
  );

  return (
    <div className="size-24">
      <Stack
        autoplay
        pauseOnHover
        randomRotation
        sendToBackOnClick
        sensitivity={80}
        autoplayDelay={2500}
        cards={cards}
      />
    </div>
  );
}

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
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

    HASH_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function scrollTo(href: string) {
    setActive(href);
    setMobileOpen(false);
    if (pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/" + href);
    }
  }

  const sidebar = (
    <div className="flex h-full flex-col px-3 py-5">
      <div className="flex flex-col items-center gap-3 pb-5">
        <ProfileStack />
        <div className="text-center">
          <p className="text-sm font-semibold leading-none tracking-tight">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-[11px] text-muted-foreground">
            {siteConfig.role}
          </p>
        </div>
      </div>

      <Separator className="mb-4 opacity-50" />

      <nav className="flex flex-col gap-0.5">
        {NAV_LINKS.map(({ href, label, icon: Icon }) => {
          const isRoute = href.startsWith("/");
          const isActive = isRoute
            ? pathname === href
            : pathname === "/" && active === href;
          const classes = `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
            isActive
              ? "bg-foreground/8 text-foreground"
              : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
          }`;

          if (isRoute) {
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={classes}
              >
                <Icon
                  size={16}
                  className="shrink-0 text-muted-foreground/70 transition-colors group-hover:text-foreground/80"
                />
                <span className="tracking-tight">{label}</span>
                {isActive && (
                  <span className="ml-auto size-1.5 rounded-full bg-foreground/50" />
                )}
              </Link>
            );
          }

          return (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={classes}
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

      <div className="flex items-center justify-between gap-2 px-1">
        <div className="flex min-w-0 flex-wrap gap-2">
          {siteConfig.socials.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              className="text-[11px] text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
            </Link>
          ))}
        </div>
        <AnimatedThemeToggler
          variant="circle"
          duration={500}
          theme={resolvedTheme}
          onThemeChange={setTheme}
          className="flex size-7 hover:cursor-pointer hover:scale-105 transition-all duration-300 items-center justify-center rounded-md text-muted-foreground  hover:text-foreground"
        />
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 flex size-9 items-center justify-center rounded-lg border border-border/60 bg-background text-foreground shadow-sm md:hidden"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`absolute left-0 top-0 z-50 h-full w-52 border-r border-border/60 bg-background transition-transform duration-300 max-md:fixed ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="sticky top-0 h-screen overflow-y-auto">{sidebar}</div>
      </aside>
    </>
  );
}
