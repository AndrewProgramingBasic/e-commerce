"use client"

import ProductCard from "./product-card"
import productsData from "@/lib/products-data.json"
import type { Product } from "@/components/product-card"

interface RelatedProductsProps {
  currentProduct: Product
}

export default function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  const relatedProducts = productsData.products
    .filter(
      (product) =>
        product.id !== currentProduct.id &&
        (product.category === currentProduct.category || product.line === currentProduct.line),
    )
    .slice(0, 3)

  return (
    <div className="space-y-12">
      <div className="border-t border-gray-200 pt-12">
        <p className="text-amber-600 font-inter text-sm uppercase tracking-wider mb-2">Completa tu look</p>
        <h2 className="text-3xl md:text-4xl font-playfair font-700 text-gray-900 mb-8">Productos Relacionados</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
