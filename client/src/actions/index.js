

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
