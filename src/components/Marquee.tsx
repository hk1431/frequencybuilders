"use client";

import { useEffect, useState } from "react";

const TRACK = [
  "Social Media Management", "•",
  "Website Building", "•",
  "Video Ads", "•",
  "AI Systems", "•",
  "LOA Coaching", "•",
  "FrequencyBuilders", "•",
];

const ROW = Array(8).fill(TRACK).flat();

function MarqueeRow({ dir, base }: { dir: 1 | -1; base: number }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          transform: `translateX(${base + dir * scrollY * 0.35}px)`,
          willChange: "transform",
          whiteSpace: "nowrap",
        }}
      >
        {ROW.map((item, i) => (
          <span
            key={i}
            className="text-3xl md:text-5xl font-bold uppercase inline-block"
            style={{
              color: i % 2 === 0 ? "#FF6B00" : "rgba(255,255,255,0.88)",
              padding: "0 1.25rem",
              letterSpacing: "0.02em",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      className="py-10 overflow-hidden"
      style={{
        background: "#020209",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="space-y-6">
        {/* Row 1 — scrolls right */}
        <MarqueeRow dir={1} base={-3000} />
        {/* Row 2 — scrolls left */}
        <MarqueeRow dir={-1} base={-5500} />
      </div>
    </section>
  );
}
