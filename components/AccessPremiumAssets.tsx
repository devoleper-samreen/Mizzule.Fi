"use client"

import Image from "next/image"
import asset1 from "@/public/ap1.png"
import asset2 from "@/public/ap2.png"
import asset3 from "@/public/ap3.png"
import asset4 from "@/public/ap4.png"
import { motion } from "framer-motion"

export default function AccessPremiumAssets() {
  const assets = [
    {
      title: "Fractional Ownership Opportunities",
      description: "Own a fraction of high-performance GPUs, data centers, and servers from leading vendors.",
      image: asset1,
      alt: "Fractional Ownership"
    },
    {
      title: "Secure & Compliant Assets",
      description: "Every asset is rigorously monitored and secured with full regulatory compliance backed by Fortress Trust.",
      image: asset2,
      alt: "Secure Assets"
    },
    {
      title: "Low Minimum Investment Entry",
      description: "Break into the tokenised real world asset market with low minimum investments and build a diversified portfolio.",
      image: asset3,
      alt: "Low Investment"
    },
    {
      title: "Curated Tokenized Ecosystem",
      description: "Access a curated ecosystem of premium tokenized assets and unique investment opportunities.",
      image: asset4,
      alt: "Tokenized Ecosystem"
    }
  ]

  return (
    <section className="bg-white py-16">
      <div className="container md:mx-auto px-2 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="text-4xl md:text-5xl font-bold text-black"
          >
            Access Premium <span className="text-slate-500">Assets</span>
          </motion.h2>
        </motion.div>

        {/* Asset Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {assets.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <motion.div
                  initial={{ scale: 1.3, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                >
                  <Image
                    src={asset.image}
                    alt={asset.alt}
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
                  {asset.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                  className="text-xs text-slate-600 leading-relaxed"
                >
                  {asset.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
