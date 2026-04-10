import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logoImg from "figma:asset/7acfa23028735d5f40d539ef36b5b29940b745f9.png";

const links = [
  { label: "Why Now", href: "#why-now" },
  { label: "What You Get", href: "#included" },
  { label: "Is This You?", href: "#is-this-you" },
  { label: "Investment", href: "#investment" },
  { label: "FAQ", href: "#faq" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative text-sm py-1"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: hovered ? "#E9B46C" : "rgba(255,255,255,0.50)", transition: "color 0.25s" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-[#E9B46C]"
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      animate={{
        backgroundColor: scrolled ? "rgba(20,12,7,0.95)" : "rgba(20,12,7,0)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">

        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <img
            src={logoImg}
            alt="Rapid Prospect"
            style={{ height: "132px", width: "auto", filter: "brightness(1.05)" }}
          />
        </motion.a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.href} label={l.label} href={l.href} />
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="https://link.rapidprospect.com/widget/booking/J1iigEEcwm7PSnpC3Qew"
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-btn hidden lg:inline-flex items-center gap-2 bg-[#E9B46C] text-[#101010] px-5 py-2.5 rounded-sm text-sm"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
          whileHover={{ scale: 1.04, boxShadow: "0 6px 24px rgba(233,180,108,0.35)" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          Book a Strategy Call
        </motion.a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white/70 hover:text-[#E9B46C] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden"
            style={{ background: "rgba(20,12,7,0.98)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/55 hover:text-[#E9B46C] transition-colors py-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://link.rapidprospect.com/widget/booking/J1iigEEcwm7PSnpC3Qew"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex justify-center bg-[#E9B46C] text-[#101010] px-5 py-3 rounded-sm text-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                Book a Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}