import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section id="contact" className="bg-[#002655] py-28 relative overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #E9B46C, transparent)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #E9B46C, transparent)", transform: "translate(-30%, 30%)" }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <span
          className="text-[#E9B46C] text-xs uppercase tracking-widest mb-4 block"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
        >
          ✦ Ready to Start?
        </span>

        <h2
          className="text-white uppercase mb-6"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            lineHeight: 1.0,
          }}
        >
          Stop Blending In.
          <br />
          <span className="text-[#E9B46C]">Start Standing Out.</span>
        </h2>

        <p
          className="text-white/60 mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8, fontSize: "1.05rem" }}
        >
          Every day without a strong brand is a day you're leaving money on the table.
          Let's build the brand that does the selling for you.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#packages"
            className="inline-flex items-center gap-2 bg-[#E9B46C] text-[#101010] px-10 py-4 rounded-sm hover:bg-[#f0c47c] transition-all group"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
          >
            See Packages & Pricing
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://link.rapidprospect.com/widget/booking/J1iigEEcwm7PSnpC3Qew"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-10 py-4 rounded-sm hover:border-white/50 transition-all"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
          >
            Book a Free Discovery Call
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-white/10">
          {[
            "✓ 100% Satisfaction Guarantee",
            "✓ Full File Ownership",
            "✓ Fast 7-Day Delivery",
            "✓ Rated 5★ by 200+ Clients",
          ].map((t) => (
            <span
              key={t}
              className="text-white/40 text-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
