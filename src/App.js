import "./App.css";

import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {getFireStore} from "../src/components/firebase";

function App() {

  return (
    <CartProvider>
    <Router>
      <div className="container">
        <NavBar />
        <br />
      <Switch>
      <Route exact path="/" component={ItemListContainer} />
      <Route exact path="/category/:id" component={ItemListContainer} />
        <Route exact path="/item/:id" component={ItemDetailContainer} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
