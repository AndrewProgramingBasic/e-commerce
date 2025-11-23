import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-amber-600 font-inter text-sm uppercase tracking-wider">Manténte Actualizado</p>

        <h2 className="text-4xl md:text-5xl font-playfair font-700 text-white">Suscríbete a Nuestro Newsletter</h2>

        <p className="text-lg text-gray-300 font-inter">
          Recibe las últimas tendencias, colecciones exclusivas y ofertas especiales directamente en tu bandeja de
          entrada.
        </p>

        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="tu@correo.com"
            className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 font-inter placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-inter font-600 transition-smooth flex items-center justify-center space-x-2"
          >
            <span>Suscribir</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-xs text-gray-400 font-inter">
          No te enviaremos spam. Cancelar suscripción en cualquier momento.
        </p>
      </div>
    </section>
  )
}
