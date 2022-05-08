import React from 'react';
import Reviews from './reviewForm';
import { propTypes } from 'react-bootstrap/esm/Image';

const reviewDisplay = (Reviews, props) =>{
return(
    <div>
        Reviews: {props.review = Reviews}
    </div>
)
}

export default reviewDisplay;