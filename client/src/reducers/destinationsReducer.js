

export default (state = [], action) => {

  switch(action.type) {

    case 'LOADING_DESTINATIONS':
      return state

    case 'FETCH_DESTINATIONS':
      return action.destinations

    case 'FETCH_DESTINATION':
      return action.destination

    case 'ADD_DESTINATION':
      return state.concat(action.destination);

    case 'REMOVE_DESTINATION':
      return state.filter(destination => destination.id !== action.id)

    case 'LIKE_DESTINATION':
      return state.map((destination) => {
        if (destination.id === action.destination.id) {
          return action.destination
        } else {
          return destination
        }
      });

    default:
      return state;
  }
};
