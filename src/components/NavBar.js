import { Nav, NavDropdown, Navbar } from "react-bootstrap";

import CarWidget from "./CarWidget";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
     
      <Link to="/">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {"Tienda React"}
        </Navbar.Brand>
      </Link>

      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
      
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
         
        <NavDropdown.Item> <Link to={'/category/1'}>Categoria 1 </Link></NavDropdown.Item>
        <NavDropdown.Item> <Link to={'/category/2'}>Categoria 2 </Link></NavDropdown.Item>
        <NavDropdown.Item> <Link to={'/category/3'}>Categoria 3 </Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Link to="/cart">
          <CarWidget />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
