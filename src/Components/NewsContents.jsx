import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";



function NewsContents() {
  const [itemsm, setItemsm] = useState([
    {
      src: "https://cdn.pixabay.com/photo/2020/06/22/08/27/cat-5328304_960_720.jpg",
      title: "title",
      caption: "this caption here",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/06/22/08/27/cat-5328304_960_720.jpg",
      title: "title",
      caption: "this caption here",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/06/22/08/27/cat-5328304_960_720.jpg",
      title: "title",
      caption: "this caption here",
    },
  ]);
  return (
    <div className="">
      <Row>
        {itemsm ? (
          itemsm.map((e, index) => (
            <Col md={12} sm={12}>
              <Card className="text-center">
                <Card.Img src={e.src} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>{e.caption}</Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          null
        )}
      </Row>
      <Card className="text-center">
      </Card>
    </div>
  );
}

export default NewsContents;
