import { Heart, Sparkles, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">About Us</span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Who We Are
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
            <span className="font-semibold text-foreground">Blooming Buds Trust</span> is a community-driven initiative
            dedicated to supporting underprivileged children, caring for elderly individuals, and providing food to
            those in need. Our mission is to bring dignity, care, and hope to vulnerable lives.
          </p>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We lead with empathy and kindness in everything we do.",
              },
              {
                icon: Users,
                title: "Community",
                description: "Together, we create a stronger support network for all.",
              },
              {
                icon: Sparkles,
                title: "Hope",
                description: "We believe in a brighter future for every life we touch.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
