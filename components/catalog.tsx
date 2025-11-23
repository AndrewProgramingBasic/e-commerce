"use client"

import { useState, useMemo } from "react"
import ProductCard from "./product-card"
import { ChevronDown } from "lucide-react"
import productsData from "@/lib/products-data.json"

interface Filter {
  sizes: string[]
  colors: string[]
  priceRange: [number, number]
  line: string
  category: string
}

interface CatalogProps {
  preSelectedCategory?: string
  lockedCategory?: boolean
  preSelectedLine?: string
  hideLine?: boolean
}

export default function Catalog({
  preSelectedCategory = "",
  lockedCategory = false,
  preSelectedLine = "",
  hideLine = false,
}: CatalogProps) {
  const [filter, setFilter] = useState<Filter>({
    sizes: [],
    colors: [],
    priceRange: [0, 500],
    line: preSelectedLine,
    category: preSelectedCategory,
  })

  const [sortBy, setSortBy] = useState("new")
  const products = productsData.products

  const categories = [...new Set(products.map((p) => p.category))]
  const lines = [...new Set(products.map((p) => p.line))]
  const allColors = [...new Set(products.flatMap((p) => p.colors))]
  const allSizes = [...new Set(products.flatMap((p) => p.sizes))]

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesLine = !filter.line || product.line === filter.line
      const matchesCategory = !filter.category || product.category === filter.category
      const matchesPrice = product.price >= filter.priceRange[0] && product.price <= filter.priceRange[1]
      const matchesColor = filter.colors.length === 0 || filter.colors.some((c) => product.colors.includes(c))
      const matchesSize = filter.sizes.length === 0 || filter.sizes.some((s) => product.sizes.includes(s))

      return matchesLine && matchesCategory && matchesPrice && matchesColor && matchesSize
    })

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "popular") {
      result.sort((a, b) => b.stock - a.stock)
    }

    return result
  }, [filter, sortBy])

  return (
    <section id="catalog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-amber-600 font-inter text-sm uppercase tracking-wider mb-2">Nuestro Catálogo</p>
          <h2 className="text-4xl md:text-5xl font-playfair font-700 text-gray-900 mb-4">Piezas Seleccionadas</h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl">
            Cada pieza ha sido cuidadosamente seleccionada para ofrecerte lo mejor en moda premium.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Filters Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <h3 className="font-playfair font-600 text-gray-900">Filtros</h3>
              </div>

              {!hideLine && (
                <div>
                  <h4 className="font-inter font-600 text-sm text-gray-900 mb-3">Línea</h4>
                  <div className="space-y-2">
                    {lines.map((line) => (
                      <label key={line} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filter.line === line}
                          className="w-4 h-4 rounded border-gray-300 text-amber-600"
                          onChange={(e) => {
                            setFilter({
                              ...filter,
                              line: e.target.checked ? line : "",
                            })
                          }}
                        />
                        <span className="ml-2 text-sm text-gray-700">{line}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Category Filter */}
              <div>
                <h4 className="font-inter font-600 text-sm text-gray-900 mb-3">Categoría</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filter.category === cat}
                        disabled={lockedCategory}
                        className="w-4 h-4 rounded border-gray-300 text-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        onChange={(e) => {
                          if (!lockedCategory) {
                            setFilter({
                              ...filter,
                              category: e.target.checked ? cat : "",
                            })
                          }
                        }}
                      />
                      <span className={`ml-2 text-sm ${lockedCategory ? "text-gray-500" : "text-gray-700"}`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h4 className="font-inter font-600 text-sm text-gray-900 mb-3">Talla</h4>
                <div className="space-y-2 grid grid-cols-2 gap-2">
                  {allSizes.map((size) => (
                    <label key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filter.sizes.includes(size)}
                        className="w-4 h-4 rounded border-gray-300 text-amber-600"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilter({ ...filter, sizes: [...filter.sizes, size] })
                          } else {
                            setFilter({ ...filter, sizes: filter.sizes.filter((s) => s !== size) })
                          }
                        }}
                      />
                      <span className="ml-2 text-sm text-gray-700">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h4 className="font-inter font-600 text-sm text-gray-900 mb-3">Color</h4>
                <div className="space-y-2 grid grid-cols-2 gap-2">
                  {allColors.map((color) => (
                    <label key={color} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filter.colors.includes(color)}
                        className="w-4 h-4 rounded border-gray-300 text-amber-600"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilter({ ...filter, colors: [...filter.colors, color] })
                          } else {
                            setFilter({ ...filter, colors: filter.colors.filter((c) => c !== color) })
                          }
                        }}
                      />
                      <span className="ml-2 text-sm text-gray-700">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-inter font-600 text-sm text-gray-900 mb-3">Precio</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-700">${filter.priceRange[0]}</span>
                    <span className="text-gray-400">-</span>
                    <span className="text-sm text-gray-700">${filter.priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={filter.priceRange[1]}
                    onChange={(e) => {
                      setFilter({
                        ...filter,
                        priceRange: [filter.priceRange[0], Number.parseInt(e.target.value)],
                      })
                    }}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setFilter({
                    sizes: [],
                    colors: [],
                    priceRange: [0, 500],
                    line: preSelectedLine,
                    category: preSelectedCategory,
                  })
                }}
                className="w-full py-2 border border-gray-300 rounded-lg text-sm font-inter hover:bg-gray-50 transition-smooth"
              >
                Limpiar Filtros
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <p className="text-sm text-gray-600 font-inter">
                {filteredProducts.length} de {products.length} productos
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg px-3 py-2 pr-8 font-inter cursor-pointer"
                >
                  <option value="new">Más Nuevos</option>
                  <option value="price-low">Menor Precio</option>
                  <option value="price-high">Mayor Precio</option>
                  <option value="popular">Popular</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 font-inter">No se encontraron productos que coincidan con tus filtros.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
