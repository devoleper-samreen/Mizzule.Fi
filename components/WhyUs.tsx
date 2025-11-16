"use client"

import Image from "next/image"
import why1 from "@/public/w1.png"
import why2 from "@/public/w2.png"
import why3 from "@/public/w3.png"
import why4 from "@/public/w4.png"
import { motion } from "framer-motion"

export default function WhyUs() {
  const benefits = [
    {
      title: "Proven Industry Expertise",
      description: "Strong domain expertise with over 15 years of industry experience.",
      image: why1,
      alt: "Industry Expertise"
    },
    {
      title: "Efficient Wealth Creation",
      description: "Key advantage over construction builders or generalists resulting in higher leverage, leading to faster execution and quicker implementation.",
      image: why2,
      alt: "Wealth Creation"
    },
    {
      title: "Trusted Financial Backing",
      description: "Higher and faster returns, driven by smart cost management and operational efficiency supported by deep industry expertise.",
      image: why3,
      alt: "Financial Backing"
    },
    {
      title: "Strategic Growth Partners",
      description: "Strategic partnerships with leading industry players.",
      image: why4,
      alt: "Growth Partners"
    }
  ]

  return (
    <section className="bg-slate-50 py-10 md:py-24">
      <div className="container md:mx-auto px-2 md:px-12">
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
            Why <span className="text-slate-500">Us</span>
          </motion.h2>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <motion.div
                  initial={{ scale: 1.3, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                >
                  <Image
                    src={benefit.image}
                    alt={benefit.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                className="p-5"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.4 }}
                  className="text-base font-bold text-black mb-2"
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                  className="text-xs text-slate-600 leading-relaxed"
                >
                  {benefit.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
