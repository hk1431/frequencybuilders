"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "LOA Coaching", href: "#loa-coaching" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Frequency Builders"
              style={{ height: "80px", width: "auto" }}
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#BFFF00")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:block px-5 py-2.5 font-semibold text-sm rounded-full text-black transition-all duration-300 hover:scale-105"
              style={{ background: "#FF6B00" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,107,0,0.5)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              Book a Free Call
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
              aria-label="Toggle menu"
            >
              <span className="block h-0.5 bg-white rounded-full transition-all duration-300 origin-center" style={{ width: "20px", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
              <span className="block h-0.5 bg-white rounded-full transition-all duration-300" style={{ width: "16px", opacity: menuOpen ? 0 : 1 }} />
              <span className="block h-0.5 bg-white rounded-full transition-all duration-300 origin-center" style={{ width: "20px", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block text-center px-5 py-3 font-semibold text-sm rounded-full text-black"
              style={{ background: "#FF6B00" }}
            >
              Book a Free Call
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
