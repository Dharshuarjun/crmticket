import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./crm-logo.png";
import { Link,NavLink,useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Dashboard from "./Dashboard";
export const Header = () => {
  const history = useHistory();
  const LogmeOut = () => {
    history.push("/");
  };
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="img" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <a href="/dashboard">Dashboard</a>
            <a href="/tickets">Tickets</a>
            <a href="/">Logout</a>
        
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
