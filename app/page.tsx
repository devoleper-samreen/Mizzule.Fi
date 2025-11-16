"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, MapPin, TrendingUp, Shield, Layers, Zap, Clock, Award } from 'lucide-react'
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import SearchSection from "@/components/SearchSection"
import LocationCards from "@/components/LocationCards"
import CTABanner from "@/components/CTABanner"
import InvestmentCards from "@/components/InvestmentCards"
import TrustedPartners from "@/components/TrustedPartners"
import AccessPremiumAssets from "@/components/AccessPremiumAssets"
import LatestInsights from "@/components/LatestInsights"
import WhyUs from "@/components/WhyUs"
import RWATokenization from "@/components/RWATokenization"
import ScrollToTop from "@/components/ScrollToTop"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [mounted, setMounted] = useState(false)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  })
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayValue, setDisplayValue] = useState(prefix + "0" + suffix)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isInView && mounted) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value, mounted])

  useEffect(() => {
    if (!mounted) return

    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(prefix + Intl.NumberFormat("en-US").format(Number(latest.toFixed(0))) + suffix)
    })

    return () => unsubscribe()
  }, [springValue, prefix, suffix, mounted])

  return <span ref={ref}>{displayValue}</span>
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Search & Discovery Section */}
      <SearchSection />

      {/* Location Cards Section */}
      <LocationCards />

      {/* CTA Banner */}
      <CTABanner />

      {/* Investment Cards */}
      <InvestmentCards />

      {/* Trusted Partners */}
      <TrustedPartners />

      {/* Access Premium Assets */}
      <AccessPremiumAssets />

      {/* Key Metrics Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Metric 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-6 md:p-12 text-center group"
            >
              {/* Dotted borders on top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-px border-t-2 border-dotted border-slate-300"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px border-b-2 border-dotted border-slate-300"></div>

              {/* Right border separator - hidden on mobile */}
              <div className="hidden md:block absolute top-0 bottom-0 right-0 w-px bg-slate-300"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
              >
                <span className="text-slate-700">$</span>
                <span className="text-black"><AnimatedCounter value={2.3} suffix="B" /></span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="text-slate-600 text-sm md:text-base"
              >
                Total Value Locked
              </motion.div>
            </motion.div>

            {/* Metric 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-6 md:p-12 text-center group"
            >
              {/* Dotted borders on top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-px border-t-2 border-dotted border-slate-300"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px border-b-2 border-dotted border-slate-300"></div>

              {/* Right border separator - hidden on mobile */}
              <div className="hidden md:block absolute top-0 bottom-0 right-0 w-px bg-slate-300"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
              >
                <span className="text-black"><AnimatedCounter value={12450} /></span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-slate-600 text-sm md:text-base"
              >
                Active Compute Assets
              </motion.div>
            </motion.div>

            {/* Metric 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-6 md:p-12 text-center group"
            >
              {/* Dotted borders on top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-px border-t-2 border-dotted border-slate-300"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px border-b-2 border-dotted border-slate-300"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
              >
                <span className="text-black"><AnimatedCounter value={350} suffix="M" /></span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="text-slate-600 text-sm md:text-base"
              >
                Verified Data Centers
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <LatestInsights />

      {/* Why Us */}
      <WhyUs />

      {/* RWA Tokenization */}
      <RWATokenization />

      {/* Newsletter Section */}
      <section className="container md:mx-auto px-4 md:px-12 py-4 md:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-black via-slate-900 to-black rounded-3xl overflow-hidden p-6 md:p-16 min-h-[300px] md:min-h-[350px] flex items-center justify-center"
        >
          {/* Decorative glow effect */}
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
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-white/20 blur-3xl"
          ></motion.div>

          {/* Decorative lines in background */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-px bg-white"
            ></motion.div>
            <motion.div
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-64 bg-white"
            ></motion.div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center w-full">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-white"
              >
                Subscribe
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="text-slate-400"
              >
                to
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-slate-400"
              >
                our
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="text-white"
              >
                Newsletter!
              </motion.span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
              className="flex flex-col md:flex-row gap-3 md:gap-0 max-w-xl mx-auto bg-white rounded-2xl md:rounded-full p-3 md:p-1.5"
            >
              <div className="flex-1 flex items-center pl-4 bg-white rounded-xl md:rounded-none">
                <motion.svg
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-400 mr-2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </motion.svg>
                <Input
                  type="email"
                  placeholder="Your Mail Id"
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-slate-900 placeholder:text-slate-400 py-3 md:py-0"
                />
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-black hover:bg-slate-800 text-white rounded-full px-8 py-3 md:py-2 w-full md:w-auto cursor-pointer">
                  Send
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
