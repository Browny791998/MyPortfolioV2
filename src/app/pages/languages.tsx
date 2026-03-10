'use client'
import React from 'react'
import {
    SiReact,
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiMongodb,
    SiBootstrap,
    SiLaravel,
    SiVuedotjs,
    SiPython,
    SiPostgresql,
    SiPrisma,
    SiDocker
} from 'react-icons/si';
function Languages() {

    interface Language {
        name: string
        icon: React.ReactNode
    }

    const languages: Language[] = [
        {
            name: 'React',
            icon: <SiReact className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'Tailwindcss',
            icon: <SiTailwindcss className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'Nextjs',
            icon: <SiNextdotjs className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'Expressjs',
            icon: <SiExpress className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'MongoDB',
            icon: <SiMongodb className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'Bootstrap',
            icon: <SiBootstrap className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'Laravel',
            icon: <SiLaravel className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'Vue',
            icon: <SiVuedotjs className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'Python',
            icon: <SiPython className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'Docker',
            icon: <SiDocker className="sm:h-16 sm:w-16 h-40 w-40 md:h-20  md:w-20 " />
        },
        {
            name: 'Prisma',
            icon: <SiPrisma className="sm:h-16 sm:w-16 h-40 w-40  md:h-20  md:w-20 " />
        },
    ]
    return (
        <div className="relative z-0 py-16 overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100 text-gray-800">
                Programming Languages
            </h2>

            {/* Fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

            <div className="flex w-[200%] gap-8 animate-marquee">
                {/* First set of icons */}
                <div className="flex justify-around min-w-[100%] gap-8">
                    {languages.map((language, index) => (
                        <div key={`set1-${index}`} className="flex flex-col items-center justify-center text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">
                            {language.icon}
                            <span className="mt-3 text-sm font-semibold tracking-wide">{language.name}</span>
                        </div>
                    ))}
                </div>

                {/* Exact duplicate for seamless looping */}
                <div className="flex justify-around min-w-[100%] gap-8">
                    {languages.map((language, index) => (
                        <div key={`set2-${index}`} className="flex flex-col items-center justify-center text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300">
                            {language.icon}
                            <span className="mt-3 text-sm font-semibold tracking-wide">{language.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Languages