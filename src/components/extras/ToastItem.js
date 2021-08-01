import { Button, Col, Row, Toast } from "react-bootstrap";
import React, { useState } from 'react';

const ToastItem =(props)=>{
    const [show, setShow] = useState(false);

    
    return (
        <Row>
          <Col xs={6}>
     
            <Toast onClose={() => setShow(false)} show={props.show} delay={3000} autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Producto Agregado</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Se agregó correctamente</Toast.Body>
            </Toast>
           
          </Col>
        
        </Row>
      );

}

export default ToastItem;