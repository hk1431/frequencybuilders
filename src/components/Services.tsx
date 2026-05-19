"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function AnimatedChar({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = Math.min((index + 1) / total, 1);
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char === " " ? " " : char}
    </motion.span>
  );
}

function CharacterText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.25"],
  });
  const chars = text.split("");
  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <AnimatedChar key={i} char={char} progress={scrollYProgress} index={i} total={chars.length} />
      ))}
    </p>
  );
}

const SERVICES = [
  {
    icon: "◈",
    title: "Social Media Management",
    description: "Strategy, content creation, scheduling, and analytics across Instagram, TikTok, LinkedIn, and X. We grow your audience and keep your brand consistent.",
    tags: ["Content Strategy", "Reels & Shorts", "Analytics"],
    accent: "#FF6B00",
    accentRgb: "255,107,0",
  },
  {
    icon: "⬡",
    title: "Website Building",
    description: "Custom-designed, fast, and SEO-ready websites built with Next.js and React. From landing pages to full brand sites — pixel-perfect and conversion-focused.",
    tags: ["Next.js", "Custom Design", "SEO"],
    accent: "#BFFF00",
    accentRgb: "191,255,0",
  },
  {
    icon: "▶",
    title: "Video Ads",
    description: "Short-form video ads engineered for scroll-stopping performance. Hook-first scripting, professional editing, and platform-optimised delivery for paid campaigns.",
    tags: ["Short-Form", "Hook Writing", "Paid Ads"],
    accent: "#FF6B00",
    accentRgb: "255,107,0",
  },
  {
    icon: "✦",
    title: "AI Systems",
    description: "Custom AI tools, automation pipelines, and Claude/GPT integrations built for your business. From lead bots to internal workflows — we ship things that work.",
    tags: ["Claude API", "Automation", "Custom Builds"],
    accent: "#BFFF00",
    accentRgb: "191,255,0",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#020209]" />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,107,0,0.3) 30%, rgba(191,255,0,0.3) 70%, transparent)" }}
      />

      <div
        className="absolute pointer-events-none"
        style={{ top: "20%", right: "-10%", width: "500px", height: "500px", background: "rgba(191,255,0,0.05)", filter: "blur(120px)", borderRadius: "50%" }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "10%", left: "-5%", width: "400px", height: "400px", background: "rgba(255,107,0,0.06)", filter: "blur(100px)", borderRadius: "50%" }}
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
              What We Do
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
            Services That{" "}
            <span style={{ background: "linear-gradient(135deg, #BFFF00 0%, #8FFF00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Move the Needle
            </span>
          </motion.h2>

          <CharacterText
            text="We handle the digital side so you can focus on the work that matters."
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.88)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as const }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative group rounded-2xl p-7 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = `1px solid ${service.accent}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(${service.accentRgb},0.1)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="absolute top-0 left-7 right-7 h-px rounded-full" style={{ background: `${service.accent}50` }} />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-5"
                style={{ background: `rgba(${service.accentRgb},0.12)`, color: service.accent, border: `1px solid rgba(${service.accentRgb},0.25)` }}
              >
                {service.icon}
              </div>

              <h3 className="font-bold text-xl text-white mb-3 tracking-tight">{service.title}</h3>

              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.44)" }}>
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-black transition-all duration-300 hover:scale-105"
            style={{ background: "#FF6B00" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(255,107,0,0.5)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            Start a Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
