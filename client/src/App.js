import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import DestinationNew from './containers/DestinationNew';
import DestinationsPage from './containers/DestinationsPage';
import DestinationShow from './containers/DestinationShow';
import './App.css';
import Navbar from './components/Navbar';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <link href="https://fonts.googleapis.com/css?family=Audiowide" rel="stylesheet"/>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/destinations/new" component={DestinationNew} />
                <Route exact path="/destinations" component={DestinationsPage} />
                <Route path="/destinations/:id" component={DestinationShow} />
            </Switch>
          </header>
          <footer>
            <div id="nasa-box">
              <div id="nasa-pic-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
                  className="img-fluid" alt="Nasa" />
              </div>
              &nbsp;&nbsp;<a href="https://www.jpl.nasa.gov/visions-of-the-future/" >- Images source: NASA/JPL</a>
            </div>
            &copy; Copyright 2018 - Frederico Morato - Flatiron School
          </footer>
        </div>
      </Router>
    );
  }
}


export default App;
