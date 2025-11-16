import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Montserrat } from 'next/font/google'

// Initialize Montserrat font (similar to Avenir)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'MizzleFi - Fractional Datacenter Ownership',
  description: 'Own, earn, and scale with the world\'s leading infrastructure marketplace. Invest in tokenized data centers with institutional-grade security.',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
