"use client";

import {
  type ComponentType,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { AtSign, Globe, Mail, User } from "lucide-react";

type Highlight = "name" | "website" | "email" | null;
type SegmentName = "name" | "at" | "domain" | "extension";
type IconComponent = ComponentType<{ size?: number; "aria-hidden"?: boolean }>;

function InstagramIcon({
  size = 18,
}: {
  size?: number;
  "aria-hidden"?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const actions: Array<{
  type: NonNullable<Highlight>;
  label: string;
  icon: IconComponent;
}> = [
  { type: "name", label: "Name", icon: User },
  { type: "website", label: "Website", icon: Globe },
  { type: "email", label: "Email", icon: Mail },
];

const activeSegments: Record<NonNullable<Highlight>, SegmentName[]> = {
  name: ["name"],
  website: ["domain", "extension"],
  email: ["name", "at", "domain", "extension"],
};

type BoxPosition = { x: number; width: number };

function DashedGuide({
  position,
  visible,
  label,
}: {
  position: BoxPosition;
  visible: boolean;
  label?: string;
}) {
  const padding = 6;
  const width = Math.max(position.width + padding * 2, 40);

  return (
    <motion.div
      className="pointer-events-none absolute top-full left-0 mt-4 flex flex-col items-start"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        x: position.x - padding,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <svg
        width={width}
        height="18"
        viewBox={`0 0 ${width} 16`}
        fill="none"
        className="overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d={`M 0 0 L 0 16 L ${width} 16 L ${width} 0`}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 4"
          className="text-muted-foreground"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        />
      </svg>
      <div className="relative mt-1 h-5 min-w-20 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={label}
            className="absolute left-0 text-xs font-medium whitespace-nowrap text-muted-foreground"
            initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 6, filter: "blur(3px)" }}
          >
            {label}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function AddressSegment({
  children,
  segment,
  highlight,
  segmentRef,
}: {
  children: ReactNode;
  segment: SegmentName;
  highlight: Highlight;
  segmentRef: RefObject<HTMLSpanElement | null>;
}) {
  const selected = highlight
    ? activeSegments[highlight].includes(segment)
    : false;
  const blurred = highlight !== null && !selected;

  return (
    <motion.span
      ref={segmentRef}
      animate={{
        filter: blurred ? "blur(4px)" : "blur(0px)",
        opacity: highlight === null || selected ? 1 : 0.35,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="tracking-tight"
    >
      {children}
    </motion.span>
  );
}

export function InteractiveAddress({ email }: { email: string }) {
  const [highlight, setHighlight] = useState<Highlight>(null);
  const [boxPosition, setBoxPosition] = useState<BoxPosition>({
    x: 0,
    width: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const atRef = useRef<HTMLSpanElement>(null);
  const domainRef = useRef<HTMLSpanElement>(null);
  const extensionRef = useRef<HTMLSpanElement>(null);

  const [name, host = ""] = email.split("@");
  const [domain, ...extensionParts] = host.split(".");
  const extension = extensionParts.join(".");
  const refs: Record<SegmentName, RefObject<HTMLSpanElement | null>> = {
    name: nameRef,
    at: atRef,
    domain: domainRef,
    extension: extensionRef,
  };

  useEffect(() => {
    if (!highlight || !containerRef.current) return;

    const containerLeft = containerRef.current.getBoundingClientRect().left;
    const selectedRects = activeSegments[highlight]
      .map((segment) => refs[segment].current?.getBoundingClientRect())
      .filter((rect): rect is DOMRect => Boolean(rect));

    if (selectedRects.length === 0) return;

    const left = Math.min(...selectedRects.map((rect) => rect.left));
    const right = Math.max(...selectedRects.map((rect) => rect.right));
    setBoxPosition({ x: left - containerLeft, width: right - left });
  }, [highlight]);

  const label = actions.find((action) => action.type === highlight)?.label;

  return (
    <div className="flex flex-col items-center gap-9 py-6">
      <div className="relative flex min-h-24 items-start justify-center">
        <div
          ref={containerRef}
          className="relative flex justify-center font-fraunces text-[clamp(1.45rem,5.5vw,2.5rem)] font-semibold text-foreground"
        >
          <AddressSegment
            segment="name"
            highlight={highlight}
            segmentRef={nameRef}
          >
            {name}
          </AddressSegment>
          <AddressSegment segment="at" highlight={highlight} segmentRef={atRef}>
            @
          </AddressSegment>
          <AddressSegment
            segment="domain"
            highlight={highlight}
            segmentRef={domainRef}
          >
            {domain}
          </AddressSegment>
          <AddressSegment
            segment="extension"
            highlight={highlight}
            segmentRef={extensionRef}
          >
            .{extension}
          </AddressSegment>

          <DashedGuide
            position={boxPosition}
            visible={highlight !== null}
            label={label}
          />
        </div>
      </div>

      <div
        className="flex items-center gap-2"
        role="toolbar"
        aria-label="Contact details"
      >
        {actions.map(({ type, label: actionLabel, icon: Icon }) => (
          <motion.button
            key={type}
            type="button"
            onMouseEnter={() => setHighlight(type)}
            onMouseLeave={() => setHighlight(null)}
            onFocus={() => setHighlight(type)}
            onBlur={() => setHighlight(null)}
            onClick={() => setHighlight(highlight === type ? null : type)}
            aria-label={`Show ${actionLabel.toLowerCase()}`}
            aria-pressed={highlight === type}
            className="relative flex size-10 items-center justify-center rounded-lg text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            <Icon size={18} aria-hidden />
            {highlight === type && (
              <motion.span
                layoutId="contact-action"
                className="absolute inset-0 -z-10 rounded-lg bg-muted"
              />
            )}
          </motion.button>
        ))}
      </div>

      <motion.a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        <AtSign size={15} />
        Send an email
      </motion.a>
    </div>
  );
}
