"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, User, Menu, X } from "lucide-react"
import logo from "@/public/logo.png"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Mizzle.Fi Logo"
                width={100}
                height={40}
                className="h-6 md:h-10 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-normal text-black hover:text-slate-600 transition-colors">
                Home
              </Link>
              <Link href="/marketplace" className="text-sm font-normal text-black hover:text-slate-600 transition-colors">
                Marketplace
              </Link>
              <a href="http://mizzle.fi" target="_blank" rel="noopener noreferrer" className="text-sm font-normal text-black hover:text-slate-600 transition-colors">
                Docs
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center gap-2 pl-4 pr-6 py-2 bg-black text-white text-xs rounded-full hover:bg-slate-800 transition-colors min-w-[140px]">
              <Search className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
              <span className="text-white">search</span>
            </button>
            <button className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer">
              <User className="h-4 w-4 text-white" strokeWidth={2} />
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden h-8 w-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <nav className="flex flex-col gap-4 items-center">
              <Link
                href="/"
                className="text-sm font-normal text-black hover:text-slate-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/marketplace"
                className="text-sm font-normal text-black hover:text-slate-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <a
                href="http://mizzle.fi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal text-black hover:text-slate-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white text-xs rounded-full hover:bg-slate-800 transition-colors w-full">
                <Search className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                <span className="text-white">search</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
