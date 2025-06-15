import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { useState } from "react"
import axios from "axios"
import mediaUpload from "../utils/mediaUpload";

export default function AddProductForm() {
    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [altName, setAltName] = useState("");
    const [price, setPrice] = useState("");
    const [labelPrice, setLabelPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [images, setImages] = useState([]);        // Actual files
const [previews, setPreviews] = useState([]);    // Preview URLs
    const navigate  = useNavigate()  

    async function handleSubmit() {

        const promiseArray = []
for(let i=0; i<images.length; i++){
   const promise = mediaUpload(images[i])
   promiseArray[i] = promise
}



const result = await Promise.all(promiseArray)

try{


console.log(result)


        const altNameInArray = altName.split(",");
       
        const product = {
            productId : productId,
  name: name,
  altNames: altName,
  price: price,
  labeledPrice: labelPrice,
  description: description,
  images: result,
  stock: stock
        };
       

        const token = localStorage.getItem("token");
     

       await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/prodcut", product, {
            headers: {
                "Authorization": "Bearer "+token
            }
        })
          toast.success("Product added successfully")
            navigate("/admin/products")

        }catch(error){
            console.log(error)
            toast.error("Product addition failed");

        }
    }

    return (
        <div className="w-full h-full rounded-lg flex justify-center items-center">
            <div className="w-[500px] h-[600px] bg-gray-200 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
                <input onChange={(e) => setProductId(e.target.value)} value={productId} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl" type="text" placeholder="Product ID" />
                <input onChange={(e) => setName(e.target.value)} value={name} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl" type="text" placeholder="Product Name" />
                <input onChange={(e) => setAltName(e.target.value)} value={altName} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl" type="text" placeholder="Alternate Names (comma-separated)" />
                <input onChange={(e) => setPrice(e.target.value)} value={price} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl" type="number" placeholder="Price" />
                <input onChange={(e) => setLabelPrice(e.target.value)} value={labelPrice} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl" type="number" placeholder="Labeled Price" />
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl" placeholder="Description" />
                <input onChange={(e) => setStock(e.target.value)} value={stock} className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl" type="number" placeholder="Stock" />
                <input
  type="file"
  multiple
  onChange={(e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
  }}
  className="w-[400px] h-[50px] border border-gray-500 text-center m-1 rounded-xl"
/>

<div className="w-[400px] flex flex-wrap justify-center gap-2 my-2">
  {previews.map((src, index) => (
    <div key={index} className="relative">
      <img
        src={src}
        alt={`preview-${index}`}
        className="w-20 h-20 object-cover rounded-md border"
      />
      <button
        onClick={() => {
          // Remove the image and preview at index
          setImages((prev) => prev.filter((_, i) => i !== index));
          setPreviews((prev) => prev.filter((_, i) => i !== index));
          // Optionally revoke object URL to free memory
          URL.revokeObjectURL(src);
        }}
        className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-800"
        type="button"
      >
        ×
      </button>
    </div>
  ))}
</div>

                <div className="w-[400px] h-[100px] flex justify-between items-center">
                    <Link to={"/admin/products"} className="w-[50%] bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-900 transition duration-200 text-center">Cancel</Link>
                    <button onClick={handleSubmit} className="w-[50%] bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-900 transition duration-200 m-3 text-center cursor-pointer">Add Product</button>
                </div>
            </div>
        </div>
    );
}
