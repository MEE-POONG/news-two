import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TheSlideNav from "../Components/TheSlideNav";
import NewsContents from "../Components/NewsContents";
import CardUser from "../Components/CardUser";
import CardScore from "../Components/CardScore";

function Content() {
  return (
    <Container className="pt-3">
      <Row>
        <Col sm={3} className="py-3">
          <CardUser />
          <TheSlideNav />
        </Col>
        <Col sm={5}>
          <h1>Today Headlines</h1>
          <NewsContents />
        </Col>
        <Col sm={4}>
         <h1>Sport News</h1> 
          <CardScore />
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
