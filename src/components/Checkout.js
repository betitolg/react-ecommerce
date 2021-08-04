import { Button, Form, Table } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import { CartContext } from "./CartContext/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cartCount, cartItems, RemoveToCart, cartTotalAmount, CartClean } =
    useContext(CartContext);

  const [datosPersonales, setDatosPersonales] = useState([{}]);

  //0 -> no existen productos en el carrito
  //1 -> existen productos para procesar
  //2 -> compra terminada
  const [statusCompra, setStatusCompra] = useState(1);
  const [total] = useState(cartTotalAmount);

  const ProcesarComprar = (evt) => {
    evt.preventDefault();

    setDatosPersonales({
      buyer: {
        name: "Horacio",
        phone: "5434343",
        email: "d.lopezg@outlook.com",
      },
      ordenes: cartItems,
      date: new Date(),
      total: cartTotalAmount,
    });
console.log(datosPersonales);
    setStatusCompra(2);
    CartClean();
  };

  if (statusCompra == 0) {
    return (
      <div>necesitas agregar productos a tu carrito para hacer el checkout</div>
    );
  } else if (statusCompra == 1) {
    return (
      <div>
        <div>
          <h2>Detalle de tu carrito:</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id Producto</th>
                <th>Nombre </th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>SubTotal</th>
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
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Total de productos </td>
                <td>
                  <strong>{cartCount}</strong>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td> Precio Total del Carrito </td>
                <td>
                  <strong>$ {cartTotalAmount}</strong>
                </td>
              </tr>
            </tfoot>
          </Table>
        </div>

        <h2>Ingresa tus datos personales:</h2>
        <Form id="datosPersonales" style={{ border: 2 }}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nombres </Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTelefono">
            <Form.Label>Teléfono </Form.Label>
            <Form.Control type="phone" placeholder="Ingresar teléfono" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={ProcesarComprar}>
            Cerrar compra
          </Button>
        </Form>
      </div>
    );
  } else {
    return (
      <div>
        Compra finalizada con número de orden ########
        <br></br>
        Pagaste {total}
        <br></br>
      
        <br></br>
        <Link to={"/"}>Regresar y compra nuestros productos</Link>
      </div>
    );
  }
}
