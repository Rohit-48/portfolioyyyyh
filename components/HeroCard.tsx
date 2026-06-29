import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";

import { siteConfig } from "@/lib/site";
import { MotionLink } from "@/components/MotionLink";
import VerticalCutReveal from "./fancy/text/vertical-cut-reveal";
import TiltedCard from "./fancy/TiltedCard";

export function HeroCard() {
  return (
    <div>
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
        <div className="relative shrink-0" style={{ width: 196, height: 196 }}>
          <div className="absolute inset-3 rounded-2xl bg-foreground/5 blur-xl" />
          <TiltedCard
            imageSrc={siteConfig.profileImage}
            altText={siteConfig.name}
            captionText={siteConfig.name}
            containerHeight="196px"
            containerWidth="196px"
            imageHeight="196px"
            imageWidth="196px"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-center font-inter md:items-start">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground md:justify-start">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-green-500/20 bg-green-500/10 px-2 py-1 text-green-700 dark:text-green-400">
              <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
              Available for work
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1">
              <MapPin size={12} aria-hidden />
              Remote / India
            </span>
          </div>

          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            containerClassName="text-center font-fraunces text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-left"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {siteConfig.name}
          </VerticalCutReveal>

          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.022}
            staggerFrom="last"
            reverse={true}
            containerClassName="mt-3 text-center text-lg font-semibold leading-snug text-foreground/80 sm:text-xl md:text-left"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 21,
              delay: 0.65,
            }}
          >
            {siteConfig.role}
          </VerticalCutReveal>

          <p className="mt-4 max-w-xl text-center text-sm leading-6 text-muted-foreground md:text-left">
            I build fast, practical web products with TypeScript, React, and
            Rust-backed systems. I care about clean interfaces, reliable
            backends, and shipping things that feel sharp in daily use.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
            <MotionLink
              href="#projects"
              className="inline-flex h-9 items-center gap-2 rounded-lg bg-foreground px-3.5 text-xs font-semibold text-background transition-colors hover:bg-foreground/90"
            >
              <Sparkles size={14} aria-hidden />
              See work
              <ArrowDown size={13} aria-hidden />
            </MotionLink>

            <MotionLink
              href="/images/profile/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-background px-3.5 text-xs font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted/40"
            >
              <FileText size={14} aria-hidden />
              Resume
            </MotionLink>

            <MotionLink
              href="https://github.com/Rohit-48"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Rohit's GitHub profile"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <SiGithub size={15} aria-hidden />
            </MotionLink>

            <MotionLink
              href="https://x.com/rohitcpp"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Rohit's X profile"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <SiX size={14} aria-hidden />
            </MotionLink>
          </div>
        </div>
      </div>

      <div className="mt-7 grid gap-2 border-t border-border/70 pt-5 text-xs text-muted-foreground sm:grid-cols-3">
        <div className="flex items-center justify-center gap-1.5 md:justify-start">
          <span className="font-medium text-foreground">10+</span>
          shipped projects
        </div>
        <div className="flex items-center justify-center gap-1.5 md:justify-start">
          <span className="font-medium text-foreground">Web</span>
          apps and infra
        </div>
        <MotionLink
          href="/projects"
          className="group inline-flex items-center justify-center gap-1.5 font-medium text-foreground md:justify-start"
        >
          Browse all projects
          <ArrowUpRight
            size={13}
            aria-hidden
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </MotionLink>
      </div>
    </div>
  );
}
