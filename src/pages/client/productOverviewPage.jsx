import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Loading  from "../../components/loding";// Make sure this path is correct
import ImageSlider from "../../components/imagesSlider"; // Make sure this path is correct
import getCart, { addToCart } from "../../utils/cart";
import toast from "react-hot-toast";

export default function ProductOverviewPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!params.id) {
      navigate("/products");
      return;
    }

    axios
      axios.get(import.meta.env.VITE_BACKEND_URL+"/api/prodcut/"+params.id).then((res) => {
        setProduct(res.data.product);
        setStatus("loaded");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, [params.id, navigate]);

  if (status === "loading")
    return <Loading />;

  if (status === "error")
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl">
        Failed to load product.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <ImageSlider images={product.images} />
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
        {Array.isArray(product.altNames) && product.altNames.length > 0 && (
          <h3 className="text-xl text-gray-500 italic">
            {product.altNames.join(" | ")}
          </h3>
        )}

        {/* Price Section */}
        <div className="flex items-center space-x-4 mt-4">
          <span className="text-3xl font-semibold text-pink-600">
            Rs. {product.price.toFixed(2)} LKR
          </span>
          {product.labeledPrice > product.price && (
            <span className="text-lg text-gray-400 line-through">
              Rs. {product.labeledPrice.toFixed(2)} LKR
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none" onClick={
            ()=>{
              addToCart(product, 1)
              toast.success("Product added to cart")
              console.log(getCart())
            }
          }>
            Add To Cart
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}