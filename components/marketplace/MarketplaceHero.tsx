"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"


export default function MarketplaceHero() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-10"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="text-4xl md:text-6xl font-bold text-black mb-2"
          >
            Data Center Excellence <span className="text-slate-400">List</span>
          </motion.h1>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            >
              <Search className="h-5 w-5 text-white" />
            </motion.div>
            <Input
              type="text"
              placeholder="Advance search..."
              className="w-full pl-12 pr-4 py-6 bg-black text-white placeholder:text-gray-400 border-0 rounded-full text-base transition-transform hover:scale-[1.02] focus:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-3 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-black text-white hover:bg-slate-800 rounded-full px-6 py-2 text-sm w-full md:w-auto cursor-pointer">
              Location
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-black text-white hover:bg-slate-800 rounded-full px-6 py-2 text-sm w-full md:w-auto cursor-pointer">
              Data Center Types
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-black text-white hover:bg-slate-800 rounded-full px-6 py-2 text-sm w-full md:w-auto cursor-pointer">
              Budget
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button className="bg-black text-white hover:bg-slate-800 rounded-full py-2 w-full md:w-10 h-10 p-0 cursor-pointer">
              +
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
