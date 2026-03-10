"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectCarouselV2 from "@/components/ProjectCarouselV2";

export default function Work() {
  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-black" id="work">
      {/* Star field — dark mode */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 12% 25%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 28% 60%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 15%, rgba(255,255,255,0.9) 0%, transparent 100%),
            radial-gradient(1px 1px at 62% 80%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 78% 35%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 70%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 8% 90%, rgba(200,180,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 45%, rgba(255,200,220,0.6) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 35% 75%, rgba(180,200,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 72% 12%, rgba(255,255,255,0.7) 0%, transparent 100%)
          `,
        }}
      />

      {/* Section title */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-3xl font-bold text-pink-700 dark:text-white mb-3">
          My Projects
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-700 dark:to-pink-500" />
          <motion.span
            className="text-pink-500 text-sm"
            animate={{ rotate: [0, 180, 360] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            ✦
          </motion.span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-700 dark:to-pink-500" />
        </div>
      </motion.div>

      {/* Carousel */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <ProjectCarouselV2 />
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="flex justify-center mt-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Image
            src="/images/space-planet-svg-bundle-space-planet_11.svg"
            alt=""
            width={35}
            height={35}
            className="opacity-50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
