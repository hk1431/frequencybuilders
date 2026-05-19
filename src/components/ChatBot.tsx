"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "bot" | "user";
  text: string;
};

type LeadData = {
  name: string;
  business: string;
  service: string;
  callTime: string;
};

const SERVICE_OPTIONS = [
  "Social Media Management",
  "Website Building",
  "Video Ads",
  "AI Systems",
];

const TIME_OPTIONS = [
  "Morning (9am – 12pm)",
  "Afternoon (12pm – 5pm)",
  "Evening (5pm – 8pm)",
];

type Step = "name" | "business" | "service" | "callTime" | "done";

const PROMPTS: Record<Step, string> = {
  name: "Hi! I'm the FrequencyBuilders assistant. What's your name?",
  business: "",
  service: "",
  callTime: "",
  done: "",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("name");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: PROMPTS.name },
  ]);
  const [input, setInput] = useState("");
  const [lead, setLead] = useState<Partial<LeadData>>({});
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBot = (text: string) => {
    setMessages((prev) => [...prev, { role: "bot", text }]);
  };

  const addUser = (text: string) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
  };

  const handleTextSubmit = () => {
    const val = input.trim();
    if (!val) return;
    setInput("");
    addUser(val);

    if (step === "name") {
      setLead((prev) => ({ ...prev, name: val }));
      setTimeout(() => {
        addBot(`Great to meet you, ${val}! What type of business do you have?`);
        setStep("business");
      }, 500);
    } else if (step === "business") {
      setLead((prev) => ({ ...prev, business: val }));
      setTimeout(() => {
        addBot("Which service are you most interested in?");
        setStep("service");
      }, 500);
    }
  };

  const handleOption = (value: string) => {
    addUser(value);

    if (step === "service") {
      setLead((prev) => ({ ...prev, service: value }));
      setTimeout(() => {
        addBot("What's the best time to call you?");
        setStep("callTime");
      }, 500);
    } else if (step === "callTime") {
      const finalLead = { ...lead, callTime: value };
      setLead(finalLead);
      setTimeout(() => {
        addBot(
          `Perfect! Here's a summary:\n\n` +
            `Name: ${finalLead.name}\n` +
            `Business: ${finalLead.business}\n` +
            `Service: ${finalLead.service}\n` +
            `Best time to call: ${value}\n\n` +
            `We'll be in touch soon. Talk to you then! ✦`
        );
        setStep("done");
      }, 500);
    }
  };

  const reset = () => {
    setStep("name");
    setLead({});
    setMessages([{ role: "bot", text: PROMPTS.name }]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg transition-all duration-300"
        style={{ background: "linear-gradient(135deg, #FF6B00, #BFFF00)" }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 32px rgba(255,107,0,0.5)" }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        {open ? "×" : "💬"}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "#0d0d1a",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,107,0,0.1)",
              maxHeight: "480px",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-[11px]"
                style={{ background: "linear-gradient(135deg, #FF6B00, #BFFF00)" }}
              >
                FB
              </div>
              <div>
                <div className="text-white font-bold text-sm">FrequencyBuilders</div>
                <div className="text-[11px]" style={{ color: "#BFFF00" }}>● Online</div>
              </div>
              {step === "done" && (
                <button
                  onClick={reset}
                  className="ml-auto text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all duration-200"
                  style={{ color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
                >
                  Restart
                </button>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 0 }}>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
                    style={
                      msg.role === "bot"
                        ? { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.85)", borderBottomLeftRadius: "4px" }
                        : { background: "#FF6B00", color: "#000", fontWeight: 600, borderBottomRightRadius: "4px" }
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Option buttons */}
            {(step === "service" || step === "callTime") && (
              <div className="px-4 pb-3 flex flex-col gap-2 flex-shrink-0">
                {(step === "service" ? SERVICE_OPTIONS : TIME_OPTIONS).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOption(opt)}
                    className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,107,0,0.12)"; el.style.borderColor = "rgba(255,107,0,0.3)"; el.style.color = "#FF6B00"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.color = "rgba(255,255,255,0.8)"; }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Text input */}
            {(step === "name" || step === "business") && (
              <div
                className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTextSubmit()}
                  placeholder="Type your answer..."
                  className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/30"
                  autoFocus
                />
                <button
                  onClick={handleTextSubmit}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm transition-all duration-200"
                  style={{ background: "#FF6B00" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(255,107,0,0.5)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  →
                </button>
              </div>
            )}

            {step === "done" && (
              <div
                className="px-4 py-3 text-center text-xs flex-shrink-0"
                style={{ color: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                We will reach out within 24 hours.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
