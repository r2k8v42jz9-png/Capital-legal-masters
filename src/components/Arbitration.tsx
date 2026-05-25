"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection, { AnimatedStagger, fadeUpItem } from "@/components/ui/AnimatedSection";
import JusticeScales from "@/components/ui/JusticeScales";
import { ArrowRight, Gavel, UserCheck, Zap, Lock } from "lucide-react";

const FEATURE_ICONS = [Gavel, UserCheck, Zap, Lock];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Arbitration() {
  const { t, language } = useLanguage();
  const firmLabel =
    language === "uz"
      ? "MCHJ «CAPITAL LEGAL MASTERS»"
      : "ООО «CAPITAL LEGAL MASTERS»";

  return (
    <section
      id="arbitration"
      className="relative section-padding overflow-hidden"
      style={{ background: "var(--bg-alt)" }}
    >
      {/* Decorative large bg text */}
      <div
        className="absolute right-[-20px] sm:right-[-40px] top-1/2 -translate-y-1/2 font-serif font-800 select-none pointer-events-none leading-none hidden md:block"
        style={{
          fontSize: "clamp(120px, 16vw, 240px)",
          color: "rgba(255,255,255,0.014)",
          letterSpacing: "-0.04em",
          fontFamily: "var(--font-playfair), serif",
        }}
        aria-hidden
      >
        SUD
      </div>

      {/* Legal motif — faint scales watermark on the left, balancing the SUD wordmark */}
      <div className="absolute left-[-40px] xl:left-[1%] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block z-0">
        <JusticeScales
          strokeWidth={1.4}
          className="legal-motif w-[clamp(200px,16vw,280px)] h-auto"
        />
      </div>

      {/* Red glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(196,30,58,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/22 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-[72px] items-start">

          {/* ── Left: main content ── */}
          <div>
            <AnimatedSection className="mb-4">
              <div className="flex items-center gap-3">
                <span className="divider-line" style={{ width: 28 }} />
                <span className="label-tag">{t.arbitration.label}</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.06}>
              <h2
                className="heading-display mb-6 leading-[1.15]"
                style={{ fontSize: "clamp(1.65rem, 3vw, 2.6rem)" }}
              >
                {t.arbitration.title}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.11}>
              <p
                className="font-sans text-[0.9rem] leading-[1.85] mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {t.arbitration.description1}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p
                className="font-sans text-[0.9rem] leading-[1.85] mb-8"
                style={{ color: "var(--text-muted)" }}
              >
                {t.arbitration.description2}
              </p>
            </AnimatedSection>

            {/* Highlights row — factual, no fake numbers */}
            <AnimatedSection delay={0.19} className="mb-9">
              <div className="flex flex-col sm:flex-row gap-px bg-white/[0.04]">
                {t.arbitration.highlights.map((text, i) => (
                  <div
                    key={i}
                    className="flex-1 glass-card px-4 py-3.5 flex items-center gap-2.5"
                  >
                    <div className="red-dot flex-shrink-0" />
                    <span
                      className="font-sans text-[0.72rem] font-500 tracking-[0.06em] leading-snug"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.22}>
              <button onClick={() => scrollTo("contact")} className="btn-primary group">
                <span>{t.arbitration.cta}</span>
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </AnimatedSection>
          </div>

          {/* ── Right: court feature cards ── */}
          <div className="lg:pt-2">
            <AnimatedSection delay={0.08} className="mb-6">
              <div className="flex items-center gap-2.5">
                <JusticeScales
                  strokeWidth={4}
                  className="w-4 h-4 text-[#C41E3A]/55 flex-shrink-0"
                />
                <div className="h-px w-4 bg-[#C41E3A]/40" />
                <span className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-[#3D4755] font-600">
                  {t.arbitration.label}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedStagger className="space-y-2.5 sm:space-y-3" staggerDelay={0.09}>
              {t.arbitration.features.map((feat, i) => {
                const Icon = FEATURE_ICONS[i];
                return (
                  <motion.div
                    key={i}
                    variants={fadeUpItem}
                    className="group glass-card p-5 sm:p-6 flex items-start gap-4 sm:gap-5 relative overflow-hidden cursor-default"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Left border */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C41E3A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <div className="w-10 h-10 flex items-center justify-center border border-white/[0.07] group-hover:border-[#C41E3A]/28 transition-colors duration-500 flex-shrink-0 mt-0.5">
                      {Icon && (
                        <Icon
                          size={16}
                          className="text-[#3D4D5E] group-hover:text-[#C41E3A] transition-colors duration-500"
                        />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="card-title font-sans text-[0.82rem] font-600 mb-1 leading-snug">
                        {feat.name}
                      </div>
                      <div className="card-desc font-sans text-[0.74rem] leading-snug">
                        {feat.subtitle}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatedStagger>

            {/* Badge */}
            <AnimatedSection delay={0.35} className="mt-5">
              <div className="glass-card px-5 py-3.5 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] flex-shrink-0 animate-pulse" />
                <p
                  className="font-sans text-[0.72rem] leading-snug"
                  style={{ color: "var(--text-dim)" }}
                >
                  {t.about.stats[2]?.label} — {firmLabel}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.055] to-transparent" />
    </section>
  );
}
