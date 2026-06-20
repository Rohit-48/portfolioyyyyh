// data/projects.ts

export type Project = {
  slug: string;
  title: string;
  description: string;
  content: string;
  tech: string[];
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  status: "live" | "wip" | "archived";
  year: number;
};

export const projects: Project[] = [
  {
    slug: "hubeee",
    title: "DEVHUB",
    description: "A terminal-based workspace manager that scans your project root, tracks git state, scores project health, and gives you a keyboard-driven dashboard for active work.",
    tags: ["RUST", "RATATUI", "CLI", "GIT2", "SERDE"],
    tech: ["Rust", "Ratatui", "Crossterm", "Clap", "Git2"],
    status: "live",
    year: 2026,
    repoUrl: "https://github.com/Rohit-48/HUBEEE",
    featured: true,
    image: "/images/projects/hubeee.svg",
    content: `## What It Is

DevHub is a terminal-first workspace manager for developers. It scans a real project root like \`~/Dev\`, detects project types, persists metadata, and surfaces git and task context through a keyboard-driven TUI.

## Core Features

- **Workspace Scanning** - detect direct-child projects across Rust, Node.js, React, Next.js, Python, Go, C/C++, Git, and unknown folders
- **TUI Dashboard** - browse projects with status badges, git branch details, changed-file counts, tasks, and recent files
- **Live Search** - filter by project name, type, tags, status, starred, stale, and archived states
- **Git Integration** - inspect status, pull, add all changes, and create commits from inside the dashboard
- **Health Scoring** - compute project health and inspect the factors behind the score
- **Idea Vault + Sessions** - capture ideas, convert them into projects, and save or restore workspace sessions

## Stack

- **Rust** - core application and CLI runtime
- **Ratatui** - terminal user interface rendering
- **Crossterm** - terminal events and screen management
- **Clap** - command parsing for CLI flows
- **Git2** - repository inspection and git actions
- **Serde / Serde JSON** - persisted metadata, sessions, and config`,
  },
  {
    slug: "my-crate",
    title: "MY-CRATE",
    description: "A lightweight, self-hosted publishing system for Obsidian users. Transforms markdown notes into a fast, customizable website — no subscription lock-in.",
    tags: ["RUST", "ASTRO", "HONO.JS", "TYPESCRIPT", "TAILWIND", "SQLITE"],
    tech: ["Rust", "Astro", "Hono.js", "TypeScript", "Tailwind CSS", "SQLite"],
    status: "live",
    year: 2026,
    repoUrl: "https://github.com/Rohit-48/My-Crate",
    liveUrl: "https://logs.rohitxyz.me",
    featured: true,
    image: "/images/projects/my-crate.png",
    content: `## What It Is

My-Crate is a lightweight, self-hosted publishing system built for Obsidian users who want full control over their knowledge. It transforms markdown notes into a fast, customizable, and developer-friendly website, without subscription lock-in.

## Features

- **Customizable** - fully customizable theme and layout
- **Fast** - built with Astro for fast page loads
- **Self-hosted** - your notes, your server, your rules
- **SQLite** - lightweight database storage
- **Hono.js** - lightweight server-side API
- **Rust indexer** - fast markdown parsing and indexing

## Stack

- **Rust** - backend indexer and webhook handler
- **Astro** - static site generation
- **Hono.js** - API server
- **TypeScript** - type safety throughout
- **Tailwind CSS** - styling
- **SQLite** - persistent storage`,
  },
  {
    slug: "nocturn",
    title: "NOCTURN",
    description: "Luxury sneaker e-commerce platform with 3D product viewer, auth, real-time inventory, and Stripe checkout.",
    tags: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "STRIPE", "TAILWIND"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS", "Hono.js", "Drizzle ORM"],
    status: "wip",
    year: 2026,
    repoUrl: "",
    featured: true,
    image: "/images/projects/nocturn.png",
    content: `## What It Is

NOCTURN is a full-stack luxury sneaker e-commerce platform. Dark aesthetic, high-end product presentation, and a complete purchase flow.

## Features

- **3D Product Viewer** - React Three Fiber powered model viewer
- **Auth** - better-auth with session management
- **Stripe Checkout** - full payment integration
- **Real-time Inventory** - PostgreSQL backed stock tracking
- **Admin Dashboard** - order and inventory management

## Stack

- **Next.js 15** - App Router, RSC
- **Hono.js** - API layer
- **Drizzle ORM** - type-safe database queries
- **PostgreSQL** - primary database
- **Stripe** - payment processing
- **Tailwind CSS** - styling`,
  },
  {
    slug: "neurolink",
    title: "NEUROLINK",
    description: "Peer-to-peer file sharing across devices on the same local network. Dual runtime: Express (Node.js) and Rust (Axum).",
    tags: ["RUST", "AXUM", "EXPRESS", "NODE.JS", "TYPESCRIPT"],
    tech: ["Rust", "Axum", "Express", "Node.js", "TypeScript"],
    status: "live",
    year: 2026,
    repoUrl: "https://github.com/Rohit-48/Neurolink",
    featured: true,
    image: "/images/projects/neurolink.png",
    content: `## Overview

NeuroLink v2.0 — two runtimes, one repo. Local network file sharing with batch upload, zip download, and diff support.

## Stack

- **Rust + Axum** - high-performance async runtime
- **Express + Node.js** - JS runtime alternative
- **TypeScript** - type safety on the Node side`,
  },
  {
    slug: "cyberpunk-components-library",
    title: "CYBERCOMPO",
    description: "A library of cyberpunk-themed UI components built with Next.js and TypeScript.",
    tags: ["NEXT.JS", "TYPESCRIPT", "REACT", "TAILWIND"],
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    status: "wip",
    year: 2026,
    repoUrl: "https://github.com/Rohit-48/Cyberpunk-Components-Library",
    liveUrl: "https://cyberpunk-components-library.vercel.app/",
    featured: false,
    image: "/images/projects/cyberCompo.png",
    content: `## What It Is

A collection of cyberpunk-themed UI components. Neon aesthetic, fully accessible, drops into any React project.

## Stack

Next.js + TypeScript + Tailwind CSS.`,
  },
  {
    slug: "t-browsee",
    title: "T-BROWSEE",
    description: "Search the web from your terminal without breaking your flow. Rust-powered CLI with async HTTP.",
    tags: ["RUST", "ACTIX-WEB", "TOKIO", "CLI"],
    tech: ["Rust", "Clap", "Tokio", "Actix-web"],
    status: "wip",
    year: 2026,
    repoUrl: "https://github.com/Rohit-48/T-Browsee",
    featured: false,
    image: "/images/projects/t-browsee.png",
    content: `## The Problem

Context switching between terminal and browser kills developer flow.

## The Solution

T-Browsee lets you search directly from your terminal. Run a command, get answers, stay in flow.

## Stack

Rust + Clap + Tokio + Actix-web.`,
  },
  {
    slug: "cyberdeck",
    title: "CYBERDECK",
    description: "A project and task management web app with a full cyberpunk design system.",
    tags: ["NEXT.JS", "TYPESCRIPT", "REACT", "SHADCN"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    status: "live",
    year: 2025,
    repoUrl: "https://github.com/Rohit-48/CYBERDECK",
    liveUrl: "https://cyberchoom.netlify.app/",
    featured: false,
    image: "/images/projects/Cyberdeck.png",
    content: `## Overview

CYBERDECK is a task management app with a Cyberpunk visual identity. Create tasks, organize by project, track progress.

## Stack

Next.js + TypeScript + Tailwind CSS + Shadcn UI. Deployed on Netlify.`,
  },
  {
    slug: "task-rs",
    title: "TASK.RS",
    description: "A blazingly fast task manager — Rust backend, React frontend.",
    tags: ["RUST", "REACT", "ACTIX-WEB", "TYPESCRIPT"],
    tech: ["Rust", "Actix-web", "React", "TypeScript"],
    status: "live",
    year: 2025,
    repoUrl: "https://github.com/Rohit-48/Task-M",
    featured: false,
    image: "/images/projects/tm.png",
    content: `## Stack

- **Actix-web** - async HTTP server in Rust
- **TypeScript React** - full type safety frontend
- **Optimistic updates** - UI responds immediately, syncs async`,
  },
  {
    slug: "yappington",
    title: "YAPPINGTON",
    description: "Minimalist monochrome blog template for developers. Clone, write MDX, deploy.",
    tags: ["NEXT.JS", "TYPESCRIPT", "MDX"],
    tech: ["Next.js", "TypeScript", "MDX", "CSS"],
    status: "live",
    year: 2025,
    repoUrl: "https://github.com/Rohit-48/Yappington",
    featured: false,
    image: "/images/projects/p1.png",
    content: `## What It Is

A blog template for developers who want to write without fighting tools.

## Stack

Next.js + TypeScript + MDX + CSS.`,
  },
  {
    slug: "yapitte",
    title: "YAPITTE",
    description: "A social media platform built with Django and Python. Auth, profiles, feeds, and posts.",
    tags: ["DJANGO", "PYTHON", "SQL", "TAILWIND"],
    tech: ["Django", "Python", "SQL", "Tailwind CSS"],
    status: "live",
    year: 2025,
    repoUrl: "https://github.com/Rohit-48/Django-Project",
    featured: false,
    image: "/images/projects/yapitte.png",
    content: `## Overview

Yapitte is a social media platform built from scratch with Django.

## Features

- User auth, profiles, follow system
- Post creation and chronological feed`,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}