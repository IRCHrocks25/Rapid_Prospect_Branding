import { SectionBadge } from "./SectionBadge";
import { useState } from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const forYou = [
  "You're a luxury or mid-to-high-end real estate agent or agency principal who is serious about owning your market — not just competing in it",
  "You've been in the industry 2+ years and your reputation is strong, but your brand still doesn't reflect it",
  "You're tired of watching prospects choose competitors who 'just look more professional' — when you know you're the better agent",
  "You want an automated digital system that works for you, not a half-built website that sits there collecting dust",
  "You're ready to invest in the asset that generates every other asset — because you understand that one premium listing more than pays for this",
];

const notForYou = [
  "You're shopping for the lowest price and see branding as a cost, not an investment",
  "You're not willing to commit 2 hours to the deep-dive session that makes everything else possible",
  "You want shortcuts — because shortcuts produce template results, and template results produce nothing",
];

function ListItem({ text, type, index }: { text: string; type: "yes" | "no"; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, x: type === "yes" ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-start gap-4 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border ${
          type === "yes"
            ? "bg-[#E9B46C]/10 border-[#E9B46C]/30"
            : "bg-white/4 border-white/12"
        }`}
        animate={
          type === "yes"
            ? { boxShadow: hovered ? "0 0 12px rgba(233,180,108,0.4)" : "none", borderColor: hovered ? "rgba(233,180,108,0.7)" : "rgba(233,180,108,0.3)" }
            : {}
        }
        transition={{ duration: 0.25 }}
      >
        {type === "yes" ? (
          <Check size={11} className="text-[#E9B46C]" />
        ) : (
          <X size={11} className="text-white/25" />
        )}
      </motion.div>
      <motion.span
        className={type === "yes" ? "text-white/60" : "text-white/28"}
        animate={
          type === "yes" && hovered
            ? { color: "rgba(255,255,255,0.82)" }
            : {}
        }
        transition={{ duration: 0.25 }}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.93rem", lineHeight: 1.7 }}
      >
        {text}
      </motion.span>
    </motion.li>
  );
}

export function IsThisYou() {
  return (
    <section id="is-this-you" className="bg-[#221d1a] py-28 noise-overlay relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <SectionBadge text="IS THIS YOU?" />
          <h2
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              lineHeight: 1.05,
            }}
          >
            Built for Agents Who Are Done{" "}
            <span className="gold-gradient-text">Being Overlooked.</span>
          </h2>
          <p
            className="text-white/40 max-w-3xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8, fontSize: "1rem" }}
          >
            This package was built for a very specific kind of real estate professional. Not the
            agent who's just getting started. Not the one looking for the cheapest way to get
            online. The one who's been in the game long enough to know that the gap between their
            reputation and their brand is costing them.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-px bg-white/[0.03]">

          {/* For you */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#140c07] p-8 lg:p-12 group overflow-hidden"
          >
            {/* Hover background sweep */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{ background: "linear-gradient(135deg, rgba(0,38,85,0.15), rgba(233,180,108,0.04))" }}
            />
            {/* Top border */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(to right, #E9B46C, rgba(233,180,108,0.1) 60%, transparent)" }}
            />

            <h3
              className="text-white uppercase mb-8 relative z-10"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "1.2rem", letterSpacing: "0.06em" }}
            >
              This is for you if…
            </h3>
            <ul className="space-y-5 relative z-10">
              {forYou.map((item, i) => (
                <ListItem key={item} text={item} type="yes" index={i} />
              ))}
            </ul>
          </motion.div>

          {/* Not for you */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#140c07] p-8 lg:p-12 overflow-hidden"
          >
            <h3
              className="text-white/35 uppercase mb-8 relative z-10"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "1.2rem", letterSpacing: "0.06em" }}
            >
              This is NOT for you if…
            </h3>
            <ul className="space-y-5 relative z-10">
              {notForYou.map((item, i) => (
                <ListItem key={item} text={item} type="no" index={i} />
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/6 relative z-10">
              <p
                className="text-white/35 italic"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.93rem", lineHeight: 1.85 }}
              >
                We work with a limited number of clients at a time. This isn't a production line —
                it's a partnership. If you're serious about becoming the dominant brand in your
                market, this is the package.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}