"use client"

import Link from "next/link"
import Image from "next/image"
import whiteLogo from "@/public/white-logo.png"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white relative rounded-t-[2.5rem] mt-20">
      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Section - Logo & Tagline */}
          <div className="flex-shrink-0">
            <Link href="/" className="mb-4 block">
              <Image
                src={whiteLogo}
                alt="Mizzle.Fi Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Turning DataCenters into Investable Assets.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="h-9 w-9 rounded-lg bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </Link>
              <Link href="#" className="h-9 w-9 rounded-lg bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.943.11.78.89z"/>
                </svg>
              </Link>
              <Link href="#" className="h-9 w-9 rounded-lg bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="#" className="h-9 w-9 rounded-lg bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Section - Navigation & Docs together */}
          <div className="flex gap-16">
            {/* Navigation */}
            <div>
              <Link href="/" className="block text-white font-medium mb-4 hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/contact" className="block text-white font-medium mb-4 hover:text-gray-300 transition-colors">
                Contact Us
              </Link>
              <Link href="/partner" className="block text-white font-medium hover:text-gray-300 transition-colors">
                Become a Partner
              </Link>
            </div>

            {/* Docs */}
            <div>
              <h3 className="text-white font-medium mb-4">Docs</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://mizzlefi.gitbook.io/mizzlefi-docs" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors">
                    White Paper
                  </a>
                </li>
                <li>
                  <Link href="/tokenomics" className="text-gray-400 text-sm hover:text-white transition-colors">
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <Link href="/lightpaper" className="text-gray-400 text-sm hover:text-white transition-colors">
                    Light Paper
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
