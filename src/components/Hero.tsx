"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import JusticeScales from "@/components/ui/JusticeScales";
import { ArrowDown, ArrowRight } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: "smooth" });
}

const ORB_CONFIG = [
  {
    top: "12%", left: "65%", w: 640,
    color: "radial-gradient(circle, rgba(196,30,58,0.065) 0%, transparent 68%)", dur: 18,
  },
  {
    top: "55%", left: "-4%", w: 560,
    color: "radial-gradient(circle, rgba(0,25,80,0.18) 0%, transparent 68%)", dur: 22,
  },
  {
    top: "72%", left: "72%", w: 480,
    color: "radial-gradient(circle, rgba(196,30,58,0.04) 0%, transparent 68%)", dur: 15,
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 2.0 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t, language } = useLanguage();
  const firmLabel =
    language === "uz"
      ? "MCHJ «CAPITAL LEGAL MASTERS»"
      : "ООО «CAPITAL LEGAL MASTERS»";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 90]);
  const opacity = useTransform(scrollY, [0, 420], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Background ──────────────────────────────── */}
      <div className="absolute inset-0" style={{ background: "var(--bg-section)" }} />
      <div className="absolute inset-0 grid-bg" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(196,30,58,0.055) 0%, transparent 65%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(7,10,15,0.5)]" />

      {/* Animated orbs */}
      {ORB_CONFIG.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: orb.top, left: orb.left,
            width: orb.w, height: orb.w,
            background: orb.color,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: [1, 1.1, 0.96, 1], opacity: [0.75, 1, 0.65, 0.75] }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Legal motif — faint scales-of-justice watermark behind the title */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <JusticeScales
          animated
          strokeWidth={1.1}
          className="legal-motif w-[clamp(300px,40vw,540px)] h-auto -translate-y-[6%]"
        />
      </div>

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/28 to-transparent" />

      {/* ── Content ─────────────────────────────────── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-8
                   pt-[90px] pb-12 sm:pt-[96px] sm:pb-14 text-center"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[900px] mx-auto w-full"
        >
          {/* Tagline */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6 sm:mb-7">
            <span className="divider-line" style={{ width: 36 }} />
            <span className="label-tag">{t.hero.tagline}</span>
            <span className="divider-line" style={{ width: 36 }} />
          </motion.div>

          {/* Firm name */}
          <motion.h1
            variants={fadeUp}
            className="heading-display mb-5 sm:mb-6"
            style={{ fontSize: "clamp(2.2rem, 6.5vw, 5rem)" }}
          >
            <span>CAPITAL </span>
            <span className="text-[#C41E3A]">LEGAL</span>
            <br className="sm:hidden" />
            <span className="sm:inline"> </span>
            <span>MASTERS</span>
          </motion.h1>

          {/* Separator */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-5 sm:mb-6">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-white/20" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C41E3A]/55" />
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-white/20" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-serif mb-4 sm:mb-5 leading-[1.45] tracking-[0.01em]"
            style={{
              fontSize: "clamp(1.05rem, 2.3vw, 1.45rem)",
              color: "var(--text-body)",
            }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-[0.88rem] sm:text-[0.9rem] leading-relaxed max-w-[500px] mx-auto mb-9 sm:mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button onClick={() => scrollTo("services")} className="btn-primary group w-full sm:w-auto">
              <span>{t.hero.cta1}</span>
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-outline w-full sm:w-auto">
              {t.hero.cta2}
            </button>
          </motion.div>

          {/* Legal form note */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-[0.66rem] tracking-[0.12em] uppercase mt-6"
            style={{ color: "var(--text-ghost)" }}
          >
            {firmLabel}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center pb-7 sm:pb-9"
      >
        <motion.button
          onClick={() => scrollTo("about")}
          className="flex flex-col items-center gap-1.5 group"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll to about section"
        >
          <span className="font-sans text-[0.58rem] tracking-[0.24em] uppercase text-[#2E3848] group-hover:text-[#6B7A8D] transition-colors">
            {t.hero.scrollLabel}
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#2E3848] to-transparent" />
          <ArrowDown size={12} className="text-[#2E3848] group-hover:text-[#C41E3A] transition-colors" />
        </motion.button>
      </motion.div>

      {/* Bottom decorative borders */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.055] to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-[#C41E3A]/18 to-transparent mt-[2px]" />
      </div>
    </section>
  );
}
