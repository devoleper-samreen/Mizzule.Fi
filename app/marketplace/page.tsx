import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import MarketplaceHero from "@/components/marketplace/MarketplaceHero"
import MarketplaceGrid from "@/components/marketplace/MarketplaceGrid"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <MarketplaceHero />

      {/* Marketplace Grid */}
      <MarketplaceGrid />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
