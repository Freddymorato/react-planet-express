import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchDestinations } from '../actions';
import DestinationsList from '../components/DestinationsList'
import DestinationShow from './DestinationShow';


class DestinationsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchDestinations()
  }

  render() {
    const { destinations, match } = this.props
    return (
      <React.Fragment>
        <Switch>
          <Route exact path={match.url} render={() => (
              <DestinationsList destinations ={destinations} />
          )}/>
            <Route path={`${match.url}/:destinationId`} component={DestinationShow} />
        </Switch>
      </React.Fragment>
    )
  }
}


export default connect(state => ({destinations: state.destinations }), { fetchDestinations })(DestinationsContainer);
