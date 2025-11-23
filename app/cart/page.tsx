"use client"

import type React from "react"

import { useCartStore } from "@/lib/cart-store"
import Link from "next/link"
import { Trash2, ArrowLeft } from "lucide-react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "mobile-payment",
  })
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const total = getTotal()

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    if (items.length === 0) return

    console.log("[v0] Processing order:", formData)
    setOrderConfirmed(true)
    clearCart()
  }

  if (orderConfirmed) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-playfair font-700">¡Compra realizada exitosamente!</h1>
              <p className="text-lg text-gray-600 font-inter">Dentro de poco lo contactaremos para enviar su pedido.</p>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 mt-8">
                <div>
                  <p className="text-sm text-gray-600">Nombre:</p>
                  <p className="font-inter font-600">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email:</p>
                  <p className="font-inter font-600">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Teléfono:</p>
                  <p className="font-inter font-600">{formData.phone}</p>
                </div>
              </div>
              <Link
                href="/"
                className="inline-block mt-8 px-8 py-3 bg-amber-600 text-white font-inter font-600 rounded-lg hover:bg-amber-700 transition-smooth"
              >
                Volver a la tienda
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 mb-8">
            <ArrowLeft size={20} />
            <span className="font-inter">Volver</span>
          </Link>

          <h1 className="text-4xl font-playfair font-700 mb-8">Tu Carrito</h1>

          {items.length === 0 && !isCheckoutOpen ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 font-inter mb-6">Tu carrito está vacío</p>
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-amber-600 text-white font-inter rounded-lg hover:bg-amber-700"
              >
                Continuar comprando
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 border border-gray-200 rounded-lg p-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-playfair font-600 text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600 font-inter">
                          {item.color} {item.size && `- Talla ${item.size}`}
                        </p>
                        <p className="font-playfair font-700 text-lg mt-2">${item.price}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-100 rounded transition-smooth text-red-600"
                        >
                          <Trash2 size={20} />
                        </button>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 font-inter">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary & Checkout */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-gray-50 rounded-lg p-6 space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-700 font-inter">
                      <span>Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700 font-inter">
                      <span>Envío</span>
                      <span className="text-green-600">Gratis</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between font-playfair font-700 text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {!isCheckoutOpen ? (
                    <button
                      onClick={() => setIsCheckoutOpen(true)}
                      disabled={items.length === 0}
                      className="w-full py-3 bg-amber-600 text-white font-inter font-600 rounded-lg hover:bg-amber-700 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Proceder al Pago
                    </button>
                  ) : (
                    <form onSubmit={handleCheckout} className="space-y-4">
                      <div>
                        <label className="block text-sm font-inter font-600 mb-1">Nombre</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-inter text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-600 mb-1">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-inter text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-600 mb-1">Teléfono</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-inter text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-600 mb-1">Dirección</label>
                        <input
                          type="text"
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-inter text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-600 mb-1">Ciudad</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-inter text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-600 mb-1">Código Postal</label>
                        <input
                          type="text"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-inter text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-600 mb-1">Método de Pago</label>
                        <select
                          value={formData.paymentMethod}
                          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg font-inter text-sm"
                        >
                          <option value="mobile-payment">Pago Móvil</option>
                          <option value="transfer">Transferencia Bancaria</option>
                          <option value="cash-usd">Efectivo USD</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2 bg-green-600 text-white font-inter font-600 rounded-lg hover:bg-green-700 transition-smooth"
                      >
                        Completar Compra
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsCheckoutOpen(false)}
                        className="w-full py-2 border border-gray-300 text-gray-700 font-inter font-600 rounded-lg hover:bg-gray-100 transition-smooth"
                      >
                        Cancelar
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
