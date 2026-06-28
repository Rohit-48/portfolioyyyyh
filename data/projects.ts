// data/projects.ts
import type { Project } from "@/types/project"; 

export const projects = [
  {
    slug: "hubeee",
    title: "DEVHUB",
    description: "A terminal-based workspace manager that scans your project root, tracks git state, scores project health, and gives you a keyboard-driven dashboard.",
    tags: ["RUST", "RATATUI", "CLI", "GIT2", "SERDE"],
    tech: ["Rust", "Ratatui", "Crossterm", "Clap", "Git2"],
    status: "live",
    year: 2026,
    repoUrl: "https://github.com/Rohit-48/HUBEEE",
    featured: true,
    image: "/images/projects/hubeee.png",
    content: `## What It Is

DevHub is a terminal-first workspace manager for developers. It scans a real project root like \`~/Dev\`, detects project types, persists metadata, and surfaces git and task context through a keyboard-driven TUI.

## Core Features

- **Workspace Scanning** — Rust, Node.js, React, Next.js, Python, Go, C/C++, Git
- **TUI Dashboard** — status badges, git branch, changed-file counts, tasks, recent files
- **Live Search** — filter by name, type, tags, status, starred, stale, archived
- **Git Integration** — inspect status, pull, add, commit from inside the dashboard
- **Health Scoring** — compute and inspect project health factors
- **Idea Vault + Sessions** — capture ideas, convert to projects, save/restore sessions

## Stack

- **Rust** — core runtime
- **Ratatui** — TUI rendering
- **Crossterm** — terminal events
- **Clap** — CLI argument parsing
- **Git2** — repository inspection
- **Serde** — metadata persistence`,
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
    image: "/images/projects/crate.png",
    content: `## What It Is

My-Crate is a self-hosted publishing system for Obsidian users. Your notes, your server, your rules.

## Features

- **Self-hosted** — full control, no Notion or Obsidian Publish lock-in
- **Fast** — Astro static generation, near-instant loads
- **Rust indexer** — fast markdown parsing and indexing
- **Hono.js API** — lightweight server layer
- **SQLite** — persistent storage without the overhead

## Stack

- **Rust** — backend indexer and webhook handler
- **Astro** — static site generation
- **Hono.js** — API server
- **TypeScript** — type safety
- **Tailwind CSS** — styling
- **SQLite** — storage`,
  },
  {
    slug: "nocturn",
    title: "NOCTURN",
    description: "Luxury sneaker e-commerce platform with 3D product viewer, auth, real-time inventory, and Stripe checkout.",
    tags: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "STRIPE", "TAILWIND"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS", "Hono.js", "Drizzle ORM"],
    status: "wip",
    year: 2026,
    repoUrl: "https://github.com/Rohit-48/Nocturn",
    image: "/images/projects/nocturn.png",
    featured: true,
    content: `## What It Is

NOCTURN is a full-stack luxury sneaker e-commerce platform. Dark aesthetic, high-end product presentation, complete purchase flow.

## Features

- **3D Product Viewer** — React Three Fiber
- **Auth** — better-auth with session management
- **Stripe Checkout** — full payment integration
- **Real-time Inventory** — PostgreSQL backed stock tracking
- **Admin Dashboard** — order and inventory management

## Stack

- **Next.js 15** — App Router, RSC
- **Hono.js** — API layer
- **Drizzle ORM** — type-safe queries
- **PostgreSQL** — primary database
- **Stripe** — payments
- **Tailwind CSS** — styling`,
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

- **Rust + Axum** — high-performance async runtime
- **Express + Node.js** — JS runtime alternative
- **TypeScript** — type safety on the Node side`,
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

Cyberpunk-themed UI components. Neon aesthetic, accessible, drops into any React project.

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

Context switching between terminal and browser kills flow.

## The Solution

Search directly from your terminal. Stay in flow.

## Stack

Rust + Clap + Tokio + Actix-web.`,
  },
  {
    slug: "cyberdeck",
    title: "CYBERDECK",
    description: "Project and task management with a full cyberpunk design system.",
    tags: ["NEXT.JS", "TYPESCRIPT", "REACT", "SHADCN"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    status: "live",
    year: 2025,
    repoUrl: "https://github.com/Rohit-48/CYBERDECK",
    liveUrl: "https://cyberchoom.netlify.app/",
    featured: false,
    image: "/images/projects/Cyberdeck.png",
    content: `## Overview

Task management app with a Cyberpunk visual identity.

## Stack

Next.js + TypeScript + Tailwind CSS + Shadcn UI. Deployed on Netlify.`,
  },
  {
    slug: "task-rs",
    title: "TASK.RS",
    description: "Blazingly fast task manager — Rust backend, React frontend.",
    tags: ["RUST", "REACT", "ACTIX-WEB", "TYPESCRIPT"],
    tech: ["Rust", "Actix-web", "React", "TypeScript"],
    status: "live",
    year: 2025,
    repoUrl: "https://github.com/Rohit-48/Task-M",
    featured: false,
    image: "/images/projects/tm.png",
    content: `## Stack

- **Actix-web** — async HTTP server
- **TypeScript React** — type-safe frontend
- **Optimistic updates** — UI responds immediately, syncs async`,
  },
  {
    slug: "yappington",
    title: "YAPPINGTON",
    description: "Minimalist monochrome blog template. Clone, write MDX, deploy.",
    tags: ["NEXT.JS", "TYPESCRIPT", "MDX"],
    tech: ["Next.js", "TypeScript", "MDX", "CSS"],
    status: "live",
    year: 2025,
    repoUrl: "https://github.com/Rohit-48/Yappington",
    featured: false,
    image: "/images/projects/p1.png",
    content: `## What It Is

Blog template for developers who want to write without fighting tools.

## Stack

Next.js + TypeScript + MDX + CSS.`,
  },
  {
    slug: "yapitte",
    title: "YAPITTE",
    description: "Social media platform built with Django. Auth, profiles, feeds, posts.",
    tags: ["DJANGO", "PYTHON", "SQL", "TAILWIND"],
    tech: ["Django", "Python", "SQL", "Tailwind CSS"],
    status: "live",
    year: 2025,
    repoUrl: "https://github.com/Rohit-48/Django-Project",
    featured: false,
    image: "/images/projects/yapitte.png",
    content: `## Overview

Social media platform built from scratch with Django — auth, profiles, follow system, feed.`,
  },
] satisfies Project[];

// helpers
export const getAllProjects = (): Project[] => projects;

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByStatus = (status: Project["status"]): Project[] =>
  projects.filter((p) => p.status === status);

export const getProjectsByYear = (year: number): Project[] =>
  projects.filter((p) => p.year === year);