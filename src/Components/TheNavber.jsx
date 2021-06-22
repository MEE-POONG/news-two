import React from "react";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import { GrHome } from "react-icons/gr";
import { FiFilm } from "react-icons/fi";
import { FaPoll,FaRegFileImage } from "react-icons/fa";

export default function TheNavbar() {
  return (
    <Navbar bg="ligth" expand="lg" className="flex">
      <Container>
        <Navbar.Brand href="#">News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <GrHome />
              Home
            </Nav.Link>
            <Nav.Link href="#action2">
              <FiFilm />
              vidio
            </Nav.Link>
            <Nav.Link href="#action2">
              <FaPoll />
              pools
            </Nav.Link>
            <Nav.Link href="#action2">
              <FaRegFileImage />
              vidio
            </Nav.Link>
            <Nav.Link href="#action2">
              <FiFilm />
              vidio
            </Nav.Link>
            
          </Nav>
          <Form className="d-flex ">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 "
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
