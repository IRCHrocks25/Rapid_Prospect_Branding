import { SectionBadge } from "./SectionBadge";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const milestones = [
  {
    num: "1 — Deposit",
    amount: "US$2,500",
    trigger: "Locks in your start date. Work begins immediately.",
  },
  {
    num: "2 — Midpoint",
    amount: "US$2,000",
    trigger: "Delivery of your completed website and all branding materials.",
  },
  {
    num: "3 — Completion",
    amount: "US$3,100",
    trigger: "Delivery of your landing pages, full funnel, and automation setup.",
  },
];

function MilestoneRow({ m, index }: { m: typeof milestones[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative grid md:grid-cols-[1fr_140px_1fr] gap-4 md:gap-6 py-5 border-b border-white/5 overflow-hidden ${
        index === milestones.length - 1 ? "border-0" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gold sweep on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -20 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ background: "linear-gradient(90deg, rgba(233,180,108,0.05), rgba(0,38,85,0.1), transparent)" }}
      />
      {/* Left accent line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#E9B46C]"
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        style={{ transformOrigin: "center" }}
        transition={{ duration: 0.3 }}
      />

      <span
        className="relative z-10 text-white/60"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: "0.93rem",
          color: hovered ? "rgba(255,255,255,0.85)" : undefined,
          transition: "color 0.3s",
        }}
      >
        {m.num}
      </span>
      <motion.span
        className="relative z-10"
        animate={{ color: hovered ? "#f0c060" : "#E9B46C", textShadow: hovered ? "0 0 20px rgba(233,180,108,0.5)" : "none" }}
        transition={{ duration: 0.3 }}
        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1.3rem" }}
      >
        {m.amount}
      </motion.span>
      <span
        className="relative z-10 text-white/38"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "0.88rem",
          lineHeight: 1.6,
          color: hovered ? "rgba(255,255,255,0.55)" : undefined,
          transition: "color 0.3s",
        }}
      >
        {m.trigger}
      </span>
    </motion.div>
  );
}

export function Investment() {
  return (
    <section id="investment" className="bg-[#140c07] py-28 noise-overlay luxury-texture relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <SectionBadge text="THE INVESTMENT" />
          <h2
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              lineHeight: 1.05,
            }}
          >
            One Closed Deal Pays for This.{" "}
            <span className="gold-gradient-text">Twice.</span>
          </h2>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-16 max-w-3xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)" }}
        >
          <p>
            The average luxury commission in the U.S. is well over $15,000. This package is $7,600.
            That math should be the end of the conversation — but there's more.
          </p>
          <p>
            The payment structure is built around trust. You don't hand over a lump sum and hope for
            the best. You pay as value is delivered. Every milestone is tied to a real deliverable.{" "}
            <span className="text-white/75" style={{ fontWeight: 500 }}>
              If we don't deliver, you don't pay.
            </span>
          </p>
        </motion.div>

        {/* Package card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10 group"
          whileHover={{ y: -4 }}
        >
          {/* Animated shimmer border */}
          <div
            className="absolute -inset-px rounded-sm pointer-events-none"
            style={{
              background: "linear-gradient(90deg, rgba(233,180,108,0.08), rgba(233,180,108,0.4) 40%, rgba(233,180,108,0.08) 60%, rgba(233,180,108,0.0) 100%)",
              backgroundSize: "200% auto",
              animation: "borderShimmer 4s linear infinite",
            }}
          />

          <div
            className="relative border border-[#E9B46C]/20 rounded-sm overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(0,38,85,0.25), rgba(16,16,16,0.9))" }}
          >
            {/* Top accent line */}
            <div
              className="h-px w-full"
              style={{ background: "linear-gradient(to right, #E9B46C, rgba(233,180,108,0.2) 60%, transparent)" }}
            />

            {/* Hover spotlight */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ background: "radial-gradient(circle at 30% 50%, rgba(233,180,108,0.06), transparent 60%)" }}
            />

            {/* Top section */}
            <div className="p-8 lg:p-10 border-b border-white/6 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <p
                    className="text-[#E9B46C]/70 text-xs uppercase tracking-widest mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                  >
                    Rapid Prospect Full Brand & Web Package
                  </p>
                  <motion.div
                    className="gold-gradient-text"
                    whileHover={{ filter: "brightness(1.1)" }}
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(3rem, 7vw, 5rem)", lineHeight: 1 }}
                  >
                    US$7,600
                  </motion.div>
                </div>
                <div className="flex flex-col gap-2 sm:text-right">
                  {["60-Day Delivery", "2 Revision Rounds + Final Validation", "Everything Included"].map((d) => (
                    <span
                      key={d}
                      className="text-white/35 text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Milestone table */}
            <div className="p-8 lg:p-10 relative z-10">
              <p
                className="text-white/28 text-xs uppercase tracking-widest mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
              >
                Payment Milestones
              </p>

              <div className="hidden md:grid grid-cols-[1fr_140px_1fr] gap-6 pb-3 border-b border-white/6 mb-2">
                {["Milestone", "Amount", "What triggers it"].map((h) => (
                  <span
                    key={h}
                    className="text-white/20 text-xs uppercase tracking-wider"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {milestones.map((m, i) => (
                <MilestoneRow key={m.num} m={m} index={i} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/40 mb-12 max-w-3xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8, fontSize: "1rem" }}
        >
          You're not paying for a website. You're investing in the system that makes you the agent
          every serious buyer and seller in your market already trusts — before they've met you.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.a
            href="https://link.rapidprospect.com/widget/booking/J1iigEEcwm7PSnpC3Qew"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn inline-flex items-center gap-3 bg-[#E9B46C] text-[#101010] px-10 py-4 rounded-sm group"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
            whileHover={{ scale: 1.03, boxShadow: "0 12px 48px rgba(233,180,108,0.35)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Secure Your Spot — Book a Strategy Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}