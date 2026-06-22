import Link from "next/link";
import { LuFileText, LuMapPin, LuArrowUpRight } from "react-icons/lu";
import { SiGithub, SiX } from "react-icons/si";

import VerticalCutReveal from "./fancy/text/vertical-cut-reveal";
import TiltedCard from "./fancy/TiltedCard";

export function HeroCard() {
  return (
    <div className="flex items-center gap-14">
      {/* Image */}
      <div className="shrink-0" style={{ width: 220, height: 220 }}>
        <TiltedCard
          imageSrc="/images/profile/profile-image.png"
          altText="Rohit"
          captionText="Rohit"
          containerHeight="220px"
          containerWidth="220px"
          imageHeight="220px"
          imageWidth="220px"
          rotateAmplitude={12}
          scaleOnHover={1.08}
          showMobileWarning={false}
          showTooltip={true}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col font-inter">
        {/* Status row */}
        <div className="mb-5 flex items-center gap-4 text-xs text-muted-foreground">
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
          containerClassName="text-6xl font-bold leading-none tracking-tight"
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
          containerClassName="mt-2 text-2xl font-semibold leading-snug text-muted-foreground"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 21,
            delay: 0.8,
          }}
        >
          {`Full Stack Engineer`}
        </VerticalCutReveal>

        {/* Bio */}
        <VerticalCutReveal
          splitBy="characters"
          staggerDuration={0.018}
          staggerFrom="center"
          containerClassName="mt-3 text-sm font-normal leading-relaxed text-muted-foreground/70 max-w-sm"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 21,
            delay: 1.1,
          }}
        >
          {`Next.js · Hono · Rust · Infra.`}
        </VerticalCutReveal>

        {/* Bottom row */}
        <div className="mt-6 flex items-center gap-3">
          {/* Resume */}
          <Link
            href="/images/profile/resume.pdf"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border
                       border-border bg-foreground px-3 text-xs font-semibold
                       text-background transition-colors duration-200
                       hover:bg-foreground/90 "
            target="_blank"
            rel="noreferrer"
          >
            <LuFileText size={12} />
            Resume
          </Link>

          {/* GitHub */}
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

          {/* X */}
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
