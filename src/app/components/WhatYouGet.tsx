import { SectionBadge } from "./SectionBadge";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronDown } from "lucide-react";

const components = [
  {
    num: "01",
    title: "Brand Story & Strategy",
    tagline: "Uncover the narrative that makes you impossible to ignore.",
    intro:
      "Most agents look identical. Same headshots. Same taglines. Same claim to be 'passionate about finding your dream home.' The agents who dominate their market have something different: a story that makes prospects feel like they already know them before picking up the phone.",
    bullets: [
      "2-hour recorded deep-dive session — we extract your origin story, your defining moments, the challenges that shaped how you work",
      "Compelling written brand narrative crafted from that session — your story, in language your ideal client connects with",
      "Full brand strategy: mission, vision, values, USP, positioning statement, and target client personas",
      "Brand voice guidelines — how you speak, what you stand for, and what makes your communication unmistakably yours",
    ],
    why: "This is the foundation everything else is built on. Skip this and you have a pretty brand with nothing to say.",
  },
  {
    num: "02",
    title: "Visual Identity",
    tagline: "Look like you belong in the room — before you've said a word.",
    intro:
      "Luxury clients make snap judgments. In the time it takes them to scan your website, your Instagram, or your proposal document, they've already decided whether you're in their league. Your visual identity either confirms their instinct or ends the conversation.",
    bullets: [
      "Logo suite: primary, secondary, and icon variations — designed for every application, digital and print",
      "Custom color palette and typography system — not picked from a template, built specifically for your positioning",
      "Iconography and supporting graphic elements that hold across every touchpoint",
      "10-page Brand Guidelines document — so every asset your team ever produces is on-brand, forever",
    ],
    why: "A brand that looks cheap signals an agent who isn't worth the commission. A brand that looks premium does the opposite.",
  },
  {
    num: "03",
    title: "Website Design & Build",
    tagline: "Your 24/7 digital open house — built to convert, not just impress.",
    intro:
      "Your website has one job: to make the right clients feel absolutely certain they've found the right agent — before you ever speak to them. Right now, if it isn't doing that, it isn't just underperforming. It's actively costing you business you'll never know you lost.",
    bullets: [
      "Homepage, About Page, and Contact Page — designed to build instant trust and communicate your positioning within seconds",
      "Up to 6 local lifestyle or location pages — showcasing your deep market knowledge and community authority",
      "Up to 50 Property Portfolio Pages — each with header, short text, video (if available), and an image gallery of up to 25 images",
      "Every page built around one goal: warming up buyers so completely that calling you feels like the obvious next step",
    ],
    why: "96% of buyers start their search online. This is the first time most of your prospects will ever encounter you. Make it count.",
  },
  {
    num: "04",
    title: "Landing Page & Funnel Strategy",
    tagline: "Stop chasing leads. Start attracting the ones who are ready to buy.",
    intro:
      "A beautiful website without a strategic funnel is exactly like hosting an open house with no sign-in sheet. People show up, look around, and leave — and you have no idea who they were or how to reach them again.",
    bullets: [
      "Discovery session to map your offers, define your audience segments, and set clear success metrics",
      "Wireframes and high-fidelity designs for every page in your conversion flow: landing page, sales/booking page, checkout, upsell/downsell, thank-you page",
      "Conversion-focused copywriting throughout — value propositions, benefit-driven bullets, social proof, risk reversal, and calls-to-action that actually convert",
      "Mobile-optimized designs that maintain full visual impact on every device",
    ],
    why: "A funnel turns your traffic into booked appointments automatically. Without one, your website is a brochure. With one, it's a sales machine.",
  },
  {
    num: "05",
    title: "CRM Integration & Automation",
    tagline: "Your follow-up system works while you sleep. Every lead. Every time.",
    intro:
      "You can't personally chase every lead at 11pm on a Tuesday. But your system can. The agents who consistently outperform their competitors aren't working harder — they've built infrastructure that works for them around the clock.",
    bullets: [
      "Direct CRM integration: all site forms connected, all contact fields updating automatically — zero manual data entry",
      "Full pipeline configuration: New Lead → MQL → SQL → Client, with behavioral tagging and segmentation",
      "Automated email sequences: welcome and nurture, booking abandonment recovery, and post-purchase onboarding",
      "Workflow automations that move leads between stages and fire instant notifications to your sales team",
      "Analytics setup: pixel configuration and conversion goal tracking across all dashboards — clear visibility from day one",
    ],
    why: "The agents who close more aren't always the most available. They're the ones whose systems make every prospect feel like the only prospect.",
  },
  {
    num: "06",
    title: "QA, Launch & Handover",
    tagline: "We don't hand you a folder and disappear.",
    intro:
      "Every link. Every form. Every automation trigger. Tested end-to-end before a single prospect sees it. And when we hand it over, you don't just receive a system — your team knows exactly how to run it.",
    bullets: [
      "End-to-end QA testing of all assets, forms, links, and automations before launch",
      "Soft launch checklist and full production launch — nothing goes live until it's right",
      "Funnel architecture diagram — a visual map of exactly how your entire system connects",
      "Loom video walkthrough of your full funnel and CRM setup — so nothing is a black box",
      "One-page SOPs to train your team on CRM lead flow management at every stage",
    ],
    why: "You walk away with a complete, tested, documented system — and a team that knows how to use it.",
  },
];

