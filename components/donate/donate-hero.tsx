import { Heart, Sparkles } from "lucide-react"

export function DonateHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-primary overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground fill-current" />
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
            Support Blooming Buds Trust
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
            Your contribution helps us feed the hungry, care for the elderly, and nurture children's futures. Every
            donation, big or small, creates a lasting impact.
          </p>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mt-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Registered Charitable Trust</span>
          </div>
        </div>
      </div>
    </section>
  )
}
