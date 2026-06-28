import Link from "next/link";
import { LuFileText, LuMapPin, LuArrowUpRight } from "react-icons/lu";
import { SiGithub, SiX } from "react-icons/si";

import VerticalCutReveal from "./fancy/text/vertical-cut-reveal";
import TiltedCard from "./fancy/TiltedCard";

export function HeroCard() {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-14">

      {/* Image — centered on mobile, left on desktop */}
      <div className="shrink-0" style={{ width: 180, height: 180 }}>
        <TiltedCard
          imageSrc="/images/profile/profile-image.png"
          altText="Rohit"
          captionText="Rohit"
          containerHeight="180px"
          containerWidth="180px"
          imageHeight="180px"
          imageWidth="180px"
          rotateAmplitude={12}
          scaleOnHover={1.08}
          showMobileWarning={false}
          showTooltip={true}
        />
      </div>

      {/* Content — centered on mobile, left-aligned on desktop */}
      <div className="flex w-full flex-col items-center font-inter md:items-start">

        {/* Status row */}
        <div className="mb-5 flex flex-wrap items-center justify-center gap-4 text-xs
                        text-muted-foreground md:justify-start">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            <span>Available for work</span>
          </div>
          <div className="flex items-center gap-1">
            <LuMapPin size={11} />
            <span>Anywhere</span>
          </div>
        </div>

        {/* Name */}
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="first"
          containerClassName="text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {`Rohit`}
        </VerticalCutReveal>

        {/* Role */}
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.025}
          staggerFrom="last"
          reverse={true}
          containerClassName="mt-2 text-lg font-semibold leading-snug text-muted-foreground sm:text-xl md:text-2xl"
          transition={{ type: "spring", stiffness: 400, damping: 21, delay: 0.8 }}
        >
          {`Full Stack Engineer`}
        </VerticalCutReveal>

        {/* Bio */}
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.018}
          staggerFrom="center"
          containerClassName="mt-3 max-w-sm text-center text-sm font-normal
                              leading-relaxed text-muted-foreground/70 md:text-left"
          transition={{ type: "spring", stiffness: 400, damping: 21, delay: 1.1 }}
        >
          {`Next.js · Hono · Rust · Infra.`}
        </VerticalCutReveal>

        {/* Bottom row — wraps on small screens */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">

          <Link
            href="/images/profile/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border
                       border-border bg-foreground px-3 text-xs font-semibold
                       text-background transition-colors duration-200
                       hover:bg-foreground/90"
          >
            <LuFileText size={12} />
            Resume
          </Link>

          <Link
            href="https://github.com/Rohit-48"
            target="_blank"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border
                       border-border bg-background px-3 text-xs font-medium
                       text-muted-foreground transition-colors duration-200
                       hover:border-foreground hover:text-foreground"
          >
            <SiGithub size={12} />
            GitHub
            <LuArrowUpRight size={10} />
          </Link>

          <Link
            href="https://x.com/rohitcpp"
            target="_blank"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border
                       border-border bg-background px-3 text-xs font-medium
                       text-muted-foreground transition-colors duration-200
                       hover:border-foreground hover:text-foreground"
          >
            <SiX size={11} />
            @rohitcpp
            <LuArrowUpRight size={10} />
          </Link>

        </div>
      </div>
    </div>
  );
}