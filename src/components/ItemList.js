import React ,{useEffect, useState}from "react";

import { CardDeck } from "react-bootstrap";
import Item from "./Item";

export default function ItemList(props) {

useEffect(() => {


}, [])

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
