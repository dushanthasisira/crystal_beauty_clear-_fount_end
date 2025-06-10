import { Link } from "react-router-dom"

export default function AddProductFrom(){
    return(
        <div className="w-full h-full rounded-lg flex justify-center items-center">
           
            <div className="w-[500px] h-[600px] bg-gray-200 rounded-lg shadow-lg flex flex-col items-center ">
                 <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
                <input onChange={(e)=>{setEmail(e.target.value)}} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl "  type="email" placeholder="Procuct ID"  />
                <input onChange={(e)=>{setEmail(e.target.value)}} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl "  type="email" placeholder="Procuct Name"  />
                <input onChange={(e)=>{setEmail(e.target.value)}} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl "  type="email" placeholder="Alternate Names"  />
                <input onChange={(e)=>{setEmail(e.target.value)}} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl "  type="email" placeholder="Price"  />
                <input onChange={(e)=>{setEmail(e.target.value)}} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl "  type="email" placeholder="Labeled Price"  />
                <textarea onChange={(e)=>{setEmail(e.target.value)}} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl "  type="email" placeholder="Description"  />
                <input onChange={(e)=>{setEmail(e.target.value)}} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl "  type="email" placeholder="Stock"  />
                <div className="w-[400px] h-[100px] flex justify-between items-center">
                    
                     <Link to={"/admin/products"} className="w-[50%] bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-900 transition duration-200 text-center" > Cansel </Link>
                     <Link className="w-[50%] bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-900 transition duration-200 m-3 text-center" > Add Product  </Link>

                </div>
               
            </div>
            
        </div>
    )
}