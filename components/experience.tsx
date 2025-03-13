"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

interface Experience {
  id: number
  company: string
  position: string
  period: string
  location: string
  description: string[]
  imageSrc: string
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Twilio",
    position: "Incoming Software Engineer Intern",
    period: "May 2025 - Aug 2025",
    location: "Remote",
    description: ["Incoming Software Engineer Intern at Twilio"],
    imageSrc: "/twilio.png",
  },
  {
    id: 2,
    company: "Royal Bank of Canada",
    position: "Software Automation Intern",
    period: "Jan 2025 - April 2025",
    location: "Toronto, ON",
    description: ["Build a React.js UI with dynamic fields", "Developed REST APIs using a Supabase Backend"],
    imageSrc: "/rbc.png",
  },
  {
    id: 3,
    company: "McMaster University",
    position: "Undergraduate Teaching Assistant",
    period: "Sep 2024 - Present",
    location: "Hamilton, ON",
    description: [
      "Teaching Assistant for COMPSCI 1JC3 - Introduction to Computational Thinking (F24)",
      "Teaching Assistant for ENGINEER 1EE0 - Introduction to the Engineering Co-op Program (F24, W24)",
    ],
    imageSrc: "/mcmaster.png",
  },
  {
    id: 4,
    company: "BlackBerry QNX",
    position: "Software Developer Intern",
    period: "May 2024 - Aug 2024",
    location: "Ottawa, ON",
    description: [
      "Engineered and deployed a full-stack internal web application using React, Next.js, and Node.js, streamlining daily workflows for 500+ employees by centralizing critical business functions into a single platform.",
      "Developed a RESTful API to enhance data accessibility for cross-functional teams, reducing response times by 35% and supporting 300+ daily API requests without performance drop-off.",
      "Spearheaded development of a multi-threaded monitoring system to track the real-time status of 15 internal applications, delivering instant updates through a dynamically updated dashboard, reducing system downtime by 20%.",
      "Engineered an automated end-to-end test suite for web services with Python, Selenium, and Cypress improving code coverage by 40% and decreasing manual testing time by 85%.",
    ],
    imageSrc: "/blackberry.png",
  },
  {
    id: 5,
    company: "Ford Motor Company",
    position: "Software Developer Intern",
    period: "May 2023 - Dec 2024",
    location: "Oakville, ON",
    description: [
      "Authored over 50 automated test cases to validate embedded software systems in electric vehicles, increasing defect detection rates by 25%.",
      "Optimized test pipelines by designing reusable Python modules, reducing code duplication by 45% and enabling faster development of new test cases across the team.",
      "Implemented continuous integration (CI) pipelines using Jenkins to automate the execution of regression tests, improving deployment speed by 20%.",
    ],
    imageSrc: "/ford.png",
  },
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading state
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Company tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0"
          >
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 text-left whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-b-0 lg:border-l-2 transition-all ${
                  activeTab === index
                    ? "border-primary text-primary bg-primary/5"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </motion.div>

          {/* Experience details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-muted/10 rounded-lg p-6 border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                <div className="w-20 h-20 relative rounded-md overflow-hidden border border-border bg-white/5 flex items-center justify-center">
                  <Image
                    src={experiences[activeTab].imageSrc}
                    alt={experiences[activeTab].company}
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{experiences[activeTab].position}</h3>
                  <h4 className="text-xl text-primary mb-2">{experiences[activeTab].company}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{experiences[activeTab].period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{experiences[activeTab].location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center"
                  >
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

