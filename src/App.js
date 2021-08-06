import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext/CartContext";
import Checkout from "../src/components/Checkout"
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import React from 'react'

function App() {

  return (
  
    <Router>
        <CartProvider>
      <div className="container">
        <NavBar />
        <br />
      <Switch>
      <Route exact path="/" component={ItemListContainer} />
      <Route exact path="/category/:id" component={ItemListContainer} />
        <Route exact path="/item/:id" component={ItemDetailContainer} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      </div>
      </CartProvider>
    </Router>
   
  );
}

export default App;
