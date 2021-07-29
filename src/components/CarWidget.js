import React, { useContext }  from "react";

import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const CarWidget = (props) => {

  const {cartCount} = useContext(CartContext);
  return (

  <div style={{ display: cartCount!==0 ? "block" : "none" }}>
    <Button variant="outline-success">
      <FaShoppingCart />
      Carrito de Compras {cartCount}
    </Button></div>
  );
};

export default CarWidget;
