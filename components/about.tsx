"use client"

import { motion } from "framer-motion"
import { User, Code } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <User className="mr-2 text-primary" size={24} />
              Who I Am
            </h3>
            <p className="text-muted-foreground">
              I'm a passionate software engineer with a strong interest in building innovative solutions. I enjoy
              tackling complex problems and creating applications that make a difference. My journey in technology has
              been driven by curiosity and a desire to continuously learn and grow.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying
              up-to-date with the latest industry trends. I believe in the power of technology to transform lives and am
              committed to being part of that positive change.
            </p>

            {/* Education section moved to its own component */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Code className="mr-2 text-primary" size={24} />
              My Skills
            </h3>

            <div className="grid gap-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary mb-4">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Java",
                    "JavaScript",
                    "TypeScript",
                    "SQL",
                    "C",
                    "HTML",
                    "CSS",
                    "Haskell",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-background/50 border border-border rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary mb-4">Developer Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git",
                    "GitHub",
                    "Jira",
                    "Docker",
                    "Jenkins",
                    "Cypress",
                    "LaTeX",
                    "VS Code",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-background/50 border border-border rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-primary mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "Django",
                    "Tailwind CSS",
                    "Selenium",
                    "Jest",
                    "MS Excel",
                    "MS Word",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-background/50 border border-border rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Overview section moved to its own component */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

