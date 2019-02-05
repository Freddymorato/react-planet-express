import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions';


class CommentNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '' ,
      commenter: '',
      destination_id: this.props.destinationId
    };
  }

  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state);
    this.setState({
    content: '',
    commenter: ''
    })
  }

  render(){
    return (
      <div className="comment-form">
        <p className="bold-text">Add Comment</p>
        <form onSubmit={this.handleOnSubmit} >
          <label htmlFor="content">Comment:</label>
          <input type="text" className="form-control" name="content" placeholder="..." value={this.state.content} onChange={this.handleOnChange} />
          <br></br>
          <label htmlFor="commenter">Name:</label>
          <input type="text" className="form-control" name="commenter" placeholder="..." value={this.state.commenter} onChange={this.handleOnChange} />
          <br></br>
          <button className="btn btn-sm btn-dark" type="submit">Submit Comment</button>
        </form>
      </div>
    )
  }
}


export default connect(null, { createComment })(CommentNew);
