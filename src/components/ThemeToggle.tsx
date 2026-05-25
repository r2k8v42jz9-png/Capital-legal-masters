"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 flex items-center justify-center overflow-hidden transition-colors duration-300"
      style={{
        border: "1px solid var(--border-subtle)",
        color: "var(--text-muted)",
      }}
      aria-label={isLight ? "Qoʻngʻir rejimga oʻtish" : "Yorugʻ rejimga oʻtish"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          {isLight ? <Moon size={14} /> : <Sun size={14} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
