"use client"

import { Button } from "@/components/ui/button"
import heroImage from ".././public/hero.png"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 md:px-10 py-8 md:py-10">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6 text-center md:text-left"
        >
          <h1 className="text-[34px] md:text-4xl lg:text-6xl font-bold md:font-semi-bold text-black leading-tight">
            Fractional Ownership <br /> of DataCenters <br /> Starts Here
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto md:mx-0">
            Own, Earn, and Scale with the world's leading infrastructure marketplace.
          </p>
          <div>
            <Button
              size="lg"
              className="bg-black hover:bg-slate-800 text-white px-8 md:px-10 py-5 md:py-6 text-sm md:text-base rounded-lg font-medium w-full md:w-auto cursor-pointer"
            >
              Explore More
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
            {/* White gradient overlay on right side */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-white via-white/60 to-transparent z-10 pointer-events-none"></div>

            {/* Placeholder for datacenter illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                {/* SVG Illustration Placeholder */}
                <Image src={heroImage} alt="hero-image" width={600} height={400} className="object-contain w-full h-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
