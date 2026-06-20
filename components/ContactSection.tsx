import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import {
  SiBehance,
  SiBuymeacoffee,
  SiCaldotcom,
  SiCodeberg,
  SiGithub,
  SiKaggle,
  SiMastodon,
  SiX,
} from "react-icons/si";

import { InteractiveAddress } from "@/components/InteractiveAddress";

const email = "rohit@rohitxyz.me";
const contactLinks = [
  {
    label: "GitHub",
    handle: "@rohitvince",
    note: "Open source and projects",
    href: "https://github.com/rohitvince",
    icon: SiGithub,
  },
  {
    label: "Codeberg",
    handle: "@Spaceeeeeh",
    note: "Code and Neovim config",
    href: "https://codeberg.org/Spaceeeeeh",
    icon: SiCodeberg,
  },
  {
    label: "X",
    handle: "@rohitcpp",
    note: "Notes shared in public",
    href: "https://twitter.com/rohitcpp",
    icon: SiX,
  },
  {
    label: "LinkedIn",
    handle: "Rohit Vince",
    note: "Work and experience",
    href: "https://www.linkedin.com/in/rohitvince/",
    icon: FaLinkedinIn,
  },
  {
    label: "Mail",
    handle: email,
    note: "Write to me directly",
    href: `mailto:${email}`,
    icon: LuMail,
  },
  {
    label: "Cal.com",
    handle: "/rohitvince",
    note: "Book a conversation",
    href: "https://cal.com/rohitvince",
    icon: SiCaldotcom,
  },
  {
    label: "Buy Me a Coffee",
    handle: "@rohitvince",
    note: "Support what I make",
    href: "https://buymeacoffee.com/rohitvince",
    icon: SiBuymeacoffee,
  },
  {
    label: "Kaggle",
    handle: "@rohitvince",
    note: "Data work and notebooks",
    href: "https://www.kaggle.com/rohitvince",
    icon: SiKaggle,
  },
  {
    label: "Behance",
    handle: "@rohitvince",
    note: "Design and visual work",
    href: "https://www.behance.net/rohitvince",
    icon: SiBehance,
  },
  {
    label: "DEFCON.social",
    handle: "@rohitcpp",
    note: "Security community",
    href: "https://defcon.social/@rohitcpp",
    icon: SiMastodon,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-12 pb-6">
      <div className="max-w-xl">
        <p className="font-space-grotesk text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
          Contact
        </p>
        <h2 className="mt-3 text-balance font-fraunces text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Find me on the internet, or just say hello.
        </h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          The inbox is best for projects and collaboration. Everything else is
          where I publish code, notes, experiments, and occasional opinions.
        </p>
      </div>

      <div className="relative mt-9 overflow-hidden rounded-2xl border border-border bg-card px-3 py-8 sm:px-7 sm:py-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Primary channel
        </p>
        <InteractiveAddress email={email} />
        <p className="text-center text-[11px] text-muted-foreground/70">
          Hover, focus, or tap to inspect the address.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4 border-b border-border pb-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
          Elsewhere
        </h3>
        <span className="font-mono text-[10px] text-muted-foreground">
          {contactLinks.length} places
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {contactLinks.map((social, index) => {
          const external = !social.href.startsWith("mailto:");
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer me" : undefined}
              className={`group flex min-w-0 items-start gap-3 border-border py-4 transition-colors hover:bg-muted/25 sm:px-4 ${index < contactLinks.length - 2 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0"}`}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground transition-colors group-hover:border-foreground/20 group-hover:text-foreground">
                <Icon size={15} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    {social.label}
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                </span>
                <span className="mt-0.5 block truncate text-[11px] text-muted-foreground">
                  {social.handle}
                </span>
                <span className="mt-1.5 block text-[10px] text-muted-foreground/65">
                  {social.note}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
