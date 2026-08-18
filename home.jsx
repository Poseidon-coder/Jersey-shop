import React from 'react'
import { useProduct } from '../Context/Productcontext'
import ProductCard from '../Component/product/productCard';
import Herosection from '../Component/Home/Herosection';

function Homepage() {

  const {product} = useProduct();
  const flashsale = Productdata.filter((item)=>item.flashsale === true).slice(0,4);
  const bestseller = Productdata.filter((item)=>item.bestseller === true).slice(0,4);

  return (
    <div className='m-0 p-0 '>
      <Herosection/>
      <div className='m-auto w-7xl mt-5'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
          {product.map((item)=>(
          <ProductCard key={item.id} product={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage