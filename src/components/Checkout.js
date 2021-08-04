import { Form, FormControl, InputGroup, Table } from "react-bootstrap";
import React, { useContext } from "react";

import { CartContext } from "./CartContext/CartContext";

export default function Checkout() {
  const { cartCount, cartItems, RemoveToCart, cartTotalAmount, CartClean } =
    useContext(CartContext);

  return (
    <div>
        <h2>Ingresa tus datos personales:</h2>
      <Form id="datosPersonales">
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Correo electrónico </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

      </Form>

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
    </div>
  );
}
