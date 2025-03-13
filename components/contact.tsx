"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-muted/10 p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2 text-primary" size={20} />
              Contact Information
            </h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out to me through any of the following channels:
            </p>

            <div className="space-y-4">
              <a
                href="mailto:jacobcardoso2003@gmail.com"
                className="flex items-center text-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} className="mr-3 text-primary" />
                <span>jacobcardoso2003@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jacob-cardoso/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} className="mr-3 text-primary" />
                <span>linkedin.com/in/jacob-cardoso</span>
              </a>

              <a
                href="https://github.com/Jacob-Cardoso"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-foreground hover:text-primary transition-colors"
              >
                <Github size={18} className="mr-3 text-primary" />
                <span>github.com/Jacob-Cardoso</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

