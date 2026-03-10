"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorEffect() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springConfig = { stiffness: 200, damping: 20 };
  const trailSpringX = useSpring(trailX, { stiffness: 80, damping: 18 });
  const trailSpringY = useSpring(trailY, { stiffness: 80, damping: 18 });

  const isVisible = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      isVisible.current = true;
    };

    const hide = () => {
      cursorX.set(-100);
      cursorY.set(-100);
      trailX.set(-100);
      trailY.set(-100);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* Outer glow trail */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
          background: "radial-gradient(circle, rgba(190,24,93,0.25) 0%, rgba(168,85,247,0.1) 60%, transparent 100%)",
          border: "1px solid rgba(190,24,93,0.4)",
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          background: "#be185d",
          boxShadow: "0 0 8px rgba(190,24,93,0.8), 0 0 16px rgba(168,85,247,0.4)",
        }}
      />
    </>
  );
}
