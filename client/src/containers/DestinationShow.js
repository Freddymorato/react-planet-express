import React from 'react';
import { connect } from 'react-redux';
import { fetchDestination } from '../actions';
import { fetchComments } from '../actions';
import { deleteDestination } from '../actions';
import { likeDestination } from '../actions';
import CommentsList from '../components/CommentsList';
import CommentNew from '../components/CommentNew';
import LikeButton from '../components/LikeButton'
import { Button } from 'react-bootstrap';


class DestinationShow extends React.Component {

  componentDidMount() {
    this.props.fetchDestination(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
  }

  handleOnClick = () => {
    this.props.likeDestination(this.props.destination)
  }

  render() {
    const { destination, comments, deleteDestination, history } = this.props;
    let google_maps_path  =`https://www.${destination.view_on_maps}`
    return (
      <div className="destination-show">
        <div className="pic-box-2">
          <img src={destination.img_url} className="img-fluid" alt={destination.name} />&nbsp;
        </div>
        <Button className="btn btn-outline-warning-2">{destination.name}</Button>
        <div className="details-box">
          <p className="dest-p-2">Astronomical Body: {destination.astronomical_body}</p>
          <p className="dest-p-2">Radius: {destination.radius} miles</p><br></br><br></br>
          Google Maps: <a href={google_maps_path}>{google_maps_path}</a>
        </div>
        <p className="dest-p">{destination.description}</p>
        <Button className="btn btn-sm btn-outline-dark" onClick={() => deleteDestination(destination.id, history)}>Delete</Button>
        <LikeButton destination={destination} likeDestination={this.handleOnClick} />

        <div className="comment-section">
          <CommentsList comments={comments} />
          <CommentNew destinationId={this.props.match.params.id} />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  const destination = state.destinations.find(destination => destination.id === parseInt(ownProps.match.params.id, 10)) || {}
  return ({
      destination: destination,
      comments: state.comments
    })
}


export default connect(mapStateToProps, { fetchComments, fetchDestination, deleteDestination, likeDestination })(DestinationShow);
