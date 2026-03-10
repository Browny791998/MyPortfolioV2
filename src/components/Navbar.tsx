"use client"
import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { ThemeSwitcher } from "./ThemeSwitcher";

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
})

const mobileLinks = [
    { href: "#", label: "Home", planet: "/images/space-planet-svg-bundle-space-planet_2.svg" },
    { href: "#about", label: "About", planet: "/images/space-planet-svg-bundle-space-planet_7.svg" },
    { href: "#work", label: "My Work", planet: "/images/space-planet-svg-bundle-space-planet_9.svg" },
    { href: "#contact", label: "Contact", planet: "/images/space-planet-svg-bundle-space-planet_11.svg" },
    { href: "https://stack-logic-blog.vercel.app/", label: "Blog", planet: "/images/space-planet-svg-bundle-space-planet_12.svg" },
];

const itemVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.15 + i * 0.1, duration: 0.4, ease: "easeOut" as const },
    }),
    exit: (i: number) => ({
        opacity: 0,
        x: 60,
        transition: { delay: i * 0.05, duration: 0.25, ease: "easeIn" as const },
    }),
};

const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.4 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed flex justify-between w-full backdrop-filter backdrop-blur-md px-4 py-1 z-50 items-center"
            >
                <Link href="/"><Image src="/images/yha-logo-edit.png" alt="My Logo" className="inline-block mr-4" width="50" height="50" /></Link>

                {/* Hamburger — mobile only */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                    style={{ backgroundImage: `url('/images/earth.png')` }}
                    className="flex-col justify-center items-center w-10 h-10 mt-2 rounded-full bg-center bg-repeat bg-contain sm:flex hidden z-[60]"
                >
                    <span className={`bg-gray-50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
                    <span className={`bg-gray-50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`bg-gray-50 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
                </motion.button>

                {/* Desktop nav links */}
                <ul className={`flex items-center gap-10 justify-end ${spaceGrotesk.className} sm:hidden`}>
                    {[
                        { href: "#", label: "Home" },
                        { href: "#about", label: "About" },
                        { href: "#work", label: "My Work" },
                        { href: "#contact", label: "Contact" },
                        { href: "https://stack-logic-blog.vercel.app/", label: "Blog" },
                    ].map(({ href, label }, i) => (
                        <motion.li
                            key={href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                            className="mr-4 relative group"
                        >
                            <Link href={href} className="dark:text-white font-bold">{label}</Link>
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-pink-700 transition-all duration-300 group-hover:w-full rounded-full" />
                        </motion.li>
                    ))}
                </ul>

                {/* Desktop social icons */}
                <ul className={`flex items-center gap-10 justify-end ${spaceGrotesk.className} sm:hidden`}>
                    <li><a href="https://www.linkedin.com/in/yehtetaung791998" target="_blank"><BsLinkedin className="hover:text-[#0077b5] text-xl" /></a></li>
                    <li><a href="https://github.com/Browny791998" target="_blank"><BsGithub className="hover:text-gray-400 text-xl" /></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100073584559399" target="_blank"><BsFacebook className="hover:text-[#3b5998] text-xl" /></a></li>
                    <li><ThemeSwitcher /></li>
                </ul>

                {/* Mobile fullscreen menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
                            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)" }}
                            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute top-0 right-0 w-full min-h-screen bg-gray-950 px-8 py-24 uppercase flex flex-col justify-between hidden sm:flex z-[55]"
                        >
                            <ul className={`flex flex-col items-center justify-center gap-10 ${spaceGrotesk.className}`}>
                                {mobileLinks.map(({ href, label, planet }, i) => (
                                    <motion.li
                                        key={href}
                                        custom={i}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        <motion.span
                                            animate={{ rotate: [0, 15, -15, 0] }}
                                            transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
                                        >
                                            <Image width={28} height={28} src={planet} alt="" />
                                        </motion.span>
                                        <Link href={href} className="text-white font-bold text-2xl tracking-widest relative">
                                            {label}
                                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-pink-700 transition-all duration-300 group-hover:w-full rounded-full" />
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.ul
                                variants={socialVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className={`flex items-center justify-center gap-8 ${spaceGrotesk.className}`}
                            >
                                <li><a href="https://www.linkedin.com/in/yehtetaung791998" target="_blank"><BsLinkedin className="hover:text-[#0077b5] text-2xl text-white" /></a></li>
                                <li><a href="https://github.com/Browny791998" target="_blank"><BsGithub className="hover:text-gray-400 text-2xl text-white" /></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100073584559399" target="_blank"><BsFacebook className="hover:text-[#3b5998] text-2xl text-white" /></a></li>
                                <li><ThemeSwitcher /></li>
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.nav>
        </>
    );
}
