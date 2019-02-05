import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddButton from '../components/AddButton';
import LikeButton from '../components/LikeButton';
import { likeDestination } from '../actions';
import { Button } from 'react-bootstrap';


class DestinationCard extends Component {

  handleOnClick = () => {
    this.props.addDestination(this.props.destination)
  }

  handleOnClick2 = () => {
    this.props.likeDestination(this.props.destination)
  }

  render() {
    const { id, name, img_url, astronomical_body } = this.props.destination;
    return (
      <div  className="dest-card">
        <div className="pic-box">
          <img src={img_url} className="img-fluid" alt={name} />&nbsp;
          <ul>
            <Link key={id} to={`/destinations/${id}`}>
              <Button className="btn btn-outline-warning">{name}</Button>
            </Link>
            <li>{astronomical_body}</li>
          </ul>
          <AddButton destination={this.props.destination} addDestination={this.handleOnClick} />
          <LikeButton destination={this.props.destination} likeDestination={this.handleOnClick2} />
        </div>
      </div>
    )
  }
};


export default connect(null, { likeDestination })(DestinationCard);
