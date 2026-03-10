import { SectionBadge } from "./SectionBadge";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import bgImage from "figma:asset/6dfa8fe33e85fa464c4fe99e1c9e846170e69462.png";

export function FinalWord() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

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
      id="contact"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay to keep text legible and luxury feel */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(0,22,55,0.92) 0%, rgba(0,38,85,0.82) 50%, rgba(0,15,38,0.95) 100%)" }}
        />
      </div>

      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] transition-all duration-200"
        style={{
          background: `radial-gradient(circle 500px at ${spotlight.x}% ${spotlight.y}%, rgba(233,180,108,0.09), transparent 70%)`,
        }}
      />

      {/* Decorative orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(233,180,108,0.08), rgba(233,180,108,0) 65%)",
          transform: "translate(35%, -35%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(233,180,108,0.06), rgba(233,180,108,0) 65%)",
          transform: "translate(-35%, 35%)",
        }}
      />

      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-[1]"
        style={{ background: "linear-gradient(to right, transparent, rgba(233,180,108,0.4) 30%, rgba(233,180,108,0.4) 70%, transparent)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-6"
        >
          <SectionBadge text="FINAL WORD" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-white uppercase mb-8"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 5.5vw, 4.8rem)",
            lineHeight: 1.0,
          }}
        >
          Your Market Won't Wait.{" "}
          <span className="gold-gradient-text">Neither Should You.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 max-w-3xl mb-12 mx-auto"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.50)" }}
        >
          <p>
            Right now, somewhere in your market, a prospect who should be your client is choosing
            someone else. Not because that agent is more experienced. Not because they've closed more
            deals. Because when that prospect typed a name into Google, clicked on a website, or
            scrolled through an Instagram profile — the other agent's brand did its job.{" "}
            <span className="text-white/75" style={{ fontWeight: 500 }}>And yours didn't.</span>
          </p>
          <p>
            That's the only difference. And it's fixable.{" "}
            <span className="text-[#E9B46C]" style={{ fontWeight: 600 }}>In 60 days.</span>
          </p>
          <p>
            The Rapid Prospect Full Brand & Web Package doesn't just improve how you look. It
            transforms your entire digital presence into a machine that attracts the right clients,
            filters out the wrong ones, and books appointments while you focus on closing. It's not
            a rebrand. It's a repositioning — one that pays for itself with a single additional closing.
          </p>
        </motion.div>

        {/* Mid-title callout */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto mb-14"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.45rem, 2.8vw, 2.1rem)",
            lineHeight: 1.25,
            color: "rgba(255,255,255,0.90)",
            letterSpacing: "0.01em",
          }}
        >
          The agents who dominate their markets in the next five years are building their brands right now.{" "}
          <span className="gold-gradient-text">The question is whether you're one of them.</span>
        </motion.p>

        {/* Investment recap */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-8 mb-8 pb-10 justify-center"
        >
          {["US$7,600", "60-Day Delivery", "Everything Included"].map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              {i > 0 && <div className="w-px h-4 bg-white/15 hidden sm:block" />}
              <span
                className="text-white/40"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "0.93rem" }}
              >
                {item}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/28 mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", lineHeight: 1.7 }}
        >
          Structured milestone payments. No big upfront risk. Real, permanent results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#"
            className="shimmer-btn inline-flex items-center gap-3 bg-[#E9B46C] text-[#101010] px-8 py-4 rounded-sm group"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.93rem" }}
            whileHover={{ scale: 1.03, boxShadow: "0 12px 50px rgba(233,180,108,0.4)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Book Your Private Strategy Call — Limited Spots Available
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="mailto:hello@rapidprospect.com"
            className="inline-flex items-center gap-2 border border-white/15 text-white/55 px-8 py-4 rounded-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.93rem" }}
            whileHover={{ borderColor: "rgba(233,180,108,0.5)", color: "#E9B46C", scale: 1.01 }}
            transition={{ duration: 0.25 }}
          >
            Or Email Us Directly to Ask a Question →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}