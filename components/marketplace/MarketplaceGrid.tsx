"use client"

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import B1 from "@/public/b1.png"
import B2 from "@/public/b2.png"
import B3 from "@/public/b3.png"
import B4 from "@/public/b4.png"
import B5 from "@/public/b5.png"
import B6 from "@/public/b6.png"
import WaitlistModal from "@/components/WaitlistModal"
import ThankYouModal from "@/components/ThankYouModal"
import { motion } from "framer-motion"


export default function MarketplaceGrid() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [isThankYouOpen, setIsThankYouOpen] = useState(false)

  const handleCardClick = () => {
    setIsWaitlistOpen(true)
  }

  const handleWaitlistSubmit = (data: { name: string; phone: string; email: string }) => {
    console.log("Waitlist data:", data)
    setIsWaitlistOpen(false)
    setIsThankYouOpen(true)
  }
  const datacenters = [
    {
      badge: "Open for Investment",
      title: "EDGE NODES - DATA CENTRE",
      description: "Data center infrastructure including rack space, power, cooling, network connectivity",
      image: B1,
      assetsFinanced: "95,34,789",
      apy: "5.8%",
      apyIncrease: "365 Increase from",
      apyValue: "$265.63K",
      assetType: "Edge Infrastructure",
      investorType: "Global Institutional"
    },
    {
      badge: "Open for Investment",
      title: "CLOUD STORAGE - DATA CENTRE",
      description: "Assets Reserved (MUSDC) for data center colocation and services",
      image: B2,
      assetsFinanced: "367,89,904",
      apy: "4.8%",
      apyIncrease: "365 Increase from",
      apyValue: "$475.00K",
      assetType: "Cloud Storage",
      investorType: "Non Us Professional"
    },
    {
      badge: "Open for Investment",
      title: "AI TRAINING - DATA CENTRE",
      description: "Data center infrastructure including rack space, power, cooling, network connectivity",
      image: B3,
      assetsFinanced: "420,56,118",
      apy: "6.1%",
      apyIncrease: "365 Increase from",
      apyValue: "$625.48K",
      assetType: "AI Compute",
      investorType: "Accredited Investors"
    },
    {
      badge: "Open for Investment",
      title: "STORAGE - DATA CENTRE",
      description: "Data center infrastructure including rack space, power, cooling, and connectivity",
      image: B4,
      assetsFinanced: "234,70,789",
      apy: "5%",
      apyIncrease: "365 Increase from",
      apyValue: "$364.98K",
      assetType: "Storage",
      investorType: "Non Us Professional"
    },
    {
      badge: "Open for Investment",
      title: "STORAGE - DATA CENTRE",
      description: "Next-level infrastructure facilities for data center operations",
      image: B5,
      assetsFinanced: "256,98,709",
      apy: "4%",
      apyIncrease: "365 Increase from",
      apyValue: "$475.00K",
      assetType: "Compute",
      investorType: "Institutional Only"
    },
    {
      badge: "Open for Investment",
      title: "GPU POWER - DATA CENTRE",
      description: "Data center infrastructure including rack space, power, cooling, and connectivity",
      image: B6,
      assetsFinanced: "420,56,118",
      apy: "3%",
      apyIncrease: "365 Increase from",
      apyValue: "$795.98K",
      assetType: "Storage",
      investorType: "Non Us Professional"
    }
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {datacenters.map((dc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card
                onClick={handleCardClick}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 mx-auto w-full max-w-md md:max-w-none p-0 gap-0 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-36 md:h-48 w-full bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.3, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    <Image
                      src={dc.image}
                      alt={dc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="p-3 md:p-5"
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, scale: 0 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="inline-block px-2 md:px-3 py-1 bg-black text-white text-xs font-semibold rounded-full mb-2 md:mb-3"
                  >
                    {dc.badge}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="text-sm md:text-base font-bold text-black mb-1 md:mb-2"
                  >
                    {dc.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="text-xs text-slate-600 mb-2 md:mb-4 line-clamp-2"
                  >
                    {dc.description}
                  </motion.p>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    className="space-y-2 md:space-y-2.5 mb-2 md:mb-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">Assets Financed (MUSDC)</span>
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                        className="text-xs md:text-sm font-bold text-black"
                      >
                        {dc.assetsFinanced}
                      </motion.span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                      >
                        <p className="text-xs text-slate-600 mb-0.5">APY</p>
                        <p className="text-xs md:text-sm font-bold text-black">{dc.apy}</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                      >
                        <p className="text-xs text-slate-600 mb-0.5">{dc.apyIncrease}</p>
                        <p className="text-xs md:text-sm font-bold text-black">{dc.apyValue}</p>
                      </motion.div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.0 + index * 0.1, duration: 0.3 }}
                      >
                        <p className="text-xs text-slate-600 mb-0.5">Asset Type:</p>
                        <p className="text-xs font-medium text-black">{dc.assetType}</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.0 + index * 0.1, duration: 0.3 }}
                      >
                        <p className="text-xs text-slate-600 mb-0.5">Investor Type:</p>
                        <p className="text-xs font-medium text-black">{dc.investorType}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        onSubmit={handleWaitlistSubmit}
      />
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
      />
    </section>
  )
}
