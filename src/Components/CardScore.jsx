import React from 'react'
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap'


function CardScore() {
    return (
  
        <Card  style={{ width: '18rem' },{ margintop: "1rem" }}>
        <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          <small className="text-muted" >VS Full time</small>
          </Card.Text>
          <Card.Title>Card Title</Card.Title>
          </ListGroupItem>
          <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

          </ListGroup>
        </Card.Body>
      </Card>
      
    )
}

export default CardScore
