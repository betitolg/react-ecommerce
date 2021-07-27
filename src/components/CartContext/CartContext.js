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
    } else {
      item.subtotal = item.quantity * item.price;
      console.log(item);

      setCartItems([...cartItems, { ...item, count }]);
      setCartCount((prev) => prev + count);
    }
  };

  const RemoveToCart = (item) => {};

  const TotalAmountCart = () => {
    let suma = 0;
    cartItems.map(function (item) {
      suma = suma + item.subtotal;
    });

    setCartTotalAmount(suma);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartItems,
        addToCart,
        cartTotalAmount,
        TotalAmountCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
