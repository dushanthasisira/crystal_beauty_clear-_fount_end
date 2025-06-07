import "./product-card.css";

export default function ProductCard(props) {
    console.log(props);
    return (
        <div className="w-full bg-red-900 text-white text-xl p-4 rounded-lg border border-white m-3">
            <h1 className="text-2xl font-bold mb-2">{props.name}</h1>
            <p className="mb-2">{props.description}</p>
            <p className="mb-4 font-semibold">{props.price}</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                Add to Cart
            </button>
        </div>
    );
}