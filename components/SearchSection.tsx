"use client"

import { Search, MapPin, ChevronDown, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function SearchSection() {
  return (
    <div className="container md:mx-auto px-1 md:px-6 py-12">
      {/* Advanced Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl shadow-lg p-4 md:p-8"
      >
        <div className="max-w-4xl md:mx-auto space-y-6">
          {/* Advanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-5 top-1/2 -translate-y-1/2"
            >
              <Search className="h-5 w-5 text-white" />
            </motion.div>
            <Input
              placeholder="Advance search..."
              className="pl-14 py-7 bg-black text-white border-black rounded-xl text-base placeholder:text-slate-400 transition-transform hover:scale-[1.02] focus:scale-[1.02]"
            />
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-4 md:items-center md:justify-center">
            {/* Location Filter */}
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-black text-white rounded-xl hover:bg-slate-800 transition-colors w-full md:w-auto"
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Location</span>
              <motion.div
                animate={{ rotate: [0, 180, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.button>

            {/* DataCenter Types Filter */}
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-black text-white rounded-xl hover:bg-slate-800 transition-colors w-full md:w-auto"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-sm font-medium">DataCenter Types</span>
              <motion.div
                animate={{ rotate: [0, 180, 0] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.button>

            {/* Budget Filter */}
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-black text-white rounded-xl hover:bg-slate-800 transition-colors w-full md:w-auto"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Budget</span>
              <motion.div
                animate={{ rotate: [0, 180, 0] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.button>

            {/* More Filters Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center p-3 bg-black text-white rounded-xl hover:bg-slate-800 transition-colors w-full md:w-auto"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