function ComponentCard({ c, index }: { c: typeof components[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="relative border border-white/6 bg-white/[0.015] group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left gold border reveal */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-0.5"
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        initial={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ transformOrigin: "top", background: "linear-gradient(to bottom, #E9B46C, rgba(233,180,108,0.3))" }}
      />

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: "linear-gradient(135deg, rgba(0,38,85,0.12), rgba(233,180,108,0.03))" }}
      />

      {/* Header row — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <div className="flex items-center gap-8 p-8 lg:p-10">
          {/* Number */}
          <motion.div
            animate={{
              color: hovered ? "#f0c060" : "#E9B46C",
              textShadow: hovered ? "0 0 30px rgba(233,180,108,0.5)" : "0 0 0px rgba(233,180,108,0)",
            }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "2.2rem", lineHeight: 1, minWidth: "3rem" }}
          >
            {c.num}
          </motion.div>

          {/* Title block */}
          <div className="flex-1">
            <motion.h3
              className="uppercase"
              animate={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.88)" }}
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "1.2rem", lineHeight: 1.2, color: "rgba(255,255,255,0.88)" }}
            >
              {c.title}
            </motion.h3>
            <p
              className="text-[#E9B46C]/55 mt-1 text-sm italic"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.5 }}
            >
              {c.tagline}
            </p>
          </div>

          {/* Expand icon */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0, color: hovered ? "#E9B46C" : "rgba(255,255,255,0.25)" }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </button>

      {/* Expandable body */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 lg:px-10 pb-8 lg:pb-10 pt-0 border-t border-white/5">
              <p
                className="text-white/45 mb-6 mt-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8, fontSize: "0.95rem" }}
              >
                {c.intro}
              </p>

              <ul className="space-y-3 mb-6">
                {c.bullets.map((b, bi) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: bi * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#E9B46C]/10 border border-[#E9B46C]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-[#E9B46C]" />
                    </div>
                    <span
                      className="text-white/60"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.92rem", lineHeight: 1.7 }}
                    >
                      {b}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="border-l-2 border-[#E9B46C]/30 pl-4">
                <p
                  className="text-white/40 text-sm italic"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.7 }}
                >
                  <span className="text-[#E9B46C]/65 not-italic" style={{ fontWeight: 600 }}>
                    Why it matters:{" "}
                  </span>
                  {c.why}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function WhatYouGet() {
  return (
    <section id="included" className="bg-[#140c07] py-28 noise-overlay luxury-texture relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <SectionBadge text="WHAT YOU GET" />
          <h2
            className="text-white uppercase mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              lineHeight: 1.05,
            }}
          >
            Six Components. One System.{" "}
            <span className="gold-gradient-text">Zero Gaps.</span>
          </h2>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-20 max-w-3xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)" }}
        >
          <p>
            Most agents piece their brand together over years — a logo here, a website there, a CRM
            nobody uses properly. The result is a patchwork that confuses prospects and converts nobody.
          </p>
          <p>
            The Rapid Prospect Full Brand & Web Package is different. Every component is designed to
            work with every other component. The strategy informs the visuals. The visuals power the
            website. The website feeds the funnel. The funnel drives the automation. The automation
            fills your calendar.
          </p>
          <p>
            <span className="text-white/80" style={{ fontWeight: 500 }}>
              Nothing is optional. Nothing is filler. Everything serves one outcome:
            </span>{" "}
            making you the agent your ideal clients choose without hesitation.
          </p>
        </motion.div>

        {/* Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
          {components.map((c, i) => (
            <ComponentCard key={c.num} c={c} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-center"
        >
          <motion.a
            href="https://link.rapidprospect.com/widget/booking/J1iigEEcwm7PSnpC3Qew"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn inline-flex items-center gap-2 bg-[#E9B46C] text-[#101010] px-10 py-4 rounded-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 40px rgba(233,180,108,0.35)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Book a Private Strategy Call →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}