import React from 'react';
import DestinationCard from '../containers/DestinationCard';
import AstroBodyFilter from './AstroBodyFilter';


class DestinationsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      astroFilter: 'All',
      sorted: false
    }
  }

  renderDestinations = (destinations) => {
    return destinations.map(destination => <DestinationCard key={destination.id} destination={destination} />)
  }

  handleFilterChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      sorted: false
    });
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

  handleClick = () => {
    this.setState({
      sorted: true
    });
  }

  destinationSort = () => {
    let sortedList = ""
    let destinations = this.props.destinations
    sortedList = destinations.slice().sort((a, b) => b.likes - a.likes);
    return sortedList
  }

  render() {
    const isItSorted = this.state.sorted
      return (
        <React.Fragment>
          <button onClick={this.handleClick}>by likes</button>
          <AstroBodyFilter handleChange={this.handleFilterChange} />
          <div className="dest-card-container">
            { isItSorted === false ? this.renderDestinations(this.destinationFilter()) : this.renderDestinations(this.destinationSort())}
          </div>
        </React.Fragment>
      )
  }
};


export default DestinationsList;
