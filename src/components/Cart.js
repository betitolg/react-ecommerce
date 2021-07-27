import React, { useContext, useState } from "react";

import { CartContext } from "./CartContext/CartContext";

export default function Cart(params) {
  const { cartCount, cartItems } = useContext(CartContext);

  return (
    <div>
      

      {cartCount}
    </div>
  );
}
