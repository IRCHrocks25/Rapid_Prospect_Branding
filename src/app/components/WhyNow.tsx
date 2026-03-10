import { SectionBadge } from "./SectionBadge";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  {
    figure: "96%",
    body: "of homebuyers use the internet during their search — and 43% start there. If your brand isn't compelling online, you don't exist to almost half the market before the conversation even begins.",
  },
  {
    figure: "71%",
    body: "of buyers say they're more likely to work with an agent who has a strong, active digital presence. Your brand IS your first impression — and it's forming right now, whether you've designed it or not.",
  },
  {
    figure: "3×",
    body: "more website traffic for agents who invest in elevated, consistent digital branding — without tripling their ad spend. Better brand. Same budget. More business.",
  },
  {
    figure: "340%",
    body: "increase in lead volume documented by agents who rebranded around a clear, differentiated identity. Not over years. Over eight months.",
  },
];

function TiltCard({ figure, body, index }: { figure: string; body: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden"
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative bg-[#221d1a] border border-white/6 p-10 h-full"
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          boxShadow: hovered
            ? "0 20px 60px rgba(233,180,108,0.12), 0 0 0 1px rgba(233,180,108,0.2)"
            : "0 0 0 1px transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Spotlight */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle 220px at ${spotlight.x}% ${spotlight.y}%, rgba(233,180,108,0.08), transparent)`,
          }}
        />

        {/* Gold top border reveal */}
        <motion.div
          className="absolute top-0 left-0 h-px"
          style={{ background: "linear-gradient(to right, #E9B46C, transparent)" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Figure */}
        <motion.div
          className="mb-5 relative z-10"
          animate={{ color: hovered ? "#f0c060" : "#E9B46C" }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
            lineHeight: 1,
            textShadow: hovered ? "0 0 40px rgba(233,180,108,0.4)" : "none",
          }}
        >
          {figure}
        </motion.div>

        {/* Body */}
        <p
          className="relative z-10 text-white/50"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8, fontSize: "0.93rem" }}
        >
          {body}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function WhyNow() {
  return (
    <section id="why-now" className="bg-[#221d1a] py-28 noise-overlay relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <SectionBadge text="WHY NOW" />
          <h2
            className="text-white uppercase max-w-3xl mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              lineHeight: 1.05,
            }}
          >
            Every Day You Wait Is a Day Your{" "}
            <span className="gold-gradient-text">Competitor Wins.</span>
          </h2>
          <p
            className="text-white/45 max-w-2xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8, fontSize: "1rem" }}
          >
            The luxury real estate market doesn't reward the most experienced agent. It rewards the
            most credible one. And in 2025, credibility is built online — before the first phone
            call, before the first meeting, before you've had the chance to show them what you can do.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.04]">
          {stats.map((s, i) => (
            <TiltCard key={s.figure} figure={s.figure} body={s.body} index={i} />
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-10 border-t border-white/6"
        >
          <p
            className="text-white/45 max-w-3xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8, fontSize: "1rem" }}
          >
            These aren't abstract marketing statistics. They're the gap between where you are and
            where you should be.{" "}
            <span className="text-white/75" style={{ fontWeight: 500 }}>
              And every week that gap stays open, someone else is closing it.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}