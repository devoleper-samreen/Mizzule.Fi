"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import whiteLogo from "@/public/white-logo.png"
import { motion } from "framer-motion"

export default function CTABanner() {
  return (
    <section className="container md:mx-auto px-2 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left decorative shape */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-12 top-1/3 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
            ></motion.div>
          </div>

          {/* Right decorative shape */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute right-16 bottom-1/4 w-28 h-28 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-2xl"
            ></motion.div>
          </div>

          {/* Geometric patterns */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute left-20 top-1/4 w-16 h-16 border-2 border-white/10"
          ></motion.div>
          <motion.div
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute right-32 bottom-1/3 w-12 h-12 border-2 border-white/10"
          ></motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-16 px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="flex justify-center mb-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={whiteLogo}
                alt="Mizzle.Fi Logo"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Unlock secure, transparent access to real-world data center investments with MizzleFi's innovative platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-slate-100 px-8 py-6 text-base font-semibold rounded-lg transition-all cursor-pointer"
              >
                Explore More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient overlay */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"
        ></motion.div>
      </motion.div>
    </section>
  )
}
