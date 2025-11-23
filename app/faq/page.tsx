"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cuáles son los costos de envío?",
      answer:
        "Ofrecemos envío gratis en compras mayores a $150.000. Para compras menores, el costo varía según la ubicación. Consultamos costos de envío en tiempo real en el checkout.",
    },
    {
      question: "¿Cuál es el tiempo de entrega?",
      answer:
        "Los pedidos se entregan en 3-5 días hábiles en Bogotá y 5-7 días hábiles en el resto del país. Los pedidos especiales pueden tomar hasta 10 días hábiles.",
    },
    {
      question: "¿Cómo puedo realizar mi compra?",
      answer:
        "Puedes comprar directamente desde nuestra tienda online. Selecciona los productos, agrega al carrito y procede al checkout. Aceptamos tarjetas de crédito, débito y transferencia bancaria.",
    },
    {
      question: "¿Cuál es tu política de devoluciones?",
      answer:
        "Aceptamos devoluciones dentro de 14 días después de recibir tu compra. Los productos deben estar en perfecto estado y sin usar. Usa nuestra sección de devoluciones para reportar cualquier inconveniente.",
    },
    {
      question: "¿Puedo cambiar mi pedido después de realizarlo?",
      answer:
        "Si el pedido aún no ha sido enviado, puedes contactarnos para hacer cambios. Una vez enviado, no es posible modificarlo, pero puedes devolverlo una vez recibido.",
    },
    {
      question: "¿Ofrecen descuentos o promociones?",
      answer:
        "Sí, regularmente ofrecemos descuentos en colecciones específicas. Suscríbete a nuestro newsletter para recibir las últimas promociones y ofertas exclusivas.",
    },
    {
      question: "¿Cómo puedo rastrear mi pedido?",
      answer:
        "Una vez que tu pedido sea enviado, recibirás un email con el número de rastreo. Puedes usar este número para seguir el estado de tu envío con la empresa de mensajería.",
    },
    {
      question: "¿Realizan envíos internacionales?",
      answer:
        "Actualmente realizamos envíos solo dentro de Colombia. Estamos evaluando opciones para expandir nuestros servicios de envío internacionales próximamente.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 font-playfair">Preguntas Frecuentes</h1>
            <p className="text-xl text-gray-600">Resolvemos tus dudas sobre nuestros productos y servicios</p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-amber-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
