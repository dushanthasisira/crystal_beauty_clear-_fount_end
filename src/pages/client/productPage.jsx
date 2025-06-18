import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Loding from "../../components/loding";

export default function ProductPage() {
  const [productList, setProductList] = useState([]);
  const [productLoaded, setProductLoaded] = useState(false);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL+"/api/prodcut").then((res) => {
        setProductList(res.data);
        setProductLoaded(true);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProductLoaded(true); // so it doesn't get stuck
      });
  }, []);

  return (
   <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productList.length > 0 ? (
          productList.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
