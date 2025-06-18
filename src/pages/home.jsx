import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPage from "./client/productPage";
import ProductOverviewPage from "./client/productOverviewPage";
import CartPage from "./client/cart";
export default function HomePage(){
    return(
      <div className="w-full h-screen min-h-screen">
<Header />
<div className="w-full h-[calc(100vh-75px)]">
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/product" element={<ProductPage/>} />
      <Route path="/overview/:id" element={<ProductOverviewPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  </div>
</div>     
    )
}