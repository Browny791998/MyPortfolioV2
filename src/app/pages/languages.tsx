'use client'
import React from 'react'
import { Carousel } from 'react-carousel3';
import Image from 'next/image';
import { SiReact, 
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
        <>
        <h2 className="text-3xl font-bold text-center mb-8">Programming Languages</h2>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Carousel height={300} width={1000} yOrigin={42} yRadius={70} autoPlay={true}>
                {languages.map((language, index) => (
                    <div key={index} >
                        {language.icon}
                    </div>
                ))}
            </Carousel>
        </div>
        </>
    )
}

export default Languages