"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import rwa1 from "@/public/r1.png"
import rwa2 from "@/public/r2.png"
import rwa3 from "@/public/r3.png"
import rwa4 from "@/public/r4.png"
import rwa5 from "@/public/r5.png"
import { motion } from "framer-motion"

export default function RWATokenization() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container md:mx-auto px-1 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 px-2"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold md:font-semi-bold text-black mb-6 leading-tight"
          >
            RWA Tokenization Of
            <br />
            Data Center <span className="text-slate-500">Flow</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-black hover:bg-slate-800 text-white rounded-lg px-8 py-3 text-base font-medium cursor-pointer">
                Explore More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Row 1 - 3 images */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            className="rounded-xl overflow-hidden h-[300px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Image
                src={rwa1}
                alt="Asset Identification"
                width={350}
                height={300}
                className="w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            className="rounded-xl overflow-hidden h-[350px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Image
                src={rwa2}
                alt="Legal Structuring"
                width={330}
                height={350}
                className="w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            className="rounded-xl overflow-hidden h-[350px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Image
                src={rwa3}
                alt="Token Creation"
                width={350}
                height={350}
                className="w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </motion.div>

          {/* Row 2 - 2 images */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            whileHover={{ scale: 1.03, y: -10, transition: { duration: 0.3 } }}
            className="md:col-span-2 rounded-xl overflow-hidden h-[260px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Image
                src={rwa4}
                alt="Compliance"
                width={500}
                height={260}
                className="w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            className="rounded-xl overflow-hidden h-[260px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Image
                src={rwa5}
                alt="Listing & Yield"
                width={500}
                height={260}
                className="w-full h-full transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
