import { useState } from 'react'
import './App.css'
import ProductCard from './components/product-card'
import Header from './components/header'

function App() {
  return (
    <>
<div className="w-full h-screen bg-pink-500">
      <div className='w-[500px] flex flex-col justify-center items-center h-[500px] bg-gray-200 relative'>
        <div className="w-[90px] h-[90px] bg-red-600"></div>
        <div className="w-[90px] h-[90px] bg-yellow-600 absolute right-[50px] top-[50px]"></div>
        <div className="w-[90px] h-[90px] bg-blue-600 fixed right-[50px] bottom-[50px]"></div>
        <div className="w-[90px] h-[90px] bg-green-600"></div>
      </div>
   </div>
       <div className=''>
             <Header></Header>
             <ProductCard name="iphone 16" description="aaa aaa aaa aa" price="6500.00"/>
             <ProductCard name="iphone 15 Max" description="aaa aaa aaa aa" price="4500.00"/>
             <ProductCard name="iphone 15" description="aaa aaa aaa aa" price="4000.00"/>
      </div>
    </>
  )
}
export default App
