"use client"

import Link from "next/link"
import { Heart, MessageCircle, Phone } from "lucide-react"

export function FloatingButtons() {
  const phoneNumber = "+919876543210"
  const whatsappNumber = "919876543210"
  const whatsappMessage = "Hello! I want to know more about Blooming Buds Trust."

  return (
    <>
      {/* Floating Donate Button */}
      <Link
        href="/donate"
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 bg-primary text-primary-foreground rounded-full px-4 py-3 md:px-6 md:py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 font-semibold"
      >
        <Heart className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Donate Now</span>
      </Link>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-44 z-40 bg-[#25D366] text-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

      {/* Call Button - Mobile Only */}
      <a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-4 left-4 md:hidden z-40 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  )
}
