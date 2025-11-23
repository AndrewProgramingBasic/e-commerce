"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"
import ContactModal from "./contact-modal"
import ReturnsModal from "./returns-modal"

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false)
  const [returnsOpen, setReturnsOpen] = useState(false)

  return (
    <>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-700 text-gray-900">
                Stephan<span className="text-amber-600">Moda</span>
              </h3>
              <p className="text-gray-600 font-inter text-sm">
                Moda premium para quienes aprecian la calidad y el estilo atemporal.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-playfair font-600 text-gray-900 mb-4">Tienda</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-600 font-inter text-sm transition-smooth">
                    Colecciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/women"
                    className="text-gray-600 hover:text-amber-600 font-inter text-sm transition-smooth"
                  >
                    Mujeres
                  </Link>
                </li>
                <li>
                  <Link href="/men" className="text-gray-600 hover:text-amber-600 font-inter text-sm transition-smooth">
                    Hombres
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-600 font-inter text-sm transition-smooth">
                    Accesorios
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-playfair font-600 text-gray-900 mb-4">Servicio</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setContactOpen(true)}
                    className="text-gray-600 hover:text-amber-600 font-inter text-sm transition-smooth text-left"
                  >
                    Contacto
                  </button>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-amber-600 font-inter text-sm transition-smooth">
                    Envíos
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setReturnsOpen(true)}
                    className="text-gray-600 hover:text-amber-600 font-inter text-sm transition-smooth text-left"
                  >
                    Devoluciones
                  </button>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-amber-600 font-inter text-sm transition-smooth">
                    Preguntas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-playfair font-600 text-gray-900 mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href={process.env.NEXT_PUBLIC_FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-smooth"
                >
                  <Facebook size={20} className="text-gray-700" />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 rounded-lg transition-smooth"
                >
                  <Instagram size={20} className="text-gray-700" />
                </a>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_WHATSAPP}`}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-smooth"
                >
                  <Mail size={20} className="text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 font-inter">© 2025 StephanModa. Todos los derechos reservados.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-sm text-gray-600 hover:text-amber-600 font-inter transition-smooth">
                  Privacidad
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-amber-600 font-inter transition-smooth">
                  Términos
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-amber-600 font-inter transition-smooth">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <ReturnsModal isOpen={returnsOpen} onClose={() => setReturnsOpen(false)} />
    </>
  )
}
