import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-amber-600 font-inter text-sm uppercase tracking-wider">Colección 2025</p>
            <h1 className="text-5xl md:text-6xl font-playfair font-700 leading-tight text-gray-900">
              Elegancia <br />
              sin <span className="text-amber-600">Límites</span>
            </h1>
          </div>

          <p className="text-lg text-gray-600 font-inter leading-relaxed max-w-md">
            Descubre nuestra nueva colección de moda premium, diseñada para quienes aprecian la calidad y el estilo
            atemporal.
          </p>

          <Link
            href="/#catalog"
            className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-inter font-500 transition-smooth"
          >
            <span>Explorar Catálogo</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right image */}
        <div className="relative h-96 md:h-full min-h-96 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/fashion-model-elegant-clothing.jpg"
            alt="Colección Principal"
            className="w-full h-full object-cover hover:scale-105 transition-smooth duration-500"
          />
        </div>
      </div>
    </section>
  )
}
