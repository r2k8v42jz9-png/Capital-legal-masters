"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  /** Stroke weight in viewBox units (120). Use ~1.25 for large watermarks,
   *  ~3.5–5 for small inline glyphs so the lines stay visible. */
  strokeWidth?: number;
  /** When true, the beam assembly gently sways like a settling balance. */
  animated?: boolean;
};

/**
 * Minimal, geometric line-art scales of justice.
 * Abstract and editorial — not a literal stock icon.
 * Colour is inherited via `currentColor`, so it adapts to theme at the
 * usage site (e.g. className="legal-motif" or "text-[#C41E3A]/30").
 */
export default function JusticeScales({
  className = "",
  strokeWidth = 1.25,
  animated = false,
}: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Top finial */}
      <circle cx="60" cy="15.5" r="2.4" />
      {/* Central column */}
      <line x1="60" y1="17.9" x2="60" y2="89" />
      {/* Base — A-frame legs + foot */}
      <path d="M60 89 L49.5 97" />
      <path d="M60 89 L70.5 97" />
      <line x1="45" y1="97" x2="75" y2="97" />

      {/* Beam assembly — pivots at (60,30) like a balancing scale */}
      <motion.g
        style={{ transformOrigin: "60px 30px", transformBox: "view-box" }}
        animate={animated ? { rotate: [-2.2, 2.2, -2.2] } : undefined}
        transition={
          animated
            ? { duration: 7, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      >
        {/* Balance beam */}
        <line x1="26" y1="30" x2="94" y2="30" />
        {/* Left chains + pan */}
        <path d="M26 30 L18 48" />
        <path d="M26 30 L34 48" />
        <path d="M15 48 Q26 60.5 37 48" />
        {/* Right chains + pan */}
        <path d="M94 30 L86 48" />
        <path d="M94 30 L102 48" />
        <path d="M83 48 Q94 60.5 105 48" />
      </motion.g>
    </svg>
  );
}
