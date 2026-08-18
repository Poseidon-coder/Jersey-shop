import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' // 1. Added Link & useNavigate
import { FaSearch, FaShoppingCart } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Optional: navigate to search results or handle search
      setSearchQuery('')
    }
  }

  return (
    <nav className="w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand Logo - Navigates to Home */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors shrink-0"
        >
          <img 
            src="https://i.pinimg.com/736x/fb/ae/2d/fbae2d8c9ba413b3429f80ed2193b356.jpg" 
            alt="Legacy Jersey Logo" 
            className="h-10 w-auto object-contain rounded-3xl"
          />
          <span>Legacy Jersey<span className="text-emerald-400">.</span></span>
        </Link>

        {/* Search Bar (Desktop) */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-xs relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800/80 text-xs text-white placeholder-slate-400 rounded-full pl-9 pr-4 py-2 border border-slate-700/80 focus:outline-none focus:border-emerald-400 transition-colors"
          />
          <FaSearch className="absolute left-3 text-slate-400 text-xs" />
        </form>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-1 text-sm font-medium text-slate-300">
          <li>
            {/* Home Link using React Router */}
            <Link 
              to="/" 
              className="px-3 py-2 rounded-md hover:text-white hover:bg-slate-800/60 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="px-3 py-2 rounded-md hover:text-white hover:bg-slate-800/60 transition-all">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="px-3 py-2 rounded-md hover:text-white hover:bg-slate-800/60 transition-all">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:text-white hover:bg-slate-800/60 transition-all">
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart & Actions */}
        <div className="flex items-center space-x-3">
          <button 
            className="relative p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-emerald-400 border border-slate-700/60 transition-all active:scale-95"
            aria-label="Shopping Cart"
          >
            <FaShoppingCart className="text-sm" />
            <span className="absolute -top-1 -right-1 bg-emerald-500 text-slate-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <Link
            to="/shop"
            className="hidden sm:block bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-sm shadow-emerald-500/20 active:scale-95"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900 px-6 pt-4 pb-6 space-y-3">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-xs text-white placeholder-slate-400 rounded-lg pl-9 pr-4 py-2.5 border border-slate-700 focus:outline-none focus:border-emerald-400"
            />
            <FaSearch className="absolute left-3 top-3 text-slate-400 text-xs" />
          </div>

          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-sm text-slate-300 hover:text-emerald-400"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-sm text-slate-300 hover:text-emerald-400"
          >
            About
          </Link>
          <Link 
            to="/services" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-sm text-slate-300 hover:text-emerald-400"
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-sm text-slate-300 hover:text-emerald-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar