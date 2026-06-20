// data/skills.ts
import {
    SiTypescript, SiRust, SiNodedotjs, SiHono,
    SiTailwindcss, SiPostgresql, SiNextdotjs, SiReact,
    SiDocker, SiNixos, SiPython, SiCplusplus,
    SiGit, SiDjango, SiSqlite,
  } from "react-icons/si";
  import { ComponentType } from "react";
  
  export type Skill = {
    name: string;
    icon: ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
    description: string;
  };
  
  export const skills: Skill[] = [
    // Languages
    { name: "TypeScript", icon: SiTypescript, description: "How I catch bugs before they catch me" },
    { name: "Rust",       icon: SiRust,       description: "For when performance and safety both matter" },
    { name: "Python",     icon: SiPython,     description: "Scripts, ML experiments, and everything in between" },
    { name: "C / C++",   icon: SiCplusplus,  description: "Where I learned what actually happens under the hood" },
  
    // Frameworks
    { name: "React",    icon: SiReact,      description: "Primary UI layer for everything I build" },
    { name: "Next.js",  icon: SiNextdotjs,  description: "Full-stack React — routing, SSR, and all that" },
    { name: "Hono",     icon: SiHono,       description: "Lightweight backend that replaced Express for me" },
    { name: "Tailwind", icon: SiTailwindcss,description: "Never writing raw CSS again if I can help it" },
    { name: "Django",   icon: SiDjango,     description: "Python web framework for rapid development" },
  
    // Infra
    { name: "Node.js",    icon: SiNodedotjs,  description: "JS runtime, glue for most of my backend work" },
    { name: "PostgreSQL", icon: SiPostgresql, description: "Relational, reliable, boring in the best way" },
    { name: "SQLite",     icon: SiSqlite,     description: "Lightweight DB for smaller projects" },
    { name: "Docker",     icon: SiDocker,     description: "Containers so it works on prod too" },
  
    // Tools
    { name: "NixOS", icon: SiNixos, description: "My OS — reproducible, declarative, occasionally painful" },
    { name: "Git",   icon: SiGit,   description: "Version control that never lets me lose my work" },
  ] satisfies Skill[];