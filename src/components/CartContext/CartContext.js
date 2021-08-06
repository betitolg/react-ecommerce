import React, { useState } from "react";

const CartContext = React.createContext();

function CartProvider({ children }) {
  
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);



  const addToCart = (item, count) => {
    if (cartItems.find((x) => x.id === item.id)) {
      var product = cartItems.find((x) => x.id === item.id);
      product.quantity = product.quantity + count;
      product.subtotal = product.quantity * product.price;
      const copy = [...cartItems];
      const repeteadIndex = cartItems.findIndex((x) => x.id === item.id);

      copy[repeteadIndex] = { ...copy[repeteadIndex], product };

      setCartItems(copy);
      setCartCount((prev) => prev + count);
      setCartTotalAmount((prev) => prev  + product.subtotal);
    } else {
      item.subtotal = item.quantity * item.price;
     

      setCartItems([...cartItems, { ...item, count }]);
      setCartCount((prev) => prev + count);
      setCartTotalAmount((prev) => prev  + item.subtotal);
    }
  };

  function remove(...toRemove){
    toRemove.forEach(item => {
       let index = cartItems.indexOf(item);
       if(index !== -1){
        cartItems.splice(index, 1);
       }
    })
 }

  const RemoveToCart = (item) => {
    let product = cartItems.find((x) => x.id === item);
    setCartTotalAmount((prev) => prev  - product.subtotal);

    
remove(product)
setCartItems(cartItems);
setCartCount((prev) => prev - product.quantity);

  };

  const CartClean = () =>{

    setCartCount(0);
    setCartItems([]);
   setCartTotalAmount(0);

  }

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartItems,
        addToCart,
        cartTotalAmount,
        RemoveToCart,
        CartClean
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
