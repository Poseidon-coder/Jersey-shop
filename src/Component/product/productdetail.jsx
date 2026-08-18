import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Productdata } from '../../Data/Productdata'
import SpecificationCard from './SpecificationCard'
import ProductCard from './productCard'

import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaShareAlt,
  FaChevronLeft,
  FaChevronRight,
  FaShieldAlt,
  FaTruck,
  FaUndoAlt,
  FaDraftingCompass
} from 'react-icons/fa'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Find current product
  const product = Productdata.find(
    (item) => item.id === Number(id)
  )

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-[#07080b] text-white flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-extrabold text-red-500 tracking-tight">
          Product Not Found
        </h2>

        <p className="text-gray-400 mt-2">
          The jersey you are looking for is unavailable.
        </p>

        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-2.5 bg-[#FFE600] text-black font-bold rounded-xl hover:bg-[#e6cf00] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Return to Store
        </button>
      </div>
    )
  }

  // Find related products by brand
  const relateproduct = Productdata.filter((item) =>
        item.brand === product.brand && item.id !== product.id
    ).slice(0, 4)

  // Local state
  const [selectedImg, setSelectedImg] = useState(0)
  const [selectedSize, setSelectedSize] = useState('L')
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Parse price
  const parseNum = (value) => {
    if (typeof value === 'number') return value

    if (!value) return 0

    return parseFloat(
      String(value).replace('$', '').trim()
    ) || 0
  }

  const currentPrice = parseNum(product.price)
  const originalPrice = parseNum(product.originalprice)

  const savings =
    originalPrice > currentPrice
      ? (originalPrice - currentPrice).toFixed(2)
      : null

  const discountPercent =
    originalPrice > currentPrice
      ? Math.round(
          ((originalPrice - currentPrice) / originalPrice) * 100
        )
      : null

  // Product images
  const images =
    product.imgs?.filter(
      (img) => img && String(img).trim() !== ''
    ) || []

  const thumbnailLabels = ['FRONT', 'BACK', 'DETAIL']

  // Nation buttons
  const nationPills = [
    { code: 'BR', name: 'Brazil', id: 1 },
    { code: 'FR', name: 'France', id: 2 },
    { code: 'AR', name: 'Argentina', id: 7 },
    { code: 'PT', name: 'Portugal', id: 11 }
  ]

  // Change image
  const triggerImgChange = (newIndex) => {
    setIsAnimating(true)
    setSelectedImg(newIndex)

    setTimeout(() => {
      setIsAnimating(false)
    }, 300)
  }

  // Next image
  const handleNextImg = () => {
    if (images.length > 0) {
      triggerImgChange(
        (selectedImg + 1) % images.length
      )
    }
  }

  // Previous image
  const handlePrevImg = () => {
    if (images.length > 0) {
      triggerImgChange(
        (selectedImg - 1 + images.length) %
          images.length
      )
    }
  }

  return (
    <div className="min-h-screen bg-[#07080b] text-white font-sans selection:bg-[#FFE600] selection:text-black">

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(255, 230, 0, 0.2);
          }

          50% {
            box-shadow: 0 0 25px rgba(255, 230, 0, 0.5);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2.5s infinite;
        }
      `}</style>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 space-y-4">

            {/* Product image */}
            <div className="relative w-full aspect-square bg-linear-to-b from-[#095228] via-[#063b1d] to-[#042412] rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-emerald-900/40 group">

              {/* Badges and share */}
              <div className="flex items-center justify-between z-10">

                <div className="flex flex-col gap-2">

                  {product.bestseller && (
                    <span className="bg-[#FFE600] text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      BESTSELLER
                    </span>
                  )}

                  {discountPercent && (
                    <span className="bg-[#0b140e]/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider w-max">
                      -{discountPercent}% OFF
                    </span>
                  )}

                </div>

                <button
                  type="button"
                  className="w-9 h-9 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:rotate-12 active:scale-90"
                >
                  <FaShareAlt className="text-xs" />
                </button>

              </div>

              {/* Main image */}
              <div className="relative w-full h-full flex items-center justify-center p-2">

                <img
                  src={
                    images[selectedImg] ||
                    'https://via.placeholder.com/500'
                  }
                  alt={product.name}
                  className={`max-h-[85%] max-w-[85%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out animate-float ${
                    isAnimating
                      ? 'opacity-30 scale-95'
                      : 'opacity-100 scale-100'
                  }`}
                />

                {/* Navigation arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImg}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-90"
                    >
                      <FaChevronLeft className="text-xs" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNextImg}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-90"
                    >
                      <FaChevronRight className="text-xs" />
                    </button>
                  </>
                )}

              </div>

              {/* Image indicators */}
              {images.length > 1 && (
                <div className="flex items-center justify-center gap-1.5 z-10">
                  {images.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() =>
                        triggerImgChange(index)
                      }
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        selectedImg === index
                          ? 'w-6 bg-white'
                          : 'w-1.5 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              )}

            </div>

            {/* Thumbnail cards */}
            <div className="grid grid-cols-3 gap-3">

              {[0, 1, 2].map((index) => {

                const actualIndex =
                  index < images.length ? index : 0

                const imgUrl =
                  images[actualIndex] ||
                  'https://via.placeholder.com/200'

                const label =
                  thumbnailLabels[index] ||
                  `VIEW ${index + 1}`

                const isSelected =
                  selectedImg === actualIndex

                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() =>
                      triggerImgChange(actualIndex)
                    }
                    className={`bg-linear-to-b from-[#095228] to-[#042412] rounded-2xl p-3 h-28 flex flex-col items-center justify-between border transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden ${
                      isSelected
                        ? 'border-[#FFE600] ring-1 ring-[#FFE600] scale-105 shadow-lg'
                        : 'border-emerald-900/30 opacity-70 hover:opacity-100'
                    }`}
                  >

                    <div className="w-full h-16 flex items-center justify-center">
                      <img
                        src={imgUrl}
                        alt={label}
                        className="h-full object-contain transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    <span className="text-[10px] font-extrabold tracking-wider text-gray-300 uppercase">
                      {label}
                    </span>

                  </button>
                )
              })}

            </div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">

            {/* Product header */}
            <div className="space-y-1">

              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {product.brand} · SKU NK-BRZ-2026-H
              </p>

              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {product.name}
              </h1>

              <p className="text-gray-400 text-sm font-medium">
                {product.season} · BR
              </p>

            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 text-sm">

              <div className="flex text-[#FFE600] text-xs gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <span className="font-extrabold text-white">
                4.8
              </span>

              <span className="text-gray-400">
                (312 reviews)
              </span>

              <button
                type="button"
                className="text-gray-400 underline hover:text-white text-xs font-semibold transition-colors"
              >
                Read all
              </button>

            </div>

            {/* Price */}
            <div className="flex items-center gap-3 pt-1">

              <span className="text-4xl font-black text-white tracking-tight">
                ${currentPrice.toFixed(2)}
              </span>

              {originalPrice > 0 && (
                <span className="text-lg text-gray-500 line-through font-bold">
                  ${originalPrice.toFixed(2)}
                </span>
              )}

              {savings && (
                <span className="bg-[#FFE600] text-black text-xs font-black px-2.5 py-1 rounded-full">
                  Save ${savings}
                </span>
              )}

            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">

              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400" />
              </span>

              <span>
                In Stock — only 14 left
              </span>

            </div>

            <hr className="border-gray-800" />

            {/* Nation selector */}
            <div className="space-y-3">

              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                NATION —{' '}
                <span className="text-white">
                  {product.name.split(' ')[0]}
                </span>
              </label>

              <div className="flex flex-wrap gap-2">

                {nationPills.map((nation) => {

                  const isActive =
                    product.id === nation.id

                  return (
                    <button
                      type="button"
                      key={nation.id}
                      onClick={() =>
                        navigate(`/product/${nation.id}`)
                      }
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-300 transform active:scale-95 ${
                        isActive
                          ? 'bg-[#181a20] text-white border-gray-600 shadow-md scale-105'
                          : 'bg-[#0f1117] text-gray-400 border-gray-800 hover:border-gray-700 hover:text-white'
                      }`}
                    >

                      <span className="text-[10px] text-gray-500 font-extrabold uppercase">
                        {nation.code}
                      </span>

                      <span>
                        {nation.name}
                      </span>

                    </button>
                  )
                })}

              </div>

            </div>

            {/* Size selector */}
            <div className="space-y-3">

              <div className="flex items-center justify-between text-xs">

                <label className="font-bold text-gray-400 uppercase tracking-wider">
                  SIZE
                </label>

                <button
                  type="button"
                  className="text-gray-400 hover:text-white flex items-center gap-1 font-semibold transition-colors"
                >
                  <FaDraftingCompass className="text-[10px]" />
                  Size guide
                </button>

              </div>

              <div className="flex flex-wrap gap-2">

                {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map(
                  (size) => {

                    const isAvailable =
                      product.specification?.sizesAvailable?.includes(
                        size
                      ) ?? true

                    const isSelected =
                      selectedSize === size

                    return (
                      <button
                        type="button"
                        key={size}
                        disabled={!isAvailable}
                        onClick={() =>
                          isAvailable &&
                          setSelectedSize(size)
                        }
                        className={`w-12 h-10 rounded-xl text-xs font-bold border transition-all duration-200 transform active:scale-90 flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#181a20] text-white border-gray-400 ring-1 ring-gray-400 scale-105 shadow-md'
                            : isAvailable
                            ? 'bg-[#0f1117] text-gray-300 border-gray-800 hover:border-gray-600 hover:scale-105'
                            : 'bg-[#0a0c10] text-gray-600 border-gray-800/50 cursor-not-allowed line-through'
                        }`}
                      >
                        {size}
                      </button>
                    )
                  }
                )}

              </div>

            </div>

            {/* Quantity */}
            <div className="space-y-2">

              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                QUANTITY
              </label>

              <div className="flex items-center gap-4">

                <div className="flex items-center bg-[#0f1117] border border-gray-800 rounded-xl overflow-hidden">

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((q) =>
                        Math.max(1, q - 1)
                      )
                    }
                    className="w-10 h-10 text-gray-400 hover:text-white font-bold flex items-center justify-center transition-colors active:bg-gray-800"
                  >
                    -
                  </button>

                  <span className="w-8 text-center text-sm font-extrabold text-white">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((q) => q + 1)
                    }
                    className="w-10 h-10 text-gray-400 hover:text-white font-bold flex items-center justify-center transition-colors active:bg-gray-800"
                  >
                    +
                  </button>

                </div>

                <span className="text-xs text-gray-500 font-medium">
                  14 units available
                </span>

              </div>

            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-2">

              <div className="flex items-center gap-3">

                <button
                  type="button"
                  className="flex-1 bg-[#FFE600] hover:bg-[#e6cf00] text-black font-extrabold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] animate-pulse-glow"
                >
                  <FaShoppingCart />
                  Add to Cart — $
                  {(currentPrice * quantity).toFixed(2)}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setIsLiked(!isLiked)
                  }
                  className={`w-14 h-14 bg-[#0f1117] border border-gray-800 rounded-2xl flex items-center justify-center text-lg transition-all duration-300 transform active:scale-75 ${
                    isLiked
                      ? 'text-red-500 border-red-500/50 scale-110'
                      : 'text-gray-400 hover:text-white hover:border-gray-700'
                  }`}
                >
                  <FaHeart
                    className={`transition-transform duration-300 ${
                      isLiked
                        ? 'scale-125'
                        : 'scale-100'
                    }`}
                  />
                </button>

              </div>

              <button
                type="button"
                className="w-full bg-[#0f1117] hover:bg-[#161922] text-white font-bold py-3.5 px-6 rounded-2xl border border-gray-800 text-sm transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Buy Now — Instant Checkout
              </button>

            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">

              <div className="bg-[#0f1117] border border-gray-800/80 rounded-2xl p-4 flex flex-col items-center text-center space-y-1 transition-transform duration-300 hover:-translate-y-1">

                <FaShieldAlt className="text-gray-400 text-base mb-1" />

                <h4 className="text-xs font-bold text-white">
                  Official Kit
                </h4>

                <p className="text-[10px] text-gray-500">
                  Authentic replica
                </p>

              </div>

              <div className="bg-[#0f1117] border border-gray-800/80 rounded-2xl p-4 flex flex-col items-center text-center space-y-1 transition-transform duration-300 hover:-translate-y-1">

                <FaTruck className="text-gray-400 text-base mb-1" />

                <h4 className="text-xs font-bold text-white">
                  Free Shipping
                </h4>

                <p className="text-[10px] text-gray-500">
                  Orders over $75
                </p>

              </div>

              <div className="bg-[#0f1117] border border-gray-800/80 rounded-2xl p-4 flex flex-col items-center text-center space-y-1 transition-transform duration-300 hover:-translate-y-1">

                <FaUndoAlt className="text-gray-400 text-base mb-1" />

                <h4 className="text-xs font-bold text-white">
                  30-Day Returns
                </h4>

                <p className="text-[10px] text-gray-500">
                  No questions asked
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* ================= DETAILS ================= */}

        <div className="mt-16 pt-12 border-t border-gray-800/80 space-y-10">

          {/* Description */}
          <div className="bg-[#0f1117] border border-gray-800 rounded-3xl p-6 md:p-8 space-y-3">

            <h3 className="text-xl font-extrabold text-white">
              About This Jersey
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {product.description}
            </p>

          </div>

          {/* Specifications */}
          <div className="space-y-4">

            <h3 className="text-xl font-extrabold text-white">
              Specifications
            </h3>

            <SpecificationCard
              specification={product.specification}
            />

          </div>

        </div>

        {/* ================= RELATED PRODUCTS ================= */}

        <div className="mt-16 pt-10 border-t border-gray-800">

          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
            Related Products
          </h2>

          {relateproduct.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {relateproduct.map((item) => (
                <ProductCard key={item.id} product={item}/>
              ))}

            </div>
          ) : (
            <p className="text-gray-500">
              No related products found.
            </p>
          )}

        </div>

      </main>
    </div>
  )
}

export default ProductDetail