import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";

const [items] = useState([
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

function NewsContents() {
  return (
    <>
       
        <div className="">
          <Card className="text-center">
            <Card.Img src="" />
            <Card.Body>
              <Card.Title>{items.title}</Card.Title>
              <Card.Text>{items.caption}</Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>;
     
    </>
  );
}

export default NewsContents;
