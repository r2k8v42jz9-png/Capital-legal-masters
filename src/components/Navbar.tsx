"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 76;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);

      const sections = ["home", "about", "services", "arbitration", "advantages", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { label: t.nav.home, id: "home" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.arbitration, id: "arbitration" },
    { label: t.nav.advantages, id: "advantages" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 1.95, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[rgba(7,10,15,0.92)] backdrop-blur-2xl border-b border-white/[0.055] shadow-[0_4px_32px_rgba(0,0,0,0.45)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[74px]">

            {/* ── Logo ── */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="Capital Legal Masters"
            >
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 border border-[#C41E3A]/55 rotate-45 group-hover:rotate-[52deg] transition-transform duration-500" />
                <div className="absolute inset-[6px] border border-[#C41E3A]/25 rotate-45" />
                <span
                  className="font-serif text-[0.72rem] font-700 text-[#C41E3A] relative z-10 tracking-wider leading-none"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  CLM
                </span>
              </div>
              <div className="hidden sm:block leading-none">
                <div className="font-sans text-[0.62rem] font-700 tracking-[0.22em] uppercase text-[#C41E3A]">
                  Capital Legal
                </div>
                <div className="font-sans text-[0.56rem] font-500 tracking-[0.18em] uppercase text-[#3D4755] mt-0.5">
                  Masters
                </div>
              </div>
            </button>

            {/* ── Desktop navigation ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-2 font-sans text-[0.7rem] font-500 tracking-[0.08em] uppercase transition-colors duration-250 ${
                    activeSection === link.id
                      ? "text-[#E8ECF0]"
                      : "text-[#6B7A8D] hover:text-[#B8C8D8]"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C41E3A]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* ── Right side ── */}
            <div className="flex items-center gap-2.5 sm:gap-3">

              {/* Language switcher */}
              <div
                className="flex items-center border border-white/[0.08]"
                role="group"
                aria-label="Language selector"
              >
                {(["uz", "ru"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-[7px] font-sans text-[0.62rem] font-700 tracking-[0.1em] uppercase transition-all duration-250 ${
                      language === lang
                        ? "bg-[#C41E3A] text-white"
                        : "text-[#6B7A8D] hover:text-[#C8D8E8] hover:bg-white/[0.04]"
                    }`}
                  >
                    {lang === "uz" ? "O'Z" : "РУ"}
                  </button>
                ))}
              </div>

              {/* Contact CTA — desktop */}
              <button
                onClick={() => scrollTo("contact")}
                className="hidden lg:flex btn-primary !px-4 !py-2 !text-[0.64rem] !tracking-[0.14em]"
              >
                <span>{t.nav.contact}</span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setOpen((p) => !p)}
                className="lg:hidden w-9 h-9 flex items-center justify-center border border-white/[0.08] text-[#8B96A7] hover:text-[#E8ECF0] hover:border-white/20 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[74px] left-0 right-0 z-40 bg-[rgba(7,10,15,0.98)] backdrop-blur-2xl border-b border-white/[0.055] lg:hidden"
          >
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-4">
              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045, duration: 0.3 }}
                    onClick={() => {
                      scrollTo(link.id);
                      setOpen(false);
                    }}
                    className={`text-left px-2 py-3.5 font-sans text-[0.78rem] font-500 tracking-[0.1em] uppercase border-b border-white/[0.04] last:border-0 transition-colors duration-200 ${
                      activeSection === link.id
                        ? "text-[#E8ECF0]"
                        : "text-[#6B7A8D] hover:text-[#C8D8E8]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {activeSection === link.id && (
                        <span className="w-1 h-1 rounded-full bg-[#C41E3A] flex-shrink-0" />
                      )}
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 pb-2"
              >
                <button
                  onClick={() => {
                    scrollTo("contact");
                    setOpen(false);
                  }}
                  className="btn-primary w-full"
                >
                  <span>{t.nav.contact}</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
