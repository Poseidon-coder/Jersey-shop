import React from 'react'
import { FaCheck, FaTimes, FaLayerGroup, FaInfoCircle } from 'react-icons/fa'

function SpecificationCard({ specification }) {
  // Empty state handling matching dark theme
  if (!specification || Object.keys(specification).length === 0) {
    return (
      <div className="rounded-3xl border border-gray-800/80 bg-[#0f1117] p-8 text-center shadow-xl">
        <FaInfoCircle className="mx-auto text-2xl text-gray-600 mb-2" />
        <p className="text-sm font-medium text-gray-400">No specifications available for this item.</p>
      </div>
    )
  }

  // Format camelCase keys (e.g., "sizesAvailable" -> "Sizes Available")
  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
  }

  // Smart renderer for different data types (Strings, Arrays, Booleans)
  const renderValue = (value) => {
    if (value === null || value === undefined || value === '') {
      return <span className="text-gray-500 italic text-xs">N/A</span>
    }

    if (typeof value === 'boolean') {
      return value ? (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <FaCheck className="text-[10px]" /> Yes
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-extrabold bg-red-500/10 text-red-400 border border-red-500/20">
          <FaTimes className="text-[10px]" /> No
        </span>
      )
    }

    if (Array.isArray(value)) {
      if (value.length === 0) return <span className="text-gray-500 italic text-xs">None</span>
      return (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {value.map((item, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#161922] text-gray-200 border border-gray-700/50 uppercase tracking-wider"
            >
              {String(item)}
            </span>
          ))}
        </div>
      )
    }

    if (typeof value === 'object') {
      return <span className="text-xs text-gray-400 font-mono">{JSON.stringify(value)}</span>
    }

    return <span className="text-sm font-bold text-white tracking-wide">{String(value)}</span>
  }

  return (
    <div className="bg-[#0f1117] border border-gray-800/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl backdrop-blur-md">
      
      {/* Top Section Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#FFE600]/10 border border-[#FFE600]/20 flex items-center justify-center text-[#FFE600]">
            <FaLayerGroup className="text-xs" />
          </div>
          <h4 className="text-xs font-extrabold text-gray-300 uppercase tracking-widest">
            Technical Details
          </h4>
        </div>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 bg-[#161922] px-3 py-1 rounded-full border border-gray-800">
          {Object.keys(specification).length} Attributes
        </span>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(specification).map(([key, value]) => (
          <div
            key={key}
            className="group bg-[#07080b]/70 border border-gray-800/80 rounded-2xl p-4 transition-all duration-300 hover:border-gray-700 hover:bg-[#12141c] hover:-translate-y-0.5 flex flex-col justify-between"
          >
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider group-hover:text-[#FFE600] transition-colors">
                {formatLabel(key)}
              </p>
              <div className="mt-2">{renderValue(value)}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default SpecificationCard