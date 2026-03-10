import { SectionBadge } from "./SectionBadge";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does the project take?",
    a: "60 days from your initial deposit — provided materials (logos, photos, text) are supplied promptly. We send a clear checklist at kick-off so you know exactly what's needed and when. The more organized your inputs, the faster we move.",
  },
  {
    q: "What happens in the Deep-Dive Branding Session?",
    a: "A 2-hour recorded interview between you and our brand strategists. We go deep into your origin story, the milestones that shaped your business, the challenges you've overcome, and what makes your approach genuinely different from every other agent in your market. Everything we build — the narrative, the visuals, the copy — starts here. It's the most important 2 hours of the entire project.",
  },
  {
    q: "How many revisions are included?",
    a: "Two full rounds of revisions plus a final validation round on everything — branding, website, funnel pages, copy, and automation. Additional revision rounds beyond these are available at an agreed rate.",
  },
  {
    q: "What do I need to provide?",
    a: "Existing logos, photography, and any specific text you'd like included. We provide a detailed materials checklist at kick-off — no guessing, no surprises. You focus on your clients; we'll tell you exactly what we need and when.",
  },
  {
    q: "What's included in the funnel design?",
    a: "Every page in your conversion flow: landing page, sales or booking page, checkout and opt-in, upsell and downsell pages, order confirmation, and thank-you page. Each page is designed with high-fidelity visuals and conversion-focused copy — value propositions, benefit bullets, social proof, and calls-to-action engineered to convert.",
  },
  {
    q: "Are email automations and analytics included?",
    a: "Yes. Automated sequences for new leads, booking abandonment recovery, and post-purchase onboarding. All tracking is configured from day one — pixel setup, conversion goals, and analytics dashboards — so you have clear visibility into what's working immediately.",
  },
  {
    q: "Who owns the work once it's complete?",
    a: "You do — fully, upon receipt of final payment. Until then, the agency retains copyright. We also retain the right to feature completed work in our portfolio. Unauthorized use prior to full payment is not permitted under the agreement.",
  },
  {
    q: "How will my team learn to use the new system?",
    a: "During handover you receive a complete funnel architecture diagram, a Loom video walkthrough of the full funnel and CRM, and one-page SOPs that walk your team through exactly how leads flow and how to manage each stage. Nothing is left unexplained.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#221d1a] py-28 noise-overlay relative">
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <SectionBadge text="COMMON QUESTIONS" />
          <h2
            className="text-white uppercase"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              lineHeight: 1.05,
            }}
          >
            Everything You Need to Know{" "}
            <span className="gold-gradient-text">Before Saying Yes.</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-px">
          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden border border-white/6 group"
              >
                {/* Left gold border — shows on open */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ background: "linear-gradient(to bottom, #E9B46C, rgba(233,180,108,0.3))" }}
                  animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />

                {/* Hover/open background */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: "linear-gradient(90deg, rgba(0,38,85,0.2), transparent)" }}
                />

                {/* Question button */}
                <button
                  className="relative z-10 w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <motion.span
                    animate={{ color: isOpen ? "#ffffff" : "rgba(255,255,255,0.75)" }}
                    transition={{ duration: 0.25 }}
                    className="pr-6"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
                  >
                    {faq.q}
                  </motion.span>

                  <motion.div
                    animate={{
                      color: isOpen ? "#E9B46C" : "rgba(255,255,255,0.3)",
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <Plus size={18} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="px-6 pb-6 border-t border-white/6">
                        <p
                          className="text-white/45 pt-5"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.85, fontSize: "0.92rem" }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}