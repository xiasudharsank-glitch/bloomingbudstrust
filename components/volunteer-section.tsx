"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Phone, Send, Users, CheckCircle } from "lucide-react"

export function VolunteerSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const phoneNumber = "+91 97895 81147"
  const whatsappNumber = "919789581147"
  const whatsappMessage = "Hello! I want to volunteer with Blooming Buds Trust."

  return (
    <section id="volunteer" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Join Our Team</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Become a Volunteer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Want to help and support our mission? Become a volunteer and make a meaningful difference today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Options */}
            <div className="space-y-6">
              <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6">Get in Touch</h3>

                <div className="space-y-4">
                  {/* Call Button */}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-4 p-4 bg-muted rounded-2xl hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Call Us
                      </div>
                      <div className="text-muted-foreground text-sm">{phoneNumber}</div>
                    </div>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-muted rounded-2xl hover:bg-[#25D366]/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-[#25D366] transition-colors">
                        WhatsApp Us
                      </div>
                      <div className="text-muted-foreground text-sm">Chat with us instantly</div>
                    </div>
                  </a>
                </div>

                {/* Volunteer Benefits */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Why Volunteer With Us?</h4>
                  <ul className="space-y-3">
                    {[
                      "Make a real difference in vulnerable lives",
                      "Join a supportive community of changemakers",
                      "Flexible volunteering hours",
                      "Gain valuable experience and skills",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-muted-foreground">
                        <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Volunteer Form */}
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6">Volunteer Registration</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-xl text-foreground mb-2">Thank You!</h4>
                  <p className="text-muted-foreground">We've received your information and will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email (optional)"
                      className="rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how you'd like to help..."
                      rows={4}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-xl h-12 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
