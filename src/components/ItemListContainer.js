import { CardDeck, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { Jumbotron } from "react-bootstrap";
import { getFireStore } from "./firebase";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([{}]);
  const [itemsid, setId] = useState([{}]);

  useEffect(() => {
    const firestore = getFireStore();

    const itemCollection = firestore.collection("productos");

    if (typeof id !== "undefined") {
      itemCollection
        .where("category", "==", id)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("Sin resultados");
          }

          let ListaProductosCopy = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
console.log("busqueda por categoria")
          setItems(ListaProductosCopy);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoaded(true);
        });
    } else {
      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("Sin resultados");
          }

          let ListaProductosCopy = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setItems(ListaProductosCopy);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoaded(true);
        });
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Spinner animation="grow" variant="dark" />;
  } else {
    return (
      <div>
        <Jumbotron>
          <h1>Bienvenido, {props.greetings}</h1>
          <p>Puedes consultar nuestros productos:</p>
        </Jumbotron>
        <CardDeck>
          <ItemList ItemList={items} />
        </CardDeck>
      </div>
    );
  }
}
