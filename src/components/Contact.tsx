"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SOCIAL_LINKS = [
  { label: "Instagram", handle: "@deepakaistudio", href: "https://www.instagram.com/frequencybuilders" },
];

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <>
      <section id="contact" className="relative py-28 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#020209]" />

        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,107,0,0.35) 30%, rgba(191,255,0,0.35) 70%, transparent)" }}
        />
        <div
          className="absolute pointer-events-none"
          style={{ bottom: "-20%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(255,107,0,0.1) 0%, transparent 65%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute pointer-events-none"
          style={{ top: "-10%", right: "-5%", width: "400px", height: "400px", background: "rgba(191,255,0,0.05)", filter: "blur(100px)", borderRadius: "50%" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 rounded-full" style={{ background: "linear-gradient(to right, transparent, #FF6B00)" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: "#FF6B00" }}>
              Get In Touch
            </span>
            <span className="h-px w-10 rounded-full" style={{ background: "linear-gradient(to left, transparent, #FF6B00)" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="font-bold tracking-tight text-white mb-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            Ready to{" "}
            <span style={{ background: "linear-gradient(135deg, #FF6B00 0%, #FFB347 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Grow
            </span>{" "}
            Your Brand?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ color: "rgba(255,255,255,0.44)" }}
          >
            Drop your email and we will reach out within 24 hours. No fluff — just a real conversation about your brand, your goals, and how we can help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8"
          >
            {submitted ? (
              <div
                className="w-full py-4 px-6 rounded-full font-semibold text-center"
                style={{ background: "rgba(191,255,0,0.1)", border: "1px solid rgba(191,255,0,0.3)", color: "#BFFF00" }}
              >
                ✦ Message received. We will be in touch within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full text-white text-sm outline-none transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onFocus={(e) => { (e.target as HTMLElement).style.border = "1px solid rgba(255,107,0,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 20px rgba(255,107,0,0.1)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.border = "1px solid rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full font-bold text-sm text-black transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  style={{ background: "#FF6B00" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(255,107,0,0.5)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 max-w-sm mx-auto mb-8"
          >
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.35 }}
          >
            <a
              href="https://wa.me/917600460563"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
              style={{ border: "1px solid rgba(191,255,0,0.25)", color: "#BFFF00" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(191,255,0,0.06)"; el.style.boxShadow = "0 0 24px rgba(191,255,0,0.15)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.boxShadow = "none"; }}
            >
              <span>⚡</span> Book a Free Discovery Call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href} className="flex flex-col items-center gap-1 group">
                <span className="text-xs font-bold uppercase tracking-wider transition-colors duration-200 group-hover:text-white" style={{ color: "rgba(255,255,255,0.28)" }}>
                  {s.label}
                </span>
                <span
                  className="text-sm font-semibold transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FF6B00")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                >
                  {s.handle}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="relative py-8 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B00, #BFFF00)" }}>
              <span className="text-black font-bold text-[9px]">FB</span>
            </div>
            <span className="text-sm font-bold" style={{ color: "rgba(255,255,255,0.5)" }}>
              Frequency<span style={{ color: "#FF6B00" }}>Builders</span>
            </span>
          </div>
          <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.22)" }}>
            © {new Date().getFullYear()} FrequencyBuilders.com · Full-Service Digital Agency
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
            Build. Grow. Dominate.
          </p>
        </div>
      </footer>
    </>
  );
}
