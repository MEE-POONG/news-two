import React from "react";
import { Card } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

function CardUser() {
  return (
    <Card
      className="d-none d-md-blok d-lg-block d-xl-block"
      style={({ width: "18rem" }, { margin: "1rem" })}
    >
      <Card.Body >
        <Avatar src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg" ></Avatar>
        <Card.Title className="pt-2"> Ataxx taa.</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardUser;
