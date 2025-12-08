import { Baby, Heart, UtensilsCrossed } from "lucide-react"

export function CausesSection() {
  const causes = [
    {
      icon: Baby,
      title: "Child Care & Support",
      description:
        "Focus on education, care, and emotional support for children. We provide educational resources, healthcare, and a nurturing environment for underprivileged children.",
      image: "/happy-children-studying-and-playing-together--educ.jpg",
      color: "bg-primary",
    },
    {
      icon: Heart,
      title: "Elderly Care",
      description:
        "Providing comfort, shelter, and essential support for senior citizens. We ensure our elders live with dignity, receiving the care and companionship they deserve.",
      image: "/elderly-people-being-cared-for--grandparents-smili.jpg",
      color: "bg-accent",
    },
    {
      icon: UtensilsCrossed,
      title: "Food Donation",
      description:
        "Distributing nutritious meals to those in need. No one should go hungry – we work tirelessly to provide food to families, children, and the homeless.",
      image: "/food-donation-volunteers-serving-meals--community-.jpg",
      color: "bg-primary",
    },
  ]

  return (
    <section id="causes" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Our Causes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus on three core areas to make a meaningful impact in our community.
          </p>
        </div>

        {/* Cause Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {causes.map((cause, index) => (
            <div
              key={cause.title}
              className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={cause.image || "/placeholder.svg"}
                  alt={cause.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div
                  className={`absolute top-4 left-4 w-12 h-12 ${cause.color} rounded-full flex items-center justify-center`}
                >
                  <cause.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">{cause.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
