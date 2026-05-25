"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection, { AnimatedStagger, fadeUpItem } from "@/components/ui/AnimatedSection";
import {
  Building2,
  Globe,
  Award,
  Briefcase,
  Lightbulb,
  FileText,
  FileCheck,
  Users,
  Scale,
} from "lucide-react";

const ICONS = [Building2, Globe, Award, Briefcase, Lightbulb, FileText, FileCheck, Users, Scale];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative section-padding overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #070A0F 0%, #0C1018 50%, #070A0F 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.055] to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-55" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-[600px] mb-12 sm:mb-16">
          <AnimatedSection className="mb-4">
            <div className="flex items-center gap-3">
              <span className="divider-line" style={{ width: 28 }} />
              <span className="label-tag">{t.services.label}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <h2
              className="heading-display text-[#E8ECF0] mb-4 leading-[1.15]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
            >
              {t.services.title}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-sans text-[0.88rem] text-[#5A6878] leading-[1.8]">
              {t.services.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Cards — 3-column grid for 9 items */}
        <AnimatedStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.038]"
          staggerDelay={0.06}
        >
          {t.services.items.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                variants={fadeUpItem}
                className="group relative glass-card p-6 sm:p-7 flex flex-col gap-4 overflow-hidden cursor-default"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Hover radial glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 100% 80% at 50% 110%, rgba(196,30,58,0.07) 0%, transparent 65%)",
                  }}
                />
                {/* Top line accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/0 to-transparent group-hover:via-[#C41E3A]/45 transition-all duration-500" />

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] group-hover:border-[#C41E3A]/28 transition-colors duration-500 flex-shrink-0">
                  {Icon && (
                    <Icon
                      size={18}
                      className="text-[#3D4D5E] group-hover:text-[#C41E3A] transition-colors duration-500"
                    />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-sans text-[0.84rem] font-600 tracking-[0.03em] text-[#C0CCDA] group-hover:text-[#E0E8F0] transition-colors duration-300 mb-2.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[0.78rem] text-[#445060] group-hover:text-[#5E6E80] leading-[1.78] transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Ghost number */}
                <span className="font-serif text-[2.5rem] font-700 text-white/[0.028] group-hover:text-white/[0.048] leading-none absolute bottom-3 right-4 select-none transition-colors duration-500 pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </AnimatedStagger>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.08} className="mt-11 sm:mt-14 text-center">
          <button onClick={() => scrollTo("contact")} className="btn-outline">
            {t.nav.contact} →
          </button>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.055] to-transparent" />
    </section>
  );
}
