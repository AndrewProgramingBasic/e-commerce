"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"

interface Product {
  id: number
  name: string
  price: number
  image: string
  gallery?: string[]
  category: string
  color: string
  sizes?: string[]
  stock: number
}

export default function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false)
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "")
  const [showSizeSelector, setShowSizeSelector] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!selectedSize && product.sizes && product.sizes.length > 0) {
      setShowSizeSelector(true)
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: selectedSize,
      color: product.color,
      image: product.image,
    })

    setShowSizeSelector(false)
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-110 transition-smooth duration-500"
          />

          {/* Stock Badge */}
          {product.stock < 5 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Solo {product.stock}
            </div>
          )}

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-end justify-between p-4">
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsLiked(!isLiked)
              }}
              className="p-2 rounded-lg bg-white hover:bg-amber-600 hover:text-white transition-smooth"
            >
              <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
            </button>
            <div className="relative">
              {showSizeSelector && (
                <div className="absolute bottom-12 right-0 bg-white rounded-lg p-3 shadow-lg z-10">
                  <p className="text-xs text-gray-600 mb-2 font-inter">Selecciona talla:</p>
                  <div className="flex gap-1">
                    {product.sizes &&
                      product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={(e) => {
                            e.preventDefault()
                            setSelectedSize(size)
                            handleAddToCart(e)
                          }}
                          className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-amber-600 hover:text-white transition-smooth"
                        >
                          {size}
                        </button>
                      ))}
                  </div>
                </div>
              )}
              <button
                onClick={handleAddToCart}
                className="p-2 rounded-lg bg-gray-900 text-white hover:bg-amber-600 transition-smooth flex items-center space-x-2"
              >
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <p className="text-xs text-gray-500 font-inter uppercase tracking-wider">{product.category}</p>
          <h3 className="text-lg font-playfair font-600 text-gray-900 group-hover:text-amber-600 transition-smooth">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xl font-playfair font-700 text-gray-900">${product.price}</span>
            <span className="text-xs text-gray-500 font-inter">{product.color}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
