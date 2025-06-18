import { useState, useEffect } from "react"
import getCart, { addToCart, removeForCatr } from "../../utils/cart"
import { IoTrashBinOutline } from "react-icons/io5";

export default function CartPage(){
     const [cartLoaded, setCradLoaed] = useState(false)
       const [cart,setCart] = useState([])
    useEffect(()=>{
        if(cartLoaded == false){
            const cart = getCart()
            setCart(cart)
            setCradLoaed(true)
        }
    },[cartLoaded])
    
    return(
        <div className="w-full h-full flex flex-col items-center mt-2">
            {
               
                       <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => {

            return(
            //  cart.map((item, index)=>{
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="w-full md:w-1/4 flex-shrink-0">
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>

              {/* Product Info */}
              <div className="w-full md:w-2/4 mt-4 md:mt-0 px-4">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  {Array.isArray(item.altNames) ? item.altNames.join(" | ") : ""}
                </p>
                <div className="mt-2">
                  {item.labeledPrice > item.price ? (
                    <>
                      <span className="text-pink-600 font-bold">
                        Rs. {item.price.toFixed(2)} LKR
                      </span>
                      <span className="ml-2 text-gray-400 line-through">
                        Rs. {item.labeledPrice.toFixed(2)} LKR
                      </span>
                    </>
                  ) : (
                    <span className="text-pink-600 font-bold">
                      Rs. {item.price.toFixed(2)} LKR
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="w-full md:w-1/4 flex flex-col items-center mt-4 md:mt-0">
                <div className="flex items-center space-x-3">
                  <button className="px-2 py-1 bg-pink-100 text-pink-700 rounded hover:bg-pink-200" onClick={
                    ()=>{
                      addToCart(item, -1)
                      setCradLoaed(false)
                    }
                  }>
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantiti || 1}</span>
                  <button className="px-2 py-1 bg-pink-100 text-pink-700 rounded hover:bg-pink-200" onClick={
                    ()=>{
                      addToCart(item, 1)
                      setCradLoaed(false)
                    }
                  }>
                    +
                  </button>
                </div>
                <button className="mt-3 text-red-500  hover:text-red-700 cursor-pointer text-3xl" onClick={
                    ()=>{
        
                        removeForCatr(item.productId)
                        setCradLoaed(false)
                    }
                }>
                  <IoTrashBinOutline />
                </button>
              </div>
            </div>
                )})}

          {/* Summary / Checkout */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Total:</h3>
              <span className="text-xl font-bold text-pink-600">
                Rs. {(cart.reduce((sum, item) => sum + item.price * item.quantiti, 0)).toFixed(2)}{" "}
                LKR
              </span>
            </div>
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-medium transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
                   
               
            }
        </div>
    )
}