import { Alert } from "react-bootstrap";
import React from 'react';

export default function AlertItem(props) {
   
  
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
