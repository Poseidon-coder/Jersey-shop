import React, { useState } from 'react'
import { Productdata } from '../Data/Productdata'
import ProductCard from '../Component/product/productCard';

function Shoppage() {
  const [selectbrand, setSelectBrand] = useState("");
  const [selectcategory, setSelectCategory] = useState("");
  const [product] = useState(Productdata);

  const filterproduct = product.filter((item) => {
    const Brand = selectbrand === "" || item.brand === selectbrand;
    const Category = selectcategory === "" || item.category === selectcategory;

    return Brand && Category;
  });

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-screen'>
      
      {/* Header Banner */}
      <div className='text-center py-8 px-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 mt-2'>
        <h1 className='text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900'>
          Shop Official World Cup Kits
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
          Enjoy your online shopping experience with authentic gear and fast worldwide shipping.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className='flex flex-wrap items-center gap-4 mb-8 bg-white p-4 rounded-xl border border-gray-100 shadow-sm'>
        
        {/* Brand Filter */}
        <div className='w-full sm:w-auto flex-1 min-w-[150px]'>
          <label className='block text-xs font-medium text-gray-500 mb-1'>Filter by Brand</label>
          <select
            className='w-full border border-gray-300 bg-white text-gray-700 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
            value={selectbrand}
            onChange={(e) => setSelectBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            <option value="Nike">Nike</option>
            <option value="Puma">Puma</option>
            <option value="Adidas">Adidas</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className='w-full sm:w-auto flex-1 min-w-[150px]'>
          <label className='block text-xs font-medium text-gray-500 mb-1'>Filter by Category</label>
          <select
            className='w-full border border-gray-300 bg-white text-gray-700 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
            value={selectcategory}
            onChange={(e) => setSelectCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Home Kit">Home Kit</option>
            <option value="Away Kit">Away Kit</option>
            <option value="Third Kit">Third Kit</option>
          </select>
        </div>

        {/* Reset Button */}
        {(selectbrand || selectcategory) && (
          <button
            onClick={() => { setSelectBrand(""); setSelectCategory(""); }}
            className='w-full sm:w-auto text-xs text-red-500 hover:text-red-700 font-semibold self-end py-2.5 px-3'
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filterproduct.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
          {filterproduct.map((data) => (
            <ProductCard key={data.id} product={data} />
          ))}
        </div>
      ) : (
        <div className='text-center py-12 text-gray-500'>
          No products match the selected filters.
        </div>
      )}

    </div>
  )
}

export default Shoppage