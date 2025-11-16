"use client"

import Image from "next/image"
import delhiImage from "../public/delhi.png"
import noidaImage from "../public/noida.png"
import chennaiImage from "../public/chennai.png"
import { motion } from "framer-motion"

export default function LocationCards() {
  const locations = [
    {
      name: "Mumbai",
      count: "40+",
      image: delhiImage, // You'll need to add actual images
      alt: "Gateway of India, Mumbai"
    },
    {
      name: "Noida (Delhi NCR)",
      count: "20+",
      image: noidaImage,
      alt: "Noida cityscape"
    },
    {
      name: "Chennai",
      count: "15+",
      image: chennaiImage,
      alt: "Chennai aerial view"
    }
  ]

  return (
    <section className="container md:mx-auto px-2 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                {/* Placeholder gradient - replace with actual images */}
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                  className={`w-full h-full ${
                    index === 0
                      ? 'bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300'
                      : index === 1
                      ? 'bg-gradient-to-br from-blue-200 via-indigo-200 to-blue-300'
                      : 'bg-gradient-to-br from-orange-300 via-red-200 to-orange-400'
                  }`}>
                  {/* When you have actual images, use this: */}
                  <Image
                    src={location.image}
                    alt={location.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                </motion.div>
              </div>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
              className="p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.4 }}
                    className="text-xl font-bold text-black mb-1"
                  >
                    {location.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                    className="text-sm text-slate-600"
                  >
                    Total DataCenters
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6 + index * 0.15,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                  className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {location.count}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
