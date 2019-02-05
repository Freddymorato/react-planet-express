import React from 'react';
import DestinationCard from '../containers/DestinationCard';
import AstroBodyFilter from './AstroBodyFilter';


class DestinationsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      astroFilter: 'All'
    }
  }

  renderDestinations = (destinations) => {
    return destinations.map(destination => <DestinationCard key={destination.id} destination={destination} />)
  }

  destinationFilter = () => {
    let filteredList = ""
    if (this.state.astroFilter === 'All') {
      filteredList = this.props.destinations
    } else {
      filteredList = this.props.destinations.filter(destination => this.state.astroFilter === destination.astronomical_body);
    }
    return filteredList
  }

  handleFilterChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return (
      <React.Fragment>
        <AstroBodyFilter handleChange={this.handleFilterChange} />
        <div className="dest-card-container">
          {this.renderDestinations(this.destinationFilter())}
        </div>
      </React.Fragment>
    )
  }
};


export default DestinationsList;
