
export default function getCart(){
    let cart = localStorage.getItem("cart");
    if(cart == null){
        cart = []
        localStorage.setItem("cart", JSON.stringify(cart))

        return[]
    }

    cart = JSON.parse(cart)
    return cart
}

export function addToCart(prodcut, qty){
    let cart =getCart();

    let productIndex = cart.findIndex((pro_cut) => pro_cut.productId === prodcut.productId)

   if (productIndex == -1) {
     
     cart.push(
        {
            
        productId :  prodcut.productId,
        name :  prodcut.name,
        altNames :  prodcut.altNames,
        price :  prodcut.price,
        labeledPrice :  prodcut.labeledPrice,
        images :  prodcut.images[0],
        quantiti : qty,
        }
     )
   }else{
    cart[productIndex].quantiti += qty

     if(cart[productIndex].quantiti <= 0 ){
    
    cart = cart.filter(product => product.productId !== prodcut.productId);
   }
   
   }
 localStorage.setItem("cart", JSON.stringify(cart))
  return cart
  
}

export function removeForCatr(productId){ 
let cart = getCart();
cart = cart.filter(product => product.productId !== productId);
localStorage.setItem("cart", JSON.stringify(cart));
return cart;

}

