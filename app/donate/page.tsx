import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { DonateHero } from "@/components/donate/donate-hero"
import { UpiDonation } from "@/components/donate/upi-donation"
import { BankDetails } from "@/components/donate/bank-details"
import { TrustMessage } from "@/components/donate/trust-message"

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DonateHero />
      <UpiDonation />
      <BankDetails />
      <TrustMessage />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
