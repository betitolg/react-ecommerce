import { Button, Jumbotron } from "react-bootstrap";
import React, { useContext, useState } from "react";

import { CartContext } from "./CartContext/CartContext";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

export default function Cart(params) {

  const { cartCount, cartItems } = useContext(CartContext);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

 
if(cartCount>0){

  return (



    <div>
      <Jumbotron>
        <h2>Carrito de Compras</h2>
      </Jumbotron>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>SubTotal</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>$ {item.price}</td>
              <th>$ {item.price * item.quantity}</th>
              <td>Editar</td>
              <td>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
          
        </tbody>
       
      </Table>
      Total de productos : {cartCount}
      <br></br>
      <Link to={"/"}>Regresar a la página principal</Link>
    </div>
  );}
  else{

    return (<div>No se encuentran items en el carrito
  <Link to={"/"}>Regresar y compra nuestros productos</Link>

    </div>)
    
  }
}
