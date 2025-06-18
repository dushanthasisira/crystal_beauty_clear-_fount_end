import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div className="bg-pink-50 min-h-screen py-12 px-4 md:px-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-700 mb-2">Our Products</h1>
        <p className="text-pink-500 text-lg">
          Discover our hand-picked beauty essentials to glow every day
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-pink-700">
                {product.name}
              </h2>
              <p className="text-pink-500 mb-2">{product.altName}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-pink-600">
                  ${product.price}
                </span>
                <span className="text-sm line-through text-pink-300">
                  ${product.labelPrice}
                </span>
              </div>
              <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
