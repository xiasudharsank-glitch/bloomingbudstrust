import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CausesSection } from "@/components/causes-section"
import { GallerySection } from "@/components/gallery-section"
import { DonationCtaSection } from "@/components/donation-cta-section"
import { VolunteerSection } from "@/components/volunteer-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CausesSection />
      <GallerySection />
      <DonationCtaSection />
      <VolunteerSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
