"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection, { AnimatedStagger, fadeUpItem } from "@/components/ui/AnimatedSection";
import {
  BookOpen,
  Target,
  Lock,
  Zap,
  Layers,
  Gavel,
} from "lucide-react";

const ICONS = [BookOpen, Target, Zap, Lock, Layers, Gavel];

export default function Advantages() {
  const { t } = useLanguage();

  return (
    <section
      id="advantages"
      className="relative section-padding overflow-hidden"
      style={{ background: "var(--bg-section)" }}
    >
      {/* Decorative large bg text */}
      <div
        className="absolute left-[-30px] sm:left-[-50px] top-1/2 -translate-y-1/2 font-serif font-800 select-none pointer-events-none leading-none hidden md:block"
        style={{
          fontSize: "clamp(100px, 13vw, 200px)",
          color: "rgba(255,255,255,0.012)",
          letterSpacing: "-0.04em",
          fontFamily: "var(--font-playfair), serif",
          writingMode: "vertical-lr",
        }}
        aria-hidden
      >
        CLM
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.055] to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-[680px] mx-auto text-center mb-12 sm:mb-16">
          <AnimatedSection className="mb-4">
            <div className="flex items-center justify-center gap-3">
              <span className="divider-line" style={{ width: 28 }} />
              <span className="label-tag">{t.advantages.label}</span>
              <span className="divider-line" style={{ width: 28 }} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <h2
              className="heading-display mb-4 leading-[1.15]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
            >
              {t.advantages.title}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="font-sans text-[0.88rem] leading-[1.8]"
              style={{ color: "var(--text-muted)" }}
            >
              {t.advantages.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Cards grid */}
        <AnimatedStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.038]"
          staggerDelay={0.07}
        >
          {t.advantages.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                variants={fadeUpItem}
                className="group relative glass-card p-7 sm:p-8 flex flex-col gap-5 overflow-hidden cursor-default"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 110% 70% at 50% 105%, rgba(196,30,58,0.07) 0%, transparent 65%)",
                  }}
                />

                {/* Icon + number row */}
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 flex items-center justify-center border border-white/[0.07] group-hover:border-[#C41E3A]/28 transition-colors duration-500 flex-shrink-0">
                    {Icon && (
                      <Icon
                        size={18}
                        className="text-[#303C4E] group-hover:text-[#C41E3A] transition-colors duration-500"
                      />
                    )}
                  </div>
                  <span
                    className="font-serif text-[2.2rem] font-700 text-white/[0.035] group-hover:text-white/[0.06] transition-colors leading-none select-none"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-sans text-[0.84rem] font-600 tracking-[0.02em] text-[#B8C8D8] group-hover:text-[#DDE6EE] transition-colors duration-300 mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[0.77rem] text-[#404E60] group-hover:text-[#5A6878] leading-[1.8] transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Animated bottom underline */}
                <div className="h-px w-0 group-hover:w-8 bg-[#C41E3A]/50 transition-all duration-500 mt-auto" />
              </motion.div>
            );
          })}
        </AnimatedStagger>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.055] to-transparent" />
    </section>
  );
}
