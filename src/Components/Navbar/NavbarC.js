import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "./logo.png";

const NavbarC = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width="30" height="30" alt="" /> React State
            Checkpoint (ToDoList)
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarC;
