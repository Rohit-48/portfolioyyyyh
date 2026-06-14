"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  File,
  FileCode,
  FileText,
  Folder,
  FolderOpen,
  Home,
  Menu,
  User,
  X,
} from "lucide-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { ScrollArea } from "./ui/scroll-area";

type TreeNode = {
  name: string;
  type: "file" | "folder";
  href?: string;
  children?: TreeNode[];
  icon?: React.ElementType;
};

const fileIcons: Record<string, React.ElementType> = {
  hero: Home,
  about: User,
  contact: FileText,
};

const tree: TreeNode[] = [
  {
    name: "portfolio",
    type: "folder",
    children: [
      { name: "hero.tsx", type: "file", href: "#hero", icon: fileIcons.hero },
      { name: "about.tsx", type: "file", href: "#about", icon: fileIcons.about },
      { name: "projects", type: "folder", children: [] },
      { name: "blogs", type: "folder", children: [] },
      { name: "contact.tsx", type: "file", href: "#contact", icon: fileIcons.contact },
    ],
  },
];

function FileIcon({ name, icon: Icon }: { name: string; icon?: React.ElementType }) {
  if (Icon) return <Icon size={14} />;
  if (name.endsWith(".tsx")) return <FileCode size={14} className="text-[#3178C6]" />;
  return <File size={14} className="text-[#AEAEB2]" />;
}

function FileTreeItem({
  node,
  depth = 0,
  activeFile,
  onSelect,
}: {
  node: TreeNode;
  depth?: number;
  activeFile: string;
  onSelect: (href: string) => void;
}) {
  const [open, setOpen] = useState(true);

  if (node.type === "folder") {
    const isActive = node.children?.some((c) => c.href && activeFile === c.href);

    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={`flex w-full items-center gap-1.5 px-3 py-1.5 text-xs font-space-grotesk transition-all duration-150 ${
            isActive
              ? "text-[#E8A820]"
              : "text-[#6B6B70] hover:text-[#AEAEB2]"
          }`}
          style={{ paddingLeft: `${depth * 16 + 12}px` }}
        >
          <span className="shrink-0 text-[10px] opacity-60">
            {open ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
          </span>
          <span className="shrink-0">
            {open ? (
              <FolderOpen size={14} className="text-[#E8A820]" />
            ) : (
              <Folder size={14} className="text-[#E8A820]" />
            )}
          </span>
          <span className="truncate font-medium tracking-tight">{node.name}</span>
        </button>
        {open &&
          node.children?.map((child) => (
            <FileTreeItem
              key={child.name}
              node={child}
              depth={depth + 1}
              activeFile={activeFile}
              onSelect={onSelect}
            />
          ))}
      </div>
    );
  }

  const isActive = activeFile === node.href;
  const isTsx = node.name.endsWith(".tsx");

  return (
    <button
      onClick={() => {
        onSelect(node.href!);
        const el = document.querySelector(node.href!);
        el?.scrollIntoView({ behavior: "smooth" });
      }}
      className={`group flex w-full items-center gap-1.5 px-3 py-1.5 text-xs font-space-grotesk transition-all duration-150 ${
        isActive
          ? "bg-[#E8A820]/10 text-[#E8A820] border-r-2 border-[#E8A820]"
          : "text-[#6B6B70] hover:text-[#AEAEB2] hover:bg-white/5"
      }`}
      style={{ paddingLeft: `${depth * 16 + 12}px` }}
    >
      <span className="shrink-0 w-4 flex justify-center">
        <FileIcon name={node.name} icon={node.icon} />
      </span>
      <span className="truncate tracking-tight">
        {node.name.replace(".tsx", "")}
        {isTsx && (
          <span className="text-[10px] opacity-40 ml-0.5 font-mono">.tsx</span>
        )}
      </span>
    </button>
  );
}

export function Navbar() {
  const [activeFile, setActiveFile] = useState("#hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveFile(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 },
    );

    const ids = ["hero", "about", "projects", "blogs", "contact"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const sidebar = (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-muted-foreground/60 uppercase">
          Explorer
        </span>
        <AnimatedThemeToggler
          variant="circle"
          duration={500}
          className="flex size-7 items-center justify-center rounded-md border border-border/40 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200"
        />
      </div>

      {/* File tree */}
      <ScrollArea className="flex-1">
        <div className="py-2">
          {tree.map((node) => (
            <FileTreeItem
              key={node.name}
              node={node}
              activeFile={activeFile}
              onSelect={setActiveFile}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 block rounded-md p-2 text-black dark:text-white md:hidden"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <nav
        className={`fixed left-0 top-0 z-50 h-screen w-56 border-r border-border/60 bg-white transition-transform duration-300 dark:bg-[#09090b] ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {sidebar}
      </nav>
    </>
  );
}
