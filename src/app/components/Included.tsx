import { Check } from "lucide-react";

const deliverables = [
  {
    icon: "✦",
    title: "Logo System",
    description: "Primary, secondary, and icon variants — delivered in every format you'll ever need.",
    items: ["Primary + alternate logos", "Wordmark & icon mark", "SVG, PNG, PDF formats"],
  },
  {
    icon: "◈",
    title: "Brand Style Guide",
    description: "A comprehensive rulebook so your brand stays consistent everywhere it appears.",
    items: ["Color palette (HEX, RGB, CMYK)", "Typography hierarchy", "Usage rules & spacing"],
  },
  {
    icon: "▣",
    title: "Brand Collateral",
    description: "Real-world assets your business needs from day one.",
    items: ["Business card design", "Email signature", "Social media kit"],
  },
  {
    icon: "◎",
    title: "Brand Strategy",
    description: "The positioning foundation every visual decision is built on.",
    items: ["Brand positioning statement", "Target audience profile", "Voice & tone guide"],
  },
  {
    icon: "⬡",
    title: "Mockup Presentation",
    description: "See your brand come alive across real-world applications.",
    items: ["10+ lifestyle mockups", "Brand in context visuals", "Print & digital mockups"],
  },
  {
    icon: "◇",
    title: "Source Files",
    description: "Full ownership. All editable source files handed over on completion.",
    items: ["Figma design files", "Adobe Illustrator files", "Full commercial rights"],
  },
];

export function Included() {
  return (
    <section id="included" className="bg-[#101010] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div>
            <span
              className="text-[#E9B46C] text-xs uppercase tracking-widest mb-4 block"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            >
              ✦ What You Get
            </span>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                lineHeight: 1.05,
              }}
            >
              Everything You Need.{" "}
              <span className="text-[#E9B46C]">Nothing You Don't.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-white/50"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8 }}
            >
              Every package includes a complete brand system — not just a logo. We build the full visual
              language your brand needs to grow with authority.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {deliverables.map((d, i) => (
            <div
              key={d.title}
              className="bg-[#101010] p-8 hover:bg-[#002655]/20 transition-colors group relative"
            >
              <div
                className="text-[#E9B46C] mb-5 text-2xl"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {d.icon}
              </div>
              <h3
                className="text-white uppercase mb-3"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}
              >
                {d.title}
              </h3>
              <p
                className="text-white/40 mb-6 text-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.7 }}
              >
                {d.description}
              </p>
              <ul className="space-y-2">
                {d.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check size={14} className="text-[#E9B46C] flex-shrink-0" />
                    <span
                      className="text-white/60 text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#E9B46C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
