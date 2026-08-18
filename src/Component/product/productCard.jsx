import React from 'react'
import { FaStar, FaCartPlus, FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function productCard({product}) {

  const navigate = useNavigate();

  return (
    <div className='max-w-xs rounded-2xl bg-white border border-gray-100 shadow-md overflow-hidden flex flex-col justify-between'>
      
      <div className='w-full aspect-square bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100'>
        <img 
          
          src={product.imgs?.[0]} 
          alt={product.name} 
          className='w-full h-full object-contain p-2 rounded-3xl'
        />
      </div>
    
      <div className='p-4 space-y-1.5'>
        <div className='flex justify-between items-center text-xs text-black font-mono font-bold'>
          <h1>ID.{product.id}</h1>
          <p className='uppercase font-sans font-medium text-gray-500 tracking-wide'>{product.category}</p>
        </div>

        <p className='text-base font-bold text-gray-900 leading-snug'>{product.name}</p>
        
        <div className='flex items-center justify-between text-xs text-gray-600'>
          <p className='font-medium'><span>{product.brand}</span></p>
          <p className='text-gray-400'>{product.season}</p>
        </div>

        <p className='flex text-amber-400 gap-1 text-xs py-1'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
        </p>

        <p className='text-xs text-gray-500 font-medium'>
          Available: <span className='text-gray-700'>{product.sizesAvailable}</span>
        </p>

        <div className='flex justify-between items-center pt-3 border-t border-gray-100 mt-2'>
          <p className='font-bold text-gray-900 text-lg flex items-center gap-2'>
            {product.price}
            <del className='font-mono text-xs text-gray-400 font-normal'>({product.originalprice})</del>
          </p>
        </div>
        
        <div className='flex gap-5 justify-center '>
          <button className='flex items-center gap-2 text-white bg-rose-600 hover:bg-rose-500 px-4 py-2 rounded-xl text-xs font-semibold transition-colors'>
            Shop now <FaCartPlus className='text-sm'/>
          </button>
          <button 
          onClick={()=>navigate(`/product/${product.id}`)} 
          className='flex items-center gap-2 text-white bg-violet-600 hover:bg-slate-800 px-4 py-2 rounded-xl text-xs font-semibold transition-colors'>
          View Detail <FaSearch className='text-sm'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default productCard