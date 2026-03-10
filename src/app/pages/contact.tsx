"use client";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: <MdEmail className="text-2xl" />,
    label: "Email",
    value: "yehtetaung791998@gmail.com",
    href: "mailto:yehtetaung@gmail.com",
  },
  {
    icon: <MdPhone className="text-2xl" />,
    label: "Phone",
    value: "+95 9697534546",
    href: "tel:+959697534546",
  },
  {
    icon: <MdLocationOn className="text-2xl" />,
    label: "Location",
    value: "Yangon, Myanmar",
  },
];

const socials = [
  {
    icon: <FaGithub className="text-xl" />,
    label: "GitHub",
    href: "https://github.com/yehtetaung",
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yehtetaung",
  },
];

export default function Contact() {
  return (
    <section
      className="relative py-20 overflow-hidden bg-white dark:bg-black"
      id="contact"
    >
      {/* Star field — dark mode */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 15% 20%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 55%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 10%, rgba(255,255,255,0.9) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 75%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 30%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 5% 85%, rgba(200,180,255,0.7) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 60% 40%, rgba(255,200,220,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 65%, rgba(180,200,255,0.8) 0%, transparent 100%)
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
          Contact Me
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

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-1 gap-12 items-start">
        {/* Left: contact info */}
        <div>
          {/* Contact info cards */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-white/5 hover:border-pink-700/50 hover:shadow-[0_0_20px_rgba(190,24,93,0.1)] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-700/10 dark:bg-pink-700/20 flex items-center justify-center text-pink-700 dark:text-pink-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-white/5">
                    <div className="w-12 h-12 rounded-full bg-pink-700/10 dark:bg-pink-700/20 flex items-center justify-center text-pink-700 dark:text-pink-400">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              className="flex gap-3 pt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-pink-700 dark:hover:text-pink-400 hover:border-pink-700/50 transition-all duration-300 hover:shadow-[0_0_12px_rgba(190,24,93,0.15)]"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative group"
        >
          {/* Border glow */}
          <motion.div
            className="absolute -inset-px rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, #be185d, #a855f7, #6366f1)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.6, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50 hover:border-pink-700/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(190,24,93,0.15)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369.29940358299046!2d96.17751376020806!3d16.8698976672414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193a11edbabab%3A0x7e0b0d931ad9ec12!2s34%20U%20Wisara%20Rd%2C%20Yangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2sjp!4v1773154919702!5m2!1sen!2sjp"
              width="100%"
              height="450"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="dark:opacity-80 dark:brightness-75 dark:invert-[0.85] dark:hue-rotate-180"
            />
          </div>

          {/* Map label */}
          <motion.div
            className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 text-xs font-mono text-gray-600 dark:text-gray-300 flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Based in Yangon, Myanmar
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
