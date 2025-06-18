import { Link } from "react-router-dom"

export default function ProductCard(props) {
    const product = props.product
    return(
       
     <Link to={"/Overview/"+product.productId} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 italic">{product.category}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-pink-600 font-bold">
            Rs. {product.price.toFixed(2)} LKR
          </span>
          {product.labeledPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              Rs. {product.labeledPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    </Link>
    )
}