import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo from '../logo.svg';
import star from '../star.svg';


const Landing = () => {
  return (
    <div className="outter-home-wrapper">
      <div className="inner-home-wrapper">
        <div id="star-1">
          <img src={star} className="img-fluid" alt="star" />
        </div>
        <div id="star-2">
          <img src={star} className="img-fluid" alt="star" />
        </div>
        <div id="star-3">
          <img src={star} className="img-fluid" alt="star" />
        </div>
        <div id="welcome-logo">
          <img src={logo} className="img-fluid" alt="logo" />
        </div>
        <div id="star-4">
          <img src={star} className="img-fluid" alt="star" />
        </div>
        <div id="star-1">
          <img src={star} className="img-fluid" alt="star" />
        </div>
        <h1>Planet Express</h1>
        <p id="landing-p">Vacation destinations that are out of this world!</p>
        <Link to="/destinations">
            <Button className="btn btn-sm btn-danger">Get Started</Button>
        </Link>
      </div>
    </div>
  )
};


export default Landing;
