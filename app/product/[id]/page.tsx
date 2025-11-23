"use client"

// 1. Importar el hook 'use'
import { useState, useMemo, use } from "react" 
import Header from "@/components/header"
import Footer from "@/components/footer"
import RelatedProducts from "@/components/related-products"
import { Star, Truck, RotateCcw, Heart, ShoppingBag, ChevronRight } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import productsData from "@/lib/products-data.json"

export default function ProductPage({ params }: { params: { id: string } }) {
  // 2. CORRECCIÓN CLAVE: Desenvolver la promesa de `params` usando use().
  // Esto debe hacerse en la parte superior del componente, antes de otros hooks como useState o useMemo.
  const { id } = use(params); 

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const addItem = useCartStore((state) => state.addItem)
  const [addedToCart, setAddedToCart] = useState(false)

  const product = useMemo(() => {
    // 3. Usar el 'id' ya resuelto en lugar de params.id
    const found = productsData.products.find((p) => p.id === Number.parseInt(id))
    if (!found) return null

    return {
      ...found,
      rating: 4.8,
      reviews: Math.floor(Math.random() * 200) + 50,
      images: found.gallery || Array(4).fill(found.image),
    }
  }, [id]) // 4. Actualizar la dependencia de useMemo para usar el 'id' resuelto

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-700 mb-4">Producto no encontrado</h1>
            <a href="/" className="text-amber-600 hover:text-amber-700">
              Volver al catálogo
            </a>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const mainImage = product.images[selectedImageIndex]
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor selecciona una talla")
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      size: selectedSize,
      color: selectedColor || product.color,
      image: product.image,
    })

    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8 text-sm">
            <a href="/" className="text-gray-600 hover:text-amber-600 transition-smooth">
              Home
            </a>
            <ChevronRight size={16} className="text-gray-400" />
            <a href="/" className="text-gray-600 hover:text-amber-600 transition-smooth">
              {product.line}
            </a>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-900 font-600">{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Images */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={mainImage || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-96 md:h-96 object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`rounded-lg overflow-hidden border-2 transition-smooth ${
                      selectedImageIndex === idx ? "border-amber-600" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`View ${idx + 1}`}
                      className="w-full h-24 object-cover cursor-pointer"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <p className="text-amber-600 font-inter text-sm uppercase tracking-wider mb-2">{product.category}</p>
                <h1 className="text-4xl font-playfair font-700 text-gray-900 mb-4">{product.name}</h1>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < Math.floor(product.rating) ? "fill-amber-600 text-amber-600" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-inter">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>

                <p className="text-3xl font-playfair font-700 text-gray-900">${product.price}</p>
              </div>

              <div>
                <p className="text-gray-700 font-inter leading-relaxed mb-4">{product.description}</p>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block font-playfair font-600 text-gray-900 mb-3">Color</label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 font-inter text-sm font-500 transition-smooth ${
                        selectedColor === color
                          ? "border-amber-600 bg-amber-50 text-amber-600"
                          : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <label className="block font-playfair font-600 text-gray-900 mb-3">Talla</label>
                <div className="grid grid-cols-3 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-lg border-2 font-inter font-600 transition-smooth ${
                        selectedSize === size
                          ? "border-amber-600 bg-amber-50 text-amber-600"
                          : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-3">
                <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-smooth"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-inter font-600">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-smooth"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-lg font-inter font-600 transition-smooth flex items-center justify-center space-x-2 ${
                    addedToCart ? "bg-green-600 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  <ShoppingBag size={20} />
                  <span>{addedToCart ? "Agregado al carrito" : "Agregar al Carrito"}</span>
                </button>

                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="w-full border-2 border-gray-300 hover:border-amber-600 text-gray-900 hover:text-amber-600 py-3 rounded-lg font-inter font-600 transition-smooth flex items-center justify-center space-x-2"
                >
                  <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                  <span>Agregar a Favoritos</span>
                </button>
              </div>

              {/* Info Cards */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-start space-x-3">
                  <Truck size={24} className="text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-inter font-600 text-gray-900">Envío Gratis</p>
                    <p className="text-sm text-gray-600 font-inter">En compras mayores a $100</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RotateCcw size={24} className="text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-inter font-600 text-gray-900">30 Días de Devolución</p>
                    <p className="text-sm text-gray-600 font-inter">Devolución sin preguntas</p>
                  </div>
                </div>
              </div>

              {/* Material Info */}
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <p className="font-inter font-600 text-gray-900 mb-2">Material</p>
                  <p className="text-sm text-gray-700 font-inter">{product.material}</p>
                </div>
                <div>
                  <p className="font-inter font-600 text-gray-900 mb-2">Stock Disponible</p>
                  <p className="text-sm text-gray-700 font-inter">{product.stock} unidades</p>
                </div>
              </div>
            </div>
          </div>

          <RelatedProducts currentProduct={product} />
        </div>
      </div>

      <Footer />
    </main>
  )
}