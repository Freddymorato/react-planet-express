import React from 'react';


const CommentShow = ({ comment }) => {
  return (
    <div className="comment">
      {comment.content} <br></br>
    <p className="commenter"> - {comment.commenter}</p>
    </div>
  )
};


export default CommentShow;
