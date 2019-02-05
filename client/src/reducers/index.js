import { combineReducers } from 'redux';
import destinationsReducer from './destinationsReducer';
import commentsReducer from './commentsReducer';


export default combineReducers({
  destinations: destinationsReducer,
  comments: commentsReducer
});
