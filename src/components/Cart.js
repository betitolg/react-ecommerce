import { Button, Jumbotron } from "react-bootstrap";
import React, { useContext } from "react";

import { CartContext } from "./CartContext/CartContext";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

export default function Cart() {
  const { cartCount, cartItems, RemoveToCart ,cartTotalAmount,CartClean} = useContext(CartContext);

  const DeleteFromCar = (item) => {
    
    RemoveToCart(item);
  };
  
  const DeleteAllFromCar =()=>{

    CartClean();

  }



  if (cartCount > 0) {
    return (
      <div>
        <Jumbotron>
          <h2>Carrito de Compras</h2>
        </Jumbotron>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id Producto</th>
              <th>Nombre </th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>SubTotal</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>$ {item.price}</td>
                <th>$ {item.price * item.quantity}</th>
                <td>Editar</td>
                <td>
                  <Button variant="danger" onClick={() => DeleteFromCar(item.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          <td>Total de productos </td>
          <td><strong>{cartCount}</strong></td>
          
          </tr>
          <tr>
          <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          <td> Precio Total del Carrito </td>
          <td><strong>$ {cartTotalAmount}</strong></td>
          
          </tr>
          </tfoot>
        </Table>
        <br>
        </br>
        <Button  variant='danger' onClick={DeleteAllFromCar} > Limpiar Carrito </Button>
        <br></br>
        <br></br>
        <Link to="/checkout">
       <Button > Procesar Carrito  </Button>
       </Link>
      <br></br>
      <br></br>
        <Link to={"/"}>Regresar a la página principal</Link>
      </div>
    );
  } else {
    return (
      <div>
        No se encuentran items en el carrito
        <Link to={"/"}>Regresar y compra nuestros productos</Link>
      </div>
    );
  }
}
