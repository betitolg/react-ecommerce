import React, { useContext }  from "react";

import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const CarWidget = () => {

  const {cartCount} = useContext(CartContext);
  return (

  
    <Button variant="outline-success">
      <FaShoppingCart />
      Carrito de Compras {cartCount}
    </Button>
  );
};

export default CarWidget;
