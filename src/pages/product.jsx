import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";

export default function AdminProductPage() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    // Create socket connection inside useEffect
    const socket = io(import.meta.env.VITE_BACKEND_URL);

    // Fetch initial data
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product`);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchData();

    // Listen for real-time updates
    socket.on("product-updated", (updatedProducts) => {
      setProduct(updatedProducts);
    });

    // Cleanup socket on unmount
    return () => {
      socket.off("product-updated");
      socket.disconnect();
    };
  }, []); // Empty dependency array — runs only once

  return (
    <div className="w-full p-6 bg-gray-100 min-h-screen relative">
      <Link
        to={"/admin/addProduct"}
        className="text-white bg-gray-500 p-[12px] text-3xl rounded-full cursor-pointer hover:text-gray-800 hover:bg-gray-400 absolute right-5 top-5"
      >
        <FaPlus />
      </Link>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Product Inventory</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Label Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-150 ease-in-out">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{product.productId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Rs.{product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Rs.{product.labeledPrice}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}