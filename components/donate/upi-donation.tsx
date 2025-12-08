"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Copy, QrCode, Smartphone } from "lucide-react"

export function UpiDonation() {
  const [copied, setCopied] = useState(false)
  const upiId = "bloomingbuds@upi"

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Instant UPI Donation</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Donate via UPI
            </h2>
            <p className="text-muted-foreground">Quick, secure, and instant – donate using any UPI app.</p>
          </div>

          {/* QR Code Card */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-lg border border-border">
            <div className="flex flex-col items-center">
              {/* QR Code Placeholder */}
              <div className="w-56 h-56 md:w-64 md:h-64 bg-white rounded-2xl p-4 shadow-inner mb-6 flex items-center justify-center border-2 border-dashed border-primary/30">
                <div className="text-center">
                  <QrCode className="w-32 h-32 md:w-40 md:h-40 text-primary mx-auto" />
                  <p className="text-xs text-muted-foreground mt-2">QR Code Placeholder</p>
                </div>
              </div>

              {/* Instructions */}
              <p className="text-center text-foreground font-medium mb-4">
                Scan the QR code or use the UPI ID below to donate instantly
              </p>

              {/* UPI ID */}
              <div className="w-full bg-muted rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">UPI ID</div>
                    <div className="font-semibold text-foreground">{upiId}</div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  className="rounded-lg flex-shrink-0 bg-transparent"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1 text-primary" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              {/* Accepted Apps */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">Works with all UPI apps</p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  {["Google Pay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                    <div
                      key={app}
                      className="px-3 py-1.5 bg-muted rounded-lg text-xs font-medium text-muted-foreground"
                    >
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              {/* Encouragement */}
              <div className="mt-6 p-4 bg-accent/30 rounded-xl text-center">
                <p className="text-sm text-accent-foreground">
                  ✨ Every contribution, big or small, brings hope and happiness to those in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
