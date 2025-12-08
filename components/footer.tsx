import Link from "next/link"
import { Heart, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="font-serif text-xl font-bold">Blooming Buds Trust</span>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md">
              A community-driven initiative dedicated to supporting underprivileged children, caring for elderly
              individuals, and providing food to those in need.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <img
                    src={`/.jpg?height=20&width=20&query=${social} icon simple white`}
                    alt={social}
                    className="w-5 h-5 opacity-80"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/donate", label: "Donate" },
                { href: "/#about", label: "About Us" },
                { href: "/#causes", label: "Our Causes" },
                { href: "/#volunteer", label: "Volunteer" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919876543210" className="text-background/70 hover:text-primary transition-colors">
                    +91 97895 81147
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:info@bloomingbuds.org"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    info@bloomingbuds.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/70">
                  India, Tamil Nadu
                  <br />
                  India
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Blooming Buds Trust. All rights reserved. Made with{" "}
            <Heart className="w-4 h-4 inline text-primary fill-current" /> for a better world.
          </p>
        </div>
      </div>
    </footer>
  )
}
