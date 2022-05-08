import React from 'react';
import './components/App.css';
import { Nav, Navbar } from 'react-bootstrap';
import Movies from './components/movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Batman from './components/batman.jpg';
import Adam from './components/adam.jpg';
import thirteen from './components/13.jpg';
import Reviews from './components/reviewForm';
import ReviewsDisplay from './components/reviewDisplay';

function App() {
  return (
    <>
    
        <Navbar className="justify-content-center" bg="dark" variant="dark" sticky="top" >
        <Navbar.Brand>
          Generic Reviews
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="Home">Home</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href="Reviews">Reviews</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href="Contact">Contact</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href="About">About</Nav.Link>
        </Nav>
      </Navbar>
      <h2>Welcome to Generic Reviews</h2>
                <p>Please Rate Our Movie Collection and Leave A Generic Review! <br></br>Donations Can Be Sent To GenericReviews@paypal.com</p>
      <Movies image={thirteen} alt='13 Going on 30' name='13 Going on 30' description='A girl whos sick of the social strictures of junior high is transformed into a grownup overnight' rating='8.5' />
      <Movies image={Batman} alt='The Batman'name='The Batman' description='Batman ventures into Gotham Citys underworld when a sadistic killer leaves behind a trail of cryptic clues.' rating='9.5'/>
      <Movies image={Adam} alt="The Adam Project" name='The Adam Project' description='After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future.' rating='8.0'/>
    </>
  
  );
}

export default App;
