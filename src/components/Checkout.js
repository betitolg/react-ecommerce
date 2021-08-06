import { Badge, Button, Form, Table } from "react-bootstrap";
import React, { useContext, useState } from "react";

import { CartContext } from "./CartContext/CartContext";
import { Link } from "react-router-dom";
import { getFireStore } from "./firebase";

export default function Checkout() {
  const { cartCount, cartItems, cartTotalAmount, CartClean } =
    useContext(CartContext);



  //0 -> no existen productos en el carrito
  //1 -> existen productos para procesar
  //2 -> compra terminada
  const [statusCompra, setStatusCompra] = useState(1);
  const [total] = useState(cartTotalAmount);
  const [countItems] = useState(cartCount);
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
const [idOrder,setOrderId] = useState("");

  const ProcesarComprar = (evt) => {
    evt.preventDefault();

    const firestore = getFireStore();

firestore.collection("orders").add({
  buyer: {
    name: enteredName,
    phone: enteredPhone,
    email: enteredEmail,
  },
  items: cartItems,
  date: new Date(),
  total: cartTotalAmount,
  }).then((docRef)=>{
      
    setOrderId(docRef.id)

  });

 


    setStatusCompra(2);
    CartClean();

  };

const NameChangeHandler =(evt)=>{
  setEnteredName(evt.target.value);
}
const PhoneChangeHandler =(evt)=>{
  setEnteredPhone(evt.target.value);
}
const EmailChangeHandler =(evt)=>{
  setEnteredEmail(evt.target.value);
}


  if (statusCompra === 0) {
    return (
      <div>necesitas agregar productos a tu carrito para hacer el checkout</div>
    );
  } else if (statusCompra === 1) {
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
                <tr key={item.id}>
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
        <Form id="datosPersonales" style={{ border: 2 }} onSubmit={ProcesarComprar}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nombres </Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" onChange={NameChangeHandler}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTelefono">
            <Form.Label>Teléfono </Form.Label>
            <Form.Control type="phone" placeholder="Ingresar teléfono" onChange={PhoneChangeHandler}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico </Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={EmailChangeHandler} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Cerrar compra
          </Button>
        </Form>
      </div>
    );
  } else {
    return (
      <div>
 <h2>
   Hola   {enteredName} , compraste  <Badge bg="secondary">{countItems} productos</Badge>
  </h2>
     
<br/>
        Compra finalizada con número de orden <strong> {idOrder} </strong>
        <br></br>
        Pagaste $ {total} soles
        <br></br>
      
        <br></br>
        <Link to={"/"}>Regresar y compra nuestros productos</Link>
      </div>
    );
  }
}
