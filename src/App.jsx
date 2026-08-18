import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Mainlayout from './Component/Layout/Mainlayout'
import Homepage from './Page/Homepage'
import ProductDetail from './Component/product/productdetail'
import Shoppage from './Page/Shoppage'




function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Mainlayout/>}>

      <Route path='/' element={<Homepage/>}/>

      <Route path='/product/:id' element={<ProductDetail/>}/>

      <Route path='/shop' element={<Shoppage/>}/>

      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App