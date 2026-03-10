import { Check } from "lucide-react";

export function SuccessPage() {
  return (
    <div
      className="min-h-screen bg-[#140c07] flex items-center justify-center px-6"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-full border-2 border-[#E9B46C] flex items-center justify-center mx-auto mb-8">
          <Check className="text-[#E9B46C]" size={40} strokeWidth={2.5} />
        </div>
        <h1
          className="text-white uppercase mb-4"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          }}
        >
          Payment <span className="text-[#E9B46C]">Successful</span>
        </h1>
        <p className="text-white/60 mb-8" style={{ lineHeight: 1.7 }}>
          Thank you for your purchase. We'll be in touch shortly to get started on your brand package.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#E9B46C] text-[#101010] px-8 py-4 rounded-sm font-bold hover:bg-[#f0c47c] transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
