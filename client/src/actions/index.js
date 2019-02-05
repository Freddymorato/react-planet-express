

/***** DESTINATION INDEX *****/

const setDestinations = destinations => {
  return {
    type: 'FETCH_DESTINATIONS',
    destinations
  }
};

export const fetchDestinations = () => {
  return dispatch => {
    dispatch({type: 'LOADING_DESTINATIONS'});
    return fetch('http://localhost:3000/destinations')
    .then(response => response.json())
    .then(destinations => dispatch(setDestinations(destinations)))
    .catch(error => console.log(error))
  }
};

/***** DESTINATION SHOW *****/

const setDestination = destination => {
  return {
    type: 'FETCH_DESTINATION',
    destination
  }
};

export const fetchDestination = (destID) => {
  return dispatch => {
    return fetch(`http://localhost:3000/destinations/${destID}`)
    .then(response => response.json())
    .then(destination => dispatch(setDestination([destination])))
    .catch(error => console.log(error))
  }
};

/***** DESTINATION POST *****/

const addDestination = destination => {
  return {
    type:'ADD_DESTINATION',
    destination
  }
};

export const createDestination = (destination) => {
  return dispatch => {
    return fetch('http://localhost:3000/destinations', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({destination: destination})
    })
    .then(response => response.json())
    .then(destination => {
      dispatch(addDestination(destination))
    })
    .catch(error => {
      dispatch({type: 'error'})
    })
  }
};

/***** DESTINATION DELETE *****/

const removeDestination = destination => {
  return {
    type: 'REMOVE_DESTINATION',
    destination
  }
};

export const deleteDestination = (destinationId, routerHistory) => {
  return dispatch => {
    return fetch(`http://localhost:3000/destinations/${destinationId}`, {
      method: "DELETE",
    })
    .then(response => {
      dispatch(removeDestination(destinationId));
      routerHistory.replace('/destinations')
    })
    .catch(error => console.log(error))
  }
};

/***** COMMENT INDEX *****/

const setComments = comments => {
  return {
    type: 'FETCH_COMMENTS',
    comments
  }
};

export const fetchComments = (destinationId) => {
  return dispatch => {
    dispatch({type: 'LOADING_COMMENTS'});
      return fetch(`http://localhost:3000/destinations/${destinationId}/comments`)
      .then(response => response.json())
      .then(comments => dispatch(setComments(comments)))
      .catch(error => console.log(error))
  }
};

/***** COMMENT POST *****/

const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
};

export const createComment = (comment) => {
  return dispatch => {
    return fetch(`http://localhost:3000/destinations/${comment.destination_id}/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: comment })
    })
    .then(response => response.json())
    .then(comment => { dispatch(addComment(comment)) })
    .catch(error => { dispatch({ type: 'error' }) })
  }
};

/***** LIKE DESTINATION *****/

const addLikes = destination => {
  return {
    type: 'LIKE_DESTINATION',
    destination
  }
};

export const likeDestination = (destination) => {
  const updatedDestination = Object.assign({...destination}, { likes: destination.likes + 1 })
  return dispatch => {
      return fetch(`http://localhost:3000/destinations/${destination.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({destination: updatedDestination})
      })
      .then(response => response.json())
      .then(destination => { dispatch(addLikes(destination)) })
      .catch(error => console.log(error))
  }
};
