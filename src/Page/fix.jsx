import React, { useState, useMemo } from 'react'
import { useProduct } from '../Context/Productcontext'
import ProductCard from '../Component/product/productCard'
import Herosection from '../Component/Home/Herosection'
import { FaSearch, FaTimes, FaFilter, FaSlidersH } from 'react-icons/fa'
import { Productdata } from '../Data/Productdata'

function Homepage() {
  const { product } = useProduct()

  const flashsale = Productdata.filter((item)=>item.flashsale === true).slice(0,4);
  const bestseller = Productdata.filter((item)=>item.bestseller === true).slice(0,4);

  // Local state for search and brand filter
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('All')

  // Extract unique brands dynamically from product list
  const brands = useMemo(() => {
    if (!product) return ['All']
    const uniqueBrands = Array.from(
      new Set(product.map((item) => item.brand).filter(Boolean))
    )
    return ['All', ...uniqueBrands]
  }, [product])

  // Filter products based on search term and selected brand
  const filteredProducts = useMemo(() => {
    if (!product) return []
    return product.filter((item) => {
      const matchesSearch =
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.season?.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesBrand =
        selectedBrand === 'All' ||
        item.brand?.toLowerCase() === selectedBrand.toLowerCase()

      return matchesSearch && matchesBrand
    })
  }, [product, searchTerm, selectedBrand])

  return (
    <div className="m-0 p-0 bg-slate-950 min-h-screen text-white font-sans selection:bg-[#FFE600] selection:text-black">
      <Herosection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* FILTER & SEARCH BAR */}
        <div className="relative bg-slate-900 border border-slate-800 p-5 rounded-3xl shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-slate-500 text-sm group-focus-within:text-[#FFE600] transition-colors duration-200" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jerseys, teams, seasons..."
                className="w-full bg-slate-950 text-white text-sm pl-11 pr-10 py-3 rounded-2xl border border-slate-800 focus:outline-none focus:border-[#FFE600] focus:ring-1 focus:ring-[#FFE600] transition-all duration-300 placeholder:text-slate-500 shadow-inner"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <FaTimes className="text-[10px]" />
                </button>
              )}
            </div>

            {/* Brand Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <div className=" items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 hidden lg:flex">
                <FaFilter className="text-[10px] text-[#FFE600]" />
                <span>Brand</span>
              </div>

              {brands.map((brand) => {
                const isActive = selectedBrand.toLowerCase() === brand.toLowerCase()
                return (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap border transition-all duration-300 transform active:scale-95 ${
                      isActive
                        ? 'bg-[#FFE600] text-black border-[#FFE600] shadow-[0_0_15px_rgba(255,230,0,0.3)] scale-105'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white hover:scale-102'
                    }`}
                  >
                    {brand}
                  </button>
                )
              })}
            </div>

          </div>
        </div>

        {/* ACTIVE FILTERS & COUNT BAR */}
        <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-slate-400 px-2 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse"></span>
            <span>
              Showing <strong className="text-white font-extrabold">{filteredProducts.length}</strong> products
              {selectedBrand !== 'All' && <span> in <span className="text-[#FFE600] font-bold">{selectedBrand}</span></span>}
              {searchTerm && <span> matching "<span className="text-white">{searchTerm}</span>"</span>}
            </span>
          </div>

          {(searchTerm || selectedBrand !== 'All') && (
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedBrand('All')
              }}
              className="text-[#FFE600] hover:text-[#e6cf00] font-extrabold uppercase tracking-wider transition-all duration-200 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* PRODUCT GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {filteredProducts.map((item) => (
              <div 
                key={item.id} 
                className="transform transition-all duration-300 hover:-translate-y-1.5"
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        ) : (
          /* NO RESULTS EMPTY STATE */
          <div className="text-center py-20 bg-slate-900 rounded-3xl border border-slate-800 space-y-4 p-6 shadow-xl">
            <div className="w-16 h-16 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center mx-auto text-slate-500 text-2xl">
              <FaSlidersH />
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">No Products Match Your Filter</h3>
            <p className="text-sm text-slate-400 max-w-sm mx-auto">
              We couldn't find any jerseys matching your exact search or brand selections.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedBrand('All')
              }}
              className="mt-2 px-6 py-3 bg-[#FFE600] text-black text-xs font-black rounded-2xl hover:bg-[#e6cf00] hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Homepage