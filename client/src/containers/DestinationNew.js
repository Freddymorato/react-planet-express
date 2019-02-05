import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDestination } from '../actions';


class DestinationNew extends Component {

  constructor() {
    super();
    this.state = {
      name: '' ,
      img_url: '',
      astronomical_body: '',
      view_on_maps: '',
      radius: '',
      description: ''
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createDestination(this.state)
    this.props.history.push('/destinations')
  }

  render() {
    return (
      <React.Fragment>
        <form className="destination-form" onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" name="name" placeholder="(Name)" value={this.state.name} onChange={this.handleOnChange} /><br></br>
          <label htmlFor="img_url">Image Url:</label>
          <input type="url" className="form-control" name="img_url" placeholder="(Image Link)" value={this.state.img_url} onChange={this.handleOnChange} /><br></br>
          <label htmlFor="astronomical_body">Astronomical Body:</label>
          <select className="form-control" name="astronomical_body" value={this.state.astronomical_body} onChange={this.handleOnChange}>
            <option>Planet</option>
            <option>Moon</option>
            <option>Asteroid</option>
            <option>Star</option>
          </select><br></br>
          <label htmlFor="view_on_maps">Google Maps Link:</label>
          <input type="url" className="form-control" name="view_on_maps" placeholder="(Google Maps Link)" value={this.state.view_on_maps} onChange={this.handleOnChange} /><br></br>
          <label htmlFor="radius">Radius:</label>
          <input type="number" className="form-control" name="radius" placeholder="(Whole Miles)" value={this.state.radius} onChange={this.handleOnChange} /><br></br>
          <label htmlFor="description">Description:</label>
          <textarea className="form-control" name="description" rows="8" placeholder="(Description)" value={this.state.description} onChange={this.handleOnChange} ></textarea>
          <button className="btn btn-primary btn-lg btn-block" type="submit">Submit New Destination</button>
        </form>
      </React.Fragment>
    )
  }
};


export default connect(null, { createDestination })(DestinationNew);
