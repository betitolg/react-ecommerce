import './ItemCount.css'

import { Button } from "react-bootstrap";
import React  from "react";

export default function ItemCount(props) {


  return (
    <div className={props.vStatus}>
      
      <h6 style={{ color: "red" }}>Stock disponible: {props.stock}</h6>

   
      <Button variant="dark" onClick={props.removeProduct}>
        -
      </Button>
      <input type="text" value={props.count} style={{ width: "50px" }} />
      <Button variant="dark" onClick={props.addProduct}>
        +
      </Button>
    </div>
  );
}
