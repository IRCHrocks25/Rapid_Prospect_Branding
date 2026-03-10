import { motion } from "motion/react";
import logoImg from "figma:asset/7acfa23028735d5f40d539ef36b5b29940b745f9.png";

const footerLinks = {
  "What You Get": [
    "Brand Story & Strategy",
    "Visual Identity",
    "Website Design & Build",
    "Landing Page & Funnel",
    "CRM & Automation",
    "QA, Launch & Handover",
  ],
  Company: ["About Us", "Our Work", "Book a Strategy Call", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

const socials = ["IG", "LI", "TW", "BE"];

export function Footer() {
  return (
    <footer
      className="border-t pt-20 pb-10 relative overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.04)", background: "#121214" }}
    >
      {/* Subtle gold gradient top-left */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(233,180,108,0.04), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center mb-5 w-fit"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <img
                src={logoImg}
                alt="Rapid Prospect"
                style={{ height: "120px", width: "auto", filter: "brightness(0.9) contrast(1.05)" }}
              />
            </motion.a>
            <p
              className="text-white/25 mb-7 max-w-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8, fontSize: "0.88rem" }}
            >
              The done-for-you brand, website, and funnel system that turns luxury real estate
              agents into the obvious choice — in 60 days.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-white/8 rounded-sm flex items-center justify-center text-white/25 text-xs"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}
                  whileHover={{
                    borderColor: "rgba(233,180,108,0.5)",
                    color: "#E9B46C",
                    boxShadow: "0 0 16px rgba(233,180,108,0.2)",
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-white uppercase mb-5 text-xs"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: "0.15em" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="relative text-sm inline-block"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.25)" }}
                      whileHover={{ color: "#E9B46C" }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div
          className="h-px mb-8"
          style={{ background: "linear-gradient(to right, rgba(233,180,108,0.15), rgba(233,180,108,0.05) 50%, transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/16 text-xs"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            © 2026 Rapid Prospect. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
              <motion.a
                key={l}
                href="#"
                className="text-xs"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.18)" }}
                whileHover={{ color: "rgba(255,255,255,0.45)" }}
                transition={{ duration: 0.2 }}
              >
                {l}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}