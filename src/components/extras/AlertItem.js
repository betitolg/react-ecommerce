import { Alert, Button } from "react-bootstrap";
import React, { useState } from 'react';

export default function AlertItem(props) {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={props.show} variant="success">
          <Alert.Heading>Alerta</Alert.Heading>
          <p>
            Se añadió el producto al carrtio
          </p>
          <hr />
          <div className="d-flex justify-content-end">
           
          </div>
        </Alert>
  
       
      </>
    );
  }
