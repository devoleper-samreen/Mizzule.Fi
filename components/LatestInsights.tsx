"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import insight1 from "@/public/lt1.png"
import insight2 from "@/public/lt2.png"
import insight3 from "@/public/lt3.png"
import { motion } from "framer-motion"

export default function LatestInsights() {
  const insights = [
    {
      date: "FEB 4, 2025",
      title: "Secure, Compliant Ownership",
      description: "MizzleFi ensures fractional ownership of premium infrastructure assets within trusted regulatory frameworks, delivering peace of mind and transparency.",
      image: insight1,
      alt: "Secure Ownership"
    },
    {
      date: "FEB 4, 2025",
      title: "Democratizing Infrastructure Investment",
      description: "Unlock access to high-value tokenized assets with low minimums, empowering diverse investors to build diversified, high-growth portfolios.",
      image: insight2,
      alt: "Infrastructure Investment",
      featured: true
    },
    {
      date: "FEB 4, 2025",
      title: "Institutional-Grade Marketplace",
      description: "Building a robust platform with advanced custody, trading, and auditing standards aligned with industry regulations for institutional confidence.",
      image: insight3,
      alt: "Institutional Marketplace"
    }
  ]

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container md:mx-auto px-4 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black"
          >
            Latest <span className="text-slate-500">Insights</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                className="text-black hover:text-slate-700 font-medium flex items-center gap-2 text-sm md:text-base cursor-pointer"
              >
                Explore More
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </motion.svg>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Insights Grid - 30% + 40% + 30% */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          {/* Left Card - 30% */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            className="md:col-span-3 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
              <motion.div
                initial={{ scale: 1.3, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Image
                  src={insights[0].image}
                  alt={insights[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-5 flex-grow"
            >
              <p className="text-xs text-slate-500 mb-2 font-medium">
                {insights[0].date}
              </p>
              <h3 className="text-base font-bold text-black mb-2">
                {insights[0].title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {insights[0].description}
              </p>
            </motion.div>
          </motion.div>

          {/* Middle - Just Image - 40% */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            className="md:col-span-4 rounded-2xl overflow-hidden h-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <Image
                src={insights[1].image}
                alt={insights[1].alt}
                width={500}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>

          {/* Right Card - 30% */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            className="md:col-span-3 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
              <motion.div
                initial={{ scale: 1.3, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Image
                  src={insights[2].image}
                  alt={insights[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-5 flex-grow"
            >
              <p className="text-xs text-slate-500 mb-2 font-medium">
                {insights[2].date}
              </p>
              <h3 className="text-base font-bold text-black mb-2">
                {insights[2].title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {insights[2].description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
