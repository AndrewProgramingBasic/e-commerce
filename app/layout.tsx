import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "StephanModa - Moda Premium",
  description: "Descubre nuestras colecciones exclusivas de moda de lujo",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      style={
        {
          "--font-playfair": playfair.style.fontFamily,
          "--font-inter": inter.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  )
}
