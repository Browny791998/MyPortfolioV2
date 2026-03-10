"use client"
import Image from "next/image";
import styles from "./home.module.scss";
import Typewriter from 'typewriter-effect';
import ParticleBackground from "@/components/ParticleBackground";
import { motion, useAnimationControls } from "framer-motion";
import Preloader from "@/components/PreLoader";
import About from "./pages/about";
import TimelineV2 from "./pages/timelinev2";
import Work from "./pages/work";
import { useEffect, useState } from "react";
import Contact from "./pages/contact";
import dynamic from "next/dynamic";

const Languages = dynamic(() => import('./pages/languages'), { ssr: false });

/* ── Trail spark that fades to nothing ── */
function TrailSpark({ x, size, delay }: { x: number; size: number; delay: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: -4,
        left: "50%",
        width: size,
        height: size,
        borderRadius: "50%",
        x: x,
        background: "radial-gradient(circle, #fff9 40%, #ff450000)",
        pointerEvents: "none",
      }}
      initial={{ opacity: 0.9, y: 0, scale: 1 }}
      animate={{ opacity: 0, y: 80, scale: 0.1 }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
    />
  );
}

export default function Home() {
  const rocketControls = useAnimationControls();
  const flameControls = useAnimationControls();
  const [sparks, setSparks] = useState<{ id: number; x: number; size: number; delay: number }[]>([]);
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    /* 1.2 s after mount → start launch */
    const timer = setTimeout(async () => {
      setLaunched(true);

      /* Spawn trail sparks */
      const newSparks = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 30,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 1.5,
      }));
      setSparks(newSparks);

      /* Rocket: tiny shake → blast off */
      await rocketControls.start({
        x: [0, -3, 3, -2, 2, 0],
        transition: { duration: 0.35, ease: "easeInOut" },
      });

      rocketControls.start({
        y: [0, -10, -2000],
        scale: [1, 1.05, 0.4],
        transition: { duration: 2.8, ease: [0.2, 0, 0.3, 1] },
      });

      flameControls.start({
        scaleY: [1, 1.8, 0.8, 1.5, 0],
        scaleX: [1, 1.2, 0.9, 1.1, 0],
        opacity: [1, 1, 0.9, 0.7, 0],
        transition: { duration: 2.8, ease: "easeIn" },
      });
    }, 1200);

    return () => clearTimeout(timer);
  }, [rocketControls, flameControls]);

  return (
    <>
      <Preloader />

      {/* ────── Hero Section ────── */}
      <section
        id="home"
        className={`relative min-h-screen flex flex-col overflow-hidden ${styles.mask1}`}
      >
        <ParticleBackground />

        {/* Centre content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pt-28 pb-16">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-700/40 bg-pink-700/10 text-pink-400 text-sm font-semibold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            Available for hire
          </motion.div>

          {/* Name heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="dark:text-white text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-5 leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Ye Htet Aung
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-3xl font-semibold mb-5 dark:text-gray-200 text-gray-700 min-h-[3rem]"
          >
            <Typewriter
              options={{
                strings: [
                  "Full Stack Web Developer",
                  "Passionate about UI/UX",
                  "Exploring Modern Frameworks",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </motion.div>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            I build modern, high-performance web applications with a focus on
            user experience and clean code.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex items-center gap-4 flex-wrap justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a href="#work" className={styles.ctaBtn}>
              View My Work →
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full font-semibold border border-purple-500/50 dark:text-gray-200 text-gray-700 hover:bg-purple-500/10 transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className={styles.scrollIcon} />
            <p className="text-xs text-gray-400 mt-2 tracking-widest uppercase">
              Scroll down
            </p>
          </motion.div>
        </div>

        {/* ── Rocket + half-planet at the bottom ── */}
        <div className="relative w-full flex justify-center items-end z-10 pointer-events-none" style={{ minHeight: 200 }}>

          {/* Rocket */}
          <motion.div
            animate={rocketControls}
            className="absolute bottom-4"
            style={{ left: "50%", x: "-50%", originY: 1 }}
          >
            {/* Flame */}
            <motion.div
              animate={flameControls}
              style={{
                width: 22,
                margin: "0 auto",
                height: launched ? 44 : 0,
                borderRadius: "50% 50% 80% 80%",
                background: "linear-gradient(to bottom, #fff 0%, #ff9a00 35%, #ff4500 70%, transparent 100%)",
                filter: "blur(3px)",
                transformOrigin: "top center",
                opacity: launched ? 1 : 0,
              }}
            />
            {/* Rocket image */}
            <Image
              src="/images/rocket.png"
              alt="Rocket"
              width={80}
              height={100}
              style={{ filter: "drop-shadow(0 0 18px rgba(255,120,0,0.7)) drop-shadow(0 0 40px rgba(190,24,93,0.5))" }}
            />
            {/* Sparks */}
            {sparks.map(s => (
              <TrailSpark key={s.id} x={s.x} size={s.size} delay={s.delay} />
            ))}
          </motion.div>

          {/* Half-planet */}
          <Image
            src="/images/half-planet.png"
            alt=""
            width={900}
            height={700}
            className={`relative w-full max-w-[900px] mx-auto ${styles.planetGlow}`}
            style={{ marginBottom: -60 }}
          />
        </div>
      </section>

      {/* About Section */}
      <About />
      {/* Timeline Section */}
      <TimelineV2 />
      {/* Work Section */}
      <Work />
      {/* Language Section */}
      <Languages />
      {/* Contact Section */}
      <Contact />
    </>
  );
}
