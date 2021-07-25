import { Button, Card, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const [count, moreCount] = useState(0);
  const [stock, setStock] = useState(0);
  const [statusBoton, setStatusBoton] = useState(true);

  const AddProduct = () => {
    if (count < stock) {
      moreCount(count + 1);
      if (count + 1 > 0) {
        setStatusBoton(false);
      }
    }
  };
  const RemoveProduct = () => {
    if (count === 1) {
      setStatusBoton(true);
    }

    if (count > 0) {
      moreCount(count - 1);
    }
  };

  useEffect(() => {
    console.log(id);
    fetch("https://productsrestservice.azurewebsites.net/api/product/" + id)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setStock(result.stock);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Spinner animation="grow" variant="dark" />;
  } else {
    return (
      <Card className="text-center">
        <Card.Header>Consulta Producto : {items.name}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={items.img} />
          <Card.Title>{items.name}</Card.Title>
          <Card.Text>{items.description} </Card.Text>

          <div style={{ color: "red" }}> Precio: $ {items.price}</div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <ItemCount
            count={count}
            stock={items.stock}
            initial={0}
            addProduct={AddProduct}
            removeProduct={RemoveProduct}
          />
          <br />
          <Link to={"/cart"}>
            <Button variant="primary" disabled={statusBoton}>
              Terminar Compra
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    );
  }
}