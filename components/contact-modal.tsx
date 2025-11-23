"use client"

import { X, Mail, Phone, MapPin, Clock } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-2xl max-h-96 overflow-y-auto rounded-lg shadow-2xl relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg z-10">
          <X size={24} className="text-gray-700" />
        </button>

        <div className="p-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 font-playfair">Contáctanos</h1>
            <p className="text-gray-600">Estamos aquí para ayudarte</p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Email */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">contacto@StephanModa.com</p>
                  <p className="text-gray-600 text-sm">info@StephanModa.com</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                  <p className="text-gray-600 text-sm">+57 (1) 2345-6789</p>
                  <p className="text-gray-600 text-sm">+57 300-123-4567</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                  <p className="text-gray-600 text-sm">Carrera 15 # 87-45</p>
                  <p className="text-gray-600 text-sm">Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horarios</h3>
                  <p className="text-gray-600 text-sm">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 text-sm">Sábado: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-amber-100/50 p-6 rounded-lg text-center">
            <p className="text-gray-700 text-sm">
              Somos una marca de moda moderna que busca ofrecerte prendas de calidad y estilo. Nuestro equipo está
              disponible para resolver tus dudas y proporcionar la mejor atención al cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
