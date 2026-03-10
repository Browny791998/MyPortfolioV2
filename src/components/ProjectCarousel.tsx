'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronLeft, ChevronRight, Github, Info } from 'lucide-react'
import Link from 'next/link'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import Image from 'next/image';

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  detailedDescription: string
}

const projects: Project[] = [
  {
    title: "Job Portal Management system",
    description: "A job seeker system at BIB using ASP.NET, Bootstrap, and MySQL, handling both frontend and backend development..",
    technologies: ["C#", "Asp.net", "Bootstrap", "Microsoft sql server", "Jquery"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    detailedDescription: "During my training at BIB, I developed a comprehensive job seeker system. The platform allows companies to post job offerings, and users can search for jobs using various filters such as job position and type. Additionally, companies can view applicants' resumes. The system was built using the ASP.NET framework, Bootstrap for the frontend, and MySQL as the database. I was responsible for both the frontend and backend development, including the user-facing site and the admin dashboard",
  },
  {
    title: "Patient care system",
    description: "A patient care system's doctor dashboard using Angular and Python, with integration of cloud technologies.",
    technologies: ["Angular", "Python", "Flask", "Google cloud", "Wordpress", "Mysql"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    detailedDescription: "This system is designed for users, such as caregivers, to upload the health status of a patient. The caregiver can also provide personal details about themselves. Doctors then use the information to diagnose the primary health issue of the patient based on the updates provided.I worked as a key team member on a patient care system, utilizing HTML, CSS, JavaScript, and Python. The system comprised a customer-facing website built with WordPress, PHP, and MySQL, and a dashboard for doctors developed with Angular on the frontend and Python on the backend, hosted on Google Cloud. While I primarily focused on developing the doctor dashboard, I also gained exposure to technologies like the NDB library for database management, OpenAI for API generation, and basic BigQuery syntax. Although I didn’t directly work on the deep learning and machine learning components, I made efforts to understand their application within the project.",
  },
  {
    title: "Assets Management system",
    description: "A company asset management system using Laravel, Vue, and Inertia.js, featuring asset tracking, employee data management, and dashboard visualizations.",
    technologies: ["Laravel", "Vue", "Inertia.js", "Tailwind", "Mysql"],
    githubUrl: "https://github.com/yourusername/weather-forecast-dashboard",
    detailedDescription: "This system is designed to manage and store all company assets, tracking detailed information such as asset values and the employees using them. Employee data is also stored. Administrators can import asset data manually or through CSV files. Asset summaries are visualized on the dashboard using charts, and the company performs monthly asset checks, with the history of these checks saved in the database. The system was developed using Laravel for the backend, Vue and Inertia.js for the frontend, and Tailwind CSS for the design. I was responsible for both the front and backend development.",
  },
  {
    title: "Nursing Care System",
    description: "A nurse scheduling system using PHP and JavaScript, featuring task assignment, real-time attendance tracking, and schedule export in PDF/CSV formats.",
    technologies: ["PHP", "Jquery", "HTML", "CSS", "Postgresql"],
    githubUrl: "https://github.com/yourusername/weather-forecast-dashboard",
    detailedDescription: "This system is designed to manage the scheduling of nurses responsible for caring for elderly individuals. Administrators can assign tasks to each nurse and monitor their real-time attendance. The system also allows for the creation of customized services for the elderly and enables nurses to post daily updates on the condition of their patients. Additionally, users can export the schedule plans in both PDF and CSV formats. The system provides schedule visualization through various formats, offering clear insights. It was developed using pure PHP and JavaScript to ensure efficiency and functionality.",
  },

]

function ProjectDialog({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-slate-400">
          Details
        </Button>
      </DialogTrigger>

      {/* Customized DialogContent */}
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800">
        <DialogHeader className="mb-4">

          <DialogTitle className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
            {project.description}
          </DialogDescription>

          <DialogClose asChild>
            <Button className="text-gray-500 dark:text-white p-3 absolute right-2 -top-1 hover:bg-slate-300 dark:hover:bg-black rounded-full">
              ✕
            </Button>
          </DialogClose>
        </DialogHeader>

        {/* Content with spacing and customization */}
        <div className="grid gap-4 py-4">
          <div>
            <h4 className="mb-2 font-medium text-gray-800 dark:text-gray-100">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-medium text-gray-800 dark:text-gray-100">Detailed Description:</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.detailedDescription}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === projects.length ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextProject();
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <div className="mx-auto py-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-pink-700">Programming Languages</h2>
      <div className="flex items-center justify-center">
        <Button
          variant="outline"
          size="icon"
          className="mr-4 rounded-full shadow-sm"
          onClick={prevProject}
        >
          <BsArrowLeftCircleFill className="hover:text-[#0077b5] text-xl text-black dark:text-white" />
        </Button>
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 } }}
            >
              <Card className="h-full py-4">
                <CardHeader>
                  <div className="mb-4">
                    <Image
                      src="/images/test.jpg"
                      alt="my project"
                      height="900"
                      width="900"
                      className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </div>
                  <CardTitle>{projects[currentIndex].title}</CardTitle>
                  <CardDescription>{projects[currentIndex].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-white text-black shadow-sm dark:bg-black dark:text-white dark:shadow-neutral-500"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between mt-5">
                  {/* <Button variant="outline" asChild>
                      <Link href={projects[currentIndex].githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </Link>
                    </Button> */}
                  <ProjectDialog project={projects[currentIndex]} />
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="ml-4 rounded-full shadow-sm"
          onClick={nextProject}
        >
          <BsArrowRightCircleFill className="hover:text-[#0077b5] text-xl text-black dark:text-white" />
        </Button>
      </div>
    </div>
  );
}