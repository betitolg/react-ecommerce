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

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
       
          <Nav.Link href="#link">Nosotros</Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <Link to="/item/3">Detail</Link>
            <NavDropdown.Item href="#">Categoria 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Categoria 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Categoria 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Categoria 4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Link to="/cart">
        <CarWidget />
        </Link>
      </Navbar.Collapse>
    </Navbar>
    
  );
}
