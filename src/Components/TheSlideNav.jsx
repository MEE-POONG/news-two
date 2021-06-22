import React, { useState } from "react";
import {
  Card,
  ListGroup,
  Button,
  Collapse,
} from "react-bootstrap";

function TheSlideNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Button bsPrefix="btn btn-outline-dark" className={window.screen.width >768? "d-none":"d-blok"} 
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
    >
      Category
    </Button>
    <Collapse in={window.screen.width >767? true:open}>
      <div id="example-collapse-text">
      <Card style={({ width: "18rem" }, { margin: "1rem" })}>
      <Card.Header>Category</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Jobs</ListGroup.Item>
        <ListGroup.Item>National</ListGroup.Item>
        <ListGroup.Item>International</ListGroup.Item>
        <ListGroup.Item>Regulation</ListGroup.Item>
        <ListGroup.Item>Business</ListGroup.Item>
        <ListGroup.Item>Media</ListGroup.Item>
        <ListGroup.Item>Energy</ListGroup.Item>
        <ListGroup.Item>Sport</ListGroup.Item>
        <ListGroup.Item>Game</ListGroup.Item>
      </ListGroup>
    </Card>
      </div>
    </Collapse>
  </>

  );
}

export default TheSlideNav;
