"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  detailedDescription: string;
  planet: string;
}

const projects: Project[] = [
  {
    title: "Job Portal Management System",
    description:
      "A job seeker system at BIB using ASP.NET, Bootstrap, and MySQL, handling both frontend and backend development.",
    technologies: ["C#", "ASP.NET", "Bootstrap", "MS SQL Server", "jQuery"],
    githubUrl: "#",
    detailedDescription:
      "During my training at BIB, I developed a comprehensive job seeker system. The platform allows companies to post job offerings, and users can search for jobs using various filters such as job position and type. Additionally, companies can view applicants' resumes. The system was built using the ASP.NET framework, Bootstrap for the frontend, and MySQL as the database. I was responsible for both the frontend and backend development, including the user-facing site and the admin dashboard.",
    planet: "/images/space-planet-svg-bundle-space-planet_3.svg",
  },
  {
    title: "Patient Care System",
    description:
      "A patient care system's doctor dashboard using Angular and Python, with integration of cloud technologies.",
    technologies: ["Angular", "Python", "Flask", "Google Cloud", "WordPress", "MySQL"],
    githubUrl: "#",
    detailedDescription:
      "This system is designed for users, such as caregivers, to upload the health status of a patient. Doctors then use the information to diagnose the primary health issue. I worked on the doctor dashboard developed with Angular on the frontend and Python on the backend, hosted on Google Cloud. I also gained exposure to the NDB library, OpenAI for API generation, and basic BigQuery syntax.",
    planet: "/images/space-planet-svg-bundle-space-planet_6.svg",
  },
  {
    title: "Assets Management System",
    description:
      "A company asset management system using Laravel, Vue, and Inertia.js, featuring asset tracking and dashboard visualizations.",
    technologies: ["Laravel", "Vue", "Inertia.js", "Tailwind", "MySQL"],
    githubUrl: "#",
    detailedDescription:
      "This system manages and stores all company assets, tracking detailed information such as asset values and the employees using them. Administrators can import asset data manually or through CSV files. Asset summaries are visualized on the dashboard using charts, and the company performs monthly asset checks with history saved in the database.",
    planet: "/images/space-planet-svg-bundle-space-planet_4.svg",
  },
  {
    title: "Nursing Care System",
    description:
      "A nurse scheduling system using PHP and JavaScript, featuring task assignment, real-time attendance tracking, and schedule export.",
    technologies: ["PHP", "jQuery", "HTML", "CSS", "PostgreSQL"],
    githubUrl: "#",
    detailedDescription:
      "This system manages the scheduling of nurses responsible for caring for elderly individuals. Administrators can assign tasks to each nurse and monitor their real-time attendance. The system also allows for the creation of customized services and enables nurses to post daily updates. Users can export schedule plans in both PDF and CSV formats.",
    planet: "/images/space-planet-svg-bundle-space-planet_8.svg",
  },
  {
    title: "BLOG",
    description:
      "A developer-centric knowledge-sharing platform built with Next.js, Prisma, and Supabase.",
    technologies: ["Next.js", "Prisma", "Supabase", "Radix"],
    githubUrl: "#",
    detailedDescription:
      "Architected a high-performance, developer-centric knowledge-sharing platform built for technical content creation and community engagement. Implemented secure authentication via Supabase Auth and ensured type-safe database interactions using Prisma ORM. Designed a rich content editor with syntax-highlighted code blocks, enabling developers to publish tutorials and code snippets seamlessly. Engineered a real-time engagement suite featuring notifications, threaded comments, and user reactions to drive community interaction. Delivered advanced user features including a bookmarking system and personalized profile dashboard. Leveraged Radix UI primitives to uphold accessibility standards and a refined UI, complemented by an optimized search and categorization engine for efficient content discovery.",
    planet: "/images/space-planet-svg-bundle-space-planet_10.svg",
  },
  {
    title: "IELTS LMS PLATFORM",
    description:
      "Learning management system with Next.js frontend and Elysia.js backend.",
    technologies: ["Next.js", "Elysia.js"],
    githubUrl: "#",
    detailedDescription:
      "This system is developed using Next.js for the frontend and Elysia.js for the backend, with PostgreSQL and Drizzle ORM for database management. I am tasked with developing a feature for uploading video lesson courses. This feature will utilize S3 storage with CloudFront for file storage. The system includes a CMS site and a student dashboard site. An administrator can create courses and chapters, upload videos and their associated learning materials at the CMS site. Students can purchase courses and subsequently browse video lessons, downloading learning materials as needed.",
    planet: "/images/space-planet-svg-bundle-space-planet_11.svg",
  },
  {
    title: "AI-BASED LEARNING PLATFORM",
    description:
      "Full-stack AI-powered e-learning platform with Next.js and ASP.NET.",
    technologies: ["Next.js", "ASP.NET"],
    githubUrl: "#",
    detailedDescription:
      "Developed a full-stack AI-powered e-learning platform with two dedicated portals — Educator and Learner. Educators can create and publish courses by uploading learning materials, which are automatically analyzed by a language model to generate an AI chatbot scoped exclusively to course content. Learners are enrolled via unique invite links and interact with the course-specific chatbot for intelligent, context-aware assistance. Built with Next.js and Redux Toolkit on the frontend, and ASP.NET OData on the backend.",
    planet: "/images/space-planet-svg-bundle-space-planet_12.svg",
  },
];

