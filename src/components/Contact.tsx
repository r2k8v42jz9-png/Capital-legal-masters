"use client";

import { useState, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection, { AnimatedStagger, fadeUpItem } from "@/components/ui/AnimatedSection";
import JusticeScales from "@/components/ui/JusticeScales";
import {
  Phone, Mail, MapPin, Clock,
  CheckCircle2, ArrowRight, Loader2, ExternalLink, AlertCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  _hp: string; // honeypot
};

type InfoItem = {
  Icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  multiline?: boolean;
};

const EMPTY: FormState = { name: "", email: "", phone: "", service: "", message: "", _hp: "" };

export default function Contact() {
  const { t, language } = useLanguage();
  const firmLabel =
    language === "uz"
      ? "MCHJ «CAPITAL LEGAL MASTERS»"
      : "ООО «CAPITAL LEGAL MASTERS»";
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Honeypot check — bots fill it, humans don't
    if (form._hp) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          _hp: form._hp,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Server error");
      }

      setSubmitted(true);
      setForm(EMPTY);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  // Derive tel: href — strip spaces and dashes from display number
  const telHref = `tel:${t.contact.info.phone.value.replace(/[\s\-]/g, "")}`;
  const mailHref = `mailto:${t.contact.info.email.value}`;

  const infoItems: InfoItem[] = [
    {
      Icon: Phone,
      label: t.contact.info.phone.label,
      value: t.contact.info.phone.value,
      href: telHref,
    },
    {
      Icon: Mail,
      label: t.contact.info.email.label,
      value: t.contact.info.email.value,
      href: mailHref,
    },
    {
      Icon: MapPin,
      label: t.contact.info.address.label,
      value: t.contact.info.address.value,
      multiline: true,
    },
    {
      Icon: Clock,
      label: t.contact.info.hours.label,
      value: t.contact.info.hours.value,
    },
  ];

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      style={{ background: "var(--bg-alt)" }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(196,30,58,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/22 to-transparent" />

      {/* Legal motif — faint scales watermark, upper-right */}
      <div className="absolute top-[8%] right-[-30px] xl:right-[3%] pointer-events-none hidden lg:block z-0">
        <JusticeScales
          strokeWidth={1.4}
          className="legal-motif w-[clamp(180px,14vw,250px)] h-auto"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Header ── */}
        <div className="text-center mb-11 sm:mb-14">
          <AnimatedSection className="mb-4">
            <div className="flex items-center justify-center gap-3">
              <span className="divider-line" style={{ width: 28 }} />
              <span className="label-tag">{t.contact.label}</span>
              <span className="divider-line" style={{ width: 28 }} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h2
              className="heading-display mb-3 leading-[1.15]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
            >
              {t.contact.title}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p
              className="font-sans text-[0.88rem]"
              style={{ color: "var(--text-muted)" }}
            >
              {t.contact.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* ── Content grid ── */}
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-7 lg:gap-12">

          {/* ── Form ── */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-7 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C41E3A]/0 via-[#C41E3A]/55 to-[#C41E3A]/0" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-10 sm:py-14 gap-5"
                  >
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <div className="absolute inset-0 border border-[#C41E3A]/35 rotate-45" />
                      <div className="absolute inset-0 bg-[#C41E3A]/05" />
                      <CheckCircle2 size={24} className="text-[#C41E3A] relative z-10" />
                    </div>
                    <div>
                      <h3
                        className="font-serif text-[1.15rem] mb-2.5"
                        style={{
                          fontFamily: "var(--font-playfair), serif",
                          color: "var(--text-heading)",
                        }}
                      >
                        {t.contact.form.success}
                      </h3>
                      <p
                        className="font-sans text-[0.82rem] leading-[1.8] max-w-[340px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {t.contact.form.successSub}
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline !px-6 !py-2.5 !text-[0.7rem] mt-2"
                    >
                      ←
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    {/* Honeypot field — hidden from humans */}
                    <div className="hp-field" aria-hidden="true">
                      <input
                        type="text"
                        name="_hp"
                        value={form._hp}
                        onChange={set("_hp")}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">{t.contact.form.name}</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="—"
                          value={form.name}
                          onChange={set("name")}
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <label className="form-label">{t.contact.form.email}</label>
                        <input
                          type="email"
                          required
                          className="form-input"
                          placeholder="—"
                          value={form.email}
                          onChange={set("email")}
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">{t.contact.form.phone}</label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="+998 __ ___ __ __"
                          value={form.phone}
                          onChange={set("phone")}
                          autoComplete="tel"
                        />
                      </div>
                      <div>
                        <label className="form-label">{t.contact.form.service}</label>
                        <select
                          className="form-input form-select"
                          value={form.service}
                          onChange={set("service")}
                        >
                          <option value="" disabled>
                            {t.contact.form.servicePlaceholder}
                          </option>
                          {t.services.items.map((s, i) => (
                            <option key={i} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value={t.contact.form.serviceOther}>
                            {t.contact.form.serviceOther}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="form-label">{t.contact.form.message}</label>
                      <textarea
                        required
                        rows={5}
                        className="form-input"
                        placeholder="—"
                        value={form.message}
                        onChange={set("message")}
                      />
                    </div>

                    {/* Error state */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}
                          className="flex items-center gap-2.5 px-4 py-3 border border-[#C41E3A]/30 bg-[#C41E3A]/05"
                        >
                          <AlertCircle size={14} className="text-[#C41E3A] flex-shrink-0" />
                          <p className="font-sans text-[0.76rem] text-[#C41E3A]/80">
                            {error}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full group disabled:opacity-55 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <Loader2 size={15} className="animate-spin" />
                      ) : (
                        <>
                          <span>{t.contact.form.submit}</span>
                          <ArrowRight
                            size={13}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* ── Info cards ── */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <AnimatedStagger className="space-y-2.5 sm:space-y-3" staggerDelay={0.09}>
              {infoItems.map(({ Icon, label, value, href, multiline }, i) => {
                const isClickable = Boolean(href);

                const inner = (
                  <>
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C41E3A]/0 group-hover:bg-[#C41E3A]/50 transition-all duration-350" />

                    {/* Icon box */}
                    <div className="w-9 h-9 flex items-center justify-center border border-white/[0.07] group-hover:border-[#C41E3A]/30 transition-colors duration-350 flex-shrink-0 mt-0.5">
                      <Icon
                        size={14}
                        className="text-[#3D4D5E] group-hover:text-[#C41E3A] transition-colors duration-350"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="font-sans text-[0.63rem] font-600 tracking-[0.15em] uppercase text-[#2E3A4A] mb-1">
                        {label}
                      </div>
                      <div
                        className={`font-sans text-[0.82rem] leading-[1.65] transition-colors duration-300 break-words ${
                          isClickable
                            ? "text-[#8B9AAA] group-hover:text-[#D0DCE8]"
                            : "text-[#7A8899] group-hover:text-[#A8B8C8]"
                        } ${multiline ? "whitespace-pre-line" : ""}`}
                      >
                        {value}
                      </div>
                    </div>

                    {/* Clickable arrow indicator */}
                    {isClickable && (
                      <ExternalLink
                        size={12}
                        className="text-[#2A3848] group-hover:text-[#C41E3A]/60 transition-colors duration-350 flex-shrink-0 self-center ml-1"
                      />
                    )}
                  </>
                );

                return isClickable ? (
                  <motion.a
                    key={i}
                    href={href}
                    variants={fadeUpItem}
                    className="group glass-card p-4 sm:p-5 flex items-start gap-4 relative overflow-hidden cursor-pointer no-underline"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.22 }}
                    aria-label={`${label}: ${value}`}
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <motion.div
                    key={i}
                    variants={fadeUpItem}
                    className="group glass-card p-4 sm:p-5 flex items-start gap-4 relative overflow-hidden cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.22 }}
                  >
                    {inner}
                  </motion.div>
                );
              })}
            </AnimatedStagger>

            {/* Legal note */}
            <AnimatedSection delay={0.42}>
              <div className="glass-card px-4 py-3.5 sm:px-5">
                <div className="font-sans text-[0.63rem] font-600 tracking-[0.15em] uppercase text-[#2E3A4A] mb-1.5">
                  {firmLabel}
                </div>
                <p
                  className="font-sans text-[0.74rem] leading-[1.7]"
                  style={{ color: "var(--text-dim)" }}
                >
                  {t.about.stats[2]?.label}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* ── Map — exact coordinates: 41.32729140614236, 69.28997506006668 ── */}
        <AnimatedSection delay={0.18} className="mt-8 sm:mt-10">
          {/* Outer wrapper: premium border + shadow */}
          <div
            className="relative overflow-hidden"
            style={{
              height: "clamp(260px, 32vw, 340px)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.28), 0 0 0 1px rgba(196,30,58,0.08)",
            }}
          >
            {/* Gradient edge-fade — top */}
            <div
              className="absolute top-0 left-0 right-0 h-8 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, var(--bg-alt) 0%, transparent 100%)",
              }}
            />
            {/* Gradient edge-fade — bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-8 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(0deg, var(--bg-alt) 0%, transparent 100%)",
              }}
            />
            {/* Gradient edge-fade — sides */}
            <div
              className="absolute top-0 left-0 bottom-0 w-6 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, var(--bg-alt) 0%, transparent 100%)",
              }}
            />
            <div
              className="absolute top-0 right-0 bottom-0 w-6 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(270deg, var(--bg-alt) 0%, transparent 100%)",
              }}
            />
            {/* Red accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-gradient-to-r from-transparent via-[#C41E3A]/40 to-transparent pointer-events-none" />

            <iframe
              title="Capital Legal Masters — Toshkent, Yunusobod tumani"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.275%2C41.312%2C69.305%2C41.342&layer=mapnik&marker=41.32729%2C69.28998"
              width="100%"
              height="100%"
              className="map-iframe"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.055] to-transparent" />
    </section>
  );
}
