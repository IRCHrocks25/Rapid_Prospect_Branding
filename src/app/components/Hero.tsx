import heroBg from "figma:asset/bb05729035a5e147baddd29be26c824afc4e6046.png";
import { SectionBadge } from "./SectionBadge";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [mouseIn, setMouseIn] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#140c07] noise-overlay"
      style={{ paddingTop: "5rem" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: mouseIn ? 1 : 0,
          background: `radial-gradient(circle 600px at ${spotlight.x}% ${spotlight.y}%, rgba(233,180,108,0.07) 0%, transparent 70%)`,
        }}
      />

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury city skyline"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative gold vertical line */}
      <div
        className="absolute top-0 w-px h-full z-0 pointer-events-none"
        style={{
          left: "6%",
          background: "linear-gradient(to bottom, transparent, rgba(233,180,108,0.25) 40%, rgba(233,180,108,0.10) 70%, transparent)",
        }}
      />

      {/* Decorative right line */}
      <div
        className="absolute top-0 w-px h-full z-0 pointer-events-none hidden lg:block"
        style={{
          right: "8%",
          background: "linear-gradient(to bottom, transparent, rgba(0,38,85,0.6) 50%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-24 pb-10 lg:pt-32 text-center md:text-center text-left flex flex-col items-start md:items-center">

        {/* ── EYEBROW BADGE ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 max-w-xs sm:max-w-sm md:max-w-none"
        >
          {/* Mobile: plain left-aligned text. Desktop: badge with border */}
          <span
            className="md:hidden block"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: "10px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            THE ULTIMATE BRAND PACKAGE FOR REAL ESTATE PROFESSIONALS
          </span>
          <span className="hidden md:inline-block">
            <SectionBadge text="THE ULTIMATE BRAND PACKAGE FOR REAL ESTATE PROFESSIONALS" />
          </span>
        </motion.div>

        {/* ── HEADLINE ── */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white uppercase mb-6 text-left md:text-center"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.89rem, 5vw, 4.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
          }}
        >
          {/* Mobile: single flowing sentence */}
          <span className="md:hidden">
            The Agents Who Win Tomorrow Are Fixing Their Brand{" "}
            <span className="gold-gradient-text">Today.</span>
          </span>
          {/* Desktop: two lines */}
          <span className="hidden md:block">The Agents Who Win Tomorrow</span>
          <span className="hidden md:block">
            Are Fixing Their Brand{" "}
            <span className="gold-gradient-text">Today.</span>
          </span>
        </motion.h1>

        {/* ── SUBHEADLINE ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mx-auto text-left md:text-center"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1.05rem, 2vw, 1.22rem)",
            lineHeight: 1.65,
            color: "#E9B46C",
            maxWidth: "820px",
          }}
        >
          The done-for-you brand, website, and funnel system that turns luxury real estate agents
          into the obvious choice — in 60 days.
        </motion.p>

        {/* ── BODY COPY ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 mb-8 max-w-4xl md:mx-auto text-left md:text-center"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.90)",
          }}
        >
          <p>
            You've earned your place in this market. You've closed the deals, built the
            relationships, and developed an instinct for this industry that takes years to acquire.
          </p>
          <p>
            But here's the uncomfortable truth:{" "}
            <span className="text-white/80" style={{ fontWeight: 500 }}>
              none of that shows up when someone Googles your name.
            </span>
          </p>
          <p>
            Your website looks like it was built in a different era. Your brand doesn't reflect
            what you charge, who you serve, or why clients should choose you over the agent down
            the street. And somewhere in the back of your mind, you already know —{" "}
            <span className="text-white/80" style={{ fontWeight: 500 }}>
              you've lost listings because of it.
            </span>
          </p>
        </motion.div>

        {/* ── CALLOUT ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative border-0 md:border border-[#E9B46C]/25 px-0 md:px-8 py-5 mb-8 max-w-4xl md:mx-auto group text-left md:text-center"
          style={{ background: "transparent" }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: "inset 0 0 30px rgba(233,180,108,0.06)" }}
          />
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Your brand isn't just how you look. It's how much you earn.{" "}
            <span className="text-[#E9B46C]">
              And right now, it's costing you more than you think.
            </span>
          </p>
        </motion.div>

        {/* ── SOLUTION ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl md:mx-auto mb-12 text-left md:text-center"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.90)",
          }}
        >
          The{" "}
          <span className="text-white/90" style={{ fontWeight: 600 }}>
            Rapid Prospect Full Brand & Web Package
          </span>{" "}
          exists to close that gap — completely, professionally, and permanently. In 60 days, you
          go from invisible to unmissable. From forgettable to the agent every high-net-worth buyer
          wants in their corner.
        </motion.p>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-start md:justify-center gap-5 mb-6"
        >
          <motion.a
            href="#investment"
            className="shimmer-btn inline-flex items-center gap-3 bg-[#E9B46C] text-[#101010] px-9 py-4 rounded-sm group"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 40px rgba(233,180,108,0.35)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            I'm Ready — Show Me How It Works
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <span
            className="text-white/60 text-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            No commitment. No fluff.
          </span>
        </motion.div>

        {/* ── GOLD DIVIDER ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-px mb-12 w-full origin-center"
          style={{
            background: "linear-gradient(to right, transparent, rgba(233,180,108,0.4) 20%, rgba(233,180,108,0.4) 80%, transparent)",
          }}
        />
      </div>

      <div className="h-12 bg-gradient-to-b from-transparent to-[#140c07] relative z-10" />
    </section>
  );
}