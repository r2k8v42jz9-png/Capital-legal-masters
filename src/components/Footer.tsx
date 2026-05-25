"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "@/components/ui/AnimatedSection";
import JusticeScales from "@/components/ui/JusticeScales";
import { Phone, Mail, MapPin } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Footer() {
  const { t, language } = useLanguage();

  const legalNote =
    language === "uz"
      ? "O'zbekiston Respublikasi qonunchiligida ro'yxatdan o'tgan"
      : "Зарегистрировано в соответствии с законодательством Республики Узбекистан";

  const contactHeading = language === "uz" ? "Kontaktlar" : "Контакты";
  const firmBadge = language === "uz" ? "MCHJ" : "ООО";

  // Derive href values from translation data
  const telHref = `tel:${t.contact.info.phone.value.replace(/[\s\-]/g, "")}`;
  const mailHref = `mailto:${t.contact.info.email.value}`;

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--footer-bg)" }}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C41E3A]/28 to-transparent" />
        <div className="h-px footer-line mt-[2px]" />
      </div>

      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[180px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(196,30,58,0.045) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Main grid: Brand | Nav | Nav | Contact ── */}
        <div className="pt-14 sm:pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.85fr_0.85fr_0.85fr_1.15fr] gap-10 lg:gap-10 xl:gap-14">

          {/* Brand */}
          <AnimatedSection>
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3 mb-6 group"
              aria-label="Capital Legal Masters"
            >
              <div className="relative w-9 h-9 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 border border-[#C41E3A]/55 rotate-45 group-hover:rotate-[52deg] transition-transform duration-500" />
                <div className="absolute inset-[6px] border border-[#C41E3A]/22 rotate-45" />
                <span
                  className="font-serif text-[0.7rem] font-700 text-[#C41E3A] relative z-10 tracking-wider"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  CLM
                </span>
              </div>
              <div className="leading-none">
                <div className="font-sans text-[0.6rem] font-700 tracking-[0.22em] uppercase text-[#C41E3A]">
                  Capital Legal
                </div>
                <div className="footer-heading font-sans text-[0.55rem] font-500 tracking-[0.18em] uppercase mt-0.5">
                  Masters
                </div>
              </div>
            </button>

            <p className="footer-text font-sans text-[0.79rem] leading-[1.82] max-w-[300px] mb-5">
              {t.footer.description}
            </p>

            <div
              className="inline-flex items-center gap-2 px-3 py-2"
              style={{ border: "1px solid var(--footer-border)" }}
            >
              <div className="red-dot" />
              <span className="footer-heading font-sans text-[0.62rem] font-600 tracking-[0.1em] uppercase">
                {firmBadge}
              </span>
            </div>
          </AnimatedSection>

          {/* Nav sections */}
          {t.footer.sections.map((section, si) => (
            <AnimatedSection key={si} delay={0.07 * (si + 1)}>
              <div className="footer-heading font-sans text-[0.64rem] font-700 tracking-[0.22em] uppercase mb-5">
                {section.heading}
              </div>
              <ul className="space-y-3">
                {section.links.map((link, li) => (
                  <li key={li}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="footer-link font-sans text-[0.79rem] flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#C41E3A]/45 group-hover:w-3.5 transition-all duration-300 flex-shrink-0" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}

          {/* ── Contact details column ── */}
          <AnimatedSection delay={0.22}>
            <div className="footer-heading font-sans text-[0.64rem] font-700 tracking-[0.22em] uppercase mb-5">
              {contactHeading}
            </div>

            <ul className="space-y-4">

              {/* Phone — clickable */}
              <li>
                <motion.a
                  href={telHref}
                  className="group flex items-start gap-3 no-underline"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                  aria-label={t.contact.info.phone.value}
                >
                  <div className="footer-icon-box w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={11} className="footer-icon" />
                  </div>
                  <div>
                    <div className="footer-heading font-sans text-[0.6rem] tracking-[0.12em] uppercase mb-0.5">
                      {t.contact.info.phone.label}
                    </div>
                    <div className="footer-value font-sans text-[0.78rem]">
                      {t.contact.info.phone.value}
                    </div>
                  </div>
                </motion.a>
              </li>

              {/* Email — clickable */}
              <li>
                <motion.a
                  href={mailHref}
                  className="group flex items-start gap-3 no-underline"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                  aria-label={t.contact.info.email.value}
                >
                  <div className="footer-icon-box w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={11} className="footer-icon" />
                  </div>
                  <div>
                    <div className="footer-heading font-sans text-[0.6rem] tracking-[0.12em] uppercase mb-0.5">
                      {t.contact.info.email.label}
                    </div>
                    <div className="footer-value font-sans text-[0.74rem] break-all">
                      {t.contact.info.email.value}
                    </div>
                  </div>
                </motion.a>
              </li>

              {/* Address — not clickable */}
              <li>
                <div className="flex items-start gap-3">
                  <div className="footer-icon-box w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={11} className="footer-icon" />
                  </div>
                  <div>
                    <div className="footer-heading font-sans text-[0.6rem] tracking-[0.12em] uppercase mb-0.5">
                      {t.contact.info.address.label}
                    </div>
                    <div className="footer-address font-sans text-[0.74rem] leading-[1.7] whitespace-pre-line">
                      {t.contact.info.address.value}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="h-px footer-divider" />

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <AnimatedSection>
            <p className="footer-heading font-sans text-[0.7rem] text-center sm:text-left">
              {t.footer.rights}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <p className="footer-faint font-sans text-[0.66rem] text-center sm:text-right">
              {legalNote}
            </p>
          </AnimatedSection>
        </div>

        {/* Tagline strip — with scales emblem */}
        <div className="pb-4 text-center">
          <AnimatedSection>
            <JusticeScales
              strokeWidth={3.4}
              className="w-7 h-7 mx-auto mb-3 text-[#C41E3A]/35"
            />
            <p className="footer-tagline font-sans text-[0.62rem] tracking-[0.18em] uppercase italic">
              {t.footer.tagline}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </footer>
  );
}
