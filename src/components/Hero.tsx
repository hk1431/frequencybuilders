"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Stars from "./Stars";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1] as const } },
};

const STATS = [
  { value: "6+", label: "Projects Shipped" },
  { value: "4", label: "Core Services" },
  { value: "AI", label: "Powered Systems" },
];

const RINGS = [1, 2, 3, 4, 5];

function MagneticImage() {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 120, damping: 18, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rawX.set((e.clientX - cx) * 0.22);
    rawY.set((e.clientY - cy) * 0.22);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex items-center justify-center cursor-pointer"
      style={{ padding: "24px" }}
    >
      <motion.div style={{ x, y }} className="relative">
        {/* Outer glow ring */}
        <div
          className="absolute rounded-2xl pointer-events-none"
          style={{
            inset: "-3px",
            background: "linear-gradient(135deg, rgba(255,107,0,0.6), rgba(191,255,0,0.3))",
            filter: "blur(2px)",
            borderRadius: "20px",
          }}
        />
        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "-30px",
            background: "radial-gradient(ellipse, rgba(255,107,0,0.28) 0%, rgba(255,107,0,0.08) 50%, transparent 70%)",
            filter: "blur(20px)",
            borderRadius: "50%",
          }}
        />
        {/* Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/deepak-animated.gif"
          alt="Deepak Sharma — FrequencyBuilders"
          className="relative block rounded-2xl object-cover"
          style={{
            width: "clamp(280px, 35vw, 400px)",
            height: "auto",
            boxShadow: "0 0 60px rgba(255,107,0,0.35), 0 0 120px rgba(255,107,0,0.12), 0 24px 48px rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,107,0,0.25)",
          }}
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-16">
      <div className="absolute inset-0 bg-[#020209]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 100% 60% at 50% -5%, rgba(18,8,55,0.85), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 110%, rgba(8,4,28,0.7), transparent)" }}
      />

      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ top: "5%", left: "-8%", width: "560px", height: "560px", background: "rgba(255,107,0,0.13)", filter: "blur(160px)" }}
        animate={{ x: [0, 35, 0], y: [0, -22, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ bottom: "0%", right: "-6%", width: "440px", height: "440px", background: "rgba(191,255,0,0.07)", filter: "blur(130px)" }}
        animate={{ x: [0, -28, 0], y: [0, 28, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "-10%", left: "30%", width: "340px", height: "340px", background: "rgba(255,107,0,0.06)", filter: "blur(100px)", borderRadius: "50%" }}
      />

      <Stars />

      <div className="absolute pointer-events-none" style={{ top: "50%", left: "50%" }}>
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

      <motion.div className="relative z-10 max-w-5xl mx-auto text-center" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="inline-flex items-center gap-3 mb-8">
          <span className="h-px w-12 rounded-full" style={{ background: "linear-gradient(to right, transparent, #FF6B00)" }} />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#FF6B00" }}>
            Full-Service Digital Agency
          </span>
          <span className="h-px w-12 rounded-full" style={{ background: "linear-gradient(to left, transparent, #FF6B00)" }} />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-bold leading-[1.06] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)" }}
        >
          <span className="text-white">We Build </span>
          <span style={{ background: "linear-gradient(135deg, #FF6B00 0%, #FF9A00 55%, #FFB347 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Brands.
          </span>
          <br />
          <span className="text-white">We Run </span>
          <span style={{ color: "rgba(255,255,255,0.88)" }}>Socials.</span>
          <br />
          <span className="text-white">We Create </span>
          <span style={{ background: "linear-gradient(135deg, #BFFF00 0%, #8FFF00 55%, #DFFF00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            AI.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          Full-service digital agency — websites, social media, video ads, and AI systems.
        </motion.p>

        {/* Magnetic character image */}
        <motion.div variants={item}>
          <MagneticImage />
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-9 py-4 rounded-full font-bold text-base text-black transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ background: "#FF6B00" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 44px rgba(255,107,0,0.55), 0 0 90px rgba(255,107,0,0.18)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            Book a Free Call →
          </a>
          <a
            href="#work"
            className="px-9 py-4 rounded-full font-medium text-base transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.75)" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#BFFF00"; el.style.color = "#BFFF00"; el.style.boxShadow = "0 0 22px rgba(191,255,0,0.18)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.14)"; el.style.color = "rgba(255,255,255,0.75)"; el.style.boxShadow = "none"; }}
          >
            See Our Work
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-16 flex flex-wrap justify-center gap-10 sm:gap-20">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold mb-1 tabular-nums" style={{ background: "linear-gradient(135deg, #FF6B00, #BFFF00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.38)" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-16 flex flex-col items-center gap-2">
          <motion.div
            className="w-px h-12 rounded-full"
            style={{ background: "linear-gradient(to bottom, transparent, #FF6B00)" }}
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.22)" }}>Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
