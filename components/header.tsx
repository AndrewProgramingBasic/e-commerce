"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Heart, Search } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const items = useCartStore((state) => state.items)
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-playfair font-700 text-gray-900">
              Stephan<span className="text-amber-600">Moda</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#catalog" className="text-sm font-inter text-gray-700 hover:text-amber-600 transition-smooth">
              Catálogo
            </Link>
            <Link href="/women" className="text-sm font-inter text-gray-700 hover:text-amber-600 transition-smooth">
              Mujeres
            </Link>
            <Link href="/men" className="text-sm font-inter text-gray-700 hover:text-amber-600 transition-smooth">
              Hombres
            </Link>
            <Link href="/about" className="text-sm font-inter text-gray-700 hover:text-amber-600 transition-smooth">
              Acerca de
            </Link>
            <Link href="/faq" className="text-sm font-inter text-gray-700 hover:text-amber-600 transition-smooth">
              Preguntas
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-smooth">
              <Search size={20} className="text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-smooth">
              <Heart size={20} className="text-gray-700" />
            </button>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-lg transition-smooth relative">
              <ShoppingBag size={20} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-smooth"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/#catalog" className="text-sm text-gray-700 hover:text-amber-600">
                Catálogo
              </Link>
              <Link href="/women" className="text-sm text-gray-700 hover:text-amber-600">
                Mujeres
              </Link>
              <Link href="/men" className="text-sm text-gray-700 hover:text-amber-600">
                Hombres
              </Link>
              <Link href="/about" className="text-sm text-gray-700 hover:text-amber-600">
                Acerca de
              </Link>
              <Link href="/faq" className="text-sm text-gray-700 hover:text-amber-600">
                Preguntas
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
