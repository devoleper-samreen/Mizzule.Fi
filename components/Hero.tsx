"use client"

import { Button } from "@/components/ui/button"
import heroImage from ".././public/hero.png"
import Image from "next/image"
import { motion } from "framer-motion"
import React from "react"

export default function Hero() {
  const titleWords = ["Fractional", "Ownership", "of", "DataCenters", "Starts", "Here"]
  const [displayedText, setDisplayedText] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)
  const fullText = "DataCenters"

  React.useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150
    const pauseTime = isDeleting ? 500 : 2000

    if (!isDeleting && displayedText === fullText) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    } else if (isDeleting && displayedText === "") {
      // Pause before typing again
      const timeout = setTimeout(() => setIsDeleting(false), pauseTime)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText(prev =>
          isDeleting
            ? prev.slice(0, -1)
            : fullText.slice(0, prev.length + 1)
        )
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [displayedText, isDeleting])

  return (
    <section className="container mx-auto px-4 md:px-10 py-8 md:py-10 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [20, -20, 20],
        }}
        transition={{
          duration: 10,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-cyan-200/40 to-pink-200/40 rounded-full blur-3xl -z-10"
      />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left relative">
          {/* Animated title with word-by-word animation */}
          <h1 className="text-[34px] md:text-4xl lg:text-6xl font-bold md:font-semi-bold text-black leading-tight">
            {/* First Line: Fractional Ownership */}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-block"
            >
              Fractional Ownership
            </motion.span>
            <br />

            {/* Second Line: of DataCenters (with typewriter effect on DataCenters) */}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-block mr-3 text-slate-600"
            >
              of
            </motion.span>
            <span className="inline-block relative">
              <span className="text-black font-bold">
                {displayedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="inline-block w-0.5 h-[0.9em] bg-blue-600 ml-1 align-middle"
                style={{ verticalAlign: "middle" }}
              />
            </span>
            <br />

            {/* Third Line: Starts Here */}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              className="inline-block"
            >
              Starts Here
            </motion.span>
          </h1>

          {/* Animated subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-base md:text-lg text-slate-600 max-w-xl mx-auto md:mx-0"
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Own, Earn, and Scale with the world's leading infrastructure marketplace.
            </motion.span>
          </motion.p>

          {/* Animated button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, type: "spring" }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-black hover:bg-slate-800 text-white px-8 md:px-10 py-5 md:py-6 text-sm md:text-base rounded-lg font-medium w-full md:w-auto cursor-pointer relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10">Explore More</span>
                <motion.span
                  className="ml-2 relative z-10 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating decorative dots */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-60"
          />
          <motion.div
            animate={{
              y: [10, -10, 10],
              x: [5, -5, 5],
            }}
            transition={{
              duration: 5,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 -right-4 w-3 h-3 bg-purple-500 rounded-full opacity-50"
          />
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="relative"
        >
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
            {/* Animated white gradient overlay */}
            <motion.div
              animate={{
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-white via-white/60 to-transparent z-10 pointer-events-none"
            />

            {/* Floating animated rings around image */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-4 -left-4 w-20 h-20 border-4 border-blue-400/30 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 10,
                delay: 1,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-purple-400/30 rounded-full"
            />

            {/* Main image with continuous animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center space-y-4 relative">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src={heroImage}
                    alt="hero-image"
                    width={600}
                    height={400}
                    className="object-contain w-full h-full drop-shadow-2xl"
                  />
                </motion.div>

                {/* Sparkle effects around image */}
                <motion.div
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-10 right-10 w-2 h-2 bg-yellow-400 rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 right-5 w-1 h-1 bg-pink-400 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
