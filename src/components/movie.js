import React from 'react';
import {Card, Button} from 'react-bootstrap';
import StarRating from './stars';
import Reviews from './reviewForm';
import reviewDisplay from './reviewDisplay';
export default function Movies (props){
    return(
        <div class='row' className="border">
            <div class='container'>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" />
  <img src={props.image} alt={props.alt}/>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <Card.Text>
        Rating: {props.rating}
    </Card.Text>
    <StarRating/>
    <Reviews/>
    <reviewDisplay/>
  </Card.Body>
</Card>
        <br></br>

            </div>
        </div>

    )
}
