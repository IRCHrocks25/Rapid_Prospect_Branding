const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "We kick off with a deep-dive call to understand your business, goals, audience, and competition. This forms the strategic foundation of your brand.",
  },
  {
    num: "02",
    title: "Strategy & Positioning",
    description:
      "Before a single pixel is touched, we define your brand positioning, messaging, and visual direction with a detailed creative brief.",
  },
  {
    num: "03",
    title: "Concept Design",
    description:
      "Our designers craft 3 distinct brand directions. You'll review concept boards and choose the direction that resonates most.",
  },
  {
    num: "04",
    title: "Refinement",
    description:
      "We refine your chosen concept with up to 3 rounds of revisions until every detail is exactly right.",
  },
  {
    num: "05",
    title: "Full System Buildout",
    description:
      "Logo approved — we now expand into your full brand system: collateral, guidelines, mockups, and all deliverables.",
  },
  {
    num: "06",
    title: "Handover",
    description:
      "All source files, assets, and your brand guide are delivered in a polished brand kit. You own everything, forever.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#0c0c0c] py-28 relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #002655, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="text-[#E9B46C] text-xs uppercase tracking-widest mb-4 block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
          >
            ✦ How It Works
          </span>
          <h2
            className="text-white uppercase mx-auto"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              lineHeight: 1.05,
              maxWidth: "600px",
            }}
          >
            A Process Built for{" "}
            <span className="text-[#E9B46C]">Results</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#E9B46C]/20 via-[#E9B46C]/40 to-[#E9B46C]/20 -translate-x-1/2" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 py-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"
                  }`}
                >
                  <h3
                    className="text-white uppercase mb-3"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "1.4rem" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/50 max-w-sm"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      lineHeight: 1.75,
                      fontSize: "0.95rem",
                      marginLeft: i % 2 === 0 ? "auto" : undefined,
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Step number */}
                <div className="relative flex-shrink-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-full border border-[#E9B46C]/40 bg-[#101010] flex items-center justify-center">
                    <span
                      className="text-[#E9B46C]"
                      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Empty side for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
