"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROJECTS = [
  {
    number: "01",
    name: "GENIE",
    tagline: "AI Goal-to-Action Engine",
    description: "AI-powered app that breaks down user goals into structured daily action plans using the Claude API. Handles context retention across sessions and outputs prioritised task queues.",
    tags: ["Next.js", "Claude API", "TypeScript"],
    accent: "#FF6B00",
    accentRgb: "255,107,0",
    icon: "✦",
    status: "Live",
    link: "https://dscoach.netlify.app/",
  },
  {
    number: "02",
    name: "HIRA",
    tagline: "Human Intelligence & Resonance Amplifier",
    description: "NLP-powered coaching assistant that analyses communication patterns, detects sentiment shifts, and generates personalised improvement protocols via OpenAI.",
    tags: ["Python", "OpenAI", "NLP"],
    accent: "#BFFF00",
    accentRgb: "191,255,0",
    icon: "◈",
    status: "Beta",
    whatsapp: "https://wa.me/917600460563?text=Hi%2C%20I%20want%20to%20see%20HIRA%20demo",
  },
  {
    number: "03",
    name: "ALIGN",
    tagline: "Productivity PWA",
    description: "Progressive Web App for time-blocking and habit tracking. Offline-capable with IndexedDB persistence, push notifications, and a visual daily planner interface.",
    tags: ["PWA", "IndexedDB", "Service Worker"],
    accent: "#FF6B00",
    accentRgb: "255,107,0",
    icon: "▣",
    status: "Live",
    link: "https://hk1431.github.io/align-app/align.html",
  },
  {
    number: "04",
    name: "GATEPASS",
tagline: "Society Management App",
description: "Complete society management platform — visitor entry, resident communication, complaints, and gate management. Life inside the gates, made easy.",
tags: ["React", "Supabase", "Lovable"],
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
};

function StickyCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const statusStyle = STATUS_STYLE[project.status] ?? { color: "rgba(255,255,255,0.4)", bg: "rgba(255,255,255,0.06)" };

  return (
    <div ref={sectionRef} className="project-card-wrapper">
      <div
        style={{
          position: "sticky",
          top: "5rem",
          zIndex: index + 1,
          paddingBottom: "0.5rem",
        }}
      >
        <motion.div
          style={{ scale, transformOrigin: "top center" }}
          className="rounded-3xl overflow-hidden"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="relative rounded-3xl p-4 sm:p-6 md:p-10"
            style={{
              background: "#07070f",
              border: "2px solid #FF6B00",
            }}
          >
            {/* Large background number */}
            <div
              className="absolute right-6 top-4 font-black select-none pointer-events-none leading-none"
              style={{
                fontSize: "clamp(6rem, 15vw, 11rem)",
                color: `rgba(${project.accentRgb},0.06)`,
              }}
            >
              {project.number}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-16">
              {/* Left column */}
              <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-6 flex-shrink-0">
                <div
                  className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-base md:text-2xl font-bold"
                  style={{
                    background: `rgba(${project.accentRgb},0.12)`,
                    color: project.accent,
                    border: `1px solid rgba(${project.accentRgb},0.3)`,
                  }}
                >
                  {project.icon}
                </div>

                <span
                  className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ color: statusStyle.color, background: statusStyle.bg }}
                >
                  {project.status}
                </span>

                <span
                  className="hidden md:block text-5xl font-black tabular-nums"
                  style={{ color: `rgba(${project.accentRgb},0.2)` }}
                >
                  {project.number}
                </span>
              </div>

              {/* Right column */}
              <div className="flex-1 min-w-0">
                <h3
                  className="font-black text-white tracking-tight mb-0.5"
                  style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-xs md:text-base font-semibold mb-2 md:mb-4"
                  style={{ color: project.accent }}
                >
                  {project.tagline}
                </p>
                <p
                  className="text-xs md:text-base leading-relaxed mb-3 md:mb-6 max-w-xl"
                  style={{ color: "rgba(255,255,255,0.48)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-xs font-medium px-2 py-1 md:px-3 md:py-1.5 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
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
                    className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200"
                    style={{
                      color: project.accent,
                      border: `1px solid ${project.accent}50`,
                      background: `rgba(${project.accentRgb},0.08)`,
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb},0.18)`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb},0.08)`; }}
                  >
                    Visit Project →
                  </a>
                )}

                {"whatsapp" in project && project.whatsapp && (
                  <a
                    href={project.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200"
                    style={{
                      color: project.accent,
                      border: `1px solid ${project.accent}50`,
                      background: `rgba(${project.accentRgb},0.08)`,
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb},0.18)`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb},0.08)`; }}
                  >
                    Request Demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative px-4 overflow-hidden" style={{ background: "#020209" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,107,0,0.3) 30%, rgba(191,255,0,0.3) 70%, transparent)" }}
      />

      {/* Section header */}
      <div className="relative z-10 max-w-7xl mx-auto pt-10 pb-4 md:pt-28 md:pb-16">
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

      {/* Sticky stacking cards */}
      <div className="max-w-7xl mx-auto pb-4 md:pb-16">
        {PROJECTS.map((project, i) => (
          <StickyCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
