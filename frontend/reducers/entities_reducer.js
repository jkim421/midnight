import { combineReducers } from 'redux';
import usernameReducer from './username_reducer';
import animesReducer from './animes_reducer';

const entitiesReducer = combineReducers({
  username: usernameReducer,
  animes: animesReducer,
});

export default entitiesReducer;
