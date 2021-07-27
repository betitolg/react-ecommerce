import React, { useState } from "react";

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, count) => {

    console.log(item,count);
    setCartItems([...cartItems, { ...item, count }]);
    setCartCount((prev) => prev + count);
  };

  //   const isInCart = (id) => {
  //     if (cart.data.find((ident) => ident.id === producto.id)) {
  //       return true;
  //     }
  //   };

  return (
    <CartContext.Provider value={{ cartCount, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
