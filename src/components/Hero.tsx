"use client";

import { motion } from "framer-motion";
import Stars from "./Stars";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

const STATS = [
  { value: "500+", label: "Lives Transformed" },
  { value: "7+", label: "Years Coaching" },
  { value: "5", label: "AI Systems Built" },
];

const RINGS = [1, 2, 3, 4, 5];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-16">
      {/* Base layer */}
      <div className="absolute inset-0 bg-[#020209]" />

      {/* Top radial — deep navy glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% -5%, rgba(18,8,55,0.85), transparent)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 110%, rgba(8,4,28,0.7), transparent)",
        }}
      />

      {/* Orange orb — upper left */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "5%",
          left: "-8%",
          width: "560px",
          height: "560px",
          background: "rgba(255, 107, 0, 0.13)",
          filter: "blur(160px)",
        }}
        animate={{ x: [0, 35, 0], y: [0, -22, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Volt green orb — lower right */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: "0%",
          right: "-6%",
          width: "440px",
          height: "440px",
          background: "rgba(191, 255, 0, 0.07)",
          filter: "blur(130px)",
        }}
        animate={{ x: [0, -28, 0], y: [0, 28, 0] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Secondary orange — centre bottom */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          left: "30%",
          width: "340px",
          height: "340px",
          background: "rgba(255, 107, 0, 0.06)",
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      />

      {/* Stars */}
      <Stars />

      {/* Signal rings — concentric, centred behind headline */}
      <div
        className="absolute pointer-events-none"
        style={{ top: "50%", left: "50%" }}
      >
        {RINGS.map((i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${i * 200}px`,
              height: `${i * 200}px`,
              top: "50%",
              left: "50%",
              border: "1px solid rgba(255,255,255,0.035)",
              animation: `pulse-ring ${3.5 + i * 0.7}s ease-out infinite`,
              animationDelay: `${i * 0.55}s`,
            }}
          />
        ))}
      </div>

      {/* ─── Content ─── */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Label badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span
            className="h-px w-12 rounded-full"
            style={{
              background: "linear-gradient(to right, transparent, #FF6B00)",
            }}
          />
          <span
            className="text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "#FF6B00" }}
          >
            Law of Attraction Coaching
          </span>
          <span
            className="h-px w-12 rounded-full"
            style={{
              background: "linear-gradient(to left, transparent, #FF6B00)",
            }}
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={item}
          className="font-bold leading-[1.06] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)" }}
        >
          <span className="text-white">Your Life Isn&apos;t </span>
          <span
            style={{
              background:
                "linear-gradient(135deg, #FF6B00 0%, #FF9A00 55%, #FFB347 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Broken.
          </span>
          <br />
          <span style={{ color: "rgba(255,255,255,0.88)" }}>
            It&apos;s Broadcasting
          </span>
          <br />
          <span className="text-white">The Wrong </span>
          <span
            style={{
              background:
                "linear-gradient(135deg, #BFFF00 0%, #8FFF00 55%, #DFFF00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Frequency.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          Work with Deepak Sharma to rewire your subconscious signal, align
          with abundance, and start attracting what you were always meant to
          have.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary */}
          <a
            href="#contact"
            className="px-9 py-4 rounded-full font-bold text-base text-black transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ background: "#FF6B00" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 44px rgba(255,107,0,0.55), 0 0 90px rgba(255,107,0,0.18)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Reset Your Frequency →
          </a>

          {/* Secondary */}
          <a
            href="#about"
            className="px-9 py-4 rounded-full font-medium text-base transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              color: "rgba(255,255,255,0.75)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#BFFF00";
              el.style.color = "#BFFF00";
              el.style.boxShadow = "0 0 22px rgba(191,255,0,0.18)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.14)";
              el.style.color = "rgba(255,255,255,0.75)";
              el.style.boxShadow = "none";
            }}
          >
            Watch Deepak&apos;s Story
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap justify-center gap-10 sm:gap-20"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-bold mb-1 tabular-nums"
                style={{
                  background: "linear-gradient(135deg, #FF6B00, #BFFF00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <motion.div
            className="w-px h-12 rounded-full"
            style={{
              background: "linear-gradient(to bottom, transparent, #FF6B00)",
            }}
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span
            className="text-[10px] font-semibold tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.22)" }}
          >
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
