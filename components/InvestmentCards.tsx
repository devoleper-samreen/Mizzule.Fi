"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import B1 from "@/public/b1.png"
import B2 from "@/public/b2.png"
import B3 from "@/public/b3.png"

export default function InvestmentCards() {
  const investments = [
    {
      title: "EDGE NODES - DATA CENTRE",
      description: "data center infrastructure including rack space, power, cooling, network connectivity",
      image: B1,
      assetsFinanced: "95,34,789",
      apy: "5.8%",
      minInvestment: "$210,50K",
      assetType: "Edge Infrastructure",
      investorType: "Global Institutional"
    },
    {
      title: "CLOUD STORAGE - DATA CENTRE",
      description: "data center infrastructure including rack space, power, cooling, network connectivity",
      image: B2,
      assetsFinanced: "367,89,904",
      apy: "4.5%",
      minInvestment: "$470,00K",
      assetType: "Cloud Storage",
      investorType: "Non Us Professional"
    },
    {
      title: "AI TRAINING - DATA CENTRE",
      description: "data center infrastructure including rack space, power, cooling, network connectivity",
      image: B3,
      assetsFinanced: "420,56,118",
      apy: "8.1%",
      minInvestment: "$625,40K",
      assetType: "AI Compute",
      investorType: "Accredited Investors"
    }
  ]

  return (
    <section className="py-16">
      <div className="container md:mx-auto px-2 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semi-bold text-black mb-8 leading-tight">
            Own Your
            <br />
            DataCenter Now
          </h2>
          <Link href="/marketplace">
            <Button
              size="lg"
              className="bg-black hover:bg-slate-800 text-white px-8 py-6 text-base font-medium rounded-lg cursor-pointer"
            >
              Explore More
            </Button>
          </Link>
        </div>

        {/* Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {investments.map((investment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-32 md:h-44 w-full overflow-hidden">
              <div className={`w-full h-full ${
                index === 0
                  ? 'bg-gradient-to-br from-blue-200 via-sky-300 to-blue-400'
                  : index === 1
                  ? 'bg-gradient-to-br from-slate-300 via-gray-400 to-slate-500'
                  : 'bg-gradient-to-br from-teal-300 via-cyan-400 to-teal-500'
              }`}>
              <Image
                src={investment.image}
                alt={investment.title}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-300"
              />
                {/* Replace with actual images when available */}
              </div>
            </div>

            {/* Content */}
            <div className="p-3 md:p-5">
              {/* Badge */}
              <div className="inline-block px-2.5 py-0.5 bg-black text-white text-xs font-semibold rounded-full mb-2">
                Open for investment
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-bold text-black mb-1 md:mb-2">
                {investment.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-600 mb-2 md:mb-4 line-clamp-2">
                {investment.description}
              </p>

              {/* Stats Grid */}
              <div className="space-y-2 md:space-y-2.5 mb-2 md:mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-600">Assets Financed (MUSDC)</span>
                  <span className="text-xs md:text-sm font-bold text-black">{investment.assetsFinanced}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">APY</p>
                    <p className="text-xs md:text-sm font-bold text-black">{investment.apy}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Min Investment</p>
                    <p className="text-xs md:text-sm font-bold text-black">{investment.minInvestment}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Asset Type:</p>
                    <p className="text-xs font-medium text-black">{investment.assetType}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Investor Type:</p>
                    <p className="text-xs font-medium text-black">{investment.investorType}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  )
}
