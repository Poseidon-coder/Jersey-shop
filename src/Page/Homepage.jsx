import React from 'react'
import { useProduct } from '../Context/Productcontext'
import ProductCard from '../Component/product/productCard';
import Herosection from '../Component/Home/Herosection';
import Feature from '../Component/Home/Feature';
import { Productdata } from '../Data/Productdata';

function Homepage() {

  const {product} = useProduct();
  const flashsale = Productdata.filter((item)=>item.flashsale === true).slice(0,4);
  const bestseller = Productdata.filter((item)=>item.bestseller === true).slice(0,4);
  return (
    <div className='m-0 p-0 bg-slate-900 '>
      <Herosection/>
      <div className='m-auto w-7xl mt-5'>
        <div className='flex items-center gap-3.5 my-6'>
          <h1 className='text-2xl md:text-3xl font-black text-white uppercase tracking-tight'>Flast Seller</h1>
          <span className="text-[10px] font-black tracking-widest text-[#FFE600] uppercase block leading-none mb-1">
            Limited Time Deals
          </span>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
          {flashsale.map((item)=>(
          <ProductCard key={item.id} product={item}/>
          ))}
        </div>
      </div>
      <div className='m-auto w-7xl mt-5'>
        <div className='flex items-center gap-3.5 my-6'>
          <h1 className='text-2xl md:text-3xl font-black text-white uppercase tracking-tight'>Best Seller</h1>
          <span className="text-[10px] font-black tracking-widest text-[#FFE600] uppercase block leading-none mb-1">
            Limited Time Deals
          </span>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
          {bestseller.map((item)=>(
          <ProductCard key={item.id} product={item}/>
          ))}
        </div>
      </div>
      <Feature/>
    </div>
  )
}

export default Homepage