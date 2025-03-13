"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 z-0"></div>

      {/* Blur gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-primary/20 via-primary/5 to-transparent"
          style={{
            width: "70vw",
            height: "70vw",
            left: "-20%",
            top: "10%",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute rounded-full bg-gradient-to-l from-primary/10 via-primary/5 to-transparent"
          style={{
            width: "60vw",
            height: "60vw",
            right: "-10%",
            bottom: "0%",
            filter: "blur(120px)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute rounded-full bg-gradient-to-t from-primary/15 via-primary/5 to-transparent"
          style={{
            width: "50vw",
            height: "50vw",
            right: "30%",
            top: "20%",
            filter: "blur(90px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Geometric Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating hexagon */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "120vh",
            height: "120vh",
          }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full fill-none stroke-primary/20"
            strokeWidth="0.2"
          >
            <motion.path
              d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            />
          </svg>
        </motion.div>

        {/* Floating triangles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${20 + (i * 30)}%`,
              top: `${30 + (i * 20)}%`,
            }}
            initial={{ y: 0, rotate: 0 }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <svg
              width={(150 - i * 30)}
              height={(150 - i * 30)}
              viewBox="0 0 100 100"
              className="fill-none stroke-primary"
              strokeWidth="0.5"
            >
              <motion.path
                d="M50 10 L90 90 L10 90 Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              />
            </svg>
          </motion.div>
        ))}

        {/* Pulsing circles */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-primary/20"
            style={{
              left: `${65 - i * 30}%`,
              top: `${40 + i * 20}%`,
              width: (200 - i * 50),
              height: (200 - i * 50),
            }}
            initial={{ scale: 0.8, opacity: 0.1 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I&apos;m <span className="text-primary">Jacob Cardoso</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl mb-6 h-12 flex items-center justify-center md:justify-start">
              <span className="mr-2">I&apos;m a</span>
              <Typewriter
                options={{
                  strings: ["Software Engineer", "Researcher", "Student"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-primary",
                }}
              />
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Building innovative solutions and exploring new technologies to create impactful experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#about"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-background border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/jacob.png"
                alt="Jacob Cardoso"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, 320px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder-user.jpg";
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown size={20} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

