import type React from "react"
import type { Metadata, Viewport } from "next"
import { Nunito, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Blooming Buds Trust - Charity & NGO",
  description:
    "Nurturing young lives, caring for the elderly, and spreading love through food and compassion. Support children welfare, elderly care, and food donation programs.",
  keywords: ["charity", "NGO", "children welfare", "elderly care", "food donation", "volunteer", "donate"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#4a7c59",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
