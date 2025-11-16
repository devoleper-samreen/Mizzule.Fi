"use client"

import Image from "next/image"
import logo1 from "@/public/l1.png"
import logo2 from "@/public/l2.png"
import logo3 from "@/public/l3.png"
import logo4 from "@/public/l4.png"
import logo5 from "@/public/l5.png"
import logo6 from "@/public/l6.png"
import logo7 from "@/public/l7.png"
import logo8 from "@/public/l8.png"
import logo9 from "@/public/l9.png"
import logo10 from "@/public/l10.png"
import logo11 from "@/public/l11.png"
import logo12 from "@/public/l12.png"
import logo13 from "@/public/l13.png"
import logo14 from "@/public/l14.png"
import logo15 from "@/public/l15.png"
import logo16 from "@/public/l16.png"
import logo17 from "@/public/l17.png"
import logo18 from "@/public/l18.png"
import logo19 from "@/public/l19.png"
import logo20 from "@/public/l20.png"
import logo21 from "@/public/l21.png"
import logo22 from "@/public/l22.png"
import { motion } from "framer-motion"


export default function TrustedPartners() {
  // Row 1 partners - 11 logos
  const partnersRow1 = [
    { name: "Partner 1", image: logo1 },
    { name: "Partner 2", image: logo2 },
    { name: "Partner 3", image: logo3 },
    { name: "Partner 4", image: logo4 },
    { name: "Partner 5", image: logo5 },
    { name: "Partner 6", image: logo6 },
    { name: "Partner 7", image: logo7 },
    { name: "Partner 8", image: logo8 },
    { name: "Partner 9", image: logo9 },
    { name: "Partner 10", image: logo10 },
    { name: "Partner 11", image: logo11 },
  ]

  // Row 2 partners - 11 logos
  const partnersRow2 = [
    { name: "Partner 12", image: logo12 },
    { name: "Partner 13", image: logo13 },
    { name: "Partner 14", image: logo14 },
    { name: "Partner 15", image: logo15 },
    { name: "Partner 16", image: logo16 },
    { name: "Partner 17", image: logo17 },
    { name: "Partner 18", image: logo18 },
    { name: "Partner 19", image: logo19 },
    { name: "Partner 20", image: logo20 },
    { name: "Partner 21", image: logo21 },
    { name: "Partner 22", image: logo22 },
  ]

  // Duplicate for seamless loop
  const allPartnersRow1 = [...partnersRow1, ...partnersRow1, ...partnersRow1]
  const allPartnersRow2 = [...partnersRow2, ...partnersRow2, ...partnersRow2]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container md:mx-auto px-2 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="text-4xl md:text-5xl font-bold text-black"
          >
            Trusted <span className="text-slate-500">Partners</span>
          </motion.h2>
        </motion.div>

        {/* Two Rows of Animated Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6"
        >
          {/* Row 1 - Scroll Left to Right */}
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="overflow-hidden">
              <div className="flex gap-6 animate-scroll-right">
                {allPartnersRow1.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex-shrink-0 bg-white border border-slate-200 rounded-2xl px-4 py-3 hover:shadow-lg transition-shadow duration-300 min-w-[120px] h-16 flex items-center justify-center"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={60}
                      height={30}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - Scroll Right to Left */}
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="overflow-hidden">
              <div className="flex gap-6 animate-scroll-left">
                {allPartnersRow2.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex-shrink-0 bg-white border border-slate-200 rounded-2xl px-4 py-3 hover:shadow-lg transition-shadow duration-300 min-w-[120px] h-16 flex items-center justify-center"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={60}
                      height={30}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
          width: fit-content;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          width: fit-content;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
