"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const x = useSpring(rawX, { stiffness: 180, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 180, damping: 20, mass: 0.5 });

  const visible = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!visible.current) visible.current = true;
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [rawX, rawY]);

  return (
    <motion.div
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        position: "fixed",
        top: 0,
        left: 0,
        width: 60,
        height: 60,
        borderRadius: "50%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 9999,
        border: "2px solid rgba(255,107,0,0.6)",
        boxShadow: "0 0 16px rgba(255,107,0,0.4), 0 0 32px rgba(255,107,0,0.15)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/deepak-animated.gif"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          display: "block",
        }}
        draggable={false}
      />
    </motion.div>
  );
}
