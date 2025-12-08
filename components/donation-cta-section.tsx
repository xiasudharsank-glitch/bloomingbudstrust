import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles } from "lucide-react"

export function DonationCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Your Small Contribution Can Change Lives
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Every rupee you donate goes directly towards nurturing children, caring for the elderly, and providing meals
            to those in need. Join us in making a lasting impact.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Link href="/donate">
              <Heart className="w-5 h-5 mr-2 fill-current" />
              Donate Now
            </Link>
          </Button>

          {/* Trust Message */}
          <p className="mt-8 text-primary-foreground/70 text-sm">
            100% of your donation reaches those in need. We are a registered charitable trust.
          </p>
        </div>
      </div>
    </section>
  )
}
