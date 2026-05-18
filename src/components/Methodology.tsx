"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    icon: "◎",
    title: "Diagnose",
    subtitle: "Map your current signal",
    description:
      "We identify exactly what frequency you&apos;re broadcasting right now — the hidden beliefs, emotional patterns, and subconscious scripts running your life on autopilot.",
    accent: "#FF6B00",
    accentRgb: "255,107,0",
  },
  {
    number: "02",
    icon: "⚡",
    title: "Interrupt",
    subtitle: "Break the interference",
    description:
      "Using proven pattern-interrupt techniques, we cut the loop of low-frequency thinking that has been silently cancelling your manifestations before they could land.",
    accent: "#BFFF00",
    accentRgb: "191,255,0",
  },
  {
    number: "03",
    icon: "◈",
    title: "Rewire",
    subtitle: "Install the new programme",
    description:
      "We go root-deep — reprogramming your subconscious identity so that abundance, health, and success feel natural, not aspirational. You become the person who already has it.",
    accent: "#FF6B00",
    accentRgb: "255,107,0",
  },
  {
    number: "04",
    icon: "✦",
    title: "Radiate",
    subtitle: "Lock in and let it flow",
    description:
      "With your new frequency locked in, you stop chasing and start attracting. Daily rituals, AI-powered accountability, and community keep the signal strong and expanding.",
    accent: "#BFFF00",
    accentRgb: "191,255,0",
  },
];

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="relative py-28 md:py-36 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#020209]" />

      {/* Section separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(191,255,0,0.3) 30%, rgba(255,107,0,0.3) 70%, transparent)",
        }}
      />

      {/* Centre volt glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(191,255,0,0.04) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 mb-5"
          >
            <span
              className="h-px w-10 rounded-full"
              style={{
                background: "linear-gradient(to right, transparent, #FF6B00)",
              }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.25em]"
              style={{ color: "#FF6B00" }}
            >
              The Methodology
            </span>
            <span
              className="h-px w-10 rounded-full"
              style={{
                background: "linear-gradient(to left, transparent, #FF6B00)",
              }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="font-bold tracking-tight text-white mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
          >
            The Frequency{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6B00 0%, #FFB347 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Reset
            </span>{" "}
            Framework
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.44)" }}
          >
            A four-phase process that moves you from broadcasting scarcity to
            radiating the frequency of everything you desire.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1] as const,
              }}
              className="relative rounded-2xl p-7 overflow-hidden group"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              whileHover={{
                borderColor: `rgba(${step.accentRgb},0.3)`,
                transition: { duration: 0.25 },
              }}
            >
              {/* Large background number */}
              <div
                className="absolute -right-3 -top-4 font-black text-[7rem] leading-none select-none pointer-events-none"
                style={{
                  color: `rgba(${step.accentRgb},0.055)`,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {step.number}
              </div>

              {/* Top row */}
              <div className="flex items-center gap-4 mb-5 relative z-10">
                {/* Step number pill */}
                <div
                  className="px-3 py-1 rounded-full text-xs font-bold tabular-nums"
                  style={{
                    background: `rgba(${step.accentRgb},0.12)`,
                    color: step.accent,
                    border: `1px solid rgba(${step.accentRgb},0.25)`,
                  }}
                >
                  Step {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold"
                  style={{
                    background: `rgba(${step.accentRgb},0.1)`,
                    color: step.accent,
                  }}
                >
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-white mb-1 relative z-10 tracking-tight"
              >
                {step.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-sm font-semibold mb-4 relative z-10"
                style={{ color: step.accent }}
              >
                {step.subtitle}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed relative z-10"
                style={{ color: "rgba(255,255,255,0.44)" }}
                dangerouslySetInnerHTML={{ __html: step.description }}
              />

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 rounded-full"
                style={{ background: step.accent }}
                initial={{ width: "0%" }}
                whileInView={{ width: "30%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Connector line graphic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex items-center gap-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: step.accent,
                  boxShadow: `0 0 10px ${step.accent}`,
                }}
              />
              {i < STEPS.length - 1 && (
                <div
                  className="h-px w-12 sm:w-20"
                  style={{
                    background: `linear-gradient(to right, ${step.accent}60, ${STEPS[i + 1].accent}60)`,
                  }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
