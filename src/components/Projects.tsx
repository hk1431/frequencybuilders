"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "GENIE",
    tagline: "AI Goal-to-Action Engine",
    description: "AI-powered app that breaks down user goals into structured daily action plans using the Claude API. Handles context retention across sessions and outputs prioritised task queues.",
    tags: ["Next.js", "Claude API", "TypeScript"],
    accent: "#FF6B00",
    accentRgb: "255,107,0",
    icon: "✦",
    status: "Live",
    link: "https://genie-dream-ignite.lovable.app",
  },
  {
    name: "ALIGN",
    tagline: "Productivity PWA",
    description: "Progressive Web App for time-blocking and habit tracking. Offline-capable with IndexedDB persistence, push notifications, and a visual daily planner interface.",
    tags: ["PWA", "IndexedDB", "Service Worker"],
    accent: "#BFFF00",
    accentRgb: "191,255,0",
    icon: "▣",
    status: "Live",
    link: "https://hk1431.github.io/align-app/align.html",
  },
  {
    name: "HIRA",
    tagline: "Human Intelligence & Resonance Amplifier",
    description: "NLP-powered coaching assistant that analyses communication patterns, detects sentiment shifts, and generates personalised improvement protocols via OpenAI.",
    tags: ["Python", "OpenAI", "NLP"],
    accent: "#FF6B00",
    accentRgb: "255,107,0",
    icon: "◈",
    status: "Beta",
    whatsapp: "https://wa.me/917600460563?text=Hi%2C%20I%20want%20to%20see%20HIRA%20demo",
  },
  {
    name: "SocietyOS",
    tagline: "Community Management Platform",
    description: "Decentralised community platform with governance tooling, collaborative workspaces, and Web3 wallet-based member authentication and treasury management.",
    tags: ["React", "Node.js", "Web3"],
    accent: "#BFFF00",
    accentRgb: "191,255,0",
    icon: "⬡",
    status: "Building",
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
    <section id="work" className="relative py-28 md:py-36 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#020209]" />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,107,0,0.3) 30%, rgba(191,255,0,0.3) 70%, transparent)" }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ top: "-10%", left: "-5%", width: "500px", height: "500px", background: "rgba(255,107,0,0.06)", filter: "blur(120px)", borderRadius: "50%" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-10 rounded-full" style={{ background: "#FF6B00" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: "#FF6B00" }}>
              Our Work
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
            Projects &amp;{" "}
            <span style={{ background: "linear-gradient(135deg, #BFFF00 0%, #8FFF00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Products
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg max-w-2xl"
            style={{ color: "rgba(255,255,255,0.44)" }}
          >
            AI tools and digital products built and shipped by the FrequencyBuilders team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => {
            const statusStyle = STATUS_STYLE[project.status];
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as const }}
                whileHover={{ y: -6, transition: { duration: 0.28 } }}
                className="relative group rounded-2xl p-6 flex flex-col overflow-hidden cursor-default"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = `1px solid ${project.accent}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(${project.accentRgb},0.12)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="absolute top-0 left-6 right-6 h-px rounded-full" style={{ background: `${project.accent}60` }} />

                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0"
                    style={{ background: `rgba(${project.accentRgb},0.12)`, color: project.accent, border: `1px solid rgba(${project.accentRgb},0.25)` }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ color: statusStyle.color, background: statusStyle.bg }}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-white mb-1 tracking-tight">{project.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: project.accent }}>{project.tagline}</p>

                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "rgba(255,255,255,0.42)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {"link" in project && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full self-start transition-all duration-200"
                    style={{ color: project.accent, border: `1px solid ${project.accent}40`, background: `rgba(${project.accentRgb},0.08)` }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb},0.18)`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb},0.08)`; }}
                  >
                    Visit →
                  </a>
                )}

                {"whatsapp" in project && project.whatsapp && (
                  <a
                    href={project.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full self-start transition-all duration-200"
                    style={{ color: project.accent, border: `1px solid ${project.accent}40`, background: `rgba(${project.accentRgb},0.08)` }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb},0.18)`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb},0.08)`; }}
                  >
                    Request Demo →
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
