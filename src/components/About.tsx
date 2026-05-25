"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection, { AnimatedStagger, fadeUpItem } from "@/components/ui/AnimatedSection";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden"
      style={{ background: "var(--bg-section)" }}
    >
      {/* Subtle accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(196,30,58,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Label */}
        <AnimatedSection className="mb-12 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="divider-line" style={{ width: 28 }} />
            <span className="label-tag">{t.about.label}</span>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div>
            <AnimatedSection delay={0.06}>
              <h2
                className="heading-display mb-7 leading-[1.15]"
                style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
              >
                {t.about.title}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <p
                className="font-sans text-[0.92rem] leading-[1.85] mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                {t.about.description1}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.17}>
              <p
                className="font-sans text-[0.92rem] leading-[1.85] mb-9"
                style={{ color: "var(--text-muted)" }}
              >
                {t.about.description2}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.22}>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-[#C41E3A]/45" />
                <span className="font-sans text-[0.68rem] tracking-[0.2em] uppercase text-[#C41E3A]/60 font-600">
                  MCHJ «Capital Legal Masters»
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: stats */}
          <div className="lg:pt-2">
            <AnimatedStagger className="space-y-px" staggerDelay={0.12}>
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpItem}
                  className="group relative glass-card p-7 sm:p-9 overflow-hidden cursor-default transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.28 }}
                >
                  {/* Left glow on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C41E3A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-center gap-6 sm:gap-8">
                    <span
                      className="font-serif text-[2.8rem] sm:text-[3.2rem] font-700 leading-none text-[#D8E0E8] group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {stat.number}
                    </span>
                    <div>
                      <span className="font-sans text-[0.72rem] sm:text-[0.76rem] font-500 tracking-[0.1em] uppercase text-[#4A5568] group-hover:text-[#7A8899] transition-colors duration-300 leading-snug">
                        {stat.label}
                      </span>
                      <div className="h-px w-6 bg-[#C41E3A]/25 mt-2.5 group-hover:w-14 group-hover:bg-[#C41E3A]/55 transition-all duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatedStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
