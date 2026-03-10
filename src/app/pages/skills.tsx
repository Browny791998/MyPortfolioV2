
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { SiJavascript, SiHtml5, SiCss, SiTypescript,SiPhp, SiMysql } from 'react-icons/si'
import { BiSolidUpArrow,BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import styles from "./skills.module.scss";
interface Language {
    name: string
    proficiency: string
    color: string
    icon: React.ReactNode
  }
  
  const languages: Language[] = [
    {
      name: 'JavaScript',
      proficiency:' 90',
      color: '#F7DF1E',
      icon: <SiJavascript className="h-6 w-6" />
    },
    {
      name: 'HTML',
      proficiency: '85',
      color: '#3776AB',
      icon: <SiHtml5 className="h-6 w-6" />
    },
    {
      name: 'CSS',
      proficiency: '80',
      color: '#007396',
      icon: <SiCss className="h-6 w-6" />
    },
    {
      name: 'TypeScript',
      proficiency:'60',
      color: '#3178C6',
      icon: <SiTypescript className="h-6 w-6" />
    },
    {
      name: 'PHP',
      proficiency:' 90',
      color: '#00599C',
      icon: <SiPhp className="h-6 w-6" />
    },
    {
      name: 'MySql',
      proficiency:' 90',
      color: '#00599C',
      icon: <SiMysql className="h-6 w-6" />
    },

  ]
  
  export default function Skills() {
    const [expandedLanguage, setExpandedLanguage] = useState<string | null>(null)
  
    const toggleLanguage = (languageName: string) => {
      setExpandedLanguage(expandedLanguage === languageName ? null : languageName)
    }
  
    return (
      <div className="container mx-auto pb-12 pt-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Skill</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-3">
          {languages.map((language) => (
            <Card key={language.name} className="overflow-hidden pb-5">
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="text-primary" style={{ color: language.color }}>
                      {language.icon}
                    </div>
                    <span>{language.name}</span>
                  </div>
                </CardTitle>
               
                <div className={styles.progressContainer}>
  <div className={styles.progressBar} style={{width: `${language.proficiency}%` }}>{language.proficiency}%</div>
</div>
               
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    )
  }