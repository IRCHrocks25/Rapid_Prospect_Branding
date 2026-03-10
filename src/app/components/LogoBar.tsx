export function LogoBar() {
  const clients = ["Apex Studio", "Novacore", "Velvet & Co.", "Luminary", "Prism Labs", "Arcform", "Dusk Media", "Zenith Co."];

  return (
    <section className="bg-[#101010] border-y border-white/5 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-6">
        <p
          className="text-center text-white/30 text-xs uppercase tracking-widest"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
        >
          Trusted by forward-thinking brands
        </p>
      </div>
      <div className="flex overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="text-white/20 hover:text-[#E9B46C]/60 transition-colors uppercase"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
      `}</style>
    </section>
  );
}
