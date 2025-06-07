import { Link, Routes, Route } from "react-router-dom";
import {FaUsers} from "react-icons/fa"
export default function AdminPage(){
    return(
        <div className="w-full h-screen bg-gray-200 flex p-2">
            <div className="h-full w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-8 tracking-wide">Admin Panel</h2>
                <nav className="flex flex-col gap-3">
                   
                <Link to="/admin" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">  <FaUsers /> <span>Dashboard</span></Link>
                <Link to="/admin/users" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition"> 👥 <span>Users</span></Link>
                <Link to="/admin/products" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">  📦 <span>Products</span></Link>
                <Link to="/admin/orders" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition">🧾 <span>Orders</span></Link>
                <Link to="/login"className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-600 bg-red-500 transition mt-8"> 🚪 <span>Logout</span></Link>
                  
                </nav>
        </div>
            <div className="h-full w-[calc(100vw-250px)]  rounded-lg">
                 <Routes path="/">
                     <Route path="/" element={<h1>Dashboard</h1>} />
                     <Route path="/users" element={<h1>Users</h1>} />
                     <Route path="/products" element={<h1>Products</h1>} />
                     <Route path="/orders" element={<h1>Orders</h1>} />
                 </Routes>
            </div>
           
        </div>
    )
}