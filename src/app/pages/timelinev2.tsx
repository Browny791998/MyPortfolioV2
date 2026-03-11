"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import { MdSchool, MdWork } from "react-icons/md";

const timelineData = [
  {
    title: "Dagon University",
    subtitle: "Computer Science Department",
    date: "2015 – 2019",
    description:
      "Learned programming theory and frontend/backend languages.",
    icon: <MdSchool className="text-xl" />,
    planet: "/images/space-planet-svg-bundle-space-planet_2.svg",
    side: "left" as const,
  },
  {
    title: "BIB Training",
    subtitle: "Web Development Course",
    date: "2022",
    description:
      "Learned HTML, CSS, jQuery for frontend, and C# with ASP.NET for backend. Built static websites and collaborated on a job portal as a final project.",
    icon: <MdWork className="text-xl" />,
    planet: "/images/space-planet-svg-bundle-space-planet_4.svg",
    side: "right" as const,
  },
  {
    title: "Metateam Myanmar",
    subtitle: "Junior Developer",
    date: "2022 – 2024",
    description:
      "Gained experience through OJT projects including the Patient Care System and Asset Management System.",
    icon: <MdWork className="text-xl" />,
    planet: "/images/space-planet-svg-bundle-space-planet_3.svg",
    side: "left" as const,
  },
  {
    title: "Metateam Myanmar",
    subtitle: "Senior Developer",
    date: "2022 – 2025",
    description:
      "Worked on the Nursing Schedule Management System as a senior developer, gaining valuable experience in system architecture.",
    icon: <MdWork className="text-xl" />,
    planet: "/images/space-planet-svg-bundle-space-planet_6.svg",
    side: "right" as const,
  },
    {
    title: "Freelance",
    subtitle: "Senior Developer",
    date: "2025 – Present",
    description:
      "Worked on IELTS learning management system and AI-based learning platform.",
    icon: <MdWork className="text-xl" />,
    planet: "/images/space-planet-svg-bundle-space-planet_5.svg",
    side: "left" as const,
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const isLeft = item.side === "left";

  return (
    <div
      ref={ref}
      className={`flex items-center w-full mb-12 md:mb-8 ${
        isLeft
          ? "flex-row md:flex-col"
          : "flex-row-reverse md:flex-col"
      }`}
    >
      {/* Content card */}
      <motion.div
        className={`w-5/12 md:w-full ${isLeft ? "text-right md:text-center" : "text-left md:text-center"}`}
        initial={{ opacity: 0, x: isLeft ? -100 : 100, scale: 0.85, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="relative group">
          {/* Border glow flash on appear */}
          <motion.div
            className="absolute -inset-px rounded-xl pointer-events-none"
            style={{ background: "linear-gradient(135deg, #be185d, #a855f7, #6366f1)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.9, 0] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />

          {/* Card */}
          <div className="relative border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 bg-white dark:bg-white/5 backdrop-blur-sm hover:border-pink-700/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(190,24,93,0.15)]">
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink-700/10 via-transparent to-purple-500/10 pointer-events-none" />

            {/* Date badge */}
            <motion.span
              className="inline-block text-xs font-mono text-pink-500 dark:text-pink-400 mb-2 tracking-wider"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              {item.date}
            </motion.span>

            {/* Title */}
            <motion.h3
              className="text-lg font-bold text-gray-900 dark:text-white mb-1"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              {item.title}
            </motion.h3>

            {/* Subtitle */}
            <motion.h4
              className="text-sm text-pink-700 dark:text-pink-300 mb-3 font-medium"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              {item.subtitle}
            </motion.h4>

            {/* Description */}
            <motion.p
              className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.65 }}
            >
              {item.description}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Center node */}
      <div className="w-2/12 md:w-full flex justify-center md:my-4 relative">
        <motion.div
          className="relative z-10"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.05, type: "spring", stiffness: 200 }}
        >
          {/* Planet icon */}
          <motion.div
            className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: index * 0.3 }}
          >
            <Image
              src={item.planet}
              alt=""
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-pink-500/40"
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.2 }}
          />
        </motion.div>
      </div>

      {/* Spacer for the opposite side */}
      <div className="w-5/12 md:hidden" />
    </div>
  );
}

export default function TimelineV2() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for the growing line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Glow intensity based on scroll
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.8, 1]);

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-black" id="timeline">
      {/* Section title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-3xl font-bold text-pink-700 dark:text-white mb-3">
          My Journey
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

      {/* Timeline container */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto px-6">
        {/* Central line — grows on scroll */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px md:hidden">
          {/* Background track */}
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800" />

          {/* Growing line */}
          <motion.div
            className="absolute top-0 left-0 w-full origin-top"
            style={{
              height: lineHeight,
              background:
                "linear-gradient(to bottom, #be185d, #a855f7, #6366f1)",
            }}
          />

          {/* Glow at the tip */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 blur-md"
            style={{
              top: lineHeight,
              opacity: glowOpacity,
            }}
          />
        </div>

        {/* Timeline items */}
        {timelineData.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>

      {/* Bottom decoration — rocket */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <Image
            src="/images/rocket.png"
            alt=""
            width={40}
            height={40}
            className="opacity-60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
