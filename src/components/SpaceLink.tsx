"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function SpaceLink() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="https://neal.fun/size-of-space/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 z-[9998] flex items-center gap-2"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Label — slides in on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-mono text-pink-500 dark:text-pink-300 whitespace-nowrap bg-white/90 dark:bg-black/80 border border-pink-700/30 px-3 py-1.5 rounded-full backdrop-blur-sm"
          >
            Size of Space ✦
          </motion.span>
        )}
      </AnimatePresence>

      {/* Planet button */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 8, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          style={{
            background: "radial-gradient(circle, rgba(190,24,93,0.4) 0%, transparent 70%)",
          }}
        />
        <Image
          src="/images/space-planet-svg-bundle-space-planet_10.svg"
          alt="Size of Space"
          width={48}
          height={48}
          className="relative z-10 drop-shadow-[0_0_8px_rgba(190,24,93,0.6)]"
        />
      </motion.div>
    </motion.a>
  );
}
