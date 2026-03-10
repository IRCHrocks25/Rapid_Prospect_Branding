import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Founder, Apex Studio",
    avatar: "MC",
    color: "#002655",
    quote:
      "BrandXpert didn't just give us a logo — they gave us an identity. Our conversion rate went up 34% within 60 days of the rebrand. The investment paid for itself 10x over.",
    package: "Empire Package",
    stars: 5,
  },
  {
    name: "Sophia Laurent",
    role: "CEO, Velvet & Co.",
    avatar: "SL",
    color: "#E9B46C",
    quote:
      "I was skeptical that branding could make such a tangible difference. I was wrong. We went from struggling to get clients to having a 3-month waitlist. The brand does the selling for us now.",
    package: "Growth Package",
    stars: 5,
  },
  {
    name: "James Okafor",
    role: "Co-founder, Luminary",
    avatar: "JO",
    color: "#002655",
    quote:
      "The process was incredibly smooth. They really listened and the strategic thinking behind every decision blew me away. We raised our prices 40% post-rebrand and clients didn't even blink.",
    package: "Growth Package",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, Nova Health",
    avatar: "PS",
    color: "#E9B46C",
    quote:
      "World-class work delivered faster than I expected. The brand guide alone is something I reference daily. Our team finally has clarity and our marketing is so much more consistent.",
    package: "Empire Package",
    stars: 5,
  },
  {
    name: "Daniel Reeves",
    role: "Founder, Arcform",
    avatar: "DR",
    color: "#002655",
    quote:
      "This was the best money I ever spent on my business. The positioning work alone changed how I talk about what I do. Clients instantly 'get it' now in a way they never did before.",
    package: "Growth Package",
    stars: 5,
  },
  {
    name: "Aisha Balogun",
    role: "CEO, Prism Labs",
    avatar: "AB",
    color: "#E9B46C",
    quote:
      "From the discovery call to handover, everything was professional, strategic, and results-driven. Our brand now commands premium prices and attracts premium clients.",
    package: "Starter Package",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#101010] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-[#E9B46C] text-xs uppercase tracking-widest mb-4 block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
          >
            ✦ Client Results
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
            Real Brands.{" "}
            <span className="text-[#E9B46C]">Real Results.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/[0.03] border border-white/8 rounded-sm p-7 flex flex-col hover:border-[#E9B46C]/20 transition-colors group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#E9B46C] fill-[#E9B46C]" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={20} className="text-[#E9B46C]/30 mb-4" />

              {/* Quote */}
              <p
                className="text-white/60 flex-1 mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.75, fontSize: "0.93rem" }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                  style={{
                    backgroundColor: t.color,
                    color: t.color === "#E9B46C" ? "#101010" : "#FFFFFF",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-white/30 text-xs"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {t.role}
                  </p>
                </div>
                <span
                  className="ml-auto text-[#E9B46C]/60 text-xs border border-[#E9B46C]/20 px-2 py-0.5 rounded-full"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
                >
                  {t.package}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
