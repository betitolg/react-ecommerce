import { CardDeck } from "react-bootstrap";
import Item from "./Item";
import React from "react";

export default function ItemList(props) {

  return (
    <CardDeck>
     {props.ItemList.map((item) => (

        <Item key={item.id}
          titulo={item.name}
          descripcion={item.description}
          img={item.img}
          stock={item.stock}
          price={item.price}
          id={item.id}
        />
      ))
    }


     </CardDeck>
  );
  
}