const techColors: Record<string, string> = {
  "C#": "from-purple-500 to-purple-700",
  "ASP.NET": "from-blue-500 to-blue-700",
  Bootstrap: "from-violet-500 to-violet-700",
  "MS SQL Server": "from-red-500 to-red-700",
  jQuery: "from-blue-400 to-blue-600",
  Angular: "from-red-500 to-red-600",
  Python: "from-yellow-400 to-yellow-600",
  Flask: "from-gray-400 to-gray-600",
  "Google Cloud": "from-blue-400 to-green-500",
  WordPress: "from-blue-500 to-blue-700",
  MySQL: "from-orange-400 to-orange-600",
  Laravel: "from-red-500 to-red-700",
  Vue: "from-green-400 to-green-600",
  "Inertia.js": "from-purple-400 to-indigo-600",
  Tailwind: "from-cyan-400 to-cyan-600",
  PHP: "from-indigo-400 to-indigo-600",
  HTML: "from-orange-500 to-orange-700",
  CSS: "from-blue-400 to-blue-600",
  PostgreSQL: "from-blue-500 to-blue-700",
  "Next.js": "from-gray-900 to-gray-700",
  Prisma: "from-blue-400 to-blue-600",
  Supabase: "from-green-400 to-green-600",
  Radix: "from-purple-400 to-purple-600",
  "Elysia.js": "from-orange-400 to-orange-600",
  Drizzle: "from-cyan-400 to-cyan-600",
  S3: "from-yellow-500 to-yellow-700",
  CloudFront: "from-blue-500 to-blue-700",
  CMS: "from-red-400 to-red-600",
  Redux: "from-purple-500 to-purple-700",
  OData: "from-blue-400 to-blue-600",
};

// Slide direction
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  }),
};

export default function ProjectCarouselV2() {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [expanded, setExpanded] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setExpanded(false);
      const next = currentIndex + newDirection;
      if (next < 0) setPage([projects.length - 1, newDirection]);
      else if (next >= projects.length) setPage([0, newDirection]);
      else setPage([next, newDirection]);
    },
    [currentIndex]
  );

  const project = projects[currentIndex];

  return (
    <div className="relative max-w-5xl mx-auto px-6">
      {/* Floating planet decorations */}
      <motion.div
        className="absolute -top-8 -left-4 pointer-events-none z-0 opacity-40"
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <Image src="/images/space-planet-svg-bundle-space-planet_5.svg" alt="" width={60} height={60} />
      </motion.div>
      <motion.div
        className="absolute -bottom-4 -right-2 pointer-events-none z-0 opacity-30"
        animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <Image src="/images/space-planet-svg-bundle-space-planet_9.svg" alt="" width={50} height={50} />
      </motion.div>

      {/* Navigation + card */}
      <div className="flex items-start gap-4 md:gap-2">
        {/* Prev button */}
        <motion.button
          onClick={() => paginate(-1)}
          className="shrink-0 p-2 mt-6 rounded-full text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsArrowLeftCircleFill className="text-2xl md:text-xl" />
        </motion.button>

        {/* Card area */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full"
            >
              {/* Card */}
              <div className="relative group">
                {/* Border glow on appear */}
                <motion.div
                  className="absolute -inset-px rounded-2xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, #be185d, #a855f7, #6366f1)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.7, 0] }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />

                <div className="relative border border-gray-200 dark:border-gray-700/50 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-pink-700/50 hover:shadow-[0_0_30px_rgba(190,24,93,0.15)]">
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-pink-700/10 via-transparent to-purple-500/10 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-6 flex flex-col">
                    {/* Header row: planet + title */}
                    <div className="flex items-start gap-4 mb-6">
                      {/* Planet icon */}
                      <motion.div
                        className="shrink-0 w-16 h-16 md:w-12 md:h-12"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      >
                        <Image
                          src={project.planet}
                          alt=""
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>

                      <div className="flex-1">
                        {/* Project number */}
                        <motion.span
                          className="text-xs font-mono text-pink-500 dark:text-pink-400 tracking-widest"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          PROJECT {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                        </motion.span>

                        {/* Title */}
                        <motion.h3
                          className="text-2xl md:text-xl font-bold text-gray-900 dark:text-white mt-1"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {project.title}
                        </motion.h3>
                      </div>
                    </div>

                    {/* Glowing divider */}
                    <motion.div
                      className="flex items-center gap-2 mb-5"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="h-px flex-1 bg-gradient-to-r from-pink-500 via-purple-400 to-transparent" />
                      <span className="text-purple-300 text-xs">✦</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Expandable detail */}
                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden mb-5"
                        >
                          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-l-2 border-pink-700/30 pl-4">
                            {project.detailedDescription}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tech badges */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.08 }}
                          className={`px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${
                            techColors[tech] || "from-gray-500 to-gray-700"
                          } shadow-sm`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={() => setExpanded(!expanded)}
                        className="px-5 py-2 text-sm font-medium rounded-full border border-pink-700/50 text-pink-700 dark:text-pink-300 hover:bg-pink-700/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expanded ? "Show Less" : "Read More"}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next button */}
        <motion.button
          onClick={() => paginate(1)}
          className="shrink-0 p-2 mt-6 rounded-full text-gray-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <BsArrowRightCircleFill className="text-2xl md:text-xl" />
        </motion.button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {projects.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setExpanded(false);
              setPage([i, i > currentIndex ? 1 : -1]);
            }}
            className="relative"
            whileHover={{ scale: 1.3 }}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-pink-600 shadow-[0_0_8px_rgba(190,24,93,0.6)]"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
            {i === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full border border-pink-500/50"
                animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
