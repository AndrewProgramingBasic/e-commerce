"use client"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Catalog from "@/components/catalog"
import { Playfair_Display, Inter } from "next/font/google"
import Image from "next/image"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

interface CatalogRef {
  setCategory: (category: string) => void
}

export default function WomenPage() {
  const catalogRef = useState<CatalogRef | null>(null)[0]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src="/elegant-women-fashion-luxury-collection-style.jpg"
            alt="Women's Fashion Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl text-white mb-4`}>
              Colección Mujeres
            </h1>
            <p className={`${inter.className} text-xl md:text-2xl text-white/90 max-w-2xl px-4`}>
              Descubre el poder de la elegancia y la sofisticación
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-amber-600 font-inter text-sm uppercase tracking-wider mb-2">
                Bienvenida a Nuestro Universo Femenino
              </p>
              <h2 className={`${playfair.className} text-3xl md:text-4xl text-gray-900 mb-4`}>
                Prendas Diseñadas para Ti
              </h2>
              <p className={`${inter.className} text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed`}>
                Desde elegantes vestidos de noche hasta cómodas prendas de día, cada pieza ha sido seleccionada para
                resaltar tu belleza natural y expresar tu personalidad única. Encuentra tu estilo entre nuestra
                exclusiva colección de moda femenina premium.
              </p>
            </div>
          </div>
        </section>

        {/* Catalog with Women Filter Pre-applied */}
        <Catalog preSelectedLine="Mujeres" />
      </main>
      <Footer />
    </>
  )
}
