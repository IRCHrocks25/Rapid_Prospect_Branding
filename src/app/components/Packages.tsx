import { Check, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    id: "starter" as const,
    name: "Starter",
    tagline: "For solo founders & startups",
    price: 997,
    deliveryDays: 7,
    color: "border-white/10",
    accentColor: "text-white/70",
    features: [
      "Primary logo design",
      "2 revision rounds",
      "Brand color palette",
      "Typography selection",
      "PNG, SVG, PDF files",
      "Basic style guide (PDF)",
      "Social media avatar",
    ],
    notIncluded: [
      "Business card design",
      "Brand collateral",
      "Source files",
      "Strategy session",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "growth" as const,
    name: "Growth",
    tagline: "For ambitious businesses ready to scale",
    price: 2497,
    deliveryDays: 10,
    color: "border-[#E9B46C]",
    accentColor: "text-[#E9B46C]",
    features: [
      "Full logo system (3 variants)",
      "3 revision rounds",
      "Complete brand style guide",
      "Color & typography system",
      "All file formats + source files",
      "Business card design",
      "Social media kit (8 templates)",
      "Email signature design",
      "5 brand mockups",
      "Brand strategy document",
    ],
    notIncluded: [
      "Website design",
      "Photography direction",
    ],
    cta: "Most Popular — Start Now",
    popular: true,
  },
  {
    id: "empire" as const,
    name: "Empire",
    tagline: "Full brand ecosystem for market leaders",
    price: 4997,
    deliveryDays: 14,
    color: "border-[#002655]",
    accentColor: "text-[#E9B46C]",
    features: [
      "Complete logo system + sub-brand",
      "Unlimited revisions",
      "60-page brand bible",
      "Advanced brand strategy",
      "All file formats + source files",
      "Business card + stationery",
      "15+ social media templates",
      "Email signature + newsletter header",
      "15+ lifestyle mockups",
      "Brand photography art direction",
      "1:1 brand strategy session (60 min)",
      "30-day post-launch support",
    ],
    notIncluded: [],
    cta: "Book Empire Package",
    popular: false,
  },
];

export function Packages() {
  const [billing, setBilling] = useState<"one-time" | "payment-plan">("payment-plan");
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout(pkg: (typeof packages)[0]) {
    setError(null);
    setLoading(pkg.id);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId: pkg.id,
          billing,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      if (data.url) window.location.href = data.url;
      else throw new Error("No checkout URL returned");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(null);
    }
  }

  return (
    <section id="packages" className="bg-[#101010] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-6">
          <span
            className="text-[#E9B46C] text-xs uppercase tracking-widest mb-4 block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
          >
            ✦ Pricing
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
            Choose Your{" "}
            <span className="text-[#E9B46C]">Brand Package</span>
          </h2>
          <p
            className="text-white/40 mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.7 }}
          >
            Every package includes a 100% satisfaction guarantee. If you're not happy after the first round, we'll refund you in full.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-sm text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {/* Billing toggle */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-white/5 border border-white/10 rounded-sm p-1">
            {(["one-time", "payment-plan"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-5 py-2 rounded-sm text-sm transition-all ${
                  billing === b
                    ? "bg-[#E9B46C] text-[#101010]"
                    : "text-white/50 hover:text-white"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
              >
                {b === "one-time" ? "One-Time Payment" : "Payment Plan"}
                {b === "payment-plan" && (
                  <span className="ml-2 text-xs opacity-70">3x</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {packages.map((pkg) => {
            const displayPrice =
              billing === "payment-plan"
                ? Math.ceil(pkg.price / 3)
                : pkg.price;

            return (
              <div
                key={pkg.name}
                className={`relative border rounded-sm flex flex-col ${pkg.color} ${
                  pkg.popular
                    ? "bg-[#002655]/30 scale-[1.02] shadow-2xl shadow-[#E9B46C]/10"
                    : "bg-white/[0.02]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div
                      className="flex items-center gap-1.5 bg-[#E9B46C] text-[#101010] px-4 py-1 rounded-full text-xs uppercase tracking-wider"
                      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
                    >
                      <Zap size={12} />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Package name */}
                  <div className="mb-6">
                    <h3
                      className={`uppercase mb-1 ${pkg.accentColor}`}
                      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1.6rem" }}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className="text-white/40 text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-white"
                        style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "3rem" }}
                      >
                        ${displayPrice.toLocaleString()}
                      </span>
                      {billing === "payment-plan" && (
                        <span
                          className="text-white/40 text-sm"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          /month × 3
                        </span>
                      )}
                    </div>
                    <p
                      className="text-white/30 text-xs mt-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Delivered in {pkg.deliveryDays} business days
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={15} className="text-[#E9B46C] flex-shrink-0 mt-0.5" />
                        <span
                          className="text-white/70 text-sm"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.5 }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                    {pkg.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 opacity-30">
                        <div className="w-[15px] h-[15px] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-3 h-px bg-white/40" />
                        </div>
                        <span
                          className="text-white/40 text-sm line-through"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.5 }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => handleCheckout(pkg)}
                    disabled={!!loading}
                    className={`flex items-center justify-center gap-2 py-4 rounded-sm transition-all group disabled:opacity-60 disabled:cursor-not-allowed ${
                      pkg.popular
                        ? "bg-[#E9B46C] text-[#101010] hover:bg-[#f0c47c]"
                        : "border border-white/20 text-white hover:border-[#E9B46C]/50 hover:text-[#E9B46C]"
                    }`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
                  >
                    {loading === pkg.id ? "Redirecting…" : pkg.cta}
                    <ArrowRight size={16} className={`group-hover:translate-x-1 transition-transform ${loading === pkg.id ? "hidden" : ""}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div
            className="w-14 h-14 rounded-full border-2 border-[#E9B46C]/40 flex items-center justify-center flex-shrink-0"
          >
            <span className="text-[#E9B46C] text-xl">✓</span>
          </div>
          <div>
            <p
              className="text-white"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "1.1rem" }}
            >
              100% Satisfaction Guarantee
            </p>
            <p
              className="text-white/40 text-sm mt-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Not happy after the first concept? Full refund, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
