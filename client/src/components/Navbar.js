import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';


const Navbar = () => {
  return (
    <nav className="outter-nav-wrapper">
      <div className="inner-nav-wrapper">
        <div id="logo-box">
          <img src={logo} className="img-fluid" alt="logo" />
        </div>
        <div id="title-box">
          <h4><Link className="nav-header" to={`/`}>Planet Express</Link></h4>
        </div>
        <div className="nav-links">
          <Link to="/destinations" className="nav-a">Destinations</Link>
          <Link to="/destinations/new" className="nav-a">Create Destination</Link>
        </div>
      </div>
    </nav>
  )
};


export default Navbar;
