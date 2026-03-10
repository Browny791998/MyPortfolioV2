"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import styles from "./about.module.scss";

const floatingPlanets = [
  { src: "/images/space-planet-svg-bundle-space-planet_4.svg", size: 90, style: { top: "8%", left: "3%" }, duration: 7, floatY: 14 },
  { src: "/images/space-planet-svg-bundle-space-planet_7.svg", size: 60, style: { top: "72%", left: "8%" }, duration: 9, floatY: 10 },
  { src: "/images/space-planet-svg-bundle-space-planet_12.svg", size: 75, style: { top: "10%", right: "4%" }, duration: 11, floatY: 16 },
  { src: "/images/space-planet-svg-bundle-space-planet_5.svg", size: 45, style: { top: "78%", right: "7%" }, duration: 6, floatY: 8 },
];

export default function About() {
  return (
    <section className={`${styles.section} pt-16 px-6`} id="about">
      {/* Background layers */}
      <div className={styles.nebula} />
      <div className={styles.stars} />

      {/* Floating planets */}
      {floatingPlanets.map(({ src, size, style, duration, floatY }, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-0"
          style={style}
          animate={{ y: [0, -floatY, 0] }}
          transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
        >
          <Image src={src} alt="" width={size} height={size} />
        </motion.div>
      ))}

      {/* Content — stretch to fill section, image pinned to bottom */}
      <div className="relative z-10 flex flex-row justify-evenly md:flex-col md:items-center gap-2 pt-8 items-end">

        {/* Profile image — flush to bottom, no bottom padding */}
        <div className="w-2/5 md:hidden flex justify-center items-end">
          <motion.div
            className={`${styles.imageWrapper} flex items-end`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Orbit rings */}
            <div className={styles.orbitRing} />
            <div className={styles.orbitRing2} />

            {/* Orbiting planet on ring */}
            <motion.div
              className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: 0, height: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div style={{ position: "absolute", top: "-16px", left: "130px" }}>
                <Image src="/images/space-planet-svg-bundle-space-planet_10.svg" alt="" width={32} height={32} />
              </div>
            </motion.div>

            <Image
              src="/images/aboutImg.png"
              className={styles.aboutImage}
              alt="Ye Htet Aung"
              width={420}
              height={443}
              style={{ display: "block" }}
            />
          </motion.div>
        </div>

        {/* Text side */}
        <div className="w-3/5 md:w-full mt-14 pb-20">

          {/* "About Me" title */}
          <motion.h1
            className={`${styles.neonTitle}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            About Me
          </motion.h1>

          {/* Glowing divider */}
          <motion.div
            className="flex items-center gap-2 my-4 md:justify-center"
            style={{ originX: 0 }}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-32 bg-gradient-to-r from-pink-500 via-purple-400 to-transparent" />
            <span className="text-purple-300 text-xs">✦</span>
          </motion.div>

          <motion.p
            className="mt-4 leading-8 mb-6 text-gray-700 dark:text-gray-300 text-lg md:text-xl md:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            A Web Developer with over two years of experience in both frontend and backend development, skilled in <span className="text-indigo-500 font-semibold">PHP</span>, <span className="text-red-500 font-semibold">Laravel</span>, <span className="text-yellow-500 font-semibold">Python</span>, <span className="text-slate-500 dark:text-slate-100 font-semibold">Flask</span>, <span className="text-red-600 font-semibold">Angular</span>, <span className="text-green-500 font-semibold">Vue</span>, and building dynamic, scalable web applications. Proficient in <span className="text-purple-600 font-semibold">C#</span> and <span className="text-orange-500 font-semibold">Java</span>, with experience creating projects independently using <span className="text-cyan-500 font-semibold">React</span>, <span className="text-black dark:text-white font-semibold">Next.js</span>, and <span className="text-green-600 font-semibold">Node.js</span>. Familiar with design tools like <span className="text-pink-500 font-semibold">Figma</span> and <span className="text-fuchsia-600 font-semibold">Adobe XD</span>, and have a working knowledge of <span className="text-blue-500 font-semibold">Docker</span>. Always eager to learn new technologies and collaborate on user-centric solutions. Seeking opportunities to apply my experience as a frontend or backend developer.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
