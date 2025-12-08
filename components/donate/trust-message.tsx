import { Heart, Shield, Users } from "lucide-react"

export function TrustMessage() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Thank You Message */}
          <div className="bg-accent/20 rounded-3xl p-8 md:p-12 mb-12">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4 fill-current" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Thank You for Your Kindness
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are grateful for your generosity. Your donation directly supports our programs for children, elderly
              care, and food distribution. Together, we can create a lasting impact in many lives.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "100% Secure",
                description: "All donations are processed securely",
              },
              {
                icon: Heart,
                title: "Direct Impact",
                description: "Your funds go directly to those in need",
              },
              {
                icon: Users,
                title: "Transparent",
                description: "We maintain full accountability",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Contact for Queries */}
          <div className="mt-12 p-6 bg-muted rounded-2xl">
            <p className="text-muted-foreground">
              Have questions about your donation?{" "}
              <a href="mailto:info@bloomingbuds.org" className="text-primary font-medium hover:underline">
                Contact us
              </a>{" "}
              or call{" "}
              <a href="tel:+919876543210" className="text-primary font-medium hover:underline">
                +91 97895 81147
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
