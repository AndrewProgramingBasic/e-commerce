"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ReturnsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReturnsModal({ isOpen, onClose }: ReturnsModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    orderId: "",
    reason: "",
    description: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        orderId: "",
        reason: "",
        description: "",
      })
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-md border-l-4 border-green-600">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 font-playfair">¡Gracias!</h2>
          <p className="text-gray-700 text-lg font-semibold">Pronto atenderemos su reclamo</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-2xl max-h-96 overflow-y-auto rounded-lg shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg z-10">
          <X size={24} className="text-gray-700" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 font-playfair">Solicitar Devolución</h1>
            <p className="text-gray-600">Completa el formulario con los detalles de tu reclamo</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
                placeholder="tu.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="orderId" className="block text-sm font-semibold text-gray-900 mb-1">
                Número de Pedido
              </label>
              <input
                type="text"
                id="orderId"
                name="orderId"
                value={formData.orderId}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
                placeholder="Ej: STM-2024-001"
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-semibold text-gray-900 mb-1">
                Razón de la Devolución
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
              >
                <option value="">Selecciona una razón</option>
                <option value="defecto">Producto defectuoso</option>
                <option value="no-coincide">No coincide con la descripción</option>
                <option value="dañado">Llegó dañado</option>
                <option value="talla">Talla incorrecta</option>
                <option value="cambio-opinion">Cambié de opinión</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-1">
                Descripción del Problema
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
                placeholder="Cuéntanos qué pasó con tu producto..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg transition-colors text-sm"
            >
              Enviar Solicitud
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
