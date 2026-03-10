import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Outer ring follows with spring lag
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 28 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 28 });

  // Inner dot follows tightly
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor-hover]")) setHovering(true);
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor-hover]")) setHovering(false);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [visible]);

  // Hide on touch/mobile devices
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  if (isTouchDevice || !visible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ left: ringX, top: ringY }}
      >
        <motion.div
          className="rounded-full border border-[#E9B46C] -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: clicking ? 20 : hovering ? 52 : 34,
            height: clicking ? 20 : hovering ? 52 : 34,
            opacity: hovering ? 1 : 0.65,
            borderColor: hovering ? "#f0c060" : "#E9B46C",
            backgroundColor: hovering ? "rgba(233,180,108,0.06)" : "rgba(233,180,108,0)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ left: dotX, top: dotY }}
      >
        <motion.div
          className="rounded-full bg-[#E9B46C] -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: clicking ? 6 : hovering ? 5 : 4,
            height: clicking ? 6 : hovering ? 5 : 4,
            opacity: hovering ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 600, damping: 35 }}
        />
      </motion.div>

      {/* Radial glow on hover */}
      {hovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
          style={{ left: ringX, top: ringY }}
          initial={{ opacity: 0, width: 80, height: 80 }}
          animate={{ opacity: 1, width: 80, height: 80 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="-translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(233,180,108,0.15), transparent)" }}
          />
        </motion.div>
      )}
    </>
  );
}