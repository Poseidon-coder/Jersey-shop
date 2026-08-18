import React, { useState } from 'react'
import { Productdata } from '../Data/Productdata'
import { data } from 'react-router-dom';
import ProductCard from '../Component/product/productCard';
function Shoppage() {
    const [selectbrand, setSelectBrand] = useState("");
    const [selectcategory, setSeleccategory] = useState("");
    const [product, setproduct] = useState(Productdata);

    const filterproduct = product.filter((item)=>{
        const Brand = selectbrand === "" || item.brand === selectbrand;
        const Category = selectcategory === "" || item.category === selectcategory;

        return Brand && Category;
    })
    return (
    
    <div className='w-7xl m-auto'>
        <div className='text-center py-10 px-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 mt-2'>
            <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900'>Shop Official World Cup Kits </h1>
            <p className="mt-2 text-base text-gray-500 max-w-xl mx-auto">Enjoy your online shopping experience with authentic gear and fast worldwide shipping.</p>
        </div>
        <select
        className='border  bg-red-200'
        value={selectbrand}
        onChange={(e)=>setSelectBrand(e.target.value)}
        >
            <option value="">All</option>
            <option value="Nike">Nike</option>
            <option value="Puma">Puma</option>   
            <option value="Adidas">Adidas</option>
        </select>
        <div className='mt-10 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1'>
            {
                filterproduct.map((data)=>(
                    <ProductCard key={data.id} product={data}/>              
                ))
            }
        </div>
    </div>
  )
}

export default Shoppage