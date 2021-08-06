import { Button, Card, Spinner } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";

import AlertItem from "../components/extras/AlertItem";
import { CartContext } from "./CartContext/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { getFireStore } from "./firebase";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const [count, moreCount] = useState(0);
  const [stock, setStock] = useState(0);
  const [statusBoton, setStatusBoton] = useState(false);
  const [statusAlert, setStatusAlert] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [statusBotonComprar, setstatusBotonComprar] = useState(false);
  const [stateItemCount, setstateItemCount] = useState("itemcount");


  const AddProduct = () => {
    if (count < stock) {
      moreCount(count + 1);
      if (count + 1 > 0) {
        setStatusBoton(true);
      }
    }
  };
  const RemoveProduct = () => {
    if (count === 1) {
      setStatusBoton(false);
    }

    if (count > 0) {
      moreCount(count - 1);
    }
  };

  const Comprar = (items, count) => {
    items.quantity = count;

    setStatusAlert(true);
    addToCart(items, count);
    setstatusBotonComprar(true);
    setstateItemCount("itemcounthide");
    setStatusBoton(false);
  };

  useEffect(() => {

    const firestore = getFireStore();

    const itemCollection = firestore.collection("productos");

    const item = itemCollection.doc(id);
    
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("no existe");
          return;
        }
        setItems({id:doc.id,...doc.data()});
        

        setStock(doc.data().stock);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  },[id]);

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
            vStatus={stateItemCount}
          />
       
          <br />
       
          <Button
            style={{ display: statusBoton ? "block" : "none" }}
            variant="primary"
            onClick={() => Comprar(items, count)}
          >
            Agregar al Carrito
          </Button>
          <br />
          <br />
          <Link to={"/cart"}>
            <Button style={{ display: statusBotonComprar ? "block" : "none" }}>
              Terminar Compra
            </Button>
          </Link>
          {/* </Link> */}
        </Card.Footer>
        <AlertItem show={statusAlert} />
      </Card>
    );
  }
}
