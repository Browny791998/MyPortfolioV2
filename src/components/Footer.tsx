"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiDownload } from "react-icons/hi";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Journey" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: <FaGithub className="text-lg" />, href: "https://github.com/yehtetaung", label: "GitHub" },
  { icon: <FaLinkedin className="text-lg" />, href: "https://linkedin.com/in/yehtetaung", label: "LinkedIn" },
  { icon: <MdEmail className="text-lg" />, href: "mailto:yehtetaung791998@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800/50">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-pink-700/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-10 mb-10 md:gap-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-extrabold text-pink-700 dark:text-white mb-2">
              YHA<span className="text-pink-500">.</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Full Stack Web Developer crafting modern, high-performance web applications.
            </p>

            {/* CV Download button */}
            <motion.a
              href="/cv/Ye-Htet-Aung-CV.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-pink-700/50 text-pink-700 dark:text-pink-300 hover:bg-pink-700/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload className="text-base" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:hidden"
          >
            <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 mb-4 uppercase">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-pink-700 dark:hover:text-pink-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 mb-4 uppercase">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-700 dark:hover:text-pink-400 transition-colors duration-200"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex items-center justify-between md:flex-col md:gap-3 md:text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Ye Htet Aung. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600">
            Built with{" "}
            <span className="text-pink-500">♥</span>
            {" "}using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
