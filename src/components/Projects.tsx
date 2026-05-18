"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "GENIE",
    tagline: "Your AI Wish-Fulfillment Engine",
    description:
      "An intelligent manifestation assistant that translates your goals into structured daily actions — using AI to bridge intention and execution.",
    tags: ["Next.js", "Claude API", "Manifestation AI"],
    accent: "#FF6B00",
    accentRgb: "255,107,0",
    icon: "✦",
    status: "Live",
  },
  {
    name: "HIRA",
    tagline: "Human Intelligence & Resonance Amplifier",
    description:
      "A coaching AI that analyses your communication patterns and emotional blocks, then delivers personalised frequency-raising protocols.",
    tags: ["Python", "OpenAI", "NLP"],
    accent: "#BFFF00",
    accentRgb: "191,255,0",
    icon: "◈",
    status: "Beta",
  },
  {
    name: "SocietyOS",
    tagline: "The OS for Conscious Communities",
    description:
      "A platform enabling high-frequency individuals to organise, collaborate, and co-create abundance at scale — decentralised and sovereign.",
    tags: ["React", "Node.js", "Web3"],
    accent: "#FF6B00",
    accentRgb: "255,107,0",
    icon: "⬡",
    status: "Building",
  },
  {
    name: "Crypto System",
    tagline: "Abundance Multiplier for the Digital Age",
    description:
      "An algorithmic approach to crypto markets informed by LOA principles — aligning financial frequency with disciplined, systematic strategy.",
    tags: ["Python", "TradingView", "DeFi"],
    accent: "#BFFF00",
    accentRgb: "191,255,0",
    icon: "◆",
    status: "Private",
  },
  {
    name: "JARVIS",
    tagline: "Personal AI Chief of Staff",
    description:
      "A deeply personalised AI assistant that manages schedules, filters noise, and keeps your daily reality aligned with your highest vision.",
    tags: ["LangChain", "GPT-4o", "Automation"],
    accent: "#FF6B00",
    accentRgb: "255,107,0",
    icon: "⊕",
    status: "Live",
  },
];

const STATUS_STYLE: Record<string, { color: string; bg: string }> = {
  Live: { color: "#BFFF00", bg: "rgba(191,255,0,0.1)" },
  Beta: { color: "#FF6B00", bg: "rgba(255,107,0,0.1)" },
  Building: { color: "#FFB347", bg: "rgba(255,179,71,0.1)" },
  Private: { color: "rgba(255,255,255,0.4)", bg: "rgba(255,255,255,0.06)" },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#020209]" />

      {/* Section separator line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,107,0,0.3) 30%, rgba(191,255,0,0.3) 70%, transparent)",
        }}
      />

      {/* Orange orb top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background: "rgba(255,107,0,0.06)",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-5"
          >
            <span
              className="h-px w-10 rounded-full"
              style={{ background: "#FF6B00" }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.25em]"
              style={{ color: "#FF6B00" }}
            >
              AI Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="font-bold tracking-tight text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Tools Built for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #BFFF00 0%, #8FFF00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              High Frequency
            </span>{" "}
            Living
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg max-w-2xl"
            style={{ color: "rgba(255,255,255,0.44)" }}
          >
            Five AI systems at the intersection of consciousness and code —
            each one engineered to raise your operating frequency.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => {
            const statusStyle = STATUS_STYLE[project.status];
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.08,
                  ease: [0.25, 0.4, 0.25, 1] as const,
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.28 },
                }}
                className="relative group rounded-2xl p-6 flex flex-col overflow-hidden cursor-default"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = `1px solid ${project.accent}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(${project.accentRgb},0.12), 0 0 0 1px ${project.accent}25`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border =
                    "1px solid rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-px rounded-full"
                  style={{ background: `${project.accent}60` }}
                />

                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0"
                    style={{
                      background: `rgba(${project.accentRgb},0.12)`,
                      color: project.accent,
                      border: `1px solid rgba(${project.accentRgb},0.25)`,
                    }}
                  >
                    {project.icon}
                  </div>

                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      color: statusStyle.color,
                      background: statusStyle.bg,
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Name + tagline */}
                <h3
                  className="font-bold text-xl text-white mb-1 tracking-tight"
                >
                  {project.name}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: project.accent }}
                >
                  {project.tagline}
                </p>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: "rgba(255,255,255,0.42)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.45)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Coming soon placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.42, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[220px]"
            style={{
              border: "1px dashed rgba(255,255,255,0.1)",
            }}
          >
            <div
              className="text-3xl mb-3"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              +
            </div>
            <div
              className="text-sm font-semibold mb-1"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              More Incoming
            </div>
            <div
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.18)" }}
            >
              New frequency tools in development
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
