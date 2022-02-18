import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { userLogout } from '../../api/userApi'


const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("crmSite");
    userLogout();
    navigate("/");
  };

  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="md"
    >
      <Navbar.Brand>logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
