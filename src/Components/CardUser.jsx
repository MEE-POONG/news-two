import React from 'react'
import { Card,ListGroup } from 'react-bootstrap'

function CardUser() {
    return (
        
            <Card className="d-none d-md-blok d-lg-block d-xl-block" style={({ width: "18rem"},{ margin: "1rem" })}>
              <Card.Header>Featured</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
          
    )
}

export default CardUser
