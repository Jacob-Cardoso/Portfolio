"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  links: {
    demo?: string
    github?: string
  }
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Interview Preparation Tool",
    description: "An efficient way to prepare for interviews. Winner at Hack Princeton.",
    image: "/interview-wizard.png",
    links: {
      demo: "https://devpost.com/software/interview-wizard",
      github: "https://github.com/michael-fedotov/hackprinceton-interviewAI/",
    },
    tags: ["AI", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Refer-Ring",
    description: "Chrome extension to instantly get job referrals.",
    image: "/refer-ring.png",
    links: {
      demo: "https://youtu.be/5-7Jp_jKFrY",
    },
    tags: ["Chrome Extension", "JavaScript"],
  },
  {
    id: 3,
    title: "CogniSpeak",
    description: "AI powered dementia detection platform.",
    image: "/cognispeak.png",
    links: {
      demo: "https://youtu.be/iB2ttuUPCJA",
    },
    tags: ["AI", "Machine Learning", "Healthcare"],
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">A showcase of my recent work and personal projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => project.links.demo && window.open(project.links.demo, '_blank')}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.links.demo && (
                  <div 
                    className={`absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 hover:opacity-100 transition-opacity duration-300`}
                  >
                    <span className="flex items-center text-primary">
                      <ExternalLink size={24} className="mr-2" />
                      View Demo
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

