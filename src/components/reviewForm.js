import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Reviews () {
    const[reviews, setReviews] = useState([]);

    const[submitted, setSubmitted] = useState(false);

    const handleReviews = (e) => {
        setReviews(reviews, e.target.value);
        alert(reviews)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }
    
    return(
    <div>
        <form onSubmit={handleSubmit}>
        
            <input type='text' defaultValue='' name='reviews' placeHolder="Enter Review" >

            </input>
            <Button variant="outline-success" onClick={handleReviews}>Submit</Button>{submitted}
        </form>
        
    </div>
    );
};

export default Reviews;