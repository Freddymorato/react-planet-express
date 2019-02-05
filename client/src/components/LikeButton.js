import React from 'react';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';


class LikeButton extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Button className="btn btn-sm btn-outline-danger" onClick={this.props.likeDestination}>
          &#x1f44d;Like
          <Badge>{this.props.destination.likes}</Badge>
        </Button>
      </React.Fragment>
    )
  }
};


export default LikeButton;
