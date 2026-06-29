"use client";

import type { ComponentProps, ElementType } from "react";
import Link from "next/link";
import { motion, type HTMLMotionProps } from "motion/react";

type NextLinkProps = ComponentProps<typeof Link>;

type MotionLinkProps = NextLinkProps &
  Omit<HTMLMotionProps<"a">, keyof NextLinkProps | "href"> & {
    hoverScale?: number;
    hoverY?: number;
    tapScale?: number;
  };

const NextMotionLink = motion.create(Link) as ElementType;

export function MotionLink({
  hoverScale = 1.02,
  hoverY = -2,
  tapScale = 0.97,
  transition,
  ...props
}: MotionLinkProps) {
  return (
    <NextMotionLink
      whileHover={{ scale: hoverScale, y: hoverY }}
      whileTap={{ scale: tapScale }}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 28,
        ...transition,
      }}
      {...props}
    />
  );
}

type MotionAnchorProps = HTMLMotionProps<"a"> & {
  hoverScale?: number;
  hoverY?: number;
  tapScale?: number;
};

export function MotionAnchor({
  hoverScale = 1.02,
  hoverY = -2,
  tapScale = 0.97,
  transition,
  ...props
}: MotionAnchorProps) {
  return (
    <motion.a
      whileHover={{ scale: hoverScale, y: hoverY }}
      whileTap={{ scale: tapScale }}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 28,
        ...transition,
      }}
      {...props}
    />
  );
}
