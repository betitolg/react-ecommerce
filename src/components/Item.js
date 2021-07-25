import { Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";

export default function Item(props) {
  return (
  
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
        <Card.Text>
          {/* <ItemCount stock={props.stock} initial={0} /> */}
        </Card.Text>
        <div style={{ color: "red" }}> Precio: $ {props.price}</div>
        <Link to={"/item/"+props.id}>
        <Button variant="primary">Ver Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
    
  );
}
