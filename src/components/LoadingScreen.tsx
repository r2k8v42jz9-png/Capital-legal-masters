"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Exit after 1.9s — enough for fonts and initial paint to settle
    const t = setTimeout(() => setVisible(false), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } }}
          className="fixed inset-0 z-[99999] bg-[#070A0F] flex flex-col items-center justify-center select-none"
          aria-hidden
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.72, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[72px] h-[72px] flex items-center justify-center mb-6"
          >
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 border border-[#C41E3A]/25 rotate-45"
              animate={{ rotate: [45, 90, 45] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Inner static diamond */}
            <div className="absolute inset-[10px] border border-[#C41E3A]/50 rotate-45" />
            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(196,30,58,0.12) 0%, transparent 70%)",
              }}
            />
            {/* Monogram */}
            <span
              className="relative z-10 font-serif text-[1.05rem] font-700 text-[#C41E3A] tracking-wider"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              CLM
            </span>
          </motion.div>

          {/* Firm name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8"
          >
            <div
              className="text-[0.65rem] font-700 tracking-[0.3em] uppercase text-[#C41E3A] mb-1.5"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              CAPITAL LEGAL
            </div>
            <div
              className="text-[0.58rem] tracking-[0.24em] uppercase text-[#2A3040]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              MASTERS
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #C41E3A 40%, #E8334A 60%, transparent 100%)",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          {/* Corner accents */}
          <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-white/[0.07]" />
          <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-white/[0.07]" />
          <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-white/[0.07]" />
          <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-white/[0.07]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
