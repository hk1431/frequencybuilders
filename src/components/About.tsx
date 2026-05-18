"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    icon: "◈",
    title: "Law of Attraction Coach",
    desc: "7+ years guiding individuals to reprogram their subconscious and align with the life they deserve — using proven LOA frameworks.",
    color: "#FF6B00",
  },
  {
    icon: "⬡",
    title: "AI Systems Builder",
    desc: "Building intelligent tools that automate, amplify, and accelerate — so your energy flows where it truly matters.",
    color: "#BFFF00",
  },
];

const HIGHLIGHTS = [
  { value: "7+", label: "Years coaching" },
  { value: "500+", label: "Lives shifted" },
  { value: "5", label: "AI systems live" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.85, delay, ease: [0.25, 0.4, 0.25, 1] as const },
});

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#020209]" />

      {/* Volt green ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 85% 55%, rgba(191,255,0,0.05), transparent)",
        }}
      />
      {/* Orange ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 10% 30%, rgba(255,107,0,0.05), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Label */}
        <motion.div {...fadeUp()} className="flex items-center gap-3 mb-5">
          <span
            className="h-px w-10 rounded-full"
            style={{ background: "#BFFF00" }}
          />
          <span
            className="text-[11px] font-bold uppercase tracking-[0.25em]"
            style={{ color: "#BFFF00" }}
          >
            About Deepak
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* ── Left: Copy ── */}
          <div>
            <motion.h2
              {...fadeUp(0.05)}
              className="font-bold leading-tight tracking-tight text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Where Ancient Laws{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #FF6B00 0%, #FFB347 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Meet
              </span>{" "}
              Modern AI
            </motion.h2>

            <motion.p
              {...fadeUp(0.1)}
              className="text-lg leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              I&apos;m Deepak Sharma — a Law of Attraction coach and AI systems
              builder on a mission to help people tune into the frequency of
              abundance they were born to live.
            </motion.p>

            <motion.p
              {...fadeUp(0.16)}
              className="text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              After years studying the science of manifestation and building AI
              tools that mirror the mind&apos;s own patterning, I realised both
              disciplines point at the same truth:{" "}
              <em className="not-italic text-white/75">
                your outer world is a printout of your inner broadcast.
              </em>{" "}
              FrequencyBuilders exists to help you change the signal.
            </motion.p>

            {/* Pillar cards */}
            <div className="flex flex-col gap-4 mb-12">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.75,
                    delay: 0.22 + i * 0.1,
                    ease: [0.25, 0.4, 0.25, 1] as const,
                  }}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 font-bold"
                    style={{
                      background: `${p.color}18`,
                      color: p.color,
                      border: `1px solid ${p.color}30`,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">
                      {p.title}
                    </div>
                    <div
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.42)" }}
                    >
                      {p.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mini stats */}
            <motion.div
              {...fadeUp(0.35)}
              className="flex gap-10"
            >
              {HIGHLIGHTS.map((h) => (
                <div key={h.label}>
                  <div
                    className="text-2xl font-bold mb-0.5 tabular-nums"
                    style={{
                      background: "linear-gradient(135deg, #FF6B00, #BFFF00)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {h.value}
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "rgba(255,255,255,0.36)" }}
                  >
                    {h.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="flex items-center justify-center"
          >
            <div className="relative w-[360px] h-[360px] flex items-center justify-center">
              {/* Ambient glow */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: "-40px",
                  background:
                    "radial-gradient(circle, rgba(255,107,0,0.12) 0%, rgba(191,255,0,0.06) 50%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              {/* Outer ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: 0,
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              />

              {/* Mid ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "50px",
                  border: "1px solid rgba(255,107,0,0.2)",
                }}
              />

              {/* Inner ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "100px",
                  border: "1px solid rgba(191,255,0,0.18)",
                  background: "rgba(255,255,255,0.02)",
                }}
              />

              {/* Centre card */}
              <div
                className="relative z-10 text-center px-6 py-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{
                    background: "linear-gradient(135deg, #FF6B00, #BFFF00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  DS
                </div>
                <div className="text-white font-bold text-sm tracking-wide">
                  Deepak Sharma
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  Coach · Builder · Creator
                </div>
              </div>

              {/* Orbiting dots */}
              {[
                { color: "#FF6B00", top: "8%", left: "50%" },
                { color: "#BFFF00", top: "50%", left: "6%" },
                { color: "#FF6B00", top: "88%", left: "72%" },
                { color: "#BFFF00", top: "24%", left: "90%" },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: "8px",
                    height: "8px",
                    background: dot.color,
                    boxShadow: `0 0 14px ${dot.color}`,
                    top: dot.top,
                    left: dot.left,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 2.5 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.6,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
